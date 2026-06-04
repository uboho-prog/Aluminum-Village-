import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/marketplace", label: "Marketplace" },
  { to: "/directory", label: "Directory" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-bold">
              AV
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Aluminium Village</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Industrial Marketplace
              </div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-3 py-2 text-sm text-muted-foreground rounded-md hover:text-foreground hover:bg-secondary transition-colors"
                activeProps={{ className: "text-foreground bg-secondary" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="hidden sm:inline-flex px-3 py-2 text-sm font-medium text-foreground hover:text-brand"
            >
              Sign in
            </Link>
            <Link
              to="/join"
              className="inline-flex items-center rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-foreground hover:opacity-90"
            >
              Join
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t bg-secondary/40 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-bold">
                AV
              </div>
              <span className="font-semibold">Aluminium Village</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Nigeria's first verified marketplace for aluminium products, fabricators, and
              installers.
            </p>
          </div>
          {[
            {
              title: "Marketplace",
              links: [
                ["Browse Products", "/marketplace"],
                ["Directory", "/directory"],
                ["Join as Pro", "/join"],
              ],
            },
            {
              title: "Company",
              links: [
                ["About", "/about"],
                ["Contact", "/contact"],
                ["Sign in", "/login"],
              ],
            },
            {
              title: "Trust & Safety",
              links: [
                ["Escrow Protection", "/about"],
                ["Verification", "/join"],
                ["Support", "/contact"],
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <div className="text-sm font-semibold mb-3">{col.title}</div>
              <ul className="space-y-2">
                {col.links.map(([label, to]) => (
                  <li key={label}>
                    <Link
                      to={to as string}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 text-xs text-muted-foreground flex justify-between">
            <span>© {new Date().getFullYear()} Aluminium Village. All rights reserved.</span>
            <span>Lagos · Abuja · Port Harcourt</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
