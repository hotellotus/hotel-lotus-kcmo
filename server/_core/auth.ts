import { SignJWT, jwtVerify } from "jose";
import { parse as parseCookieHeader } from "cookie";
import type { Request } from "express";
import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

function getSecret() {
  const secret = process.env.JWT_SECRET ?? "";
  if (!secret) {
    console.error("[Auth] JWT_SECRET is not configured!");
  }
  return new TextEncoder().encode(secret);
}

/**
 * Creates a signed JWT for the admin session.
 */
export async function signAdminToken(): Promise<string> {
  const secretKey = getSecret();
  const expirationSeconds = Math.floor((Date.now() + ONE_YEAR_MS) / 1000);
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(expirationSeconds)
    .sign(secretKey);
}

/**
 * Reads the session cookie from the request and verifies it.
 * Returns true if the token is a valid admin session.
 */
export async function verifyAdminToken(req: Request): Promise<boolean> {
  const cookieHeader = req.headers.cookie;
  if (!cookieHeader) return false;

  const cookies = parseCookieHeader(cookieHeader);
  const token = cookies[COOKIE_NAME];
  if (!token) return false;

  try {
    const secretKey = getSecret();
    const { payload } = await jwtVerify(token, secretKey, {
      algorithms: ["HS256"],
    });
    return payload.role === "admin";
  } catch {
    return false;
  }
}
