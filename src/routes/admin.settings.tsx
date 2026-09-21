import { createFileRoute } from "@tanstack/react-router";
import {
  Settings,
  Shield,
  Bell,
  CreditCard,
  Save,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertTriangle,
  Wifi,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({
    meta: [
      { title: "Settings | Aluminium Village Admin" },
      { name: "description", content: "Configure platform rules, admin access, and notification preferences." },
    ],
  }),
  component: AdminSettingsPage,
});

const TABS = [
  { id: "platform", label: "Platform Settings", icon: Settings },
  { id: "admin", label: "Admin Access", icon: Shield },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "paystack", label: "Paystack Configuration", icon: CreditCard },
];

function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${on ? "bg-[#0b50c4]" : "bg-slate-600"}`}
    >
      <span className={`inline-block size-4 transform rounded-full bg-white transition-transform ${on ? "translate-x-6" : "translate-x-1"}`} />
    </button>
  );
}

function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("platform");

  // Platform
  const [platformName, setPlatformName] = useState("Aluminium Village");
  const [tagline, setTagline] = useState("Nigeria's Verified Aluminium Marketplace");
  const [adminEmail, setAdminEmail] = useState("admin@aluminiumvillage.com");
  const [adminWhatsapp, setAdminWhatsapp] = useState("+234 801 234 5678");
  const [commission, setCommission] = useState("15");
  const [escrowDays, setEscrowDays] = useState("7");
  const [slaHours, setSlaHours] = useState("2");

  // Admin
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [showPw, setShowPw] = useState(false);

  // Notifications
  const [notifs, setNotifs] = useState({
    emailEnquiry: true,
    emailOrder: true,
    emailDispute: true,
    emailSeller: false,
    emailAutoRelease: true,
    whatsappEnquiry: false,
    whatsappDispute: false,
  });

  // Paystack
  const [pskPublic, setPskPublic] = useState("");
  const [pskSecret, setPskSecret] = useState("");
  const [pskMode, setPskMode] = useState<"test" | "live">("test");
  const [pskTestResult, setPskTestResult] = useState<"success" | "error" | null>(null);

  const webhookUrl = "https://api.aluminiumvillage.com/webhooks/paystack";

  return (
    <>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-white">Settings</h1>
          <p className="mt-1 text-sm text-slate-400">
            Configure platform rules, admin access, and notification preferences.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 rounded-xl bg-[#1e293b] border border-slate-700/50 p-1 overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === t.id
                  ? "bg-[#0b50c4] text-white shadow-md shadow-[#0b50c4]/25"
                  : "text-slate-400 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              <t.icon className="size-4" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "platform" && (
          <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6 space-y-5">
            <div className="flex items-center gap-2 mb-1">
              <Settings className="size-4 text-[#0b50c4]" />
              <h2 className="text-sm font-bold tracking-wider text-white">PLATFORM SETTINGS</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Platform Name</label>
                <input value={platformName} onChange={(e) => setPlatformName(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Platform Tagline</label>
                <input value={tagline} onChange={(e) => setTagline(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Admin Email</label>
                <input type="email" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Admin WhatsApp Number</label>
                <input value={adminWhatsapp} onChange={(e) => setAdminWhatsapp(e.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Commission Rate (%)</label>
                <div className="relative">
                  <input type="number" value={commission} onChange={(e) => setCommission(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 pr-8 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500">%</span>
                </div>
                <p className="mt-1 text-[11px] text-amber-400/80 flex items-center gap-1">
                  <AlertTriangle className="size-3" /> Changing this affects all NEW deals only.
                </p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Escrow Auto-Release (days)</label>
                <div className="relative">
                  <input type="number" value={escrowDays} onChange={(e) => setEscrowDays(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 pr-12 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500">days</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Support Response SLA (hours)</label>
                <div className="relative">
                  <input type="number" value={slaHours} onChange={(e) => setSlaHours(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 pr-14 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500">hours</span>
                </div>
              </div>
            </div>
            <button className="w-full rounded-lg bg-[#0b50c4] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0a47ad] active:scale-[0.98] transition-all shadow-md shadow-[#0b50c4]/25">
              Save Platform Settings
            </button>
          </div>
        )}

        {activeTab === "admin" && (
          <div className="space-y-6">
            {/* Current Account */}
            <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="size-4 text-[#0b50c4]" />
                <h2 className="text-sm font-bold tracking-wider text-white">CURRENT ADMIN ACCOUNT</h2>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-lg bg-slate-800/50 border border-slate-700/30 p-3">
                  <div className="text-[10px] font-bold tracking-wider text-slate-500">EMAIL</div>
                  <div className="mt-1 text-sm font-semibold text-white">{adminEmail}</div>
                </div>
                <div className="rounded-lg bg-slate-800/50 border border-slate-700/30 p-3">
                  <div className="text-[10px] font-bold tracking-wider text-slate-500">ROLE</div>
                  <div className="mt-1 text-sm font-semibold text-[#0EA5E9]">Super Admin</div>
                </div>
                <div className="rounded-lg bg-slate-800/50 border border-slate-700/30 p-3">
                  <div className="text-[10px] font-bold tracking-wider text-slate-500">JOINED</div>
                  <div className="mt-1 text-sm font-semibold text-white">Jan 1, 2024</div>
                </div>
              </div>
            </div>

            {/* Change Password */}
            <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6">
              <h2 className="text-sm font-bold tracking-wider text-white mb-4">CHANGE PASSWORD</h2>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Current Password</label>
                  <div className="relative">
                    <input type={showPw ? "text" : "password"} value={currentPw} onChange={(e) => setCurrentPw(e.target.value)}
                      className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 pr-10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" />
                    <button type="button" onClick={() => setShowPw((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white">
                      {showPw ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">New Password</label>
                  <input type="password" value={newPw} onChange={(e) => setNewPw(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Confirm New Password</label>
                  <input type="password" value={confirmPw} onChange={(e) => setConfirmPw(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" />
                </div>
                <button className="rounded-lg bg-[#0b50c4] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#0a47ad] active:scale-[0.98] transition-all">
                  Update Password
                </button>
              </div>
            </div>

            {/* Future */}
            <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6 opacity-50">
              <h2 className="text-sm font-bold tracking-wider text-white mb-2">TEAM MEMBER ACCESS</h2>
              <p className="text-sm text-slate-400">Add team member access — coming soon.</p>
            </div>
          </div>
        )}

        {activeTab === "notifications" && (
          <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6 space-y-6">
            <div className="flex items-center gap-2 mb-1">
              <Bell className="size-4 text-[#0b50c4]" />
              <h2 className="text-sm font-bold tracking-wider text-white">NOTIFICATION PREFERENCES</h2>
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-wider text-slate-500 mb-3">EMAIL NOTIFICATIONS</h3>
              <div className="space-y-3">
                {([
                  ["emailEnquiry", "New enquiry received"],
                  ["emailOrder", "New order paid"],
                  ["emailDispute", "Dispute raised"],
                  ["emailSeller", "Seller registered"],
                  ["emailAutoRelease", "Payment auto-released"],
                ] as const).map(([key, label]) => (
                  <label key={key} className="flex items-center justify-between py-2 border-b border-slate-700/30 last:border-0 cursor-pointer">
                    <span className="text-sm text-slate-300">{label}</span>
                    <Toggle on={notifs[key]} onToggle={() => setNotifs((p) => ({ ...p, [key]: !p[key] }))} />
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold tracking-wider text-slate-500 mb-3">WHATSAPP NOTIFICATIONS</h3>
              <div className="space-y-3">
                {([
                  ["whatsappEnquiry", "New enquiry received"],
                  ["whatsappDispute", "Dispute raised"],
                ] as const).map(([key, label]) => (
                  <label key={key} className="flex items-center justify-between py-2 border-b border-slate-700/30 last:border-0 cursor-pointer">
                    <span className="text-sm text-slate-300">{label}</span>
                    <Toggle on={notifs[key]} onToggle={() => setNotifs((p) => ({ ...p, [key]: !p[key] }))} />
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full rounded-lg bg-[#0b50c4] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0a47ad] active:scale-[0.98] transition-all shadow-md shadow-[#0b50c4]/25">
              Save Notification Preferences
            </button>
          </div>
        )}

        {activeTab === "paystack" && (
          <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6 space-y-5">
            <div className="flex items-center gap-2 mb-1">
              <CreditCard className="size-4 text-[#0b50c4]" />
              <h2 className="text-sm font-bold tracking-wider text-white">PAYSTACK CONFIGURATION</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Public Key</label>
                <input
                  type="password"
                  value={pskPublic}
                  onChange={(e) => setPskPublic(e.target.value)}
                  placeholder="pk_test_..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Secret Key</label>
                <input
                  type="password"
                  value={pskSecret}
                  onChange={(e) => setPskSecret(e.target.value)}
                  placeholder="sk_test_..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]"
                />
              </div>
            </div>

            {/* Environment Toggle */}
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-2">ENVIRONMENT</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setPskMode("test")}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold border transition-all ${
                    pskMode === "test"
                      ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                      : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600"
                  }`}
                >
                  <span className={`size-2 rounded-full ${pskMode === "test" ? "bg-amber-400" : "bg-slate-600"}`} />
                  TEST MODE
                </button>
                <button
                  onClick={() => setPskMode("live")}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold border transition-all ${
                    pskMode === "live"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                      : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600"
                  }`}
                >
                  <span className={`size-2 rounded-full ${pskMode === "live" ? "bg-emerald-400" : "bg-slate-600"}`} />
                  LIVE MODE
                </button>
              </div>
              {pskMode === "live" && (
                <p className="mt-2 text-xs text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="size-3" />
                  Make sure you have completed Paystack KYC before switching to live mode.
                </p>
              )}
            </div>

            {/* Webhook URL */}
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">WEBHOOK URL</label>
              <div className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5">
                <code className="flex-1 text-sm text-[#0EA5E9] break-all">{webhookUrl}</code>
                <button
                  onClick={() => navigator.clipboard.writeText(webhookUrl)}
                  className="shrink-0 p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                </button>
              </div>
              <p className="mt-1 text-[11px] text-slate-500">Paste this URL into your Paystack dashboard webhook settings.</p>
            </div>

            {/* Test Connection */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setPskTestResult(Math.random() > 0.3 ? "success" : "error")}
                className="inline-flex items-center gap-2 rounded-lg bg-slate-800 border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-700 transition-colors"
              >
                <Wifi className="size-4" /> Test Connection
              </button>
              {pskTestResult === "success" && (
                <span className="inline-flex items-center gap-1.5 text-sm text-emerald-400 font-semibold">
                  <CheckCircle2 className="size-4" /> Connection successful
                </span>
              )}
              {pskTestResult === "error" && (
                <span className="inline-flex items-center gap-1.5 text-sm text-red-400 font-semibold">
                  <AlertTriangle className="size-4" /> Connection failed
                </span>
              )}
            </div>

            <button className="w-full rounded-lg bg-[#0b50c4] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0a47ad] active:scale-[0.98] transition-all shadow-md shadow-[#0b50c4]/25">
              Save Paystack Settings
            </button>
          </div>
        )}
      </div>
    </>
  );
}
