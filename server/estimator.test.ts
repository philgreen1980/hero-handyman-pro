/**
 * estimator.test.ts
 * Tests for the estimator pricing engine and submit procedure
 */
import { describe, it, expect } from "vitest";
import { calculateEstimate } from "../shared/estimator-engine";
import { PROJECT_TYPES, SERVICE_AREA_ZIPS } from "../shared/estimator-config";

describe("Estimator Pricing Engine", () => {
  it("calculates a basic drywall small estimate correctly", () => {
    const result = calculateEstimate({
      projectType: "drywall_small",
      complexityAdders: [],
      complexityHoursLow: 0,
      complexityHoursHigh: 0,
      companyProvidesMaterials: false,
      hasUnknownCondition: false,
    });

    expect(result.priceLow).toBeGreaterThan(0);
    expect(result.priceHigh).toBeGreaterThanOrEqual(result.priceLow);
    expect(result.billableHoursLow).toBeGreaterThan(0);
    expect(result.projectLabel).toBe(PROJECT_TYPES["drywall_small"].label);
  });

  it("increases price when complexity adders are applied", () => {
    const base = calculateEstimate({
      projectType: "drywall_small",
      complexityAdders: [],
      complexityHoursLow: 0,
      complexityHoursHigh: 0,
      companyProvidesMaterials: false,
      hasUnknownCondition: false,
    });

    const complex = calculateEstimate({
      projectType: "drywall_small",
      complexityAdders: [],
      complexityHoursLow: 2,
      complexityHoursHigh: 4,
      companyProvidesMaterials: false,
      hasUnknownCondition: false,
    });

    expect(complex.priceLow).toBeGreaterThan(base.priceLow);
    expect(complex.priceHigh).toBeGreaterThan(base.priceHigh);
  });

  it("adds material cost when company provides materials", () => {
    const withoutMaterials = calculateEstimate({
      projectType: "drywall_small",
      complexityAdders: [],
      complexityHoursLow: 0,
      complexityHoursHigh: 0,
      companyProvidesMaterials: false,
      hasUnknownCondition: false,
    });

    const withMaterials = calculateEstimate({
      projectType: "drywall_small",
      complexityAdders: [],
      complexityHoursLow: 0,
      complexityHoursHigh: 0,
      companyProvidesMaterials: true,
      hasUnknownCondition: false,
    });

    // With materials should cost more or equal
    expect(withMaterials.priceLow).toBeGreaterThanOrEqual(withoutMaterials.priceLow);
    expect(withMaterials.materialHigh).toBeGreaterThanOrEqual(0);
  });

  it("widens range when unknown condition is flagged", () => {
    const known = calculateEstimate({
      projectType: "drywall_medium",
      complexityAdders: [],
      complexityHoursLow: 0,
      complexityHoursHigh: 0,
      companyProvidesMaterials: false,
      hasUnknownCondition: false,
    });

    const unknown = calculateEstimate({
      projectType: "drywall_medium",
      complexityAdders: [],
      complexityHoursLow: 0,
      complexityHoursHigh: 0,
      companyProvidesMaterials: false,
      hasUnknownCondition: true,
    });

    const knownRange = known.priceHigh - known.priceLow;
    const unknownRange = unknown.priceHigh - unknown.priceLow;
    expect(unknownRange).toBeGreaterThanOrEqual(knownRange);
    expect(unknown.contingencyApplied).toBe(true);
  });

  it("rounds prices to nearest $25", () => {
    const result = calculateEstimate({
      projectType: "deck_repair",
      complexityAdders: [],
      complexityHoursLow: 1,
      complexityHoursHigh: 2,
      companyProvidesMaterials: false,
      hasUnknownCondition: false,
    });

    expect(result.priceLow % 25).toBe(0);
    expect(result.priceHigh % 25).toBe(0);
  });

  it("all project types produce valid estimates", () => {
    const keys = Object.keys(PROJECT_TYPES) as (keyof typeof PROJECT_TYPES)[];
    for (const key of keys) {
      const result = calculateEstimate({
        projectType: key,
        complexityAdders: [],
        complexityHoursLow: 0,
        complexityHoursHigh: 0,
        companyProvidesMaterials: false,
        hasUnknownCondition: false,
      });
      expect(result.priceLow).toBeGreaterThan(0);
      expect(result.priceHigh).toBeGreaterThanOrEqual(result.priceLow);
    }
  });
});

describe("Service Area ZIP Validation", () => {
  it("recognizes O'Fallon IL ZIP as in service area", () => {
    expect(SERVICE_AREA_ZIPS).toContain("62269");
  });

  it("recognizes Belleville IL ZIP as in service area", () => {
    expect(SERVICE_AREA_ZIPS).toContain("62220");
  });

  it("has at least 10 service area ZIPs", () => {
    expect(SERVICE_AREA_ZIPS.length).toBeGreaterThanOrEqual(10);
  });
});
