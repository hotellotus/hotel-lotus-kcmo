import { describe, it, expect } from "vitest";
import { appRouter } from "./routers";

describe("Contact Form Email", () => {
  it("should send contact form email successfully", async () => {
    const caller = appRouter.createCaller({} as any);

    const result = await caller.contact.submit({
      name: "Test Guest",
      email: "test@example.com",
      phone: "555-1234",
      message: "This is a test message from the contact form.",
    });

    expect(result).toEqual({
      success: true,
      message: "Email sent successfully",
    });
  });

  it("should validate required fields", async () => {
    const caller = appRouter.createCaller({} as any);

    try {
      await caller.contact.submit({
        name: "",
        email: "test@example.com",
        message: "Test",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.message).toContain("Name is required");
    }
  });

  it("should validate email format", async () => {
    const caller = appRouter.createCaller({} as any);

    try {
      await caller.contact.submit({
        name: "Test",
        email: "invalid-email",
        message: "Test",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.message).toContain("Valid email is required");
    }
  });
});
