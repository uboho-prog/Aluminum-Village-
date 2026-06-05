import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { img } from "@/lib/images";
import { BadgeCheck, MapPin, Search, Star, Trophy, Users2, ExternalLink, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/directory")({
  head: () => ({
    meta: [
      { title: "Business Directory | Aluminium Village" },
      {
        name: "description",
        content:
          "Connect with Africa's leading aluminium fabricators, suppliers, and installation specialists. All professionals are vetted.",
      },
    ],
  }),
  component: Directory,
});

const pros = [
  {
    img: img.pro1,
    name: "Lagos Extrusion Hub",
    type: "Fabricator",
    rating: 4.9,
    reviews: 128,
    loc: "Lagos, NG",
    tags: ["Precision Extrusions", "Industrial Frames"],
  },
  {
    img: img.pro2,
    name: "Abuja Pro Installers",
    type: "Installers",
    rating: 4.8,
    reviews: 94,
    loc: "Abuja, NG",
    tags: ["Sliding Doors", "Glass Curtain Walls"],
  },
  {
    img: img.pro3,
    name: "Delta Metal Solutions",
    type: "Suppliers",
    rating: 4.7,
    reviews: 215,
    loc: "Asaba, NG",
    tags: ["Raw Ingots", "Custom Alloys"],
  },
];

const featured = [
  {
    img: img.pro4,
    badge: "PLATINUM PARTNER",
    name: "Elite Aluminium Fabrications",
    desc: "Specialize in luxury architectural window systems and commercial facades with over 15 years experience.",
    metric: "5.0",
    metricLabel: "Perfect Score (42 Reviews)",
  },
  {
    img: img.part2,
    badge: "FASTEST COMPLETION",
    name: "Swift Build & Install",
    desc: "Expertise in rapid deployment of commercial partitions and modular aluminium structures for fast-track projects.",
    metric: "4.9",
    metricLabel: "98% Success Rate",
  },
];

const filters = ["All", "Fabricators", "Suppliers", "Installers", "Specialized Services"];

function Directory() {
  const [activeFilter, setActiveFilter] = useState("All");
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Verified Aluminium<br />Professionals
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Connect with Africa's leading fabricators, suppliers, and installation specialists.
            Every professional is vetted for quality and reliability.
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-3 max-w-3xl">
            <div className="flex-1 flex items-center gap-2 rounded-md border bg-card px-4 py-2.5 focus-within:ring-2 focus-within:ring-brand/30">
              <Users2 className="size-4 text-brand" />
              <input
                placeholder="Fabricators, Installers..."
                className="bg-transparent outline-none text-sm flex-1"
              />
            </div>
            <div className="flex-1 flex items-center gap-2 rounded-md border bg-card px-4 py-2.5 focus-within:ring-2 focus-within:ring-brand/30">
              <MapPin className="size-4 text-brand" />
              <input
                placeholder="Location (e.g. Lagos, Abuja)"
                className="bg-transparent outline-none text-sm flex-1"
              />
            </div>
            <button className="inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground px-6 py-2.5 text-sm font-semibold hover:bg-brand/90 active:scale-[0.98] transition">
              <Search className="size-4" /> Search
            </button>
          </div>
        </div>
      </section>

      {/* Filter chips + cards */}
      <section className="border-t bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm border transition ${
                  activeFilter === f
                    ? "bg-brand text-brand-foreground border-brand"
                    : "bg-card hover:bg-secondary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pros.map((p) => (
              <article key={p.name} className="rounded-xl border bg-card p-5 group hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-3">
                  <div className="size-14 rounded-md overflow-hidden bg-secondary shrink-0">
                    <img src={p.img} alt={p.name} className="size-full object-cover" />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-semibold px-2 py-0.5">
                    <BadgeCheck className="size-3" /> Verified
                  </span>
                </div>
                <h3 className="font-semibold mt-4">{p.name}</h3>
                <div className="text-xs text-brand font-medium mt-0.5">{p.type}</div>
                <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="size-3.5 fill-amber-500 text-amber-500" />
                    <span className="text-foreground font-medium">{p.rating}</span> ({p.reviews})
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3.5" /> {p.loc}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] rounded-md border bg-background px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
                <button className="mt-5 w-full rounded-md border border-brand text-brand py-2 text-sm font-semibold hover:bg-brand hover:text-brand-foreground active:scale-[0.99] transition">
                  View Profile
                </button>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="rounded-md border bg-card px-6 py-2.5 text-sm font-medium hover:bg-secondary active:scale-[0.99] transition">
              Load More Professionals
            </button>
          </div>
        </div>
      </section>

      {/* Top-rated */}
      <section className="bg-secondary/40 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Top-Rated Fabricators of the Month</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Exceptional performance and customer satisfaction based on recent project data.
              </p>
            </div>
            <button className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline">
              View All <ArrowRight className="size-4" />
            </button>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {featured.map((f) => (
              <div key={f.badge} className="rounded-xl border bg-card overflow-hidden md:flex">
                <div className="md:w-44 aspect-video md:aspect-auto shrink-0">
                  <img src={f.img} alt={f.name} className="size-full object-cover" />
                </div>
                <div className="p-5 flex-1">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-accent">
                    <Trophy className="size-3.5" /> {f.badge}
                  </span>
                  <h3 className="font-semibold mt-1.5">{f.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-xs flex items-center gap-1">
                      <Star className="size-3.5 fill-amber-500 text-amber-500" />
                      <span className="font-semibold">{f.metric}</span>
                      <span className="text-muted-foreground">{f.metricLabel}</span>
                    </div>
                    <button className="text-sm font-medium text-brand hover:underline inline-flex items-center gap-1">
                      Connect <ArrowRight className="size-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Are you a professional CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Are you a professional?</h2>
            <p className="mt-3 text-primary-foreground/80 max-w-md">
              Join Africa's most trusted aluminium professional network. Get verified, showcase your
              projects, and grow your business with high-quality leads.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/join"
                className="inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground px-5 py-2.5 text-sm font-semibold hover:bg-brand/90 active:scale-[0.98] transition"
              >
                Register Your Business <ExternalLink className="size-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center rounded-md bg-white/10 hover:bg-white/20 px-5 py-2.5 text-sm font-semibold backdrop-blur transition"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl bg-white/10 backdrop-blur border border-white/20 p-5">
              <div className="flex items-center gap-3">
                <div className="grid place-items-center size-10 rounded-full bg-white/20">
                  <Users2 className="size-5" />
                </div>
                <div>
                  <div className="font-semibold">Join 500+</div>
                  <div className="text-[10px] uppercase tracking-wider text-primary-foreground/70">
                    Active Members
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="h-2 rounded-full bg-white/15" />
                <div className="h-2 rounded-full bg-white/15 w-4/5" />
                <div className="h-2 rounded-full bg-white/15 w-3/5" />
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs">
                <BadgeCheck className="size-4" />
                Premium Directory Badge Included
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
