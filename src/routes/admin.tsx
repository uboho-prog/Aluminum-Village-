import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin-layout";
import { SUITE_META } from "@/lib/admin-access";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin | Aluminium Village" },
      { name: "description", content: "Administrative nerve center for Aluminium Village." },
    ],
  }),
  component: AdminLayoutRoute,
});

// Login pages stand alone: no admin chrome around the suite sign-in screens.
const LOGIN_PATHS = new Set(Object.values(SUITE_META).map((m) => m.path));
LOGIN_PATHS.add("/admin/login");

function AdminLayoutRoute() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  if (LOGIN_PATHS.has(pathname)) return <Outlet />;

  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
}
