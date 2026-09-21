import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin-layout";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin | Aluminium Village" },
      { name: "description", content: "Administrative nerve center for Aluminium Village." },
    ],
  }),
  component: AdminLayoutRoute,
});

function AdminLayoutRoute() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
}
