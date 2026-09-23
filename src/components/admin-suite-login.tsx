import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  AtSign,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  Shield,
  ArrowLeft,
  FlaskConical,
} from "lucide-react";
import logoUrl from "@/assets/logo.png";
import { setAuthUser, ADMIN_ROLE_LABEL, type AdminRole } from "@/lib/auth-store";
import { SUITE_META } from "@/lib/admin-access";
import { verifyAdminAccess } from "@/lib/api/admin-access.server";

/** Shared sign-in screen for one admin suite. The role is fixed per route:
 * /admin/login/business, /admin/login/individual, /admin/login/overall. */
export function AdminSuiteLogin({ role }: { role: AdminRole }) {
  const navigate = useNavigate();
  const meta = SUITE_META[role];
  const Icon = meta.icon;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  /** Demo phase: prefill the form with this suite's public demo credentials. */
  const fillDemo = () => {
    setEmail(meta.demoEmail);
    setPassword(meta.demoPassword);
    setError(null);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Enter your email and password.");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      // Validation happens entirely on the server: suite email domain and
      // the access password never reach the client bundle.
      const result = await verifyAdminAccess({
        data: { role, email: email.trim(), password },
      });
      if (!result.ok) {
        setError(result.error);
        return;
      }
      setAuthUser({ name: result.displayName, email: email.trim(), role });
      navigate({ to: "/admin" });
    } catch {
      setError("Could not verify access. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const otherSuites = (Object.keys(SUITE_META) as AdminRole[]).filter((r) => r !== role);

  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a] text-white">
      <main className="flex-1 flex flex-col items-center px-4 sm:px-6 pt-12 pb-16">
        <Link to="/" className="mb-8">
          <img src={logoUrl} alt="Aluminium Village" className="h-14 w-14 object-contain mx-auto" />
        </Link>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight text-center">
          Aluminium Village
        </h1>
        <div className="mt-2 text-xs font-bold tracking-[0.25em] text-slate-400">ADMIN NERVE</div>

        {/* Suite identity card */}
        <div className="mt-8 w-full max-w-md rounded-2xl border border-slate-700/60 bg-[#1e293b] p-5">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center size-11 rounded-xl bg-brand/15 text-brand shrink-0">
              <Icon className="size-6" />
            </span>
            <div>
              <div className="text-sm font-bold text-white">{ADMIN_ROLE_LABEL[role]}</div>
              <div className="text-xs text-slate-400">{meta.blurb}</div>
            </div>
          </div>
        </div>

        {/* Login card */}
        <div className="mt-4 w-full max-w-md rounded-2xl bg-[#1e293b] border border-slate-700/60 shadow-xl p-8">
          {/* Demo credentials (public on purpose until real auth ships) */}
          <div className="mb-5 rounded-lg border border-sky-500/25 bg-sky-500/10 px-3 py-2.5">
            <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-sky-400">
              <FlaskConical className="size-3.5" /> DEMO ACCESS
            </div>
            <div className="mt-1 text-xs text-slate-300">
              Email <code className="text-sky-300">{meta.demoEmail}</code> · Password{" "}
              <code className="text-sky-300">{meta.demoPassword}</code>
            </div>
            <button
              type="button"
              onClick={fillDemo}
              className="mt-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 hover:underline"
            >
              Fill demo credentials
            </button>
          </div>
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-bold text-slate-300">
                {role === "overall" ? "Administrator Email" : `${ADMIN_ROLE_LABEL[role]} Email`}
              </label>
              <div className="mt-1.5 relative">
                <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={meta.emailPlaceholder}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 pl-9 pr-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-300">Access Password</label>
                <Link
                  to="/forgot-password"
                  search={{ mode: "admin" }}
                  className="text-xs font-semibold text-sky-400 hover:underline"
                >
                  Forgot?
                </Link>
              </div>
              <div className="mt-1.5 relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
                <input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 pl-9 pr-10 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand"
                />
                <button
                  type="button"
                  onClick={() => setShow((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
              <span
                className={`grid place-items-center size-4 rounded border transition ${
                  remember ? "bg-brand border-brand text-white" : "border-slate-600 bg-slate-800"
                }`}
              >
                {remember && (
                  <svg
                    viewBox="0 0 12 12"
                    className="size-3 stroke-current"
                    fill="none"
                    strokeWidth="2"
                  >
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
              <span className="font-semibold text-slate-300">Secure Session (30 Days)</span>
            </label>

            {error && (
              <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-400">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b50c4] text-white py-3 text-sm font-bold tracking-wider shadow-md hover:bg-[#0a47ad] active:scale-[0.99] transition disabled:opacity-60 disabled:cursor-wait"
            >
              {submitting ? "VERIFYING…" : "AUTHORIZE ACCESS"}
              <ShieldCheck className="size-4" />
            </button>

            <div className="pt-4 border-t border-slate-700/60 flex items-center justify-center gap-2 text-xs text-slate-500">
              <Shield className="size-3.5" />
              256-bit AES Encrypted Connection
            </div>
          </form>
        </div>

        {/* Cross-links to the other suites */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-500">
          <span>Not your suite?</span>
          {otherSuites.map((r) => (
            <Link
              key={r}
              to={SUITE_META[r].path}
              className="font-semibold text-slate-400 hover:text-white transition-colors"
            >
              {ADMIN_ROLE_LABEL[r]}
            </Link>
          ))}
        </div>

        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to site
        </Link>
      </main>
    </div>
  );
}
