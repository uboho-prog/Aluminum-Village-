import { Building2, UserCircle, Crown } from "lucide-react";
import type { ComponentType } from "react";
import type { AdminRole } from "@/lib/auth-store";

/** Which admin suites can open each /admin section. Single source of truth
 * for the sidebar filter, route guard, and dashboard quick actions.
 *
 * Business = a vendor's workspace (post products, track sales).
 * Professional = an individual's workspace (profile, services, requests).
 * Overall = platform operator: sees everything, approves everyone, controls
 * payments. */
export const ADMIN_NAV_ACCESS: Record<string, AdminRole[]> = {
  "/admin": ["business", "professional", "overall"],
  // Business suite
  "/admin/products": ["business", "overall"],
  "/admin/sales": ["business", "overall"],
  // Professional suite
  "/admin/profile": ["professional", "overall"],
  "/admin/services": ["professional", "overall"],
  "/admin/requests": ["professional", "overall"],
  // Overall admin only
  "/admin/approvals": ["overall"],
  "/admin/payments": ["overall"],
  "/admin/users": ["overall"],
  "/admin/sellers": ["overall"],
  "/admin/deals": ["overall"],
  "/admin/analytics": ["overall"],
  "/admin/settings": ["overall"],
};

/** Identity of each admin suite: its own login route, icon and copy. */
export const SUITE_META: Record<
  AdminRole,
  {
    path: string;
    icon: ComponentType<{ className?: string }>;
    blurb: string;
    emailPlaceholder: string;
    /** Only emails under this domain may sign in to this suite. */
    emailDomain: string;
    /** Demo-phase credentials shown on the suite's login screen.
     * Deliberately public (client-visible); replaced by real auth later. */
    demoEmail: string;
    demoPassword: string;
  }
> = {
  business: {
    path: "/admin/login/business",
    icon: Building2,
    blurb: "Manage products, sales, and seller performance",
    emailPlaceholder: "you@business.aluminiumvillage.com",
    emailDomain: "business.aluminiumvillage.com",
    demoEmail: "demo@business.aluminiumvillage.com",
    demoPassword: "business-demo-2026",
  },
  professional: {
    path: "/admin/login/professional",
    icon: UserCircle,
    blurb: "Showcase your profile, services, and manage client requests",
    emailPlaceholder: "you@professional.aluminiumvillage.com",
    emailDomain: "professional.aluminiumvillage.com",
    demoEmail: "demo@professional.aluminiumvillage.com",
    demoPassword: "professional-demo-2026",
  },
  overall: {
    path: "/admin/login/overall",
    icon: Crown,
    blurb: "Full platform control: approvals, payments, and analytics",
    emailPlaceholder: "you@aluminiumvillage.com",
    emailDomain: "aluminiumvillage.com",
    demoEmail: "demo@aluminiumvillage.com",
    demoPassword: "overall-demo-2026",
  },
};

/** The shared access password lives server-side only, in
 * src/lib/api/admin-access.server.ts (verified via the verifyAdminAccess
 * server function). It must never be imported by client code.
 * ADMIN_ACCESS_PASSWORD env var overrides the dev fallback. */

/** Narrow an untrusted value (e.g. from localStorage) to a real AdminRole. */
export function isAdminRole(value: unknown): value is AdminRole {
  return value === "business" || value === "professional" || value === "overall";
}

/** Does this email belong to the given suite's domain? */
export function isSuiteEmail(role: AdminRole, email: string): boolean {
  const domain = SUITE_META[role].emailDomain;
  return email
    .trim()
    .toLowerCase()
    .endsWith("@" + domain);
}

/** Can this suite open the exact section (e.g. a nav item or link target)? */
export function canAccessAdminSection(
  role: AdminRole | null | undefined,
  section: string,
): boolean {
  if (!role) return false;
  const allowed = ADMIN_NAV_ACCESS[section];
  return !!allowed && allowed.includes(role);
}

/** Can this suite open the current pathname (used by the route guard)?
 * Unknown paths under /admin default to deny. Exact section paths
 * (e.g. /admin/deals) match directly; only deeper paths need prefixing. */
export function canAccessAdminPath(role: AdminRole | null | undefined, pathname: string): boolean {
  if (!role) return false;
  if (pathname === "/admin" || pathname === "/admin/")
    return ADMIN_NAV_ACCESS["/admin"].includes(role);
  const exact = ADMIN_NAV_ACCESS[pathname];
  if (exact) return exact.includes(role);
  let allowed: readonly AdminRole[] | undefined;
  for (const [section, roles] of Object.entries(ADMIN_NAV_ACCESS)) {
    if (section !== "/admin" && pathname.startsWith(section + "/")) {
      allowed = roles;
      break;
    }
  }
  return !!allowed && allowed.includes(role);
}
