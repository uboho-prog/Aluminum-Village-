import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { img } from "@/lib/images";
import {
  ShieldCheck,
  BadgeCheck,
  Truck,
  Wrench,
  Search,
  Star,
  MapPin,
  ArrowRight,
  CheckCircle2,
  PlayCircle,
  Factory,
  HardHat,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aluminium Village | Premium Industrial Marketplace" },
      {
        name: "description",
        content:
          "Nigeria's first verified platform for aluminium products and installations. Source certified extrusions or hire top-rated fabricators.",
      },
    ],
  }),
  component: Home,
});

const products = [
  { tag: "Standard Grade", title: "Aluminium Partitions", price: "₦45,000 / unit", img: img.part1 },
  { tag: "Heavy Duty", title: "Industrial Frames", price: "₦120,000 / set", img: img.part2 },
  { tag: "T-Slot Profile", title: "6061-T6 Extrusion", price: "₦12,500 / m", img: img.part3 },
  { tag: "Architectural", title: "Curtain Wall System", price: "₦85,000 / bay", img: img.prod3 },
];

const pros = [
  {
    icon: Factory,
    name: "Lagos Extrusion Hub",
    location: "Lagos, Ikeja",
    type: "Verified Supplier",
    rating: "4.9",
    reviews: 120,
  },
  {
    icon: HardHat,
    name: "Abuja Pro Installers",
    location: "Abuja, Garki",
    type: "Certified Installer",
    rating: "4.7",
    reviews: 85,
  },
];

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary via-background to-background" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <BadgeCheck className="size-3.5 text-accent" />
              Nigeria's No. 1 Certified Network
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Nigeria's first verified platform for{" "}
              <span className="text-brand">Aluminium products</span> and installations.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Source certified extrusions, sheets, and coils, or get connected to top-rated local
              fabricators and installers.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/marketplace"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:opacity-90"
              >
                Browse Equipment <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/directory"
                className="inline-flex items-center gap-2 rounded-md border bg-card px-5 py-3 text-sm font-semibold hover:bg-secondary"
              >
                Explore Directory
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: ShieldCheck, label: "Escrow Payments" },
                { icon: BadgeCheck, label: "100% Guarantee" },
                { icon: Factory, label: "Verified Sellers" },
                { icon: Wrench, label: "Certified Installers" },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <f.icon className="size-4 text-accent" />
                  {f.label}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border bg-card shadow-2xl">
              <img src={img.hero} alt="Premium aluminium fabrication" className="size-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-xl border bg-card p-4 shadow-xl">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                <BadgeCheck />
              </div>
              <div>
                <div className="text-sm font-semibold">500+ Verified Pros</div>
                <div className="text-xs text-muted-foreground">Across 36 states</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fabrication excellence */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border">
          <img src={img.aboutA} alt="Fabrication" className="size-full object-cover" />
          <button className="absolute inset-0 grid place-items-center bg-black/30 text-white hover:bg-black/40 transition">
            <PlayCircle className="size-16" />
          </button>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Fabrication Excellence
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            Precision engineering for architectural masterpieces
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our state-of-the-art facilities transform raw aluminium extrusions into structural and
            aesthetic perfection. Every cut, weld, and finish is executed with surgical accuracy.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "ISO-Certified Quality Management",
              "Advanced CNC Machining & Routing",
              "Premium Anodized and Powder-Coated Finishes",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="size-5 text-accent shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Marketplace preview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Equipment Marketplace</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              A comprehensive range of aluminium solutions: doors, windows, railings, partitions
              and accessories.
            </p>
          </div>
          <Link
            to="/marketplace"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
          >
            View all products <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <div
              key={p.title}
              className="group rounded-xl border bg-card overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.title}
                  className="size-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <div className="text-[10px] uppercase tracking-wider text-accent font-semibold">
                  {p.tag}
                </div>
                <div className="mt-1 font-semibold">{p.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{p.price}</div>
                <button className="mt-3 w-full rounded-md bg-primary text-primary-foreground py-2 text-sm font-medium hover:opacity-90">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Directory preview */}
      <section className="bg-secondary/40 border-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">Business Directory</h2>
            <p className="text-muted-foreground mt-2">
              Connect with thousands of verified aluminium professionals across Nigeria.
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center gap-2 rounded-md border bg-card px-4 py-2.5">
              <Search className="size-4 text-muted-foreground" />
              <input
                placeholder="Search by name, service or location..."
                className="bg-transparent outline-none flex-1 text-sm"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {["All", "Fabricators", "Suppliers", "Installers"].map((f, i) => (
                <button
                  key={f}
                  className={`px-4 py-2 rounded-md text-sm border whitespace-nowrap ${
                    i === 0 ? "bg-primary text-primary-foreground" : "bg-card hover:bg-secondary"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {pros.map((p) => (
              <div key={p.name} className="rounded-xl border bg-card p-5 flex gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-lg bg-brand/10 text-brand shrink-0">
                  <p.icon />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">{p.name}</div>
                    <BadgeCheck className="size-4 text-accent" />
                  </div>
                  <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="size-3.5 fill-amber-500 text-amber-500" /> {p.rating} (
                      {p.reviews})
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3.5" /> {p.location}
                    </span>
                  </div>
                  <div className="mt-3 text-xs inline-block rounded-full bg-secondary px-2.5 py-1">
                    {p.type}
                  </div>
                </div>
                <Link
                  to="/directory"
                  className="self-start text-sm font-medium text-brand hover:underline"
                >
                  View →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="rounded-2xl border bg-primary text-primary-foreground p-8 md:p-14 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Start your project today</h2>
            <p className="mt-3 text-primary-foreground/80 max-w-xl">
              Whether you need bulk materials or a full installation team, our experts are ready
              to assist you in Nigeria's most reliable aluminium ecosystem.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                ["Expert Consultation", "Free guidance on material selection"],
                ["Nationwide Delivery", "Logistics handled by verified partners"],
              ].map(([t, d]) => (
                <div key={t} className="rounded-lg bg-white/5 border border-white/10 p-4">
                  <div className="font-semibold text-sm">{t}</div>
                  <div className="text-xs text-primary-foreground/70 mt-1">{d}</div>
                </div>
              ))}
            </div>
          </div>
          <form className="rounded-xl bg-background text-foreground p-6 space-y-3">
            <div className="text-sm font-semibold mb-2">Request a callback</div>
            <input className="w-full rounded-md border bg-card px-3 py-2.5 text-sm" placeholder="Your name" />
            <input className="w-full rounded-md border bg-card px-3 py-2.5 text-sm" placeholder="Email address" />
            <select className="w-full rounded-md border bg-card px-3 py-2.5 text-sm">
              <option>Bulk Material Purchase</option>
              <option>Installation Service</option>
              <option>Custom Fabrication</option>
            </select>
            <button className="w-full rounded-md bg-accent text-accent-foreground py-2.5 text-sm font-semibold inline-flex items-center justify-center gap-2">
              <Truck className="size-4" /> Submit Request
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
