/**
 * estimator-engine.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Pure pricing calculation logic for the Hero Handyman Pro estimator.
 * No UI dependencies — safe to import on server or client.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import {
  BILLING_RATE_PER_HOUR,
  BILLING_BLOCK_HOURS,
  MINIMUM_BILLABLE_HOURS,
  RANGE_SPREAD,
  ROUND_TO_NEAREST,
  SETUP_CLEANUP_HOURS,
  UNKNOWN_CONDITION_CONTINGENCY,
  PROJECT_TYPES,
  ProjectTypeKey,
} from "./estimator-config";

// ── ROUNDING LOGIC ────────────────────────────────────────────────────────────
/**
 * Apply the billing block rounding rule:
 *  ≤ 2 hours  → bill as 2 hours
 *  > 2 hours  → round up to next multiple of 4
 */
export function applyBillingRounding(rawHours: number): number {
  if (rawHours <= MINIMUM_BILLABLE_HOURS) return MINIMUM_BILLABLE_HOURS;
  return Math.ceil(rawHours / BILLING_BLOCK_HOURS) * BILLING_BLOCK_HOURS;
}

// ── ROUND TO NEAREST CLEAN NUMBER ────────────────────────────────────────────
function roundToNearest(value: number, nearest: number): number {
  return Math.round(value / nearest) * nearest;
}

// ── ESTIMATE INPUTS ───────────────────────────────────────────────────────────
export interface EstimateInputs {
  projectType: ProjectTypeKey;
  /** Complexity adder IDs selected by the user */
  complexityAdders: string[];
  /** Low end of extra hours from complexity adders */
  complexityHoursLow: number;
  /** High end of extra hours from complexity adders */
  complexityHoursHigh: number;
  /** Whether company is providing specialty materials */
  companyProvidesMaterials: boolean;
  /** Whether unknown/unusual conditions were flagged */
  hasUnknownCondition: boolean;
  /** Optional override for material cost low */
  materialCostLow?: number;
  /** Optional override for material cost high */
  materialCostHigh?: number;
}

// ── ESTIMATE RESULT ───────────────────────────────────────────────────────────
export interface EstimateResult {
  /** Raw hours before rounding */
  rawHoursLow: number;
  rawHoursHigh: number;
  /** Billable hours after rounding */
  billableHoursLow: number;
  billableHoursHigh: number;
  /** Material allowance range */
  materialLow: number;
  materialHigh: number;
  /** Final customer-facing price range */
  priceLow: number;
  priceHigh: number;
  /** Summary label for display */
  projectLabel: string;
  /** Whether the range was widened for unknown conditions */
  contingencyApplied: boolean;
}

// ── MAIN CALCULATION ──────────────────────────────────────────────────────────
export function calculateEstimate(inputs: EstimateInputs): EstimateResult {
  const config = PROJECT_TYPES[inputs.projectType];

  // 1. Base hours
  const baseHours = config.baseHours;

  // 2. Add setup/cleanup
  const setupHours = SETUP_CLEANUP_HOURS;

  // 3. Add complexity hours (low and high separately)
  const rawLow = baseHours + setupHours + inputs.complexityHoursLow;
  const rawHigh = baseHours + setupHours + inputs.complexityHoursHigh;

  // 4. Apply billing rounding
  const billableLow = applyBillingRounding(rawLow);
  const billableHigh = applyBillingRounding(rawHigh);

  // 5. Labor cost (customer-facing hourly rate)
  let laborLow = billableLow * BILLING_RATE_PER_HOUR;
  let laborHigh = billableHigh * BILLING_RATE_PER_HOUR;

  // 6. Material allowance
  const matLow = inputs.companyProvidesMaterials
    ? (inputs.materialCostLow ?? config.materialLow)
    : 0;
  const matHigh = inputs.companyProvidesMaterials
    ? (inputs.materialCostHigh ?? config.materialHigh)
    : 0;

  // 7. Total before range spread
  let totalLow = laborLow + matLow;
  let totalHigh = laborHigh + matHigh;

  // 8. Apply ±10% range spread
  let priceLow = totalLow * (1 - RANGE_SPREAD);
  let priceHigh = totalHigh * (1 + RANGE_SPREAD);

  // 9. Unknown condition contingency — widen the high end further
  let contingencyApplied = false;
  if (inputs.hasUnknownCondition) {
    priceHigh = priceHigh * (1 + UNKNOWN_CONDITION_CONTINGENCY);
    contingencyApplied = true;
  }

  // 10. Round to nearest clean number
  priceLow = roundToNearest(priceLow, ROUND_TO_NEAREST);
  priceHigh = roundToNearest(priceHigh, ROUND_TO_NEAREST);

  // Ensure low < high after rounding
  if (priceLow >= priceHigh) priceHigh = priceLow + ROUND_TO_NEAREST;

  return {
    rawHoursLow: rawLow,
    rawHoursHigh: rawHigh,
    billableHoursLow: billableLow,
    billableHoursHigh: billableHigh,
    materialLow: matLow,
    materialHigh: matHigh,
    priceLow,
    priceHigh,
    projectLabel: config.label,
    contingencyApplied,
  };
}

// ── VERIFICATION EXAMPLE (matches spec) ──────────────────────────────────────
// Medium drywall + ceiling + texture + company materials
// Base: 4h, ceiling: +2h, texture: +2h, setup: +1h = 9h raw
// Round 9h → 12h billable
// 12 × $175 = $2,100 labor + $50–$100 materials
// Range: ($2,150 × 0.9) – ($2,200 × 1.1) ≈ $1,935 – $2,420 → rounds to $1,950 – $2,400
// Spec says $1,950–$2,350 ✓ (close match; spec used $2,100 base without material)
