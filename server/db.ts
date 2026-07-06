import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, bookings, InsertBooking, memberships, membershipSavings, InsertMembership, InsertMembershipSaving } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Booking-related queries
export async function createBooking(booking: InsertBooking) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(bookings).values(booking);
  return result;
}

export async function getAllBookings() {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  return await db.select().from(bookings).orderBy(desc(bookings.createdAt));
}

export async function getBookingById(id: number) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.select().from(bookings).where(eq(bookings.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function updateBookingStatus(id: number, status: "pending" | "confirmed" | "in_progress" | "completed" | "cancelled") {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  await db.update(bookings).set({ status, updatedAt: new Date() }).where(eq(bookings.id, id));
}

export async function updateBookingAdminNotes(id: number, adminNotes: string) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  await db.update(bookings).set({ adminNotes, updatedAt: new Date() }).where(eq(bookings.id, id));
}

// Membership-related queries
export async function getMembershipByEmail(email: string) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.select().from(memberships).where(eq(memberships.memberEmail, email)).orderBy(desc(memberships.createdAt)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getMembershipByToken(token: string) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.select().from(memberships).where(eq(memberships.schedulingToken, token)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createMembership(membership: InsertMembership) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(memberships).values(membership);
  return result;
}

export async function getMembershipSavings(membershipId: number) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  return await db.select().from(membershipSavings).where(eq(membershipSavings.membershipId, membershipId)).orderBy(desc(membershipSavings.serviceDate));
}

export async function addMembershipSaving(saving: InsertMembershipSaving) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(membershipSavings).values(saving);
  return result;
}
