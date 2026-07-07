import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createBooking, getMembershipByEmail, getMembershipSavings, createEstimatorLead, getEstimatorLeads, updateEstimatorLeadStatus, createContactSubmission, markContactSubmissionNotified } from "./db";
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
        // Save first so the submission is never lost, even if the
        // notification below fails or isn't configured.
        const submissionId = await createContactSubmission({
          source: "contact",
          name: input.name,
          email: input.email,
          phone: input.phone,
          message: input.message,
        });

        const sent = await notifyOwner({
          title: "New Contact Form Submission",
          content: `Name: ${input.name}\nEmail: ${input.email}\nPhone: ${input.phone}\nMessage: ${input.message}`
        }).catch(() => false);

        if (sent && submissionId) {
          await markContactSubmissionNotified(submissionId);
        }

        return { success: true };
      }),
  }),

  vaLead: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Name is required"),
        phone: z.string().min(10, "Phone number is required"),
        email: z.string().email("Valid email is required"),
        city: z.string().min(1, "City is required"),
        projectDescription: z.string().optional(),
        isVeteran: z.boolean(),
      }))
      .mutation(async ({ input }) => {
        const submissionId = await createContactSubmission({
          source: "va_lead",
          name: input.name,
          email: input.email,
          phone: input.phone,
          city: input.city,
          message: input.projectDescription,
          isVeteran: input.isVeteran ? "yes" : "no",
        });

        const sent = await notifyOwner({
          title: "New VA Lead Form Submission",
          content: `Name: ${input.name}\nPhone: ${input.phone}\nEmail: ${input.email}\nCity: ${input.city}\nVeteran/Assisting Veteran: ${input.isVeteran ? 'Yes' : 'No'}\nProject: ${input.projectDescription || 'Not provided'}`
        }).catch(() => false);

        if (sent && submissionId) {
          await markContactSubmissionNotified(submissionId);
        }

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
        const baseUrl = process.env.VITE_APP_URL || "https://www.herohandymanpro.com";
        const schedulingLink = `${baseUrl}/schedule?token=${membership.schedulingToken}`;
        
        return { schedulingLink };
      }),
  }),
  estimator: router({
    submitLead: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        phone: z.string().min(7),
        email: z.string().email(),
        zip: z.string().min(5).max(10),
        contactMethod: z.string(),
        timeline: z.string().optional(),
        description: z.string().optional(),
        projectType: z.string(),
        projectLabel: z.string(),
        billableHoursLow: z.number(),
        billableHoursHigh: z.number(),
        priceLow: z.number(),
        priceHigh: z.number(),
        materialLow: z.number(),
        materialHigh: z.number(),
        photoUrls: z.array(z.string()).optional(),
      }))
      .mutation(async ({ input }) => {
        // Save to database
        await createEstimatorLead({
          name: input.name,
          phone: input.phone,
          email: input.email,
          zip: input.zip,
          contactMethod: input.contactMethod,
          timeline: input.timeline,
          description: input.description,
          projectType: input.projectType,
          projectLabel: input.projectLabel,
          billableHoursLow: input.billableHoursLow,
          billableHoursHigh: input.billableHoursHigh,
          priceLow: input.priceLow,
          priceHigh: input.priceHigh,
          materialLow: input.materialLow,
          materialHigh: input.materialHigh,
          photoUrls: input.photoUrls ? JSON.stringify(input.photoUrls) : null,
        });

        // Notify owner
        const photoNote = input.photoUrls && input.photoUrls.length > 0
          ? `\nPhotos: ${input.photoUrls.join(', ')}`
          : '';
        await notifyOwner({
          title: `New Estimator Lead: ${input.projectLabel}`,
          content: `Name: ${input.name}\nPhone: ${input.phone}\nEmail: ${input.email}\nZIP: ${input.zip}\nContact: ${input.contactMethod}\nTimeline: ${input.timeline ?? 'Not specified'}\n\nProject: ${input.projectLabel}\nEstimate: $${input.priceLow.toLocaleString()} – $${input.priceHigh.toLocaleString()}\nBillable Hours: ${input.billableHoursLow}–${input.billableHoursHigh} hrs\n\nDescription: ${input.description ?? 'None'}${photoNote}`,
        });

        return { success: true };
      }),

    // Admin: get all leads (admin only)
    getLeads: publicProcedure.query(async ({ ctx }) => {
      // Only allow admin users
      if (!ctx.user || ctx.user.role !== "admin") {
        return [];
      }
      return getEstimatorLeads();
    }),

    // Admin: update lead status
    updateLeadStatus: publicProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["new", "contacted", "quoted", "won", "lost"]),
      }))
      .mutation(async ({ input, ctx }) => {
        if (!ctx.user || ctx.user.role !== "admin") {
          return { success: false };
        }
        await updateEstimatorLeadStatus(input.id, input.status);
        return { success: true };
      }),
  }),
});
export type AppRouter = typeof appRouter;
