import { TRPCError } from "@trpc/server";
import { ENV } from "./env";

export type NotificationPayload = {
  title: string;
  content: string;
};

const TITLE_MAX_LENGTH = 1200;
const CONTENT_MAX_LENGTH = 20000;

const trimValue = (value: string): string => value.trim();
const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const validatePayload = (input: NotificationPayload): NotificationPayload => {
  if (!isNonEmptyString(input.title)) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Notification title is required.",
    });
  }
  if (!isNonEmptyString(input.content)) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Notification content is required.",
    });
  }

  const title = trimValue(input.title);
  const content = trimValue(input.content);

  if (title.length > TITLE_MAX_LENGTH) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Notification title must be at most ${TITLE_MAX_LENGTH} characters.`,
    });
  }

  if (content.length > CONTENT_MAX_LENGTH) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Notification content must be at most ${CONTENT_MAX_LENGTH} characters.`,
    });
  }

  return { title, content };
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Dispatches an owner notification by email via Resend (https://resend.com).
 *
 * This replaces the old Manus-only "Built-in Forge" notification service,
 * which only worked while the site was hosted inside a Manus sandbox. Every
 * caller (contact form, VA lead form, bookings, estimator leads) already
 * saves its own record to the database first, so a failed/misconfigured
 * email here is a lost notification, not a lost lead - it can be resent by
 * checking the database or admin pages.
 *
 * Setup required (see README / deployment notes):
 *   RESEND_API_KEY   - API key from your Resend account (free tier is fine
 *                       for typical lead volume on a small business site)
 *   OWNER_EMAIL       - the email address that should receive lead alerts
 *   RESEND_FROM_EMAIL - optional; defaults to Resend's shared sandbox sender.
 *                       Verify your own domain in Resend and set this to
 *                       something like "leads@herohandymanpro.com" for
 *                       better deliverability once you're ready.
 *
 * Returns `true` if the email was accepted by Resend, `false` if not
 * configured or if the request failed - callers should not treat a
 * `false` return as fatal since the record is already saved.
 */
export async function notifyOwner(
  payload: NotificationPayload
): Promise<boolean> {
  const { title, content } = validatePayload(payload);

  if (!ENV.resendApiKey) {
    console.warn(
      "[Notification] RESEND_API_KEY is not configured - skipping email alert (submission was still saved to the database)."
    );
    return false;
  }

  if (!ENV.ownerEmail) {
    console.warn(
      "[Notification] OWNER_EMAIL is not configured - skipping email alert (submission was still saved to the database)."
    );
    return false;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${ENV.resendApiKey}`,
      },
      body: JSON.stringify({
        from: ENV.resendFromEmail,
        to: [ENV.ownerEmail],
        subject: title,
        html: `<pre style="font-family: inherit; white-space: pre-wrap;">${escapeHtml(content)}</pre>`,
        text: content,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.warn(
        `[Notification] Resend request failed (${response.status} ${response.statusText})${
          detail ? `: ${detail}` : ""
        }`
      );
      return false;
    }

    return true;
  } catch (error) {
    console.warn("[Notification] Error calling Resend:", error);
    return false;
  }
}
