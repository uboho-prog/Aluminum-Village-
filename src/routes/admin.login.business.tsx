import { createFileRoute } from "@tanstack/react-router";
import { AdminSuiteLogin } from "@/components/admin-suite-login";

export const Route = createFileRoute("/admin/login/business")({
  head: () => ({
    meta: [
      { title: "Business Suite Sign In | Aluminium Village" },
      {
        name: "description",
        content: "Business Suite administrator access: sellers, deals and escrow oversight.",
      },
    ],
  }),
  component: BusinessSuiteLogin,
});

function BusinessSuiteLogin() {
  return <AdminSuiteLogin role="business" />;
}
