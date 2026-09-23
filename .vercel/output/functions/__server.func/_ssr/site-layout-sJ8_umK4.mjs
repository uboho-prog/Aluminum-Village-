import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link, d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { l as logoUrl } from "./logo-DOvfSOrI.mjs";
import { u as useAuthUser, s as setAuthUser } from "./auth-store-DPAAHcGi.mjs";
import { d as ShoppingCart, X, f as Send, M as MessageCircle, g as ChevronDown, U as Users, h as UserPlus, i as User, L as LayoutDashboard, P as Package, j as Heart, k as LogOut, l as LogIn } from "../_libs/lucide-react.mjs";
const nav = [
  { to: "/", label: "Home" },
  { to: "/marketplace", label: "Marketplace" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
function DirectoryMenu() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative",
      onMouseEnter: () => setOpen(true),
      onMouseLeave: () => setOpen(false),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/directory",
            className: "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-secondary transition-colors",
            activeProps: { className: "text-brand bg-secondary" },
            children: [
              "Directory",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `size-3.5 transition-transform ${open ? "rotate-180" : ""}` })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `absolute left-0 top-full pt-2 w-64 transition-all ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card shadow-lg overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/directory",
                  className: "flex items-start gap-3 px-4 py-3 hover:bg-secondary transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-4 text-brand mt-0.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Browse Professionals" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: "Access the verified directory" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/join",
                  className: "flex items-start gap-3 px-4 py-3 hover:bg-secondary transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "size-4 text-brand mt-0.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Join as a Professional" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: "Register your business" })
                    ] })
                  ]
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
function AccountMenu() {
  const [open, setOpen] = reactExports.useState(false);
  const user = useAuthUser();
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative",
      onMouseEnter: () => setOpen(true),
      onMouseLeave: () => setOpen(false),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setOpen((v) => !v),
            className: "inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-2 text-sm font-medium hover:bg-secondary hover:border-brand/40 active:scale-[0.98] transition-colors",
            "aria-haspopup": "menu",
            "aria-expanded": open,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "size-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: user ? `Hi, ${user.name}` : "Account" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `size-3.5 transition-transform ${open ? "rotate-180" : ""}` })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `absolute right-0 top-full pt-2 w-64 z-50 transition-all ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border bg-card shadow-lg overflow-hidden", children: user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 bg-secondary/50 border-b", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold", children: [
                  "Hi, ",
                  user.name
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground truncate", children: user.email })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuLink, { to: "/dashboard", icon: LayoutDashboard, title: "My Account", desc: "Profile, addresses & payment" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuLink, { to: "/tracking", icon: Package, title: "Orders", desc: "Track deliveries & history" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MenuLink, { to: "/marketplace", icon: Heart, title: "Saved Items", desc: "Your wishlist & bookmarks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setAuthUser(null);
                    setOpen(false);
                    navigate({ to: "/" });
                  },
                  className: "w-full flex items-start gap-3 px-4 py-3 hover:bg-secondary transition-colors text-left",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "size-4 text-muted-foreground mt-0.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Sign Out" })
                  ]
                }
              )
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/login",
                  className: "flex items-start gap-3 px-4 py-3 hover:bg-secondary transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "size-4 text-brand mt-0.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Sign In" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: "Access your account & orders" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/join",
                  className: "flex items-start gap-3 px-4 py-3 hover:bg-secondary transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "size-4 text-brand mt-0.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Create Account" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: "Faster procurement & tracking" })
                    ] })
                  ]
                }
              )
            ] }) })
          }
        )
      ]
    }
  );
}
function MenuLink({
  to,
  icon: Icon,
  title,
  desc
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, className: "flex items-start gap-3 px-4 py-3 hover:bg-secondary transition-colors", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4 text-brand mt-0.5 shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: desc })
    ] })
  ] });
}
function Logo({ withWordmark = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoUrl, alt: "Aluminium Village", className: "h-9 w-9 object-contain" }),
    withWordmark && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold tracking-tight text-primary", children: "ALUMINIUM VILLAGE" })
  ] });
}
function SiteLayout({ children }) {
  const [cartCount] = reactExports.useState(2);
  const [chatOpen, setChatOpen] = reactExports.useState(false);
  const [messages, setMessages] = reactExports.useState([
    { from: "bot", text: "Hello! How can I help you with your aluminium requirements today?" }
  ]);
  const [draft, setDraft] = reactExports.useState("");
  const sendMessage = (text) => {
    const t = text.trim();
    if (!t) return;
    setMessages((m) => [...m, { from: "user", text: t }]);
    setDraft("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { from: "bot", text: "Thanks — a Village specialist will reach out shortly." }
      ]);
    }, 600);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 border-b bg-background/90 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center", "aria-label": "Aluminium Village home", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-1", children: [
        nav.slice(0, 2).map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: n.to,
            className: "px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-secondary transition-colors",
            activeProps: { className: "text-brand bg-secondary" },
            activeOptions: { exact: n.to === "/" },
            children: n.label
          },
          n.to
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DirectoryMenu, {}),
        nav.slice(2).map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: n.to,
            className: "px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-secondary transition-colors",
            activeProps: { className: "text-brand bg-secondary" },
            children: n.label
          },
          n.to
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/checkout",
            "aria-label": "Cart",
            className: "relative grid h-9 w-9 place-items-center rounded-md hover:bg-secondary transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "size-5 text-foreground" }),
              cartCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 grid h-4 min-w-4 place-items-center rounded-full bg-brand px-1 text-[10px] font-bold text-brand-foreground", children: cartCount })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccountMenu, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/contact",
            className: "inline-flex items-center rounded-md bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground hover:opacity-90 transition-opacity",
            children: "Request Quote"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t bg-card mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-8 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs text-muted-foreground max-w-xs", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Aluminium Village. Industrial Excellence. Redefining Nigeria's aluminium supply chain with transparency and technology."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-3", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [
          ["Marketplace", "/marketplace"],
          ["Business Directory", "/directory"],
          ["Sustainability", "/about"],
          ["Careers", "/about"],
          ["Feedback", "/contact"]
        ].map(([l, to]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: "text-sm text-muted-foreground hover:text-foreground", children: l }) }, l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-3", children: "Support" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [
          ["Help Center", "/contact"],
          ["Privacy Policy", "/about"],
          ["Terms of Service", "/about"],
          ["Shipping Info", "/about"]
        ].map(([l, to]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: "text-sm text-muted-foreground hover:text-foreground", children: l }) }, l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-3", children: "Stay Connected" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "Lagos · Abuja · Port Harcourt" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/join",
            className: "inline-flex rounded-md border bg-background px-3 py-2 text-xs font-medium hover:bg-secondary",
            children: "Join as a Pro"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-5 right-5 z-50", children: chatOpen ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-80 rounded-2xl border bg-card shadow-2xl overflow-hidden flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-brand to-accent px-4 py-3 flex items-center justify-between text-brand-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Village Support" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-wider opacity-90 flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block size-1.5 rounded-full bg-emerald-300" }),
            " Online now"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setChatOpen(false),
            "aria-label": "Close chat",
            className: "p-1 rounded hover:bg-white/10",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary text-primary-foreground p-3 space-y-2 max-h-72 overflow-y-auto", children: [
        messages.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `max-w-[85%] text-sm px-3 py-2 rounded-2xl ${m.from === "bot" ? "bg-white/10 rounded-bl-sm" : "ml-auto bg-brand text-brand-foreground rounded-br-sm"}`,
            children: m.text
          },
          i
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => sendMessage("I'm looking for industrial extrusions."),
            className: "block ml-auto text-xs bg-brand/80 hover:bg-brand text-brand-foreground rounded-full px-3 py-1.5",
            children: "I'm looking for industrial extrusions."
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: (e) => {
            e.preventDefault();
            sendMessage(draft);
          },
          className: "flex items-center gap-2 border-t bg-card px-3 py-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                value: draft,
                onChange: (e) => setDraft(e.target.value),
                placeholder: "Type your message...",
                className: "flex-1 bg-transparent outline-none text-sm py-1"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                "aria-label": "Send",
                className: "grid place-items-center size-8 rounded-full bg-brand text-brand-foreground hover:opacity-90",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-4" })
              }
            )
          ]
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setChatOpen(true),
        "aria-label": "Open Village Support chat",
        className: "grid place-items-center size-14 rounded-full bg-brand text-brand-foreground shadow-xl hover:scale-105 transition-transform",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-6" })
      }
    ) })
  ] });
}
export {
  SiteLayout as S
};
