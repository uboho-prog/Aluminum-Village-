import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import {
  ChevronRight,
  Check,
  Truck,
  Package,
  Radio,
  BadgeCheck,
  ClipboardList,
  Download,
  MessageSquare,
  ExternalLink,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/tracking")({
  head: () => ({
    meta: [
      { title: "Order #ALV-9821 Tracking | Aluminium Village" },
      {
        name: "description",
        content:
          "Live tracking for premium grade industrial shipments. View transit progress, driver and cargo manifest.",
      },
    ],
  }),
  component: Tracking,
});

const steps = [
  { key: "confirmed", label: "Order Confirmed", icon: Check },
  { key: "prep", label: "Material Preparation", icon: Package },
  { key: "qc", label: "Quality Inspection", icon: BadgeCheck },
  { key: "transit", label: "In Transit", icon: Truck },
  { key: "delivered", label: "Delivered", icon: ClipboardList },
];

function Tracking() {
  const currentStep = 3; // In Transit
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setPulse((p) => (p + 1) % 100), 50);
    return () => clearInterval(id);
  }, []);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Orders</Link>
          <ChevronRight className="size-3.5" />
          <span className="text-foreground font-medium">Tracking #ALV-9821</span>
        </nav>

        <div className="mt-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Order #ALV-9821 Tracking
          </h1>
          <p className="mt-1.5 text-muted-foreground">
            Premium Grade Industrial Shipment in Transit
          </p>
        </div>

        <div className="mt-8 grid lg:grid-cols-[1fr_360px] gap-6">
          {/* Left column */}
          <div className="space-y-6">
            {/* Step tracker */}
            <div className="rounded-2xl border bg-card p-6 sm:p-8 shadow-sm">
              <div className="relative">
                {/* Progress bar background */}
                <div className="absolute left-6 right-6 top-6 h-0.5 bg-border" />
                {/* Active progress */}
                <div
                  className="absolute left-6 top-6 h-0.5 bg-brand transition-all"
                  style={{
                    width: `calc((100% - 3rem) * ${currentStep / (steps.length - 1)})`,
                  }}
                />
                <ol className="relative grid grid-cols-5 gap-2">
                  {steps.map((s, i) => {
                    const Icon = s.icon;
                    const done = i < currentStep;
                    const active = i === currentStep;
                    return (
                      <li key={s.key} className="flex flex-col items-center text-center">
                        <span
                          className={`grid place-items-center size-12 rounded-full border-2 transition ${
                            done
                              ? "bg-brand border-brand text-brand-foreground"
                              : active
                                ? "bg-brand border-brand text-brand-foreground shadow-lg shadow-brand/40 ring-4 ring-brand/20 animate-pulse"
                                : "bg-card border-border text-muted-foreground"
                          }`}
                        >
                          {done ? <Check className="size-5" /> : <Icon className="size-5" />}
                        </span>
                        <span
                          className={`mt-2.5 text-xs sm:text-sm font-medium leading-tight ${
                            active ? "text-brand font-semibold" : done ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {s.label}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>

            {/* Live status banner */}
            <div className="relative overflow-hidden rounded-2xl bg-brand text-brand-foreground p-6 sm:p-7 shadow-lg shadow-brand/20">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_white,_transparent_60%)]" />
              <div className="relative flex items-start gap-4">
                <div className="grid place-items-center size-12 rounded-xl bg-white/15 backdrop-blur shrink-0">
                  <Radio className="size-6" />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-semibold">Live Status</div>
                  <p className="mt-1 text-sm text-brand-foreground/90 max-w-md">
                    Your shipment is currently in transit near Lagos Central Hub.
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <div className="rounded-lg bg-white/15 backdrop-blur px-4 py-2.5">
                      <div className="text-[10px] uppercase tracking-wider opacity-80 font-semibold">
                        Estimated Delivery
                      </div>
                      <div className="text-base font-bold">Oct 28, 2026</div>
                    </div>
                    <button className="inline-flex items-center gap-2 rounded-lg bg-primary/40 hover:bg-primary/60 backdrop-blur px-4 py-2.5 text-sm font-semibold transition active:scale-[0.98]">
                      <BadgeCheck className="size-4" /> Verified Route
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative overflow-hidden rounded-2xl border bg-secondary aspect-[16/9] shadow-sm">
              {/* Stylized grid map */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900" />
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.15) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                  transform: "perspective(800px) rotateX(45deg) scale(1.4)",
                  transformOrigin: "center 70%",
                }}
              />

              {/* Route line */}
              <svg
                className="absolute inset-0 size-full"
                viewBox="0 0 800 450"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="routeGrad" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="hsl(var(--brand) / 0.1)" />
                    <stop offset="60%" stopColor="hsl(var(--brand))" />
                    <stop offset="100%" stopColor="white" />
                  </linearGradient>
                </defs>
                <path
                  d="M 60 380 Q 280 320, 420 240 T 740 80"
                  fill="none"
                  stroke="url(#routeGrad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="6 8"
                  strokeDashoffset={-pulse}
                />
                <path
                  d="M 60 380 Q 280 320, 420 240 T 740 80"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                {/* Destination pin */}
                <g transform="translate(740 80)">
                  <circle r="14" fill="white" opacity=".25">
                    <animate attributeName="r" values="10;22;10" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values=".4;0;.4" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle r="6" fill="white" />
                  <circle r="3" fill="hsl(var(--brand))" />
                </g>
              </svg>

              {/* Status overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm rounded-xl bg-card/90 backdrop-blur border shadow-md px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="relative grid place-items-center size-3">
                    <span className="absolute inset-0 rounded-full bg-brand/40 animate-ping" />
                    <span className="relative size-2 rounded-full bg-brand" />
                  </span>
                  <div className="text-sm font-semibold">
                    Currently: Lagos–Ibadan Expressway
                  </div>
                </div>
                <div className="mt-1 text-xs text-muted-foreground pl-5">
                  Last ping: 2 minutes ago via Satellite Link
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <aside className="space-y-6">
            {/* Logistics partner */}
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-semibold text-brand">
                <Truck className="size-4" />
                Logistics Partner
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-xl border bg-secondary/40 p-3">
                <div className="grid place-items-center size-11 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  HL
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm leading-tight">Haulsworth Logistics</div>
                  <div className="text-xs text-muted-foreground">Heavy Cargo Specialist</div>
                </div>
              </div>

              <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Dedicated Driver
              </div>
              <div className="mt-3 flex items-center gap-3">
                <div className="size-11 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 grid place-items-center text-white font-bold text-sm shrink-0">
                  SO
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold leading-tight">Samuel O.</div>
                  <div className="inline-flex items-center gap-1 text-[11px] text-brand">
                    <BadgeCheck className="size-3" /> Verified Specialist
                  </div>
                </div>
                <button className="inline-flex items-center gap-1.5 rounded-md bg-brand text-brand-foreground px-3 py-2 text-xs font-semibold hover:opacity-90 active:scale-[0.98] transition">
                  <Phone className="size-3.5" /> Contact
                </button>
              </div>
            </div>

            {/* Cargo Manifest */}
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-semibold text-brand">
                <ClipboardList className="size-4" />
                Cargo Manifest
              </div>

              <ul className="mt-4 space-y-3">
                <li className="flex items-start justify-between gap-3 pb-3 border-b">
                  <div className="min-w-0">
                    <div className="text-sm font-semibold">Extruded 6061-T6 Aluminium Pipe</div>
                    <div className="text-xs text-muted-foreground">
                      Size: 4.5" Diameter · Length: 12ft
                    </div>
                  </div>
                  <span className="shrink-0 rounded-md bg-brand/10 text-brand text-[11px] font-bold px-2 py-1">
                    25 units
                  </span>
                </li>
                <li className="flex items-start justify-between gap-3 pb-3 border-b">
                  <div className="min-w-0">
                    <div className="text-sm font-semibold">Brushed Finish Panels</div>
                    <div className="text-xs text-muted-foreground">5052-H32 · 4ft x 8ft</div>
                  </div>
                  <span className="shrink-0 rounded-md bg-brand/10 text-brand text-[11px] font-bold px-2 py-1">
                    10 panels
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Total Weight</span>
                  <span className="text-lg font-bold tabular-nums">1,240 kg</span>
                </li>
              </ul>

              <div className="mt-5 space-y-2.5">
                <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg border bg-card hover:bg-secondary px-4 py-2.5 text-sm font-semibold active:scale-[0.99] transition">
                  <Download className="size-4" /> Download Waybill
                </button>
                <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-brand text-brand-foreground hover:opacity-90 px-4 py-2.5 text-sm font-semibold active:scale-[0.99] transition">
                  <MessageSquare className="size-4" /> Share Your Experience
                </button>
              </div>
            </div>

            {/* Support ticket */}
            <div className="rounded-2xl border-2 border-dashed bg-card/50 p-5 text-center">
              <p className="text-sm text-muted-foreground">
                Facing issues with your delivery or noticed a discrepancy?
              </p>
              <Link
                to="/contact"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
              >
                Open Support Ticket <ExternalLink className="size-3.5" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
