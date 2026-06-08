import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ShoppingCart, MessageCircle, X, Send, ChevronDown, Users, UserPlus } from "lucide-react";
import logoAsset from "@/assets/aluminium-village-logo.png.asset.json";

const nav: { to: string; label: string }[] = [
  { to: "/", label: "Home" },
  { to: "/marketplace", label: "Marketplace" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function DirectoryMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to="/directory"
        className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-secondary transition-colors"
        activeProps={{ className: "text-brand bg-secondary" }}
      >
        Directory
        <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </Link>
      <div
        className={`absolute left-0 top-full pt-2 w-64 transition-all ${
          open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
        }`}
      >
        <div className="rounded-lg border bg-card shadow-lg overflow-hidden">
          <Link
            to="/directory"
            className="flex items-start gap-3 px-4 py-3 hover:bg-secondary transition-colors"
          >
            <Users className="size-4 text-brand mt-0.5 shrink-0" />
            <div>
              <div className="text-sm font-semibold">Browse Professionals</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                Access the verified directory
              </div>
            </div>
          </Link>
          <div className="border-t" />
          <Link
            to="/join"
            className="flex items-start gap-3 px-4 py-3 hover:bg-secondary transition-colors"
          >
            <UserPlus className="size-4 text-brand mt-0.5 shrink-0" />
            <div>
              <div className="text-sm font-semibold">Join as a Professional</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                Register your business
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Logo({ withWordmark = false }: { withWordmark?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <img src={logoAsset.url} alt="Aluminium Village" className="h-9 w-9 object-contain" />
      {withWordmark && (
        <span className="font-bold tracking-tight text-primary">ALUMINIUM VILLAGE</span>
      )}
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [cartCount] = useState(2);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([
    { from: "bot", text: "Hello! How can I help you with your aluminium requirements today?" },
  ]);
  const [draft, setDraft] = useState("");

  const sendMessage = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMessages((m) => [...m, { from: "user", text: t }]);
    setDraft("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { from: "bot", text: "Thanks — a Village specialist will reach out shortly." },
      ]);
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center" aria-label="Aluminium Village home">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {nav.slice(0, 2).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-secondary transition-colors"
                activeProps={{ className: "text-brand bg-secondary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <DirectoryMenu />
            {nav.slice(2).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-secondary transition-colors"
                activeProps={{ className: "text-brand bg-secondary" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/checkout"
              aria-label="Cart"
              className="relative grid h-9 w-9 place-items-center rounded-md hover:bg-secondary transition-colors"
            >
              <ShoppingCart className="size-5 text-foreground" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 grid h-4 min-w-4 place-items-center rounded-full bg-brand px-1 text-[10px] font-bold text-brand-foreground">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground hover:opacity-90 transition-opacity"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t bg-card mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-3 text-xs text-muted-foreground max-w-xs">
              © {new Date().getFullYear()} Aluminium Village. Industrial Excellence. Redefining
              Nigeria's aluminium supply chain with transparency and technology.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Quick Links</div>
            <ul className="space-y-2">
              {[
                ["Marketplace", "/marketplace"],
                ["Business Directory", "/directory"],
                ["Sustainability", "/about"],
                ["Careers", "/about"],
                ["Feedback", "/contact"],
              ].map(([l, to]) => (
                <li key={l}>
                  <Link to={to as string} className="text-sm text-muted-foreground hover:text-foreground">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Support</div>
            <ul className="space-y-2">
              {[
                ["Help Center", "/contact"],
                ["Privacy Policy", "/about"],
                ["Terms of Service", "/about"],
                ["Shipping Info", "/about"],
              ].map(([l, to]) => (
                <li key={l}>
                  <Link to={to as string} className="text-sm text-muted-foreground hover:text-foreground">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Stay Connected</div>
            <p className="text-xs text-muted-foreground mb-3">
              Lagos · Abuja · Port Harcourt
            </p>
            <Link
              to="/join"
              className="inline-flex rounded-md border bg-background px-3 py-2 text-xs font-medium hover:bg-secondary"
            >
              Join as a Pro
            </Link>
          </div>
        </div>
      </footer>

      {/* Floating chat widget */}
      <div className="fixed bottom-5 right-5 z-50">
        {chatOpen ? (
          <div className="w-80 rounded-2xl border bg-card shadow-2xl overflow-hidden flex flex-col">
            <div className="bg-gradient-to-r from-brand to-accent px-4 py-3 flex items-center justify-between text-brand-foreground">
              <div>
                <div className="text-sm font-semibold">Village Support</div>
                <div className="text-[10px] uppercase tracking-wider opacity-90 flex items-center gap-1">
                  <span className="inline-block size-1.5 rounded-full bg-emerald-300" /> Online now
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                aria-label="Close chat"
                className="p-1 rounded hover:bg-white/10"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="bg-primary text-primary-foreground p-3 space-y-2 max-h-72 overflow-y-auto">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] text-sm px-3 py-2 rounded-2xl ${
                    m.from === "bot"
                      ? "bg-white/10 rounded-bl-sm"
                      : "ml-auto bg-brand text-brand-foreground rounded-br-sm"
                  }`}
                >
                  {m.text}
                </div>
              ))}
              <button
                onClick={() => sendMessage("I'm looking for industrial extrusions.")}
                className="block ml-auto text-xs bg-brand/80 hover:bg-brand text-brand-foreground rounded-full px-3 py-1.5"
              >
                I'm looking for industrial extrusions.
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(draft);
              }}
              className="flex items-center gap-2 border-t bg-card px-3 py-2"
            >
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-transparent outline-none text-sm py-1"
              />
              <button
                type="submit"
                aria-label="Send"
                className="grid place-items-center size-8 rounded-full bg-brand text-brand-foreground hover:opacity-90"
              >
                <Send className="size-4" />
              </button>
            </form>
          </div>
        ) : (
          <button
            onClick={() => setChatOpen(true)}
            aria-label="Open Village Support chat"
            className="grid place-items-center size-14 rounded-full bg-brand text-brand-foreground shadow-xl hover:scale-105 transition-transform"
          >
            <MessageCircle className="size-6" />
          </button>
        )}
      </div>
    </div>
  );
}
