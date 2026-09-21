import { createFileRoute, Link, useNavigate, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { Building2 } from "lucide-react";
import logoUrl from "@/assets/logo.png";
import { setAuthUser } from "@/lib/auth-store";
import { img } from "@/lib/images";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create account | Aluminium Village" },
      { name: "description", content: "Create your Aluminium Village account to shop, track orders and checkout securely." },
    ],
  }),
  validateSearch: (s: Record<string, unknown>) => ({
    redirect: typeof s.redirect === "string" ? s.redirect : undefined,
  }),
  component: Signup,
});

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const { redirect } = useSearch({ from: "/signup" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !name.trim() || !password || password !== confirm || !agree) return;
    setAuthUser({ name: name.trim(), email: email.trim() });
    navigate({ to: (redirect as any) || "/" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-secondary/40">
      <header className="bg-card border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoUrl} alt="Aluminium Village" className="h-9 w-9 object-contain" />
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition">About</Link>
            <Link to="/login" className="text-foreground hover:text-brand transition">Sign in</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-10">
        <div className="w-full max-w-6xl rounded-2xl bg-card shadow-xl border overflow-hidden grid lg:grid-cols-2">
          <div className="relative hidden lg:block">
            <img src={img.loginBg} alt="Aluminium fabrication" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-primary-foreground">
              <h2 className="text-3xl font-bold leading-tight">Join the Village.</h2>
              <p className="mt-3 text-sm text-primary-foreground/85 max-w-sm leading-relaxed">
                Create an account to shop verified aluminium products, track orders, and complete checkout in seconds.
              </p>
            </div>
          </div>

          <div className="px-6 sm:px-10 py-10 sm:py-12 flex items-center">
            <div className="w-full max-w-md mx-auto">
              <h1 className="text-3xl font-bold tracking-tight">Create your account</h1>
              <p className="mt-2 text-sm text-muted-foreground">
                It only takes a minute. Already a member?{" "}
                <Link to="/login" className="text-brand font-semibold hover:underline">Sign in</Link>
              </p>

              <form onSubmit={onSubmit} className="mt-7 space-y-4">
                <div>
                  <label className="text-sm font-medium">Full Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="mt-1.5 w-full rounded-lg border bg-card px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="mt-1.5 w-full rounded-lg border bg-card px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="mt-1.5 w-full rounded-lg border bg-card px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Confirm</label>
                    <input
                      type="password"
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                      placeholder="••••••••"
                      className="mt-1.5 w-full rounded-lg border bg-card px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                    />
                  </div>
                </div>

                <label className="flex items-start gap-2 text-sm cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-1 size-4 rounded border-input"
                  />
                  <span className="text-muted-foreground">
                    I agree to the <span className="text-brand font-semibold">Terms</span> and <span className="text-brand font-semibold">Privacy Policy</span>.
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-brand text-brand-foreground py-3 text-sm font-semibold shadow-md shadow-brand/20 hover:bg-brand/90 active:scale-[0.99] transition"
                >
                  Create Account
                </button>
              </form>

              <div className="my-6 h-px bg-border" />
              <p className="text-center text-sm text-muted-foreground">
                Selling aluminium products?{" "}
                <Link to="/join" className="text-brand font-semibold hover:underline inline-flex items-center gap-1">
                  <Building2 className="size-3.5" /> Join as a professional
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
