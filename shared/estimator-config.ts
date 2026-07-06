/**
 * estimator-config.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * All editable configuration values for the Hero Handyman Pro Project Estimator.
 * Edit this file to update rates, materials, complexity adders, and copy.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ── BILLING RATES ─────────────────────────────────────────────────────────────
export const BILLING_RATE_PER_HOUR = 175; // Customer-facing hourly rate ($)
export const INTERNAL_LABOR_COST_PER_HOUR = 42; // Internal cost (not shown to customer)
export const PROFIT_MULTIPLIER = 2.22; // Used when pricing from cost
export const MINIMUM_BILLABLE_HOURS = 2; // Minimum charge = 2 hours
export const BILLING_BLOCK_HOURS = 4; // Round up to next 4-hr block after minimum

// ── RANGE LOGIC ───────────────────────────────────────────────────────────────
// Low end = calculated price × (1 - RANGE_SPREAD), High end = × (1 + RANGE_SPREAD)
export const RANGE_SPREAD = 0.1; // 10% spread each direction
export const ROUND_TO_NEAREST = 50; // Round customer-facing prices to nearest $50

// ── COMPANY INFO ──────────────────────────────────────────────────────────────
export const COMPANY_NAME = "Hero Handyman Pro";
export const CONTACT_EMAIL = "info@herohandymanpro.com";

// ── SERVICE AREA ZIP CODES ────────────────────────────────────────────────────
export const SERVICE_AREA_ZIPS = [
  // Metro East IL
  "62269", "62221", "62223", "62025", "62026", "62234", "62220", "62201",
  "62203", "62204", "62205", "62206", "62208", "62226", "62232", "62233",
  "62249", "62258", "62285", "62294", "62295", "62035", "62040", "62060",
  "62062", "62084", "62095",
  // St. Louis MO
  "63101", "63102", "63103", "63104", "63105", "63106", "63107", "63108",
  "63109", "63110", "63111", "63112", "63113", "63114", "63115", "63116",
  "63117", "63118", "63119", "63120", "63121", "63122", "63123", "63124",
  "63125", "63126", "63127", "63128", "63129", "63130", "63131", "63132",
  "63133", "63134", "63135", "63136", "63137", "63138", "63139", "63140",
  "63141", "63143", "63144", "63146", "63147", "63301", "63303", "63304",
  "63366", "63367", "63368", "63376", "63385", "63386",
  // Chesterfield / Ballwin / Fenton / Des Peres
  "63005", "63011", "63017", "63021", "63026", "63028", "63031", "63033",
  "63034", "63038", "63040", "63042", "63043", "63044", "63045", "63049",
  "63050", "63051", "63052", "63053", "63055", "63056", "63057", "63060",
  "63061", "63069", "63070", "63071", "63072", "63073", "63074", "63075",
  "63076", "63077", "63079", "63080", "63088", "63089", "63090",
];

export const OUT_OF_AREA_MESSAGE =
  "It looks like your project may be outside our regular service area. You can still submit your information, and we will let you know if we are able to help.";

// ── DISCLAIMER TEXT ───────────────────────────────────────────────────────────
export const ESTIMATE_DISCLAIMER =
  "This is a general estimate only and is not a final quote. Final pricing may vary based on site conditions, material selections, access, project complexity, and the final scope of work. A formal quote will be provided after reviewing the project details.";

// ── BUTTON TEXT ───────────────────────────────────────────────────────────────
export const CTA_BUTTON_TEXT = "Request My Formal Quote";
export const CONFIRMATION_MESSAGE =
  "Thank you. We received your project information and will contact you to review the details and provide a formal quote.";

// ── BASE LABOR HOURS BY PROJECT TYPE ─────────────────────────────────────────
export type ProjectTypeKey =
  | "drywall_small"
  | "drywall_medium"
  | "drywall_large"
  | "paint_small"
  | "paint_medium"
  | "paint_large"
  | "door_interior_repair"
  | "door_interior_replace"
  | "door_exterior_replace"
  | "tv_mount_standard"
  | "tv_mount_wire"
  | "faucet_replace"
  | "toilet_replace"
  | "disposal_replace"
  | "light_fixture"
  | "ceiling_fan"
  | "shelving"
  | "trim_repair"
  | "flooring_repair"
  | "cabinet_repair"
  | "deck_repair"
  | "fence_repair"
  | "handyman_half_day"
  | "handyman_full_day"
  | "custom";

export interface ProjectTypeConfig {
  label: string;
  category: string;
  baseHours: number;
  materialLow: number;
  materialHigh: number;
  description?: string;
}

export const PROJECT_TYPES: Record<ProjectTypeKey, ProjectTypeConfig> = {
  drywall_small: {
    label: "Small Drywall Patch",
    category: "Drywall Repair",
    baseHours: 2,
    materialLow: 25,
    materialHigh: 50,
    description: "Nail pops, small holes up to 6\"",
  },
  drywall_medium: {
    label: "Medium Drywall Repair",
    category: "Drywall Repair",
    baseHours: 4,
    materialLow: 50,
    materialHigh: 100,
    description: "Holes 6\"–24\", water stains, cracks",
  },
  drywall_large: {
    label: "Large Drywall Repair",
    category: "Drywall Repair",
    baseHours: 8,
    materialLow: 100,
    materialHigh: 250,
    description: "Large sections, multiple areas, full panels",
  },
  paint_small: {
    label: "Paint Small Room",
    category: "Interior Painting",
    baseHours: 6,
    materialLow: 25,
    materialHigh: 75,
    description: "Bathroom, hallway, or small bedroom",
  },
  paint_medium: {
    label: "Paint Medium Room",
    category: "Interior Painting",
    baseHours: 8,
    materialLow: 25,
    materialHigh: 75,
    description: "Standard bedroom or living area",
  },
  paint_large: {
    label: "Paint Large Room",
    category: "Interior Painting",
    baseHours: 12,
    materialLow: 25,
    materialHigh: 75,
    description: "Great room, open concept, or large living room",
  },
  door_interior_repair: {
    label: "Interior Door Repair",
    category: "Door Work",
    baseHours: 2,
    materialLow: 50,
    materialHigh: 150,
    description: "Adjust, rehang, or repair existing interior door",
  },
  door_interior_replace: {
    label: "Interior Door Replacement",
    category: "Door Work",
    baseHours: 4,
    materialLow: 50,
    materialHigh: 150,
    description: "Replace interior door slab or pre-hung unit",
  },
  door_exterior_replace: {
    label: "Exterior Door Replacement",
    category: "Door Work",
    baseHours: 8,
    materialLow: 250,
    materialHigh: 800,
    description: "Replace exterior entry door (pre-hung)",
  },
  tv_mount_standard: {
    label: "TV Mounting — Standard",
    category: "TV Mounting",
    baseHours: 2,
    materialLow: 50,
    materialHigh: 150,
    description: "Standard fixed or tilt mount on drywall",
  },
  tv_mount_wire: {
    label: "TV Mounting — Wire Concealment",
    category: "TV Mounting",
    baseHours: 4,
    materialLow: 50,
    materialHigh: 150,
    description: "Full-motion mount with in-wall wire concealment",
  },
  faucet_replace: {
    label: "Faucet Replacement",
    category: "Plumbing Fixtures",
    baseHours: 2,
    materialLow: 25,
    materialHigh: 100,
    description: "Kitchen or bathroom faucet swap",
  },
  toilet_replace: {
    label: "Toilet Replacement",
    category: "Plumbing Fixtures",
    baseHours: 2,
    materialLow: 25,
    materialHigh: 60,
    description: "Remove old toilet, install new unit",
  },
  disposal_replace: {
    label: "Garbage Disposal Replacement",
    category: "Plumbing Fixtures",
    baseHours: 2,
    materialLow: 25,
    materialHigh: 60,
    description: "Swap out existing garbage disposal",
  },
  light_fixture: {
    label: "Light Fixture Replacement",
    category: "Fixture Replacement",
    baseHours: 2,
    materialLow: 0,
    materialHigh: 0,
    description: "Replace existing light fixture (customer provides fixture)",
  },
  ceiling_fan: {
    label: "Ceiling Fan Replacement",
    category: "Fixture Replacement",
    baseHours: 3,
    materialLow: 0,
    materialHigh: 0,
    description: "Replace existing ceiling fan (customer provides fan)",
  },
  shelving: {
    label: "Shelving Installation",
    category: "Shelving & Storage",
    baseHours: 3,
    materialLow: 25,
    materialHigh: 150,
    description: "Install floating shelves, closet shelving, or storage units",
  },
  trim_repair: {
    label: "Trim & Molding Repair",
    category: "Trim & Carpentry",
    baseHours: 3,
    materialLow: 50,
    materialHigh: 250,
    description: "Baseboard, door casing, crown molding repair or replacement",
  },
  flooring_repair: {
    label: "Flooring Repair",
    category: "Flooring",
    baseHours: 4,
    materialLow: 100,
    materialHigh: 500,
    description: "Repair damaged boards, tiles, or vinyl sections",
  },
  cabinet_repair: {
    label: "Cabinet Repair or Adjustment",
    category: "Cabinets",
    baseHours: 3,
    materialLow: 25,
    materialHigh: 100,
    description: "Hinge replacement, door adjustment, drawer repair",
  },
  deck_repair: {
    label: "Deck Repair",
    category: "Deck & Exterior",
    baseHours: 4,
    materialLow: 100,
    materialHigh: 600,
    description: "Replace boards, fix rails, repair rot or structural damage",
  },
  fence_repair: {
    label: "Fence Repair",
    category: "Deck & Exterior",
    baseHours: 4,
    materialLow: 100,
    materialHigh: 600,
    description: "Replace boards, posts, or sections of wood or vinyl fence",
  },
  handyman_half_day: {
    label: "General Handyman — Half Day",
    category: "General Handyman",
    baseHours: 4,
    materialLow: 0,
    materialHigh: 0,
    description: "Up to 4 hours of miscellaneous handyman tasks",
  },
  handyman_full_day: {
    label: "General Handyman — Full Day",
    category: "General Handyman",
    baseHours: 8,
    materialLow: 0,
    materialHigh: 0,
    description: "Up to 8 hours of miscellaneous handyman tasks",
  },
  custom: {
    label: "Other / Custom Project",
    category: "Other",
    baseHours: 4,
    materialLow: 0,
    materialHigh: 0,
    description: "Describe your project in the next step",
  },
};

// ── COMPLEXITY ADDERS ─────────────────────────────────────────────────────────
export interface ComplexityAdder {
  id: string;
  label: string;
  hoursLow: number;
  hoursHigh: number;
}

export const COMPLEXITY_ADDERS: ComplexityAdder[] = [
  { id: "high_ceiling", label: "Work over 10 feet high", hoursLow: 2, hoursHigh: 2 },
  { id: "ceiling_work", label: "Ceiling work", hoursLow: 1, hoursHigh: 2 },
  { id: "heavy_item", label: "Heavy item installation", hoursLow: 1, hoursHigh: 1 },
  { id: "difficult_access", label: "Difficult access", hoursLow: 1, hoursHigh: 3 },
  { id: "multiple_areas", label: "Multiple work areas", hoursLow: 1, hoursHigh: 4 },
  { id: "material_pickup", label: "Company needs to pick up materials", hoursLow: 1, hoursHigh: 1 },
  { id: "demo_removal", label: "Demo / removal needed", hoursLow: 1, hoursHigh: 4 },
  { id: "painting_staining", label: "Painting or staining required", hoursLow: 2, hoursHigh: 8 },
  { id: "texture_matching", label: "Texture matching required", hoursLow: 2, hoursHigh: 2 },
  { id: "unknown_condition", label: "Unknown or unusual site conditions", hoursLow: 0, hoursHigh: 0 }, // triggers contingency
];

// Unknown condition contingency — widens range by this percentage
export const UNKNOWN_CONDITION_CONTINGENCY = 0.15;

// Setup + cleanup baseline added to every job
export const SETUP_CLEANUP_HOURS = 1;
