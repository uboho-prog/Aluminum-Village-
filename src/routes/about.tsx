import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { img } from "@/lib/images";
import {
  Shield,
  Eye,
  Users,
  Trophy,
  Zap,
  Handshake,
  Lock,
  Percent,
  Check,
  Headphones,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Aluminium Village - Industrial Excellence" },
      {
        name: "description",
        content:
          "We digitize the legacy of the Lagos Aluminium Village so quality fabricators and clients can meet safely, with escrow protection.",
      },
    ],
  }),
  component: About,
});

const values = [
  { icon: Shield, t: "Trusted Verification", d: "Multi-step physical and professional audit before listing." },
  { icon: Eye, t: "Total Transparency", d: "Clear pricing, realistic timelines, direct communication." },
  { icon: Users, t: "Community First", d: "Empowering Lagos artisans, opening national opportunities." },
  { icon: Trophy, t: "Quality Control", d: "Random on-site inspections ensure the grade you pay for." },
  { icon: Zap, t: "Efficient Fulfillment", d: "Streamlined logistics across all 36 states." },
  { icon: Handshake, t: "Escrow Safety", d: "Funds held securely until you confirm delivery." },
];

const promises = [
  { icon: Lock, t: "Secure Payments", d: "Funds held in escrow, released only on satisfaction." },
  { icon: Percent, t: "Verified Materials", d: "Guaranteed thickness and grade as specified." },
  { icon: Check, t: "Professional Fabricators", d: "Proven track records, active workshop premises." },
  { icon: Headphones, t: "Active Resolution", d: "Dispute resolution team that responds immediately." },
];

function About() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              We know this market because we are this market
            </h1>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Aluminium Village in Lagos has long been one of Nigeria's most important hubs for
                aluminium fabrication, windows, doors, partitions, and everything in between. For
                decades, skilled craftsmen and trusted suppliers have produced world-class work for
                homes, offices, and commercial buildings across the country.
              </p>
              <p>
                But finding the right person, getting a fair price, and knowing your money was
                safe? That was always the hard part. Customers travelled far, negotiated blind,
                paid cash upfront, and hoped for the best. We built Aluminium Village to change
                that.
              </p>
            </div>
            <blockquote className="mt-6 border-l-4 border-accent pl-4 italic text-foreground">
              "Quality aluminium work has always existed here. We just built the platform to prove
              it to the rest of Nigeria."
              <footer className="not-italic mt-2 text-sm text-muted-foreground">
                — Founder, Aluminium Village
              </footer>
            </blockquote>
          </div>
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border">
            <img src={img.aboutA} alt="Aluminium fabrication" className="size-full object-cover" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["500+", "Verified products & services listed"],
            ["100%", "Money-back guarantee on every order"],
            ["24hr", "Response time on all enquiries"],
            ["36", "States we deliver across Nigeria"],
          ].map(([n, l]) => (
            <div key={l} className="rounded-xl border bg-card p-6 text-center">
              <div className="text-3xl font-bold text-brand">{n}</div>
              <div className="mt-1 text-xs text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 border-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent">
              Our mission
            </div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
              Making aluminium trade safe, simple, and accessible
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our goal is to remove the friction from the aluminium industry in Nigeria. We are
              digitizing the legacy of the Lagos Aluminium Village, ensuring that geography is no
              longer a barrier between the country's best fabricators and the clients who need
              them most.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.t} className="rounded-xl border bg-card p-6">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent">
                  <v.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-semibold">{v.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="aspect-[4/3] rounded-2xl overflow-hidden border order-2 lg:order-1">
          <img src={img.aboutB} alt="Aluminium installation" className="size-full object-cover" />
        </div>
        <div className="order-1 lg:order-2">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            How we are different
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            We do not just list — we manage every deal
          </h2>
          <p className="mt-4 text-muted-foreground">
            Most marketplaces just connect people and walk away. We stay until the job is done.
            From quote to final installation, Aluminium Village acts as your quality assurance
            partner.
          </p>
          <p className="mt-3 text-muted-foreground">
            We verify specifications, ensure materials meet Nigerian standards, and handle the
            complex logistics of moving heavy industrial materials safely across state lines.
          </p>
          <a className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline">
            Learn more about our process <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Our guarantee to you
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">The Aluminium Village Promise</h2>
          <p className="mt-3 text-primary-foreground/80 max-w-2xl">
            Four commitments we make to every customer, on every single order.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {promises.map((p) => (
              <div key={p.t} className="rounded-xl bg-white/5 border border-white/10 p-6">
                <p.icon className="size-6 text-accent" />
                <h3 className="mt-4 font-semibold">{p.t}</h3>
                <p className="mt-1 text-sm text-primary-foreground/70">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
