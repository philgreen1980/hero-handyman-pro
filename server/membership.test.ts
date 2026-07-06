import { describe, it, expect, beforeAll } from "vitest";
import { appRouter } from "./routers";
import { createMembership, getMembershipByEmail, addMembershipSaving } from "./db";
import type { InsertMembership, InsertMembershipSaving } from "../drizzle/schema";

/**
 * Test suite for membership tRPC procedures
 * Tests membership status, savings tracking, and scheduling link generation
 */

describe("Membership tRPC Procedures", () => {
  const testEmail = `test-member-${Date.now()}@example.com`;
  let testMembershipId: number;

  // Create a test membership before running tests
  beforeAll(async () => {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setFullYear(endDate.getFullYear() + 1); // 1 year from now

    const membership: InsertMembership = {
      memberName: "Test Member",
      memberEmail: testEmail,
      memberPhone: "618-555-0123",
      status: "active",
      startDate,
      endDate,
      schedulingToken: `test-token-${Date.now()}`,
    };

    const result = await createMembership(membership);
    
    // Get the created membership to retrieve its ID
    const createdMembership = await getMembershipByEmail(testEmail);
    if (!createdMembership) {
      throw new Error("Failed to create test membership");
    }
    testMembershipId = createdMembership.id;

    // Add some test savings
    const saving1: InsertMembershipSaving = {
      membershipId: testMembershipId,
      serviceDate: new Date(),
      serviceType: "Deck Repair",
      originalPrice: 50000, // $500.00
      discountAmount: 7500, // 15% = $75.00
      schedulingFeeSaved: 7900, // $79.00
      totalSaved: 15400, // $154.00
    };

    const saving2: InsertMembershipSaving = {
      membershipId: testMembershipId,
      serviceDate: new Date(),
      serviceType: "Door Installation",
      originalPrice: 30000, // $300.00
      discountAmount: 4500, // 15% = $45.00
      schedulingFeeSaved: 7900, // $79.00
      totalSaved: 12400, // $124.00
    };

    await addMembershipSaving(saving1);
    await addMembershipSaving(saving2);
  });

  describe("membership.getStatus", () => {
    it("should return active status for valid membership", async () => {
      const caller = appRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      const result = await caller.membership.getStatus({ email: testEmail });

      expect(result.status).toBe("active");
      expect(result.membership).toBeDefined();
      expect(result.membership?.memberEmail).toBe(testEmail);
      expect(result.membership?.memberName).toBe("Test Member");
    });

    it("should return none status for non-existent membership", async () => {
      const caller = appRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      const result = await caller.membership.getStatus({
        email: "nonexistent@example.com",
      });

      expect(result.status).toBe("none");
      expect(result.membership).toBeNull();
    });

    it("should return expired status for expired membership", async () => {
      // Create an expired membership
      const expiredEmail = `expired-${Date.now()}@example.com`;
      const startDate = new Date();
      startDate.setFullYear(startDate.getFullYear() - 2); // 2 years ago
      const endDate = new Date();
      endDate.setFullYear(endDate.getFullYear() - 1); // 1 year ago (expired)

      const expiredMembership: InsertMembership = {
        memberName: "Expired Member",
        memberEmail: expiredEmail,
        memberPhone: "618-555-9999",
        status: "active",
        startDate,
        endDate,
        schedulingToken: `expired-token-${Date.now()}`,
      };

      await createMembership(expiredMembership);

      const caller = appRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      const result = await caller.membership.getStatus({ email: expiredEmail });

      expect(result.status).toBe("expired");
      expect(result.membership).toBeDefined();
    });
  });

  describe("membership.getSavings", () => {
    it("should return correct total savings and service count", async () => {
      const caller = appRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      const result = await caller.membership.getSavings({ email: testEmail });

      expect(result.serviceCount).toBe(2);
      expect(result.totalSaved).toBe(27800); // $154 + $124 = $278
      expect(result.savings).toHaveLength(2);
      expect(result.savings[0].serviceType).toMatch(/Deck Repair|Door Installation/);
    });

    it("should return zero savings for membership with no services", async () => {
      // Create a new membership with no savings
      const newEmail = `new-member-${Date.now()}@example.com`;
      const startDate = new Date();
      const endDate = new Date();
      endDate.setFullYear(endDate.getFullYear() + 1);

      const newMembership: InsertMembership = {
        memberName: "New Member",
        memberEmail: newEmail,
        memberPhone: "618-555-1111",
        status: "active",
        startDate,
        endDate,
        schedulingToken: `new-token-${Date.now()}`,
      };

      await createMembership(newMembership);

      const caller = appRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      const result = await caller.membership.getSavings({ email: newEmail });

      expect(result.serviceCount).toBe(0);
      expect(result.totalSaved).toBe(0);
      expect(result.savings).toHaveLength(0);
    });

    it("should return zero for non-existent membership", async () => {
      const caller = appRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      const result = await caller.membership.getSavings({
        email: "nonexistent@example.com",
      });

      expect(result.serviceCount).toBe(0);
      expect(result.totalSaved).toBe(0);
      expect(result.savings).toHaveLength(0);
    });
  });

  describe("membership.getSchedulingLink", () => {
    it("should return valid scheduling link for active membership", async () => {
      const caller = appRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      const result = await caller.membership.getSchedulingLink({
        email: testEmail,
      });

      expect(result.schedulingLink).toBeDefined();
      expect(result.schedulingLink).toContain("/schedule?token=");
      expect(result.schedulingLink).toMatch(/^https?:\/\//);
    });

    it("should return null for non-existent membership", async () => {
      const caller = appRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      const result = await caller.membership.getSchedulingLink({
        email: "nonexistent@example.com",
      });

      expect(result.schedulingLink).toBeNull();
    });

    it("should generate unique scheduling tokens for different members", async () => {
      // Create two memberships
      const email1 = `member1-${Date.now()}@example.com`;
      const email2 = `member2-${Date.now()}@example.com`;

      const startDate = new Date();
      const endDate = new Date();
      endDate.setFullYear(endDate.getFullYear() + 1);

      const membership1: InsertMembership = {
        memberName: "Member 1",
        memberEmail: email1,
        memberPhone: "618-555-0001",
        status: "active",
        startDate,
        endDate,
        schedulingToken: `token1-${Date.now()}`,
      };

      const membership2: InsertMembership = {
        memberName: "Member 2",
        memberEmail: email2,
        memberPhone: "618-555-0002",
        status: "active",
        startDate,
        endDate,
        schedulingToken: `token2-${Date.now()}`,
      };

      await createMembership(membership1);
      await createMembership(membership2);

      const caller = appRouter.createCaller({
        user: null,
        req: {} as any,
        res: {} as any,
      });

      const result1 = await caller.membership.getSchedulingLink({ email: email1 });
      const result2 = await caller.membership.getSchedulingLink({ email: email2 });

      expect(result1.schedulingLink).toBeDefined();
      expect(result2.schedulingLink).toBeDefined();
      expect(result1.schedulingLink).not.toBe(result2.schedulingLink);
    });
  });
});
