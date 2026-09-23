import { createFileRoute, redirect } from "@tanstack/react-router";

/** Layout for the suite sign-in routes (/business, /individual, /overall).
 * A beforeLoad here also runs for every child match, so the default-suite
 * redirect is guarded to the exact /admin/login path only. (An index route
 * file can't be used for this: admin.login.index.tsx collides with the
 * legacy admin-login/ route's generated symbol.) */
export const Route = createFileRoute("/admin/login")({
  beforeLoad: ({ location }) => {
    if (location.pathname.replace(/\/+$/, "") === "/admin/login") {
      throw redirect({ to: "/admin/login/business" });
    }
  },
});
