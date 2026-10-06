import { createFileRoute } from "@tanstack/react-router";
import { AdminSuiteLogin } from "@/components/admin-suite-login";

export const Route = createFileRoute("/admin/login/professional")({
  head: () => ({
    meta: [
      { title: "Professional Suite Sign In | Aluminium Village" },
      {
        name: "description",
        content: "Professional Suite administrator access: profile, services, and client requests.",
      },
    ],
  }),
  component: ProfessionalSuiteLogin,
});

function ProfessionalSuiteLogin() {
  return <AdminSuiteLogin role="professional" />;
}