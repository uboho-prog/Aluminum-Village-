import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import {
  Package,
  Plus,
  Receipt,
  Wallet,
  Clock,
  TrendingUp,
  UserCircle,
  Briefcase,
  Inbox,
  CheckCircle2,
  ShieldCheck,
  Users,
  Building2,
  ArrowUpRight,
  CircleDollarSign,
  ShoppingBag,
} from "lucide-react";
import { getAuthUser, ADMIN_ROLE_LABEL, type AdminRole } from "@/lib/auth-store";
import { isAdminRole } from "@/lib/admin-access";
import {
  usePlatform,
  useMyProducts,
  useMyOrders,
  useMyProfile,
  useMyRequests,
} from "@/lib/platform-store";
import { parseNaira, formatNaira } from "@/lib/payments";
import type { PlatformOrder } from "@/lib/admin-models";
import {
  AdminCard,
  AdminTable,
  EmptyState,
  PageHeader,
  PrimaryButton,
  StatCard,
  StatusPill,
} from "@/components/admin-ui";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard | Aluminium Village" },
      { name: "description", content: "Administrative nerve center for Aluminium Village." },
    ],
  }),
  component: AdminDashboardPage,
});

function AdminDashboardPage() {
  // Sync read (like AdminLayout) so the right suite paints on first render.
  const stored = getAuthUser();
  const role: AdminRole | null = stored && isAdminRole(stored.role) ? stored.role : null;
  if (!role) return null;
  if (role === "business") return <BusinessDashboard />;
  if (role === "professional") return <ProfessionalDashboard />;
  return <OverallDashboard />;
}

function QuickAction({
  to,
  icon: Icon,
  label,
}: {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 rounded-lg bg-slate-800/50 border border-slate-700/30 px-4 py-3 text-sm font-medium text-slate-300 hover:border-[#0b50c4]/40 hover:text-white hover:bg-slate-800 transition-all"
    >
      <Icon className="size-4 text-[#4d8dff]" />
      {label}
      <ArrowUpRight className="size-3.5 ml-auto text-slate-600" />
    </Link>
  );
}

function RecentOrders({ orders, showVendor }: { orders: PlatformOrder[]; showVendor?: boolean }) {
  if (orders.length === 0) {
    return <EmptyState icon={ShoppingBag} title="No orders yet" />;
  }
  return (
    <AdminTable
      head={
        <>
          <th className="py-2.5 pr-3 font-semibold">Order</th>
          <th className="py-2.5 pr-3 font-semibold">{showVendor ? "Vendor" : "Buyer"}</th>
          <th className="py-2.5 pr-3 font-semibold">Total</th>
          <th className="py-2.5 font-semibold">Payment</th>
        </>
      }
    >
      {orders.slice(0, 5).map((o) => (
        <tr key={o.id} className="border-b border-slate-700/30 last:border-0 hover:bg-slate-800/50 transition-colors">
          <td className="py-3 pr-3 font-semibold text-white">#{o.orderNumber}</td>
          <td className="py-3 pr-3 text-slate-300">{showVendor ? o.sellerName : o.buyerName}</td>
          <td className="py-3 pr-3 font-semibold text-white">{o.total}</td>
          <td className="py-3">
            <StatusPill status={o.paymentStatus} />
          </td>
        </tr>
      ))}
    </AdminTable>
  );
}

// --------------------------------------------------------------------------
// Business suite
// --------------------------------------------------------------------------
function BusinessDashboard() {
  const products = useMyProducts();
  const orders = useMyOrders();

  const stats = useMemo(() => {
    const active = products.filter((p) => p.status === "Active").length;
    const pending = products.filter((p) => p.status === "Pending Approval").length;
    const revenue = orders.reduce((s, o) => s + parseNaira(o.subtotal) - parseNaira(o.platformFee), 0);
    const escrow = orders
      .filter((o) => o.paymentStatus === "Escrow")
      .reduce((s, o) => s + parseNaira(o.subtotal) - parseNaira(o.platformFee), 0);
    return { active, pending, revenue, escrow, orders: orders.length };
  }, [products, orders]);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <PageHeader
        title="Business Suite"
        description="Post products, manage your catalog, and track sales and payouts."
        actions={
          <Link to="/admin/products">
            <PrimaryButton>
              <Plus className="size-4" /> Post Product
            </PrimaryButton>
          </Link>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="PRODUCTS"
          value={products.length}
          hint={`${stats.active} active · ${stats.pending} pending`}
          icon={Package}
          tone="sky"
        />
        <StatCard label="ORDERS" value={stats.orders} icon={ShoppingBag} tone="violet" />
        <StatCard label="NET REVENUE" value={formatNaira(stats.revenue)} icon={TrendingUp} tone="emerald" />
        <StatCard
          label="IN ESCROW"
          value={formatNaira(stats.escrow)}
          hint="Awaiting release"
          icon={Clock}
          tone="amber"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <AdminCard
          className="lg:col-span-2"
          title="Recent Orders"
          actions={
            <Link to="/admin/sales" className="text-xs font-semibold text-[#4d8dff] hover:underline">
              View all →
            </Link>
          }
        >
          <RecentOrders orders={orders} />
        </AdminCard>

        <AdminCard title="Quick Actions">
          <div className="space-y-2">
            <QuickAction to="/admin/products" icon={Package} label="Manage Products" />
            <QuickAction to="/admin/sales" icon={Receipt} label="View Sales" />
          </div>
          {stats.pending > 0 && (
            <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-xs text-amber-300">
              {stats.pending} product(s) awaiting the overall admin's approval.
            </div>
          )}
        </AdminCard>
      </div>
    </div>
  );
}

// --------------------------------------------------------------------------
// Professional suite
// --------------------------------------------------------------------------
function ProfessionalDashboard() {
  const profile = useMyProfile();
  const requests = useMyRequests();

  const stats = useMemo(() => {
    const activeServices = profile?.services.filter((s) => s.status === "Active").length ?? 0;
    const newReqs = requests.filter((r) => r.status === "New").length;
    return { activeServices, newReqs, total: requests.length };
  }, [profile, requests]);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <PageHeader
        title="Professional Suite"
        description="Showcase your profile, list your services, and respond to client requests."
        actions={
          <Link to="/admin/profile">
            <PrimaryButton>
              <UserCircle className="size-4" /> Edit Profile
            </PrimaryButton>
          </Link>
        }
      />

      {!profile ? (
        <AdminCard>
          <EmptyState
            icon={UserCircle}
            title="Set up your professional profile"
            hint="Create your profile so clients can find you in the directory and request your services."
            action={
              <Link to="/admin/profile">
                <PrimaryButton>Create profile</PrimaryButton>
              </Link>
            }
          />
        </AdminCard>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="PROFILE"
              value={profile.verified ? "Verified" : "Live"}
              hint={profile.availability}
              icon={CheckCircle2}
              tone="emerald"
            />
            <StatCard label="ACTIVE SERVICES" value={stats.activeServices} icon={Briefcase} tone="sky" />
            <StatCard label="NEW REQUESTS" value={stats.newReqs} icon={Inbox} tone="amber" />
            <StatCard label="COMPLETED JOBS" value={profile.completedJobs} icon={TrendingUp} tone="violet" />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <AdminCard
              className="lg:col-span-2"
              title="Recent Requests"
              actions={
                <Link to="/admin/requests" className="text-xs font-semibold text-[#4d8dff] hover:underline">
                  View all →
                </Link>
              }
            >
              {requests.length === 0 ? (
                <EmptyState icon={Inbox} title="No requests yet" hint="Requests from your public profile appear here." />
              ) : (
                <div className="space-y-3">
                  {requests.slice(0, 4).map((r) => (
                    <div
                      key={r.id}
                      className="flex items-center justify-between gap-3 rounded-lg bg-slate-800/50 border border-slate-700/30 p-3"
                    >
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white truncate">{r.serviceTitle}</div>
                        <div className="text-xs text-slate-400 truncate">
                          {r.clientName} · {r.budget}
                        </div>
                      </div>
                      <StatusPill status={r.status} />
                    </div>
                  ))}
                </div>
              )}
            </AdminCard>

            <AdminCard title="Quick Actions">
              <div className="space-y-2">
                <QuickAction to="/admin/profile" icon={UserCircle} label="Edit Profile" />
                <QuickAction to="/admin/services" icon={Briefcase} label="Manage Services" />
                <QuickAction to="/admin/requests" icon={Inbox} label="View Requests" />
              </div>
            </AdminCard>
          </div>
        </>
      )}
    </div>
  );
}

// --------------------------------------------------------------------------
// Overall admin
// --------------------------------------------------------------------------
function OverallDashboard() {
  const { orders, products, professionals, applications, payments } = usePlatform();

  const stats = useMemo(() => {
    const gmv = orders
      .filter((o) => o.paymentStatus !== "Refunded")
      .reduce((s, o) => s + parseNaira(o.total), 0);
    const commission = orders
      .filter((o) => o.paymentStatus !== "Refunded")
      .reduce((s, o) => s + parseNaira(o.platformFee), 0);
    const escrow = orders
      .filter((o) => o.paymentStatus === "Escrow")
      .reduce((s, o) => s + parseNaira(o.subtotal) - parseNaira(o.platformFee), 0);
    const pendingApprovals =
      applications.business.filter((a) => a.status === "Pending").length +
      applications.professional.filter((a) => a.status === "Pending").length +
      products.filter((p) => p.status === "Pending Approval").length;
    return { gmv, commission, escrow, pendingApprovals };
  }, [orders, products, applications]);

  const escrowCount = orders.filter((o) => o.paymentStatus === "Escrow").length;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <PageHeader
        title="Overall Admin"
        description="Full platform oversight: traction, approvals, and payment control."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="PLATFORM GMV" value={formatNaira(stats.gmv)} icon={CircleDollarSign} tone="sky" />
        <StatCard label="COMMISSION EARNED" value={formatNaira(stats.commission)} icon={TrendingUp} tone="emerald" />
        <StatCard
          label="HELD IN ESCROW"
          value={formatNaira(stats.escrow)}
          hint={`${escrowCount} order(s)`}
          icon={Clock}
          tone="amber"
        />
        <StatCard label="PENDING APPROVALS" value={stats.pendingApprovals} icon={ShieldCheck} tone="violet" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="PRODUCTS" value={products.length} icon={Package} tone="slate" />
        <StatCard label="PROFESSIONALS" value={professionals.length} icon={Users} tone="slate" />
        <StatCard label="ORDERS" value={orders.length} icon={ShoppingBag} tone="slate" />
        <StatCard label="TRANSACTIONS" value={payments.length} icon={Receipt} tone="slate" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <AdminCard
          className="lg:col-span-2"
          title="Recent Orders"
          actions={
            <Link to="/admin/payments" className="text-xs font-semibold text-[#4d8dff] hover:underline">
              Payments →
            </Link>
          }
        >
          <RecentOrders orders={orders} showVendor />
        </AdminCard>

        <div className="space-y-6">
          <AdminCard title="Needs attention">
            <div className="space-y-2">
              <Link
                to="/admin/approvals"
                className="flex items-center justify-between rounded-lg bg-slate-800/50 border border-slate-700/30 px-4 py-3 text-sm font-medium text-slate-300 hover:border-[#0b50c4]/40 hover:text-white transition-all"
              >
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="size-4 text-[#4d8dff]" /> Approvals
                </span>
                <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-xs font-bold text-amber-400">
                  {stats.pendingApprovals}
                </span>
              </Link>
              <Link
                to="/admin/payments"
                className="flex items-center justify-between rounded-lg bg-slate-800/50 border border-slate-700/30 px-4 py-3 text-sm font-medium text-slate-300 hover:border-[#0b50c4]/40 hover:text-white transition-all"
              >
                <span className="inline-flex items-center gap-2">
                  <Wallet className="size-4 text-[#4d8dff]" /> Escrow to release
                </span>
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-bold text-emerald-400">
                  {escrowCount}
                </span>
              </Link>
            </div>
          </AdminCard>

          <AdminCard title="Quick Actions">
            <div className="space-y-2">
              <QuickAction to="/admin/approvals" icon={ShieldCheck} label="Review Approvals" />
              <QuickAction to="/admin/payments" icon={Wallet} label="Manage Payments" />
              <QuickAction to="/admin/analytics" icon={TrendingUp} label="Platform Analytics" />
              <QuickAction to="/admin/sellers" icon={Building2} label="Verify Sellers" />
            </div>
          </AdminCard>
        </div>
      </div>
    </div>
  );
}
