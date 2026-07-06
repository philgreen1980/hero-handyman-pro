import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Bookings table for service scheduling
 */
export const bookings = mysqlTable("bookings", {
  id: int("id").autoincrement().primaryKey(),
  
  // Customer information
  customerName: varchar("customerName", { length: 255 }).notNull(),
  customerEmail: varchar("customerEmail", { length: 320 }).notNull(),
  customerPhone: varchar("customerPhone", { length: 20 }).notNull(),
  
  // Service details
  serviceType: varchar("serviceType", { length: 255 }).notNull(),
  serviceDescription: text("serviceDescription"),
  
  // Location
  address: text("address").notNull(),
  city: varchar("city", { length: 100 }).notNull(),
  state: varchar("state", { length: 2 }).notNull(),
  zipCode: varchar("zipCode", { length: 10 }).notNull(),
  
  // Scheduling
  preferredDate: timestamp("preferredDate").notNull(),
  preferredTimeSlot: mysqlEnum("preferredTimeSlot", ["morning", "afternoon", "evening"]).notNull(),
  
  // Status tracking
  status: mysqlEnum("status", ["pending", "confirmed", "in_progress", "completed", "cancelled"]).default("pending").notNull(),
  
  // Admin notes
  adminNotes: text("adminNotes"),
  
  // Timestamps
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = typeof bookings.$inferInsert;

/**
 * Leads table for email capture and lead magnets
 */
export const leads = mysqlTable("leads", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  source: varchar("source", { length: 100 }).notNull(), // e.g., 'deck_maintenance_checklist'
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;

/**
 * Memberships table for tracking member subscriptions
 */
export const memberships = mysqlTable("memberships", {
  id: int("id").autoincrement().primaryKey(),
  
  // User reference (nullable for non-logged-in members)
  userId: int("userId"),
  
  // Member contact info
  memberName: varchar("memberName", { length: 255 }).notNull(),
  memberEmail: varchar("memberEmail", { length: 320 }).notNull(),
  memberPhone: varchar("memberPhone", { length: 20 }).notNull(),
  
  // Membership details
  status: mysqlEnum("status", ["active", "expired", "cancelled"]).default("active").notNull(),
  startDate: timestamp("startDate").notNull(),
  endDate: timestamp("endDate").notNull(),
  
  // Payment tracking
  stripeCustomerId: varchar("stripeCustomerId", { length: 255 }),
  stripeSubscriptionId: varchar("stripeSubscriptionId", { length: 255 }),
  
  // Self-scheduling link (unique per member)
  schedulingToken: varchar("schedulingToken", { length: 64 }).notNull().unique(),
  
  // Timestamps
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Membership = typeof memberships.$inferSelect;
export type InsertMembership = typeof memberships.$inferInsert;

/**
 * Membership savings tracker for recording discounts and savings
 */
export const membershipSavings = mysqlTable("membershipSavings", {
  id: int("id").autoincrement().primaryKey(),
  
  // Membership reference
  membershipId: int("membershipId").notNull(),
  
  // Service details
  serviceDate: timestamp("serviceDate").notNull(),
  serviceType: varchar("serviceType", { length: 255 }).notNull(),
  
  // Pricing breakdown
  originalPrice: int("originalPrice").notNull(), // in cents
  discountAmount: int("discountAmount").notNull(), // in cents (15% discount)
  schedulingFeeSaved: int("schedulingFeeSaved").default(7900).notNull(), // $79 in cents
  totalSaved: int("totalSaved").notNull(), // in cents
  
  // Timestamps
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type MembershipSaving = typeof membershipSavings.$inferSelect;
export type InsertMembershipSaving = typeof membershipSavings.$inferInsert;