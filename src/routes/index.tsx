import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { img } from "@/lib/images";
import {
  ShieldCheck,
  BadgeCheck,
  Wrench,
  Search,
  PlayCircle,
  CheckCircle2,
  Factory,
  HardHat,
  Building2,
  ArrowRight,
  ShoppingCart,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aluminium Village | Nigeria's Verified Aluminium Marketplace" },
      {
        name: "description",
        content:
          "Nigeria's first verified platform for aluminium products and installations. Source certified extrusions, sheets and coils, or hire top-rated fabricators and installers.",
      },
    ],
  }),
  component: Home,
});

type Product = {
  tag: string;
  title: string;
  price: string;
  img: string;
};

const products: Product[] = [
  { tag: "Standard Grade", title: "Aluminium Partitions", price: "₦45,000 / unit", img: img.part1 },
  { tag: "Heavy Duty", title: "Aluminium Partitions", price: "₦120,000 / set", img: img.part2 },
  { tag: "T-Slot Profile", title: "Aluminium Partitions", price: "₦12,500 / m", img: img.part3 },
  { tag: "Architectural", title: "Aluminium Partitions", price: "₦85,000 / bay", img: img.prod3 },
  { tag: "Office Series", title: "Aluminium Partitions", price: "₦65,000 / m²", img: img.prod1 },
];

const pros = [
  {
    icon: Factory,
    name: "Lagos Extrusion Hub",
    description:
      "Connect with thousands of verified aluminium professionals across Nigeria. From expert fabricators to bulk suppliers.",
    rating: "4.9",
    reviews: 120,
    location: "Lagos, Ikeja",
    type: "Verified Supplier",
    category: "Supplier",
  },
  {
    icon: HardHat,
    name: "Abuja Pro Installers",
    description:
      "Connect with thousands of verified aluminium professionals across Nigeria. From expert fabricators to bulk suppliers.",
    rating: "4.7",
    reviews: 88,
    location: "Abuja, Garki",
    type: "Certified Installer",
    category: "Installer",
  },
  {
    icon: Building2,
    name: "Port Harcourt Fabricators",
    description:
      "Connect with thousands of verified aluminium professionals across Nigeria. From expert fabricators to bulk suppliers.",
    rating: "4.8",
    reviews: 64,
    location: "Port Harcourt, GRA",
    type: "Verified Fabricator",
    category: "Fabricator",
  },
];

const filters = ["All", "Fabricator", "Supplier", "Installer"];

function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<Record<string, boolean>>({});
  const [form, setForm] = useState({ name: "", email: "", requirement: "Bulk Material Purchase" });
  const [submitted, setSubmitted] = useState(false);

  const visiblePros = pros.filter((p) => {
    const matchesFilter = activeFilter === "All" || p.category === activeFilter;
    const q = search.trim().toLowerCase();
    const matchesQuery =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q) ||
      p.type.toLowerCase().includes(q);
    return matchesFilter && matchesQuery;
  });

  return (
    <SiteLayout>
      {/* HERO with overlay */}
      <section className="relative">
        <div className="relative h-[460px] md:h-[560px] w-full overflow-hidden">
          <img
            src={img.hero}
            alt="Aluminium extrusion warehouse"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/50 to-transparent" />
          <div className="relative mx-auto max-w-7xl h-full px-4 sm:px-6 flex items-center">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/30 text-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                Nigeria's No. 1 Verified Network
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
                Nigeria's first verified platform for{" "}
                <span className="text-brand">Aluminium products</span> and installations
              </h1>
              <p className="mt-4 text-base text-muted-foreground max-w-md">
                Source certified extrusions, sheets, and coils, or get connected to top-rated local
                fabricators and installers.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/marketplace"
                  className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:opacity-90 transition-opacity"
                >
                  Browse Equipment <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/directory"
                  className="inline-flex items-center gap-2 rounded-md border bg-card/90 backdrop-blur px-5 py-3 text-sm font-semibold hover:bg-card"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fabrication Excellence + trust bar */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="rounded-2xl border bg-card p-6 md:p-10 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary group">
            <img src={img.aboutA} alt="Fabrication process" className="size-full object-cover" />
            <button
              aria-label="Play fabrication video"
              className="absolute inset-0 grid place-items-center bg-black/40 group-hover:bg-black/30 transition-colors text-white"
            >
              <PlayCircle className="size-16 drop-shadow-lg" />
            </button>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Fabrication Excellence</h2>
            <p className="mt-3 text-muted-foreground">
              Our state-of-the-art facilities leverage precision engineering to transform raw
              aluminium extrusions into architectural masterpieces. Every cut, weld, and finish is
              executed with surgical accuracy to ensure structural integrity and aesthetic appeal.
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "ISO-Certified Quality Management",
                "Advanced CNC Machining & Routing",
                "Premium Anodized and Powder-Coated Finishes",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="size-5 text-accent shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: ShieldCheck, label: "Escrow-Protected Payments" },
            { icon: BadgeCheck, label: "100% Money-Back Guarantee" },
            { icon: Factory, label: "Verified Nigerian Sellers" },
            { icon: Wrench, label: "Certified Installers" },
          ].map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground"
            >
              <f.icon className="size-4 text-accent shrink-0" />
              <span>{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Equipment Marketplace */}
      <section className="bg-secondary/50 border-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
          <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Equipment Marketplace</h2>
              <p className="text-sm text-muted-foreground mt-1">
                A comprehensive range of aluminium solutions: Doors, Windows, Railings, Partitions,
                and Accessories.
              </p>
            </div>
            <Link
              to="/marketplace"
              className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
            >
              View all products <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((p) => {
              const inCart = !!cart[p.title + p.tag];
              return (
                <article
                  key={p.title + p.tag}
                  className="group rounded-xl border bg-card overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square overflow-hidden bg-secondary">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 flex-1 flex flex-col">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                      {p.tag}
                    </div>
                    <div className="mt-1 text-sm font-semibold">{p.title}</div>
                    <div className="mt-1 text-sm font-bold text-brand">{p.price}</div>
                    <button
                      onClick={() =>
                        setCart((c) => ({ ...c, [p.title + p.tag]: !c[p.title + p.tag] }))
                      }
                      className={`mt-3 inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-2 text-xs font-semibold transition-colors ${
                        inCart
                          ? "bg-accent text-accent-foreground"
                          : "bg-secondary hover:bg-primary hover:text-primary-foreground"
                      }`}
                    >
                      {inCart ? (
                        <>
                          <Check className="size-3.5" /> Added
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="size-3.5" /> Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Directory */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">Business Directory</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Connect with thousands of verified aluminium professionals across Nigeria. From expert
            fabricators to bulk suppliers.
          </p>
        </div>

        <div className="mt-7 flex flex-col md:flex-row items-stretch gap-3">
          <div className="flex-1 flex items-center gap-2 rounded-full border bg-card px-4 py-2.5 focus-within:ring-2 focus-within:ring-brand/30">
            <Search className="size-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for fabricators, locations, or specialities..."
              className="bg-transparent outline-none flex-1 text-sm"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {filters.map((f) => {
              const active = activeFilter === f;
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium border whitespace-nowrap transition-colors ${
                    active
                      ? "bg-brand text-brand-foreground border-brand"
                      : "bg-card hover:bg-secondary"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {visiblePros.length === 0 ? (
            <div className="text-center py-12 text-sm text-muted-foreground">
              No professionals match your search.
            </div>
          ) : (
            visiblePros.map((p) => (
              <article
                key={p.name}
                className="rounded-2xl border bg-card p-5 flex flex-col sm:flex-row gap-4 sm:items-center hover:shadow-md transition-shadow"
              >
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-secondary text-foreground shrink-0">
                  <p.icon className="size-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold truncate">{p.name}</h3>
                    <BadgeCheck className="size-4 text-accent shrink-0" />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px]">
                    <span className="text-amber-600 font-semibold">
                      ★ {p.rating} ({p.reviews} reviews)
                    </span>
                    <span className="rounded-full bg-secondary px-2 py-0.5">{p.location}</span>
                    <span className="rounded-full bg-accent/10 text-accent px-2 py-0.5 font-medium">
                      {p.type}
                    </span>
                  </div>
                </div>
                <Link
                  to="/directory"
                  className="self-start sm:self-center inline-flex items-center justify-center rounded-md bg-brand px-5 py-2 text-sm font-semibold text-brand-foreground hover:opacity-90"
                >
                  View Profile
                </Link>
              </article>
            ))
          )}
        </div>
      </section>

      {/* Start your project CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">
        <div className="rounded-2xl overflow-hidden border grid lg:grid-cols-2">
          <div className="bg-primary text-primary-foreground p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold">Start your project today</h2>
            <p className="mt-3 text-sm text-primary-foreground/80 max-w-md">
              Whether you need bulk materials or a full installation team, our experts are ready to
              assist you in Nigeria's most reliable aluminium ecosystem.
            </p>
            <div className="mt-6 space-y-3">
              {[
                ["Expert Consultation", "Free guidance on material selection"],
                ["Nationwide Delivery", "Logistics handled by verified partners"],
              ].map(([t, d]) => (
                <div key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold">{t}</div>
                    <div className="text-xs text-primary-foreground/70">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="bg-card p-8 md:p-10 space-y-4"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="grid place-items-center size-12 rounded-full bg-accent/15 text-accent">
                  <CheckCircle2 className="size-6" />
                </div>
                <div className="mt-3 font-semibold">Request received</div>
                <p className="text-sm text-muted-foreground mt-1 max-w-xs">
                  Thanks {form.name || "there"} — a Village specialist will email you within 24
                  hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", requirement: "Bulk Material Purchase" });
                  }}
                  className="mt-4 text-xs text-brand hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Your Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand/30"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand/30"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Requirement
                  </label>
                  <select
                    value={form.requirement}
                    onChange={(e) => setForm({ ...form, requirement: e.target.value })}
                    className="mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand/30"
                  >
                    <option>Bulk Material Purchase</option>
                    <option>Installation Service</option>
                    <option>Custom Fabrication</option>
                    <option>Consultation</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-brand text-brand-foreground py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Submit Request
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
