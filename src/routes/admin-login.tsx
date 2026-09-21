import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AtSign, Lock, Eye, EyeOff, ShieldCheck, Shield } from "lucide-react";
import logoUrl from "@/assets/logo.png";
import { setAuthUser } from "@/lib/auth-store";

export const Route = createFileRoute("/admin-login")({
  head: () => ({
    meta: [
      { title: "Admin Nerve | Aluminium Village" },
      { name: "description", content: "Secure administrator access to the Aluminium Village portal." },
    ],
  }),
  component: AdminLogin,
});

function AdminLogin() {
  const [email, setEmail] = useState("admin@aluminiumvillage.com");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [secure, setSecure] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setAuthUser({ name: "Admin", email: email.trim() });
    navigate({ to: "/admin" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      <main className="flex-1 flex flex-col items-center px-4 sm:px-6 pt-12 pb-16">
        <Link to="/" className="mb-8">
          <img src={logoUrl} alt="Aluminium Village" className="h-14 w-14 object-contain mx-auto" />
        </Link>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-800 tracking-tight">
          Aluminium Village
        </h1>
        <div className="mt-2 text-xs font-bold tracking-[0.25em] text-slate-500">ADMIN NERVE</div>

        <p className="mt-4 text-sm text-muted-foreground text-center max-w-sm">
          Secure administrator access to manage the platform, verify sellers, and oversee transactions.
        </p>

        <div className="mt-10 w-full max-w-md rounded-2xl bg-card border shadow-xl p-8">
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-bold text-slate-700">Administrator Email</label>
              <div className="mt-1.5 relative">
                <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border bg-background pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-700">Access Password</label>
                <Link to="/forgot-password" search={{ mode: "admin" }} className="text-xs font-semibold text-brand hover:underline">
                  Forgot?
                </Link>
              </div>
              <div className="mt-1.5 relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full rounded-lg border bg-background pl-9 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                />
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
              <span
                className={`grid place-items-center size-4 rounded border transition ${
                  secure ? "bg-brand border-brand text-brand-foreground" : "bg-card border-input"
                }`}
              >
                {secure && (
                  <svg viewBox="0 0 12 12" className="size-3 stroke-current" fill="none" strokeWidth="2">
                    <path d="M2.5 6.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={secure}
                onChange={(e) => setSecure(e.target.checked)}
              />
              <span className="font-semibold text-slate-700">Secure Session (30 Days)</span>
            </label>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b50c4] text-white py-3 text-sm font-bold tracking-wider shadow-md hover:bg-[#0a47ad] active:scale-[0.99] transition"
            >
              AUTHORIZE ACCESS
              <ShieldCheck className="size-4" />
            </button>

            <div className="pt-4 border-t flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Shield className="size-3.5" />
              256-bit AES Encrypted Connection
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
