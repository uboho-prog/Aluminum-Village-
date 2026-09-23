import { createFileRoute } from "@tanstack/react-router";
import { AdminSuiteLogin } from "@/components/admin-suite-login";

export const Route = createFileRoute("/admin/login/individual")({
  head: () => ({
    meta: [
      { title: "Individual Suite Sign In | Aluminium Village" },
      {
        name: "description",
        content: "Individual Suite administrator access: customers, orders and analytics.",
      },
    ],
  }),
  component: IndividualSuiteLogin,
});

function IndividualSuiteLogin() {
  return <AdminSuiteLogin role="individual" />;
}
