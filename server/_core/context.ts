import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { verifyAdminToken } from "./auth";

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  isAdmin: boolean;
};

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  const isAdmin = await verifyAdminToken(opts.req);

  return {
    req: opts.req,
    res: opts.res,
    isAdmin,
  };
}
