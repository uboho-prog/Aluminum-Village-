import { createFileRoute } from "@tanstack/react-router";
import { AdminSuiteLogin } from "@/components/admin-suite-login";

export const Route = createFileRoute("/admin/login/overall")({
  head: () => ({
    meta: [
      { title: "Overall Admin Sign In | Aluminium Village" },
      {
        name: "description",
        content: "Overall administrator access: full platform control and settings.",
      },
    ],
  }),
  component: OverallSuiteLogin,
});

function OverallSuiteLogin() {
  return <AdminSuiteLogin role="overall" />;
}
