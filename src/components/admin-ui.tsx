import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";

/** Shared dark-theme building blocks for the /admin suites. These match the
 * hand-rolled slate styling used across the admin pages (bg-[#1e293b], brand
 * #0b50c4) so every suite looks like one product, independent of the public
 * site's light/dark theme token system. */

export const BRAND = "#0b50c4";

type Tone = "emerald" | "amber" | "sky" | "rose" | "slate" | "violet";

const TONE_CLASS: Record<Tone, string> = {
  emerald: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  amber: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  sky: "bg-sky-500/15 text-sky-400 border-sky-500/20",
  rose: "bg-rose-500/15 text-rose-400 border-rose-500/20",
  slate: "bg-slate-500/15 text-slate-300 border-slate-500/20",
  violet: "bg-violet-500/15 text-violet-400 border-violet-500/20",
};

function toneForStatus(status: string): Tone {
  const s = status.toLowerCase();
  if (["active", "approved", "completed", "released", "paid", "delivered", "available", "success"].some((k) => s.includes(k)))
    return "emerald";
  if (["reject", "refund", "cancel", "fail", "dispute", "offline"].some((k) => s.includes(k)))
    return "rose";
  if (["pending", "escrow", "review", "processing", "busy", "new", "quoted", "initiated"].some((k) => s.includes(k)))
    return "amber";
  if (["confirm", "shipped", "progress", "discussion"].some((k) => s.includes(k))) return "sky";
  return "slate";
}

export function StatusPill({ status, tone }: { status: string; tone?: Tone }) {
  const cls = TONE_CLASS[tone ?? toneForStatus(status)];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${cls}`}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

export function AdminCard({
  title,
  subtitle,
  actions,
  children,
  className = "",
}: {
  title?: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6 ${className}`}>
      {(title || actions) && (
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            {title && <h2 className="text-lg font-bold text-white">{title}</h2>}
            {subtitle && <p className="mt-0.5 text-sm text-slate-400">{subtitle}</p>}
          </div>
          {actions}
        </div>
      )}
      {children}
    </div>
  );
}

export function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  tone = "sky",
}: {
  label: string;
  value: ReactNode;
  hint?: ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  tone?: Tone;
}) {
  return (
    <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5">
      <div className="flex items-start justify-between">
        <div className="text-[11px] font-bold tracking-wider text-slate-400">{label}</div>
        {Icon && (
          <span className={`grid place-items-center size-7 rounded-lg ${TONE_CLASS[tone]}`}>
            <Icon className="size-4" />
          </span>
        )}
      </div>
      <div className="mt-2 text-2xl font-extrabold tracking-tight text-white">{value}</div>
      {hint && <div className="mt-2 text-xs text-slate-400">{hint}</div>}
    </div>
  );
}

export function PageHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        {description && <p className="mt-1 text-sm text-slate-400">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  );
}

export function PrimaryButton({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b50c4] px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#0b50c4]/25 hover:bg-[#0a47ad] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}

export function GhostButton({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-700 active:scale-[0.98] transition-all ${className}`}
    >
      {children}
    </button>
  );
}

export function FieldLabel({ children }: { children: ReactNode }) {
  return <label className="block text-xs font-semibold text-slate-300 mb-1.5">{children}</label>;
}

const CONTROL =
  "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4] transition";

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${CONTROL} ${props.className ?? ""}`} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${CONTROL} ${props.className ?? ""}`} />;
}

export function SelectInput(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} className={`${CONTROL} appearance-none ${props.className ?? ""}`}>
      {props.children}
    </select>
  );
}

export function EmptyState({
  icon: Icon,
  title,
  hint,
  action,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  hint?: string;
  action?: ReactNode;
}) {
  return (
    <div className="grid place-items-center rounded-xl border border-dashed border-slate-700 bg-slate-800/30 px-6 py-14 text-center">
      <span className="grid place-items-center size-12 rounded-full bg-slate-800 text-slate-400">
        <Icon className="size-6" />
      </span>
      <div className="mt-4 text-sm font-semibold text-white">{title}</div>
      {hint && <div className="mt-1 max-w-sm text-xs text-slate-400">{hint}</div>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export function AdminModal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  wide,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  wide?: boolean;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        className={`relative my-8 w-full ${wide ? "max-w-3xl" : "max-w-xl"} rounded-2xl border border-slate-700 bg-[#1e293b] shadow-2xl`}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-700/60 px-6 py-4">
          <div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            {description && <p className="mt-0.5 text-sm text-slate-400">{description}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-700 hover:text-white"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="px-6 py-5">{children}</div>
        {footer && (
          <div className="flex items-center justify-end gap-2 border-t border-slate-700/60 px-6 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

/** Shared dark table shell. Children are <thead>/<tbody>. */
export function AdminTable({ head, children }: { head: ReactNode; children: ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-slate-400 border-b border-slate-700/50">{head}</tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
