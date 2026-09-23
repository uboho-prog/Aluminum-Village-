import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-BLIZkrRj.css";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$k = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aluminium Village | Nigeria's Verified Aluminium Marketplace" },
      {
        name: "description",
        content: "Source certified aluminium extrusions, sheets and coils, or connect with top-rated fabricators and installers across Nigeria."
      },
      { property: "og:title", content: "Aluminium Village" },
      {
        property: "og:description",
        content: "Nigeria's first verified marketplace for aluminium products and installations."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$k.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] });
}
const $$splitComponentImporter$j = () => import("./index-CvwHhDNj.mjs");
const Route$j = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Aluminium Village | Nigeria's Verified Aluminium Marketplace"
    }, {
      name: "description",
      content: "Nigeria's first verified platform for aluminium products and installations. Source certified extrusions, sheets and coils, or hire top-rated fabricators and installers."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./about-EOvq6HJ8.mjs");
const Route$i = createFileRoute()({
  head: () => ({
    meta: [{
      title: "About | Aluminium Village - Industrial Excellence"
    }, {
      name: "description",
      content: "We digitize the legacy of the Lagos Aluminium Village so quality fabricators and clients can meet safely, with escrow protection."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./admin-BjgzYt4X.mjs");
const Route$h = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Admin | Aluminium Village"
    }, {
      name: "description",
      content: "Administrative nerve center for Aluminium Village."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./admin-login-CyShPMKc.mjs");
const Route$g = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Admin Nerve | Aluminium Village"
    }, {
      name: "description",
      content: "Secure administrator access to the Aluminium Village portal."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./checkout-CXW76mhj.mjs");
const Route$f = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Secure Checkout | Aluminium Village"
    }, {
      name: "description",
      content: "Complete your industrial aluminium procurement with confidence. SSL-encrypted secure checkout."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./contact-B2roSaMi.mjs");
const Route$e = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Contact | Aluminium Village"
    }, {
      name: "description",
      content: "Reach our industrial consultants for technical procurement, logistics, and global trade compliance."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./dashboard-BFwHkgiV.mjs");
const Route$d = createFileRoute()({
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./directory-CZ7dVPQC.mjs");
const Route$c = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Business Directory | Aluminium Village"
    }, {
      name: "description",
      content: "Connect with Africa's leading aluminium fabricators, suppliers, and installation specialists. All professionals are vetted."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./forgot-password-Bi_SJQPU.mjs");
const Route$b = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Reset Password | Aluminium Village"
    }, {
      name: "description",
      content: "Reset your Aluminium Village account password."
    }]
  }),
  validateSearch: (s) => ({
    mode: s.mode === "admin" ? "admin" : "user"
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./join-DbnbA-dC.mjs");
const Route$a = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Join as a Professional | Aluminium Village"
    }, {
      name: "description",
      content: "Register as a verified professional and grow your business with high-quality leads."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./login-D7gGHBK3.mjs");
const Route$9 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Sign in | Aluminium Village"
    }, {
      name: "description",
      content: "Sign in to access your Aluminium Village account."
    }]
  }),
  validateSearch: (s) => ({
    redirect: typeof s.redirect === "string" ? s.redirect : void 0
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./marketplace-COAhbh1x.mjs");
const Route$8 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Marketplace | Aluminium Village"
    }, {
      name: "description",
      content: "Browse certified aluminium profiles, extrusions, sheets and fittings from verified suppliers."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./signup-B5UCm46Z.mjs");
const Route$7 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Create account | Aluminium Village"
    }, {
      name: "description",
      content: "Create your Aluminium Village account to shop, track orders and checkout securely."
    }]
  }),
  validateSearch: (s) => ({
    redirect: typeof s.redirect === "string" ? s.redirect : void 0
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./tracking-oDJEYUwI.mjs");
const Route$6 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Order #ALV-9821 Tracking | Aluminium Village"
    }, {
      name: "description",
      content: "Live tracking for premium grade industrial shipments. View transit progress, driver and cargo manifest."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./admin.index-DJXCkH1n.mjs");
const Route$5 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Admin Dashboard | Aluminium Village"
    }, {
      name: "description",
      content: "Administrative nerve center for Aluminium Village."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./admin.analytics-BgNpOH2t.mjs");
const Route$4 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Analytics | Aluminium Village Admin"
    }, {
      name: "description",
      content: "Track platform performance, revenue trends, and seller activity."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./admin.deals-jLu3FxPg.mjs");
const Route$3 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Deals | Aluminium Village Admin"
    }, {
      name: "description",
      content: "Monitor all transactions, escrow status, and payment releases."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./admin.sellers-C2VSJchX.mjs");
const Route$2 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Sellers | Aluminium Village Admin"
    }, {
      name: "description",
      content: "Manage verified sellers, their listings, and compliance status."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./admin.settings-BCV_Lfj_.mjs");
const Route$1 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Settings | Aluminium Village Admin"
    }, {
      name: "description",
      content: "Configure platform rules, admin access, and notification preferences."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./admin.users-CbdrBJSs.mjs");
const Route = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Users | Aluminium Village Admin"
    }, {
      name: "description",
      content: "Manage all registered customers and their order history."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$j.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$k
});
const AboutRoute = Route$i.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$k
});
const AdminRoute = Route$h.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$k
});
const AdminLoginRoute = Route$g.update({
  id: "/admin-login",
  path: "/admin-login",
  getParentRoute: () => Route$k
});
const CheckoutRoute = Route$f.update({
  id: "/checkout",
  path: "/checkout",
  getParentRoute: () => Route$k
});
const ContactRoute = Route$e.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$k
});
const DashboardRoute = Route$d.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$k
});
const DirectoryRoute = Route$c.update({
  id: "/directory",
  path: "/directory",
  getParentRoute: () => Route$k
});
const ForgotPasswordRoute = Route$b.update({
  id: "/forgot-password",
  path: "/forgot-password",
  getParentRoute: () => Route$k
});
const JoinRoute = Route$a.update({
  id: "/join",
  path: "/join",
  getParentRoute: () => Route$k
});
const LoginRoute = Route$9.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$k
});
const MarketplaceRoute = Route$8.update({
  id: "/marketplace",
  path: "/marketplace",
  getParentRoute: () => Route$k
});
const SignupRoute = Route$7.update({
  id: "/signup",
  path: "/signup",
  getParentRoute: () => Route$k
});
const TrackingRoute = Route$6.update({
  id: "/tracking",
  path: "/tracking",
  getParentRoute: () => Route$k
});
const AdminIndexRoute = Route$5.update({
  id: "/",
  path: "/",
  getParentRoute: () => AdminRoute
});
const AdminAnalyticsRoute = Route$4.update({
  id: "/analytics",
  path: "/analytics",
  getParentRoute: () => AdminRoute
});
const AdminDealsRoute = Route$3.update({
  id: "/deals",
  path: "/deals",
  getParentRoute: () => AdminRoute
});
const AdminSellersRoute = Route$2.update({
  id: "/sellers",
  path: "/sellers",
  getParentRoute: () => AdminRoute
});
const AdminSettingsRoute = Route$1.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => AdminRoute
});
const AdminUsersRoute = Route.update({
  id: "/users",
  path: "/users",
  getParentRoute: () => AdminRoute
});
const AdminRouteChildren = {
  AdminAnalyticsRoute,
  AdminDealsRoute,
  AdminSellersRoute,
  AdminSettingsRoute,
  AdminUsersRoute,
  AdminIndexRoute
};
const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdminRoute: AdminRouteWithChildren,
  AdminLoginRoute,
  CheckoutRoute,
  ContactRoute,
  DashboardRoute,
  DirectoryRoute,
  ForgotPasswordRoute,
  JoinRoute,
  LoginRoute,
  MarketplaceRoute,
  SignupRoute,
  TrackingRoute
};
const routeTree = Route$k._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
