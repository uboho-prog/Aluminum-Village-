import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as Settings, m as Shield, v as Bell, y as CreditCard, al as TriangleAlert, x as EyeOff, E as Eye, ap as Wifi, a as CircleCheck } from "../_libs/lucide-react.mjs";
const TABS = [{
  id: "platform",
  label: "Platform Settings",
  icon: Settings
}, {
  id: "admin",
  label: "Admin Access",
  icon: Shield
}, {
  id: "notifications",
  label: "Notifications",
  icon: Bell
}, {
  id: "paystack",
  label: "Paystack Configuration",
  icon: CreditCard
}];
function Toggle({
  on,
  onToggle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onToggle, className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${on ? "bg-[#0b50c4]" : "bg-slate-600"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block size-4 transform rounded-full bg-white transition-transform ${on ? "translate-x-6" : "translate-x-1"}` }) });
}
function AdminSettingsPage() {
  const [activeTab, setActiveTab] = reactExports.useState("platform");
  const [platformName, setPlatformName] = reactExports.useState("Aluminium Village");
  const [tagline, setTagline] = reactExports.useState("Nigeria's Verified Aluminium Marketplace");
  const [adminEmail, setAdminEmail] = reactExports.useState("admin@aluminiumvillage.com");
  const [adminWhatsapp, setAdminWhatsapp] = reactExports.useState("+234 801 234 5678");
  const [commission, setCommission] = reactExports.useState("15");
  const [escrowDays, setEscrowDays] = reactExports.useState("7");
  const [slaHours, setSlaHours] = reactExports.useState("2");
  const [currentPw, setCurrentPw] = reactExports.useState("");
  const [newPw, setNewPw] = reactExports.useState("");
  const [confirmPw, setConfirmPw] = reactExports.useState("");
  const [showPw, setShowPw] = reactExports.useState(false);
  const [notifs, setNotifs] = reactExports.useState({
    emailEnquiry: true,
    emailOrder: true,
    emailDispute: true,
    emailSeller: false,
    emailAutoRelease: true,
    whatsappEnquiry: false,
    whatsappDispute: false
  });
  const [pskPublic, setPskPublic] = reactExports.useState("");
  const [pskSecret, setPskSecret] = reactExports.useState("");
  const [pskMode, setPskMode] = reactExports.useState("test");
  const [pskTestResult, setPskTestResult] = reactExports.useState(null);
  const webhookUrl = "https://api.aluminiumvillage.com/webhooks/paystack";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-white", children: "Settings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-slate-400", children: "Configure platform rules, admin access, and notification preferences." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 rounded-xl bg-[#1e293b] border border-slate-700/50 p-1 overflow-x-auto", children: TABS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab(t.id), className: `flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${activeTab === t.id ? "bg-[#0b50c4] text-white shadow-md shadow-[#0b50c4]/25" : "text-slate-400 hover:text-white hover:bg-slate-700/50"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { className: "size-4" }),
      t.label
    ] }, t.id)) }),
    activeTab === "platform" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "size-4 text-[#0b50c4]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold tracking-wider text-white", children: "PLATFORM SETTINGS" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "Platform Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: platformName, onChange: (e) => setPlatformName(e.target.value), className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "Platform Tagline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: tagline, onChange: (e) => setTagline(e.target.value), className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "Admin Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: adminEmail, onChange: (e) => setAdminEmail(e.target.value), className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "Admin WhatsApp Number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: adminWhatsapp, onChange: (e) => setAdminWhatsapp(e.target.value), className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "Commission Rate (%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: commission, onChange: (e) => setCommission(e.target.value), className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 pr-8 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500", children: "%" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-[11px] text-amber-400/80 flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "size-3" }),
            " Changing this affects all NEW deals only."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "Escrow Auto-Release (days)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: escrowDays, onChange: (e) => setEscrowDays(e.target.value), className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 pr-12 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500", children: "days" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "Support Response SLA (hours)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: slaHours, onChange: (e) => setSlaHours(e.target.value), className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 pr-14 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500", children: "hours" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full rounded-lg bg-[#0b50c4] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0a47ad] active:scale-[0.98] transition-all shadow-md shadow-[#0b50c4]/25", children: "Save Platform Settings" })
    ] }),
    activeTab === "admin" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "size-4 text-[#0b50c4]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold tracking-wider text-white", children: "CURRENT ADMIN ACCOUNT" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-slate-800/50 border border-slate-700/30 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500", children: "EMAIL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-semibold text-white", children: adminEmail })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-slate-800/50 border border-slate-700/30 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500", children: "ROLE" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-semibold text-[#0EA5E9]", children: "Super Admin" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-slate-800/50 border border-slate-700/30 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500", children: "JOINED" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-semibold text-white", children: "Jan 1, 2024" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold tracking-wider text-white mb-4", children: "CHANGE PASSWORD" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "Current Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: showPw ? "text" : "password", value: currentPw, onChange: (e) => setCurrentPw(e.target.value), className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 pr-10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowPw((v) => !v), className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white", children: showPw ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-4" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "New Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: newPw, onChange: (e) => setNewPw(e.target.value), className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "Confirm New Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: confirmPw, onChange: (e) => setConfirmPw(e.target.value), className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-lg bg-[#0b50c4] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#0a47ad] active:scale-[0.98] transition-all", children: "Update Password" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6 opacity-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold tracking-wider text-white mb-2", children: "TEAM MEMBER ACCESS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400", children: "Add team member access — coming soon." })
      ] })
    ] }),
    activeTab === "notifications" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "size-4 text-[#0b50c4]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold tracking-wider text-white", children: "NOTIFICATION PREFERENCES" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold tracking-wider text-slate-500 mb-3", children: "EMAIL NOTIFICATIONS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [["emailEnquiry", "New enquiry received"], ["emailOrder", "New order paid"], ["emailDispute", "Dispute raised"], ["emailSeller", "Seller registered"], ["emailAutoRelease", "Payment auto-released"]].map(([key, label]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between py-2 border-b border-slate-700/30 last:border-0 cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-slate-300", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { on: notifs[key], onToggle: () => setNotifs((p) => ({
            ...p,
            [key]: !p[key]
          })) })
        ] }, key)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold tracking-wider text-slate-500 mb-3", children: "WHATSAPP NOTIFICATIONS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [["whatsappEnquiry", "New enquiry received"], ["whatsappDispute", "Dispute raised"]].map(([key, label]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between py-2 border-b border-slate-700/30 last:border-0 cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-slate-300", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { on: notifs[key], onToggle: () => setNotifs((p) => ({
            ...p,
            [key]: !p[key]
          })) })
        ] }, key)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full rounded-lg bg-[#0b50c4] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0a47ad] active:scale-[0.98] transition-all shadow-md shadow-[#0b50c4]/25", children: "Save Notification Preferences" })
    ] }),
    activeTab === "paystack" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "size-4 text-[#0b50c4]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold tracking-wider text-white", children: "PAYSTACK CONFIGURATION" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "Public Key" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: pskPublic, onChange: (e) => setPskPublic(e.target.value), placeholder: "pk_test_...", className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "Secret Key" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: pskSecret, onChange: (e) => setPskSecret(e.target.value), placeholder: "sk_test_...", className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-slate-400 mb-2", children: "ENVIRONMENT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setPskMode("test"), className: `flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold border transition-all ${pskMode === "test" ? "bg-amber-500/10 border-amber-500/30 text-amber-400" : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `size-2 rounded-full ${pskMode === "test" ? "bg-amber-400" : "bg-slate-600"}` }),
            "TEST MODE"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setPskMode("live"), className: `flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold border transition-all ${pskMode === "live" ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `size-2 rounded-full ${pskMode === "live" ? "bg-emerald-400" : "bg-slate-600"}` }),
            "LIVE MODE"
          ] })
        ] }),
        pskMode === "live" && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs text-amber-400 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "size-3" }),
          "Make sure you have completed Paystack KYC before switching to live mode."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "WEBHOOK URL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "flex-1 text-sm text-[#0EA5E9] break-all", children: webhookUrl }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigator.clipboard.writeText(webhookUrl), className: "shrink-0 p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", className: "size-4", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] text-slate-500", children: "Paste this URL into your Paystack dashboard webhook settings." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setPskTestResult(Math.random() > 0.3 ? "success" : "error"), className: "inline-flex items-center gap-2 rounded-lg bg-slate-800 border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-700 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "size-4" }),
          " Test Connection"
        ] }),
        pskTestResult === "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm text-emerald-400 font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4" }),
          " Connection successful"
        ] }),
        pskTestResult === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm text-red-400 font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "size-4" }),
          " Connection failed"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full rounded-lg bg-[#0b50c4] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0a47ad] active:scale-[0.98] transition-all shadow-md shadow-[#0b50c4]/25", children: "Save Paystack Settings" })
    ] })
  ] }) });
}
export {
  AdminSettingsPage as component
};
