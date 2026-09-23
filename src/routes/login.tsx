import { createFileRoute, Link, useNavigate, useSearch } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { Building2 } from "lucide-react";
import { useState } from "react";
import logoUrl from "@/assets/logo.png";
import { setAuthUser } from "@/lib/auth-store";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in | Aluminium Village" },
      { name: "description", content: "Sign in to access your Aluminium Village account." },
    ],
  }),
  validateSearch: (s: Record<string, unknown>) => ({
    redirect: typeof s.redirect === "string" ? s.redirect : undefined,
  }),
  component: Login,
});

function Login() {
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { redirect } = useSearch({ from: "/login" });

  const handleSignIn = () => {
    const trimmed = email.trim();
    if (!trimmed) return;
    const name = trimmed.split("@")[0].split(/[._-]/)[0];
    const displayName = name ? name.charAt(0).toUpperCase() + name.slice(1) : "Member";
    setAuthUser({ name: displayName, email: trimmed });
    navigate({ to: (redirect as any) || "/" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-secondary/40">
      {/* Minimal header */}
      <header className="bg-card border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoUrl} alt="Aluminium Village" className="h-9 w-9 object-contain" />
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition">
              About
            </Link>
            <button className="inline-flex items-center gap-1.5 text-foreground hover:text-brand transition">
              <span className="grid place-items-center size-5 rounded-full border">
                <svg viewBox="0 0 20 20" className="size-3" fill="currentColor">
                  <circle cx="10" cy="6" r="3" />
                  <path d="M10 11c-3 0-6 1.5-6 4v1h12v-1c0-2.5-3-4-6-4z" />
                </svg>
              </span>
              Account
            </button>
          </nav>
        </div>
      </header>

      {/* Main card */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-10">
        <div className="w-full max-w-6xl rounded-2xl bg-card shadow-xl border overflow-hidden grid lg:grid-cols-2">
          {/* Visual panel */}
          <div className="relative hidden lg:block">
            <img
              src={img.loginBg}
              alt="Industrial aluminium fabrication facility"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-primary-foreground">
              <h2 className="text-3xl font-bold leading-tight">Precision in Every Connection.</h2>
              <p className="mt-3 text-sm text-primary-foreground/85 max-w-sm leading-relaxed">
                Join the global marketplace for premium aluminium solutions and verified industrial
                suppliers.
              </p>
            </div>
          </div>

          {/* Form panel */}
          <div className="px-6 sm:px-10 py-10 sm:py-12 flex items-center">
            <div className="w-full max-w-md mx-auto">
              <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Sign in to access your cart and complete checkout.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <button className="group inline-flex items-center justify-center gap-2 rounded-lg border bg-card py-2.5 text-sm font-semibold hover:bg-secondary hover:border-brand/30 transition active:scale-[0.99]">
                  <svg viewBox="0 0 24 24" className="size-4">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09A6.6 6.6 0 0 1 5.48 12c0-.73.13-1.43.36-2.09V7.07H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
                    />
                  </svg>
                  Google
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg border bg-card py-2.5 text-sm font-semibold hover:bg-secondary hover:border-brand/30 transition active:scale-[0.99]">
                  <Building2 className="size-4 text-brand" /> Single Sign-On
                </button>
              </div>

              <div className="my-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                <div className="flex-1 h-px bg-border" />
                Or login with email
                <div className="flex-1 h-px bg-border" />
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSignIn();
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="mt-1.5 w-full rounded-lg border bg-card px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium">
                      Password
                    </label>
                    <Link
                      to="/forgot-password"
                      search={{ mode: "user" }}
                      className="text-xs font-semibold text-brand hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="mt-1.5 w-full rounded-lg border bg-card px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
                  />
                </div>

                <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
                  <span
                    className={`grid place-items-center size-4 rounded border transition ${
                      remember
                        ? "bg-brand border-brand text-brand-foreground"
                        : "bg-card border-input hover:border-brand/50"
                    }`}
                  >
                    {remember && (
                      <svg viewBox="0 0 12 12" className="size-3 stroke-current" fill="none" strokeWidth="2">
                        <path d="M2.5 6.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  Keep me signed in for 30 days
                </label>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-brand text-brand-foreground py-3 text-sm font-semibold shadow-md shadow-brand/20 hover:bg-brand/90 active:scale-[0.99] transition"
                >
                  Sign In
                </button>
              </form>

              <div className="my-6 h-px bg-border" />

              <p className="text-center text-sm text-muted-foreground">
                New to the village?{" "}
                <Link to="/signup" search={{ redirect: undefined }} className="text-brand font-semibold hover:underline">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
