import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy admin login URL: forwards to the Business Suite sign-in. */
export const Route = createFileRoute("/admin-login/")({
  beforeLoad: () => {
    throw redirect({ to: "/admin/login/business" });
  },
});
