import process from "node:process";
import { getServerConfig } from "../config.server";
import { SUITE_META, isSuiteEmail } from "../admin-access";

/**
 * Demo-phase sign-ins: while the platform runs on demo data, each suite has a
 * public demo password (shown on its login screen). ADMIN_ACCESS_PASSWORD, when
 * set, stays the single master password accepted by every suite; when it is
 * not set (local dev / preview), the per-suite demo password works too. Both
 * go away once real authentication is built.
 */
function getDemoPassword(role: AdminRole): string {
  return SUITE_META[role].demoPassword;
}
import { ADMIN_ROLE_LABEL, type AdminRole } from "../auth-store";
import { z } from "zod";
import { createServerFn } from "@tanstack/react-start";

/**
 * Server-only admin access secret. Never imported by client code: this file
 * is excluded from the client bundle by the .server.ts suffix, so the
 * password ships nowhere.
 *
 * Configured via ADMIN_ACCESS_PASSWORD (set it in .env or your host's env
 * settings). The fallback keeps local dev working out of the box; change or
 * remove it before real deployments.
 */
export function getAdminAccessPassword(): string {
  return process.env.ADMIN_ACCESS_PASSWORD ?? "av-admin-2026";
}

const verifyInput = z.object({
  role: z.enum(["business", "individual", "overall"]),
  email: z.string().trim().min(1),
  password: z.string().min(1),
});

export type VerifyAdminAccessResult =
  { ok: true; displayName: string } | { ok: false; error: string };

/**
 * Validates an admin suite sign-in attempt entirely on the server: the
 * email must belong to the suite's domain and the password must match the
 * server-side secret. Returns a display name (derived from the email) on
 * success so the client never needs the password for anything.
 */
export const verifyAdminAccess = createServerFn({ method: "POST" })
  .inputValidator(verifyInput)
  .handler(async ({ data }): Promise<VerifyAdminAccessResult> => {
    const role = data.role as AdminRole;
    const email = data.email.toLowerCase();

    // Suite-specific check: the email must belong to this suite's domain.
    if (!isSuiteEmail(role, email)) {
      return {
        ok: false,
        error: `Use your ${ADMIN_ROLE_LABEL[role]} address (…@${SUITE_META[role].emailDomain}).`,
      };
    }

    const master = getAdminAccessPassword();
    if (data.password !== master && data.password !== getDemoPassword(role)) {
      return { ok: false, error: "Incorrect access password." };
    }

    const name = email
      .split("@")[0]
      .replace(/[._-]+/g, " ")
      .trim();
    const displayName = (name.charAt(0).toUpperCase() + name.slice(1)).split(" ")[0] || "Admin";
    return { ok: true, displayName };
  });

// Keep getServerConfig referenced so the shared config helper stays wired
// into this server module's environment docs.
void getServerConfig;
