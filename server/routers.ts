import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createBooking, getMembershipByEmail, getMembershipSavings } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  bookings: router({
    // Public procedure to create a booking
    create: publicProcedure
      .input(z.object({
        customerName: z.string().min(1),
        customerEmail: z.string().email(),
        customerPhone: z.string().min(10),
        serviceType: z.string().min(1),
        serviceDescription: z.string().optional(),
        address: z.string().min(1),
        city: z.string().min(1),
        state: z.string().length(2),
        zipCode: z.string().min(5),
        preferredDate: z.date(),
        preferredTimeSlot: z.enum(["morning", "afternoon", "evening"]),
      }))
      .mutation(async ({ input }) => {
        const result = await createBooking(input);
        
        // Notify owner of new booking
        await notifyOwner({
          title: "New Booking Request",
          content: `${input.customerName} has requested ${input.serviceType} service for ${input.preferredDate.toLocaleDateString()}. Contact: ${input.customerPhone}`
        });
        
        return { success: true };
      }),
  }),

  contact: router({
    // Public procedure to submit contact form
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Valid email is required"),
        phone: z.string().min(10, "Phone number is required"),
        message: z.string().min(1, "Message is required"),
      }))
      .mutation(async ({ input }) => {
        // Send notification to owner
        await notifyOwner({
          title: "New Contact Form Submission",
          content: `Name: ${input.name}\nEmail: ${input.email}\nPhone: ${input.phone}\nMessage: ${input.message}`
        });
        
        return { success: true };
      }),
  }),

  membership: router({
    // Get membership status by email
    getStatus: publicProcedure
      .input(z.object({
        email: z.string().email(),
      }))
      .query(async ({ input }) => {
        const membership = await getMembershipByEmail(input.email);
        
        if (!membership) {
          return { status: "none" as const, membership: null };
        }
        
        // Check if membership is expired
        const now = new Date();
        const endDate = new Date(membership.endDate);
        
        if (membership.status === "cancelled") {
          return { status: "cancelled" as const, membership };
        }
        
        if (now > endDate) {
          return { status: "expired" as const, membership };
        }
        
        return { status: "active" as const, membership };
      }),

    // Get total savings for a membership
    getSavings: publicProcedure
      .input(z.object({
        email: z.string().email(),
      }))
      .query(async ({ input }) => {
        const membership = await getMembershipByEmail(input.email);
        
        if (!membership) {
          return {
            totalSaved: 0,
            serviceCount: 0,
            savings: [],
          };
        }
        
        const savings = await getMembershipSavings(membership.id);
        const totalSaved = savings.reduce((sum, s) => sum + s.totalSaved, 0);
        
        return {
          totalSaved,
          serviceCount: savings.length,
          savings,
        };
      }),

    // Get scheduling link for a membership
    getSchedulingLink: publicProcedure
      .input(z.object({
        email: z.string().email(),
      }))
      .query(async ({ input }) => {
        const membership = await getMembershipByEmail(input.email);
        
        if (!membership) {
          return { schedulingLink: null };
        }
        
        // Generate scheduling URL with token
        const baseUrl = process.env.VITE_APP_URL || "https://herohandymanpro.com";
        const schedulingLink = `${baseUrl}/schedule?token=${membership.schedulingToken}`;
        
        return { schedulingLink };
      }),
  }),
});

export type AppRouter = typeof appRouter;
