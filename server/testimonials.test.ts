import { describe, expect, it, beforeAll, afterAll } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedAdminUser = NonNullable<TrpcContext["user"]> & { role: "admin" };

function createAdminContext(): { ctx: TrpcContext; clearedCookies: any[] } {
  const clearedCookies: any[] = [];

  const user: AuthenticatedAdminUser = {
    id: 1,
    openId: "admin-user",
    email: "admin@example.com",
    name: "Admin User",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: (name: string, options: any) => {
        clearedCookies.push({ name, options });
      },
    } as TrpcContext["res"],
  };

  return { ctx, clearedCookies };
}

describe("testimonials API", () => {
  it("should fetch active testimonials publicly", async () => {
    const { ctx } = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.testimonials.list();
    expect(Array.isArray(result)).toBe(true);
  });

  it("should allow admin to fetch all testimonials", async () => {
    const { ctx } = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.testimonials.all();
    expect(Array.isArray(result)).toBe(true);
  });

  it("should create a new testimonial as admin", async () => {
    const { ctx } = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const newTestimonial = {
      name: "Test Guest",
      title: "Test Title",
      text: "This is a test testimonial",
      rating: 5,
      initials: "TG",
      isActive: 1,
    };

    const result = await caller.testimonials.create(newTestimonial);
    expect(result).toBeDefined();
    expect(result?.name).toBe("Test Guest");
    expect(result?.rating).toBe(5);
  });

  it("should update a testimonial as admin", async () => {
    const { ctx } = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    // Create a testimonial first
    const created = await caller.testimonials.create({
      name: "Update Test",
      title: "Original Title",
      text: "Original text",
      rating: 4,
      initials: "UT",
      isActive: 1,
    });

    if (!created) throw new Error("Failed to create testimonial");

    // Update it
    const updated = await caller.testimonials.update({
      id: created.id,
      title: "Updated Title",
      rating: 5,
    });

    expect(updated?.title).toBe("Updated Title");
    expect(updated?.rating).toBe(5);
  });

  it("should delete a testimonial as admin", async () => {
    const { ctx } = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    // Create a testimonial first
    const created = await caller.testimonials.create({
      name: "Delete Test",
      title: "To Delete",
      text: "This will be deleted",
      rating: 3,
      initials: "DT",
      isActive: 1,
    });

    if (!created) throw new Error("Failed to create testimonial");

    // Delete it
    const deleted = await caller.testimonials.delete({ id: created.id });
    expect(deleted).toBe(true);
  });

  it("should toggle testimonial active status", async () => {
    const { ctx } = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    // Create a testimonial
    const created = await caller.testimonials.create({
      name: "Toggle Test",
      title: "Toggle Status",
      text: "Testing active toggle",
      rating: 5,
      initials: "TT",
      isActive: 1,
    });

    if (!created) throw new Error("Failed to create testimonial");

    // Toggle to inactive
    const inactive = await caller.testimonials.update({
      id: created.id,
      isActive: 0,
    });

    expect(inactive?.isActive).toBe(0);

    // Toggle back to active
    const active = await caller.testimonials.update({
      id: created.id,
      isActive: 1,
    });

    expect(active?.isActive).toBe(1);
  });
});
