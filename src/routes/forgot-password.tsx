import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { AtSign, ArrowLeft, CheckCircle2, KeyRound, ShieldCheck } from "lucide-react";
import logoUrl from "@/assets/logo.png";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Reset Password | Aluminium Village" },
      { name: "description", content: "Reset your Aluminium Village account password." },
    ],
  }),
  validateSearch: (s: Record<string, unknown>) => ({
    mode: s.mode === "admin" ? "admin" : "user",
  }),
  component: ForgotPassword,
});

function ForgotPassword() {
  const { mode } = useSearch({ from: "/forgot-password" });
  const isAdmin = mode === "admin";
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
  };

  const accent = isAdmin ? "#0b50c4" : undefined;
  const backTo = isAdmin ? "/admin/login" : "/login";

  return (
    <div className="min-h-screen flex flex-col bg-secondary/40">
      <main className="flex-1 flex flex-col items-center px-4 sm:px-6 pt-12 pb-16">
        <Link to="/" className="mb-8">
          <img src={logoUrl} alt="Aluminium Village" className="h-14 w-14 object-contain mx-auto" />
        </Link>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground tracking-tight text-center">
          {isAdmin ? "Admin Password Recovery" : "Forgot Your Password?"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground text-center max-w-md">
          {isAdmin
            ? "Enter your administrator email to receive a secure password reset link."
            : "No worries, enter your email and we'll send you instructions to reset it."}
        </p>

        <div className="mt-8 w-full max-w-md rounded-2xl bg-card border shadow-xl p-8">
          {sent ? (
            <div className="text-center space-y-4">
              <div className="mx-auto grid place-items-center size-14 rounded-full bg-success/10 text-success">
                <CheckCircle2 className="size-7" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Check your inbox</h2>
              <p className="text-sm text-muted-foreground">
                We've sent a password reset link to <span className="font-semibold text-foreground">{email}</span>.
                The link will expire in 30 minutes.
              </p>
              <button
                onClick={() => { setSent(false); setEmail(""); }}
                className="text-sm font-semibold text-brand hover:underline"
              >
                Send to a different email
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-bold text-foreground">
                  {isAdmin ? "Administrator Email" : "Email Address"}
                </label>
                <div className="mt-1.5 relative">
                  <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full rounded-lg border bg-background pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                  />
                </div>
              </div>

              <button
                type="submit"
                style={accent ? { backgroundColor: accent } : undefined}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-bold tracking-wider shadow-md transition active:scale-[0.99] ${
                  isAdmin
                    ? "text-white hover:opacity-90"
                    : "bg-brand text-brand-foreground hover:bg-brand/90"
                }`}
              >
                {isAdmin ? "SEND SECURE RESET LINK" : "Send Reset Link"}
                {isAdmin ? <ShieldCheck className="size-4" /> : <KeyRound className="size-4" />}
              </button>
            </form>
          )}

          <div className="mt-6 pt-5 border-t flex items-center justify-center">
            <Link
              to={backTo}
              search={isAdmin ? { suite: undefined } : { redirect: undefined }}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to {isAdmin ? "Admin Login" : "Sign In"}
            </Link>
          </div>
        </div>

        {!isAdmin && (
          <p className="mt-6 text-xs text-muted-foreground">
            Administrator?{" "}
            <Link to="/forgot-password" search={{ mode: "admin" }} className="text-brand font-semibold hover:underline">
              Reset admin password
            </Link>
          </p>
        )}
      </main>
    </div>
  );
}
