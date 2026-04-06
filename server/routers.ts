import { TRPCError } from "@trpc/server";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { signAdminToken } from "./_core/auth";
import { z } from "zod";
import {
  getActiveTestimonials,
  getAllTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from "./db";
import nodemailer from "nodemailer";
import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    /** Returns whether the current session has admin access. */
    me: publicProcedure.query(opts => ({
      isAdmin: opts.ctx.isAdmin,
    })),

    /** Validate the admin password and issue a session cookie. */
    login: publicProcedure
      .input(z.object({ password: z.string().min(1) }))
      .mutation(async ({ input, ctx }) => {
        const adminPassword = process.env.ADMIN_PASSWORD;
        if (!adminPassword || input.password !== adminPassword) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Invalid password",
          });
        }
        const token = await signAdminToken();
        const cookieOptions = getSessionCookieOptions(ctx.req);
        ctx.res.cookie(COOKIE_NAME, token, {
          ...cookieOptions,
          maxAge: ONE_YEAR_MS,
        });
        return { success: true } as const;
      }),

    /** Clear the session cookie. */
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  testimonials: router({
    list: publicProcedure.query(() => getActiveTestimonials()),

    all: protectedProcedure.query(() => getAllTestimonials()),

    create: protectedProcedure
      .input(
        z.object({
          name: z.string().min(1),
          title: z.string().min(1),
          text: z.string().min(1),
          rating: z.number().min(1).max(5).default(5),
          initials: z.string().length(2),
          isActive: z.number().default(1),
        })
      )
      .mutation(({ input }) => createTestimonial(input)),

    update: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          name: z.string().optional(),
          title: z.string().optional(),
          text: z.string().optional(),
          rating: z.number().min(1).max(5).optional(),
          initials: z.string().optional(),
          isActive: z.number().optional(),
        })
      )
      .mutation(({ input }) => {
        const { id, ...updates } = input;
        return updateTestimonial(id, updates);
      }),

    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(({ input }) => deleteTestimonial(input.id)),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Valid email is required"),
          phone: z.string().optional(),
          message: z.string().min(1, "Message is required"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.GMAIL_USER,
              pass: process.env.GMAIL_PASSWORD,
            },
          });

          // Email to hotel
          await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: "Hotellotusstadium@gmail.com",
            subject: `New Contact Form Submission from ${input.name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${input.name}</p>
              <p><strong>Email:</strong> ${input.email}</p>
              <p><strong>Phone:</strong> ${input.phone || "Not provided"}</p>
              <p><strong>Message:</strong></p>
              <p>${input.message.replace(/\n/g, "<br>")}</p>
            `,
          });

          // Confirmation email to guest
          await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: input.email,
            subject: "We received your message - Hotel Lotus KCMO",
            html: `
              <h2>Thank you for contacting Hotel Lotus KCMO</h2>
              <p>Dear ${input.name},</p>
              <p>We have received your message and will get back to you as soon as possible.</p>
              <p>Our team typically responds within 24 hours.</p>
              <p>Best regards,<br>Hotel Lotus KCMO Team</p>
            `,
          });

          return { success: true, message: "Email sent successfully" };
        } catch (error) {
          console.error("Email sending error:", error);
          throw new Error("Failed to send email. Please try again later.");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
