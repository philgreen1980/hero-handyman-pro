/**
 * Standalone admin login - replaces the Manus OAuth login flow for the
 * /admin/* pages. Manus's OAuth server (OAUTH_SERVER_URL) only exists while
 * the site runs inside Manus's own environment, so admin access silently
 * stopped working once the site is hosted anywhere else.
 *
 * This is a deliberately simple single-admin password gate (there's one
 * business owner, not a multi-user system to build). Logging in with
 * ADMIN_PASSWORD issues the exact same signed session cookie the old OAuth
 * callback used to issue, so every existing "is this user an admin?" check
 * elsewhere in the app (ctx.user.role === "admin") keeps working unchanged.
 */
import type { Express, Request, Response, NextFunction } from "express";
import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";
import { parse as parseCookieHeader } from "cookie";
import { getSessionCookieOptions } from "./cookies";
import { sdk } from "./sdk";
import { ENV } from "./env";
import * as db from "../db";

const LOCAL_ADMIN_OPEN_ID = "local-admin";

export function registerAdminAuthRoutes(app: Express) {
  app.post("/api/admin/login", async (req: Request, res: Response) => {
    if (!ENV.adminPassword) {
      res.status(500).json({
        error:
          "Admin login is not configured. Set the ADMIN_PASSWORD environment variable.",
      });
      return;
    }

    const { password } = req.body ?? {};
    if (typeof password !== "string" || password !== ENV.adminPassword) {
      res.status(401).json({ error: "Incorrect password." });
      return;
    }

    try {
      // Ensure the local admin user row exists with role "admin" so the
      // existing ctx.user.role === "admin" checks throughout the app work
      // exactly as they did with Manus OAuth-issued users.
      await db.upsertUser({
        openId: LOCAL_ADMIN_OPEN_ID,
        name: "Admin",
        role: "admin",
        loginMethod: "password",
        lastSignedIn: new Date(),
      });

      const sessionToken = await sdk.createSessionToken(LOCAL_ADMIN_OPEN_ID, {
        name: "Admin",
        expiresInMs: ONE_YEAR_MS,
      });

      const cookieOptions = getSessionCookieOptions(req);
      res.cookie(COOKIE_NAME, sessionToken, {
        ...cookieOptions,
        maxAge: ONE_YEAR_MS,
      });

      res.json({ success: true });
    } catch (error) {
      console.error("[AdminAuth] Login failed:", error);
      res.status(500).json({ error: "Login failed. Please try again." });
    }
  });

  app.post("/api/admin/logout", (req: Request, res: Response) => {
    const cookieOptions = getSessionCookieOptions(req);
    res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
    res.json({ success: true });
  });
}

/**
 * Express middleware for plain (non-tRPC) routes that should only be
 * reachable by the logged-in admin, e.g. GET /api/leads which previously
 * had no protection at all - anyone who found the URL could see every lead.
 */
export async function requireAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const cookies = parseCookieHeader(req.headers.cookie ?? "");
    const sessionCookie = cookies[COOKIE_NAME];
    const session = await sdk.verifySession(sessionCookie);

    if (!session) {
      res.status(401).json({ error: "Admin login required." });
      return;
    }

    const user = await db.getUserByOpenId(session.openId);
    if (!user || user.role !== "admin") {
      res.status(403).json({ error: "Admin access required." });
      return;
    }

    next();
  } catch (error) {
    console.error("[AdminAuth] requireAdmin check failed:", error);
    res.status(401).json({ error: "Admin login required." });
  }
}
