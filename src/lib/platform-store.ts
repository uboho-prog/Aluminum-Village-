import { useEffect, useState } from "react";
import type {
  BusinessApplication,
  BusinessProduct,
  OrderItem,
  PaymentTransaction,
  PlatformOrder,
  PortfolioItem,
  ProfessionalApplication,
  ProfessionalProfile,
  ProfessionalService,
  ServiceRequest,
} from "@/lib/admin-models";
import { img } from "@/lib/images";
import { useAuthUser } from "@/lib/auth-store";
import {
  buildOrderItems,
  computeTotals,
  formatNaira,
  genPaystackReference,
  initiatePayment,
  parseNaira,
  releasePayout,
  type CartLine,
} from "@/lib/payments";

export type { CartLine } from "@/lib/payments";

/**
 * The platform's single source of truth, persisted in localStorage. This is a
 * demo-phase stand-in for a real backend/database: it follows the same
 * get/set + custom-event + hook pattern as src/lib/auth-store.ts so the whole
 * app re-renders when data changes. Money flows are simulated via
 * src/lib/payments.ts; both are structured so a real DB + Paystack can replace
 * the internals without changing the pages that consume these hooks.
 */
export type PlatformState = {
  products: BusinessProduct[];
  professionals: ProfessionalProfile[];
  serviceRequests: ServiceRequest[];
  orders: PlatformOrder[];
  payments: PaymentTransaction[];
  applications: {
    business: BusinessApplication[];
    professional: ProfessionalApplication[];
  };
  cart: CartLine[];
};

/** Demo suite logins (see SUITE_META). Seeded data is keyed to these emails so
 * signing in with the demo credentials surfaces "your own" products/profile. */
export const DEMO_BUSINESS_EMAIL = "demo@business.aluminiumvillage.com";
export const DEMO_PROFESSIONAL_EMAIL = "demo@professional.aluminiumvillage.com";

const KEY = "av_platform";
const EVT = "av-platform-change";

// ---------------------------------------------------------------------------
// Seed data. Timestamps are FIXED literals (never Date.now()) so the server
// render and the first client render are byte-identical — no hydration drift.
// ---------------------------------------------------------------------------

const demoServices: ProfessionalService[] = [
  {
    id: "AV-SVC-1",
    title: "Custom Aluminium Window & Door Fabrication",
    description:
      "Bespoke casement, sliding and bi-fold systems fabricated to spec with thermal-break options.",
    category: "Fabrication",
    priceType: "Project-based",
    price: "₦250,000",
    deliveryTime: "2–3 weeks",
    revisions: 2,
    features: ["Site measurement", "Thermal break", "2-year warranty", "Installation included"],
    status: "Active",
  },
  {
    id: "AV-SVC-2",
    title: "Curtain Wall & Facade Consultation",
    description: "Structural glazing and facade engineering review for commercial builds.",
    category: "Consultation",
    priceType: "Hourly",
    price: "₦35,000",
    deliveryTime: "48 hours",
    revisions: 1,
    features: ["Load analysis", "Material schedule", "Compliance check"],
    status: "Active",
  },
];

const demoPortfolio: PortfolioItem[] = [
  {
    id: "AV-PF-1",
    title: "Lekki Residential Tower Glazing",
    description: "Full curtain-wall glazing for a 14-floor residential tower.",
    images: [img.part1],
    category: "Facade",
    completedAt: "2026-05-20",
    clientFeedback: "Flawless finish, delivered ahead of schedule.",
  },
  {
    id: "AV-PF-2",
    title: "Victoria Island Office Retrofit",
    description: "Replaced 220 window units with thermal-break casements.",
    images: [img.part3],
    category: "Fabrication",
    completedAt: "2026-07-02",
  },
];

const SEED: PlatformState = {
  products: [
    {
      id: "AV-P-1001",
      sellerId: DEMO_BUSINESS_EMAIL,
      sellerName: "Precision Aluminium Co.",
      name: "6061-T6 Structural Pipe",
      description:
        "Heat-treated structural aluminium pipe, ideal for load-bearing frames and marine use.",
      category: "Profiles & Extrusions",
      price: "₦21,750",
      unit: "Per Meter",
      images: [img.prod1],
      specifications: { Grade: "6061-T6", Wall: "3.2mm", Finish: "Mill", Temper: "T6" },
      stock: 1200,
      minOrder: 10,
      status: "Active",
      submittedAt: "2026-08-10T09:00:00.000Z",
      approvedAt: "2026-08-11T10:00:00.000Z",
      approvedBy: "Overall Admin",
      views: 1840,
      inquiries: 96,
      orders: 42,
      totalRevenue: "₦9,135,000",
      rating: 4.8,
      reviews: 37,
    },
    {
      id: "AV-P-1002",
      sellerId: DEMO_BUSINESS_EMAIL,
      sellerName: "Precision Aluminium Co.",
      name: "Anodized Window Profile",
      description: "Silver anodized window profile with clean sightlines for residential glazing.",
      category: "Windows",
      price: "₦16,875",
      unit: "Per Meter",
      images: [img.prod3],
      specifications: { Grade: "6063", Wall: "1.5mm", Finish: "Anodized Silver" },
      stock: 640,
      minOrder: 20,
      status: "Active",
      submittedAt: "2026-08-18T09:00:00.000Z",
      approvedAt: "2026-08-19T10:00:00.000Z",
      approvedBy: "Overall Admin",
      views: 980,
      inquiries: 54,
      orders: 18,
      totalRevenue: "₦3,037,500",
      rating: 4.6,
      reviews: 15,
    },
    {
      id: "AV-P-1003",
      sellerId: DEMO_BUSINESS_EMAIL,
      sellerName: "Precision Aluminium Co.",
      name: "Powder-Coated Louvre Blade",
      description: "Matte black powder-coated louvre blade for ventilated facades.",
      category: "Profiles & Extrusions",
      price: "₦9,500",
      unit: "Per Meter",
      images: [img.prod2],
      specifications: { Grade: "6063", Wall: "1.2mm", Finish: "Powder Coated" },
      stock: 300,
      minOrder: 30,
      status: "Pending Approval",
      submittedAt: "2026-10-01T09:00:00.000Z",
      views: 0,
      inquiries: 0,
      orders: 0,
      totalRevenue: "₦0",
      rating: 0,
      reviews: 0,
    },
    {
      id: "AV-P-2001",
      sellerId: "atlas@business.aluminiumvillage.com",
      sellerName: "Atlas Metals",
      name: "5052 Marine Sheet",
      description: "Corrosion-resistant 5052-H32 sheet for marine and coastal applications.",
      category: "Profiles & Extrusions",
      price: "₦123,000",
      unit: "Per 6m Length",
      images: [img.prod2],
      specifications: { Grade: "5052-H32", Wall: "2.5mm", Finish: "Brushed" },
      stock: 220,
      minOrder: 5,
      status: "Active",
      submittedAt: "2026-07-28T09:00:00.000Z",
      approvedAt: "2026-07-29T10:00:00.000Z",
      approvedBy: "Overall Admin",
      views: 2310,
      inquiries: 140,
      orders: 61,
      totalRevenue: "₦7,503,000",
      rating: 4.9,
      reviews: 52,
    },
    {
      id: "AV-P-2002",
      sellerId: "atlas@business.aluminiumvillage.com",
      sellerName: "Atlas Metals",
      name: "Thermal Break Sliding Track",
      description: "Insulated sliding door track engineered for energy-efficient glazing.",
      category: "Doors",
      price: "₦48,200",
      unit: "Per Pc",
      images: [img.prod1],
      specifications: { Grade: "6063-T5", Wall: "2.0mm", Finish: "Anodized" },
      stock: 410,
      minOrder: 4,
      status: "Active",
      submittedAt: "2026-08-02T09:00:00.000Z",
      approvedAt: "2026-08-03T10:00:00.000Z",
      approvedBy: "Overall Admin",
      views: 1120,
      inquiries: 70,
      orders: 24,
      totalRevenue: "₦1,156,800",
      rating: 4.7,
      reviews: 20,
    },
    {
      id: "AV-P-2003",
      sellerId: "mega@business.aluminiumvillage.com",
      sellerName: "Mega-Extrusion",
      name: "Curtain Wall Mullion",
      description: "Structural mullion for stick-system curtain walls up to 6m spans.",
      category: "Profiles & Extrusions",
      price: "₦72,500",
      unit: "Per Pc",
      images: [img.prod3],
      specifications: { Grade: "6063-T6", Wall: "3.0mm", Finish: "Mill" },
      stock: 160,
      minOrder: 6,
      status: "Pending Approval",
      submittedAt: "2026-10-03T09:00:00.000Z",
      views: 0,
      inquiries: 0,
      orders: 0,
      totalRevenue: "₦0",
      rating: 0,
      reviews: 0,
    },
  ],
  professionals: [
    {
      id: "AV-PRO-1",
      userId: DEMO_PROFESSIONAL_EMAIL,
      fullName: "Chidi Okonkwo",
      headline: "Aluminium Fabrication & Facade Specialist",
      bio: "15+ years fabricating bespoke aluminium window, door and curtain-wall systems for residential and commercial projects across Lagos and Abuja.",
      avatar: img.pro1,
      location: "Lagos, NG",
      skills: ["Window Systems", "Curtain Walls", "Thermal Break", "Facade Engineering", "CNC Cutting"],
      services: demoServices,
      portfolio: demoPortfolio,
      hourlyRate: "₦35,000",
      availability: "Available",
      rating: 4.9,
      reviews: 128,
      completedJobs: 214,
      responseTime: "Under 2 hours",
      verified: true,
      joinedAt: "2024-03-11",
    },
    {
      id: "AV-PRO-2",
      userId: "aisha@professional.aluminiumvillage.com",
      fullName: "Aisha Bello",
      headline: "Certified Sliding Door & Glazing Installer",
      bio: "Precision installation of sliding doors, glass curtain walls and partitions for commercial fit-outs.",
      avatar: img.pro2,
      location: "Abuja, NG",
      skills: ["Sliding Doors", "Glass Curtain Walls", "Partitions", "Site Survey"],
      services: [
        {
          id: "AV-SVC-3",
          title: "Sliding Door System Installation",
          description: "Supply-and-fit of premium sliding door systems with alignment guarantee.",
          category: "Installation",
          priceType: "Fixed",
          price: "₦180,000",
          deliveryTime: "1 week",
          revisions: 1,
          features: ["Alignment guarantee", "Weather sealing", "1-year warranty"],
          status: "Active",
        },
      ],
      portfolio: [],
      hourlyRate: "₦28,000",
      availability: "Busy",
      rating: 4.8,
      reviews: 94,
      completedJobs: 150,
      responseTime: "Under 4 hours",
      verified: true,
      joinedAt: "2024-06-02",
    },
    {
      id: "AV-PRO-3",
      userId: "tunde@professional.aluminiumvillage.com",
      fullName: "Tunde Bakare",
      headline: "Aluminium Materials & Compliance Consultant",
      bio: "Technical consultant advising contractors on alloy selection, structural compliance and procurement.",
      avatar: img.pro3,
      location: "Port Harcourt, NG",
      skills: ["Alloy Selection", "Structural Compliance", "Procurement", "Cost Estimation"],
      services: [
        {
          id: "AV-SVC-4",
          title: "Material Specification & Compliance Review",
          description: "Independent review of aluminium material schedules against project specs.",
          category: "Consultation",
          priceType: "Hourly",
          price: "₦40,000",
          deliveryTime: "72 hours",
          revisions: 2,
          features: ["Alloy audit", "Compliance report", "Supplier shortlist"],
          status: "Active",
        },
      ],
      portfolio: [],
      hourlyRate: "₦40,000",
      availability: "Available",
      rating: 4.7,
      reviews: 61,
      completedJobs: 88,
      responseTime: "Same day",
      verified: true,
      joinedAt: "2024-09-19",
    },
  ],
  serviceRequests: [
    {
      id: "AV-REQ-1",
      professionalId: "AV-PRO-1",
      professionalName: "Chidi Okonkwo",
      clientId: "USR-0056",
      clientName: "Fatima Bello",
      clientEmail: "fatima@buildright.ng",
      clientPhone: "+234 802 555 0101",
      serviceId: "AV-SVC-1",
      serviceTitle: "Custom Aluminium Window & Door Fabrication",
      message:
        "Need 32 thermal-break casement windows fabricated and installed for a duplex in Ikoyi.",
      budget: "₦4,500,000",
      timeline: "6 weeks",
      status: "New",
      createdAt: "2026-10-02T14:30:00.000Z",
      updatedAt: "2026-10-02T14:30:00.000Z",
    },
    {
      id: "AV-REQ-2",
      professionalId: "AV-PRO-1",
      professionalName: "Chidi Okonkwo",
      clientId: "USR-0103",
      clientName: "Yusuf Abdullahi",
      clientEmail: "yusuf@kanodev.ng",
      clientPhone: "+234 803 555 0144",
      serviceId: "AV-SVC-2",
      serviceTitle: "Curtain Wall & Facade Consultation",
      message: "Facade engineering review for a 9-floor office block in Kano.",
      budget: "₦800,000",
      timeline: "2 weeks",
      status: "Quoted",
      createdAt: "2026-09-28T09:15:00.000Z",
      updatedAt: "2026-09-29T11:00:00.000Z",
      quote: {
        id: "AV-Q-1",
        requestId: "AV-REQ-2",
        amount: "₦720,000",
        description: "Full facade load analysis, material schedule and compliance report.",
        deliveryTime: "2 weeks",
        terms: "50% upfront via escrow, balance on delivery.",
        status: "Pending",
        createdAt: "2026-09-29T11:00:00.000Z",
      },
    },
  ],
  orders: [
    {
      id: "AV-ORD-5001",
      orderNumber: "ALV-5001",
      type: "product",
      buyerId: "USR-0034",
      buyerName: "Emeka Adeyemi",
      buyerEmail: "emeka@forgedynamics.ng",
      sellerId: DEMO_BUSINESS_EMAIL,
      sellerName: "Precision Aluminium Co.",
      sellerType: "business",
      items: [
        {
          id: "OI-5001-1",
          name: "6061-T6 Structural Pipe",
          quantity: 40,
          unitPrice: "₦21,750",
          total: "₦870,000",
          sellerPayout: "₦804,750",
          platformCommission: "₦65,250",
        },
      ],
      subtotal: "₦870,000",
      platformFee: "₦65,250",
      total: "₦870,000",
      paymentStatus: "Escrow",
      paymentMethod: "Card",
      paystackReference: "AVX_SEED5001",
      status: "Confirmed",
      createdAt: "2026-10-04T12:00:00.000Z",
      updatedAt: "2026-10-04T12:00:00.000Z",
    },
    {
      id: "AV-ORD-5002",
      orderNumber: "ALV-5002",
      type: "product",
      buyerId: "USR-0012",
      buyerName: "Chidinma Okafor",
      buyerEmail: "chidinma@urbanbuild.ng",
      sellerId: "atlas@business.aluminiumvillage.com",
      sellerName: "Atlas Metals",
      sellerType: "business",
      items: [
        {
          id: "OI-5002-1",
          name: "5052 Marine Sheet",
          quantity: 6,
          unitPrice: "₦123,000",
          total: "₦738,000",
          sellerPayout: "₦682,650",
          platformCommission: "₦55,350",
        },
      ],
      subtotal: "₦738,000",
      platformFee: "₦55,350",
      total: "₦738,000",
      paymentStatus: "Released",
      paymentMethod: "Bank Transfer",
      paystackReference: "AVX_SEED5002",
      escrowReleaseDate: "2026-09-30T15:00:00.000Z",
      status: "Completed",
      createdAt: "2026-09-27T10:00:00.000Z",
      updatedAt: "2026-09-30T15:00:00.000Z",
    },
  ],
  payments: [
    {
      id: "TXN-ALV-5001-IN",
      orderId: "AV-ORD-5001",
      orderNumber: "ALV-5001",
      amount: "₦870,000",
      platformFee: "₦65,250",
      sellerAmount: "₦804,750",
      status: "Completed",
      type: "Customer Payment",
      paystackReference: "AVX_SEED5001",
      paystackStatus: "success",
      createdAt: "2026-10-04T12:00:00.000Z",
      completedAt: "2026-10-04T12:00:00.000Z",
    },
    {
      id: "TXN-ALV-5002-IN",
      orderId: "AV-ORD-5002",
      orderNumber: "ALV-5002",
      amount: "₦738,000",
      platformFee: "₦55,350",
      sellerAmount: "₦682,650",
      status: "Completed",
      type: "Customer Payment",
      paystackReference: "AVX_SEED5002",
      paystackStatus: "success",
      createdAt: "2026-09-27T10:00:00.000Z",
      completedAt: "2026-09-27T10:00:00.000Z",
    },
    {
      id: "TXN-ALV-5002-OUT",
      orderId: "AV-ORD-5002",
      orderNumber: "ALV-5002",
      amount: "₦682,650",
      platformFee: "₦55,350",
      sellerAmount: "₦682,650",
      status: "Completed",
      type: "Seller Payout",
      paystackReference: "AVX_SEEDPO5002",
      paystackStatus: "success",
      createdAt: "2026-09-30T15:00:00.000Z",
      completedAt: "2026-09-30T15:00:00.000Z",
    },
  ],
  applications: {
    business: [
      {
        id: "AV-BAPP-1",
        businessName: "Delta Alloy Works",
        ownerName: "Ngozi Eze",
        email: "ngozi@deltaalloy.ng",
        phone: "+234 806 555 0199",
        category: "Fabricator",
        address: "22 Trans-Amadi Industrial Layout, Port Harcourt",
        cacNumber: "RC-1884223",
        bankDetails: {
          bankName: "Zenith Bank",
          accountNumber: "1023456789",
          accountName: "Delta Alloy Works Ltd",
        },
        paystackConnected: false,
        status: "Pending",
        submittedAt: "2026-10-03T08:30:00.000Z",
      },
    ],
    professional: [
      {
        id: "AV-PAPP-1",
        fullName: "Kelechi Nwosu",
        email: "kelechi@fabpro.ng",
        phone: "+234 807 555 0170",
        headline: "Freelance Aluminium Fabricator",
        skills: ["Window Fabrication", "Welding", "Finishing"],
        experience: "8 years",
        portfolio: [],
        hourlyRate: "₦22,000",
        status: "Pending",
        submittedAt: "2026-10-05T16:45:00.000Z",
      },
    ],
  },
  cart: [],
};

// ---------------------------------------------------------------------------
// Persistence
// ---------------------------------------------------------------------------

let counter = 0;
export function uid(prefix: string): string {
  counter += 1;
  return `${prefix}-${Date.now().toString(36)}${counter}${Math.random().toString(36).slice(2, 6)}`;
}

function read(): PlatformState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as PlatformState) : null;
  } catch {
    return null;
  }
}

export function getState(): PlatformState {
  if (typeof window === "undefined") return SEED;
  const stored = read();
  if (!stored) {
    try {
      localStorage.setItem(KEY, JSON.stringify(SEED));
    } catch {
      /* ignore */
    }
    return SEED;
  }
  return stored;
}

function setState(next: PlatformState) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(EVT));
}

export function update(fn: (s: PlatformState) => PlatformState) {
  setState(fn(getState()));
}

/** Reset the store to its seeded demo state (used by a dev/debug action). */
export function resetPlatform() {
  setState(SEED);
}

// ---------------------------------------------------------------------------
// Hooks (hydration-safe: SEED on server + first client render, real after mount)
// ---------------------------------------------------------------------------

export function usePlatform(): PlatformState {
  const [state, setLocal] = useState<PlatformState>(SEED);
  useEffect(() => {
    setLocal(getState());
    const onChange = () => setLocal(getState());
    window.addEventListener(EVT, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(EVT, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);
  return state;
}

/** Products owned by the signed-in business suite (keyed by email). */
export function useMyProducts(): BusinessProduct[] {
  const { products } = usePlatform();
  const user = useAuthUser();
  return products.filter((p) => p.sellerId === user?.email);
}

/** The signed-in professional's own profile (or null if not set up yet). */
export function useMyProfile(): ProfessionalProfile | null {
  const { professionals } = usePlatform();
  const user = useAuthUser();
  return professionals.find((p) => p.userId === user?.email) ?? null;
}

/** Service requests addressed to the signed-in professional. */
export function useMyRequests(): ServiceRequest[] {
  const { serviceRequests, professionals } = usePlatform();
  const user = useAuthUser();
  const mine = professionals.find((p) => p.userId === user?.email);
  if (!mine) return [];
  return serviceRequests.filter((r) => r.professionalId === mine.id);
}

/** Orders where the signed-in suite user is the vendor. */
export function useMyOrders(): PlatformOrder[] {
  const { orders } = usePlatform();
  const user = useAuthUser();
  return orders.filter((o) => o.sellerId === user?.email);
}

/** Orders placed by the signed-in buyer (matched by email). */
export function useMyPurchases(): PlatformOrder[] {
  const { orders } = usePlatform();
  const user = useAuthUser();
  return orders.filter((o) => o.buyerEmail === user?.email);
}

/** Public: only approved/active products appear on the marketplace. */
export function useActiveProducts(): BusinessProduct[] {
  const { products } = usePlatform();
  return products.filter((p) => p.status === "Active");
}

/** Public: verified professionals appear in the directory. */
export function useActiveProfessionals(): ProfessionalProfile[] {
  const { professionals } = usePlatform();
  return professionals;
}

export function useCart(): CartLine[] {
  return usePlatform().cart;
}

// ---------------------------------------------------------------------------
// Actions — Business suite
// ---------------------------------------------------------------------------

export type ProductDraft = {
  name: string;
  description: string;
  category: string;
  price: string;
  unit: string;
  stock: number;
  minOrder: number;
  specifications: Record<string, string>;
  images: string[];
};

export function createProduct(
  seller: { id: string; name: string },
  draft: ProductDraft,
  submitForApproval: boolean,
): BusinessProduct {
  const product: BusinessProduct = {
    id: uid("AV-P"),
    sellerId: seller.id,
    sellerName: seller.name,
    name: draft.name,
    description: draft.description,
    category: draft.category,
    price: draft.price,
    unit: draft.unit,
    images: draft.images.length ? draft.images : [img.prod1],
    specifications: draft.specifications,
    stock: draft.stock,
    minOrder: draft.minOrder,
    status: submitForApproval ? "Pending Approval" : "Draft",
    submittedAt: new Date().toISOString(),
    views: 0,
    inquiries: 0,
    orders: 0,
    totalRevenue: "₦0",
    rating: 0,
    reviews: 0,
  };
  update((s) => ({ ...s, products: [product, ...s.products] }));
  return product;
}

export function updateProduct(id: string, patch: Partial<BusinessProduct>) {
  update((s) => ({
    ...s,
    products: s.products.map((p) => (p.id === id ? { ...p, ...patch } : p)),
  }));
}

export function submitProductForApproval(id: string) {
  updateProduct(id, { status: "Pending Approval", submittedAt: new Date().toISOString() });
}

// ---------------------------------------------------------------------------
// Actions — Professional suite
// ---------------------------------------------------------------------------

export function upsertOwnProfile(
  user: { email: string; name: string },
  patch: Partial<ProfessionalProfile>,
) {
  update((s) => {
    const existing = s.professionals.find((p) => p.userId === user.email);
    if (existing) {
      return {
        ...s,
        professionals: s.professionals.map((p) =>
          p.userId === user.email ? { ...p, ...patch } : p,
        ),
      };
    }
    const created: ProfessionalProfile = {
      id: uid("AV-PRO"),
      userId: user.email,
      fullName: patch.fullName ?? user.name,
      headline: patch.headline ?? "",
      bio: patch.bio ?? "",
      avatar: patch.avatar ?? img.pro4,
      location: patch.location ?? "",
      skills: patch.skills ?? [],
      services: patch.services ?? [],
      portfolio: patch.portfolio ?? [],
      hourlyRate: patch.hourlyRate ?? "₦0",
      availability: patch.availability ?? "Available",
      rating: 0,
      reviews: 0,
      completedJobs: 0,
      responseTime: patch.responseTime ?? "Within a day",
      verified: false,
      joinedAt: new Date().toISOString().slice(0, 10),
    };
    return { ...s, professionals: [created, ...s.professionals] };
  });
}

export function saveService(profileId: string, service: ProfessionalService) {
  update((s) => ({
    ...s,
    professionals: s.professionals.map((p) => {
      if (p.id !== profileId) return p;
      const exists = p.services.some((sv) => sv.id === service.id);
      return {
        ...p,
        services: exists
          ? p.services.map((sv) => (sv.id === service.id ? service : sv))
          : [...p.services, service],
      };
    }),
  }));
}

export function removeService(profileId: string, serviceId: string) {
  update((s) => ({
    ...s,
    professionals: s.professionals.map((p) =>
      p.id === profileId ? { ...p, services: p.services.filter((sv) => sv.id !== serviceId) } : p,
    ),
  }));
}

/** Professional sends a quote in response to a request. */
export function respondToRequest(
  requestId: string,
  quote: { amount: string; description: string; deliveryTime: string; terms: string },
) {
  update((s) => ({
    ...s,
    serviceRequests: s.serviceRequests.map((r) =>
      r.id === requestId
        ? {
            ...r,
            status: "Quoted",
            updatedAt: new Date().toISOString(),
            quote: {
              id: uid("AV-Q"),
              requestId,
              amount: quote.amount,
              description: quote.description,
              deliveryTime: quote.deliveryTime,
              terms: quote.terms,
              status: "Pending",
              createdAt: new Date().toISOString(),
            },
          }
        : r,
    ),
  }));
}

export function setRequestStatus(requestId: string, status: ServiceRequest["status"]) {
  update((s) => ({
    ...s,
    serviceRequests: s.serviceRequests.map((r) =>
      r.id === requestId ? { ...r, status, updatedAt: new Date().toISOString() } : r,
    ),
  }));
}

/** Public: a buyer requests a service from a professional. */
export function createServiceRequest(input: {
  professionalId: string;
  professionalName: string;
  client: { id: string; name: string; email: string; phone: string };
  serviceId: string;
  serviceTitle: string;
  message: string;
  budget: string;
  timeline: string;
}): ServiceRequest {
  const now = new Date().toISOString();
  const req: ServiceRequest = {
    id: uid("AV-REQ"),
    professionalId: input.professionalId,
    professionalName: input.professionalName,
    clientId: input.client.id,
    clientName: input.client.name,
    clientEmail: input.client.email,
    clientPhone: input.client.phone,
    serviceId: input.serviceId,
    serviceTitle: input.serviceTitle,
    message: input.message,
    budget: input.budget,
    timeline: input.timeline,
    status: "New",
    createdAt: now,
    updatedAt: now,
  };
  update((s) => ({ ...s, serviceRequests: [req, ...s.serviceRequests] }));
  return req;
}

// ---------------------------------------------------------------------------
// Actions — Buyer / cart / checkout
// ---------------------------------------------------------------------------

export function addToCart(line: CartLine) {
  update((s) => {
    const existing = s.cart.find((l) => l.productId === line.productId);
    return {
      ...s,
      cart: existing
        ? s.cart.map((l) =>
            l.productId === line.productId ? { ...l, quantity: l.quantity + line.quantity } : l,
          )
        : [...s.cart, line],
    };
  });
}

export function setCartQuantity(productId: string, quantity: number) {
  update((s) => ({
    ...s,
    cart: s.cart
      .map((l) => (l.productId === productId ? { ...l, quantity } : l))
      .filter((l) => l.quantity > 0),
  }));
}

export function removeFromCart(productId: string) {
  update((s) => ({ ...s, cart: s.cart.filter((l) => l.productId !== productId) }));
}

export function clearCart() {
  update((s) => ({ ...s, cart: [] }));
}

/**
 * Place the current cart as orders — one per vendor. Each order's funds are
 * held in escrow by Aluminium Village (paymentStatus "Escrow") until the
 * overall admin releases them. Returns the created orders.
 */
export function placeOrder(
  buyer: { id: string; name: string; email: string },
  paymentMethod: PlatformOrder["paymentMethod"],
): PlatformOrder[] {
  const { cart } = getState();
  if (cart.length === 0) return [];

  const bySeller = new Map<string, CartLine[]>();
  for (const line of cart) {
    const arr = bySeller.get(line.sellerId) ?? [];
    arr.push(line);
    bySeller.set(line.sellerId, arr);
  }

  const now = new Date().toISOString();
  const newOrders: PlatformOrder[] = [];
  const newPayments: PaymentTransaction[] = [];

  let seq = Math.floor(Math.random() * 9000) + 1000;
  for (const [sellerId, lines] of bySeller) {
    const totals = computeTotals(lines);
    const items: OrderItem[] = buildOrderItems(lines);
    seq += 1;
    const order: PlatformOrder = {
      id: uid("AV-ORD"),
      orderNumber: `ALV-${seq}`,
      type: lines[0].sellerType === "professional" ? "service" : "product",
      buyerId: buyer.id,
      buyerName: buyer.name,
      buyerEmail: buyer.email,
      sellerId,
      sellerName: lines[0].sellerName,
      sellerType: lines[0].sellerType,
      items,
      subtotal: formatNaira(totals.subtotal),
      platformFee: formatNaira(totals.platformFee),
      total: formatNaira(totals.total),
      paymentStatus: "Escrow",
      paymentMethod,
      paystackReference: genPaystackReference(),
      status: "Confirmed",
      createdAt: now,
      updatedAt: now,
    };
    newOrders.push(order);
    newPayments.push(initiatePayment(order));
  }

  update((s) => ({
    ...s,
    orders: [...newOrders, ...s.orders],
    payments: [...newPayments, ...s.payments],
    // reflect sales on the product records
    products: s.products.map((p) => {
      const sold = cart.find((l) => l.productId === p.id);
      if (!sold) return p;
      return {
        ...p,
        orders: p.orders + sold.quantity,
        stock: Math.max(0, p.stock - sold.quantity),
        totalRevenue: formatNaira(
          parseNaira(p.totalRevenue) + parseNaira(sold.unitPrice) * sold.quantity,
        ),
      };
    }),
    cart: [],
  }));

  return newOrders;
}

// ---------------------------------------------------------------------------
// Actions — Overall admin (approvals + payments)
// ---------------------------------------------------------------------------

export function approveProduct(id: string, reviewer: string) {
  updateProduct(id, {
    status: "Active",
    approvedAt: new Date().toISOString(),
    approvedBy: reviewer,
    rejectionReason: undefined,
  });
}

export function rejectProduct(id: string, reviewer: string, reason: string) {
  updateProduct(id, { status: "Rejected", approvedBy: reviewer, rejectionReason: reason });
}

/** Send a product back to the vendor with a change note (becomes a Draft). */
export function requestProductChanges(id: string, reviewer: string, note: string) {
  updateProduct(id, { status: "Draft", approvedBy: reviewer, rejectionReason: note });
}

export function approveApplication(
  kind: "business" | "professional",
  id: string,
  reviewer: string,
) {
  const now = new Date().toISOString();
  update((s) => {
    if (kind === "business") {
      return {
        ...s,
        applications: {
          ...s.applications,
          business: s.applications.business.map((a) =>
            a.id === id
              ? { ...a, status: "Approved", reviewedAt: now, reviewedBy: reviewer }
              : a,
          ),
        },
      };
    }
    // Approving a professional application also creates a public (verified) profile.
    const app = s.applications.professional.find((a) => a.id === id);
    const newProfile: ProfessionalProfile | null = app
      ? {
          id: uid("AV-PRO"),
          userId: app.email,
          fullName: app.fullName,
          headline: app.headline,
          bio: `${app.experience} experienced professional.`,
          avatar: img.pro4,
          location: "Nigeria",
          skills: app.skills,
          services: [],
          portfolio: app.portfolio,
          hourlyRate: app.hourlyRate,
          availability: "Available",
          rating: 0,
          reviews: 0,
          completedJobs: 0,
          responseTime: "Within a day",
          verified: true,
          joinedAt: now.slice(0, 10),
        }
      : null;
    return {
      ...s,
      professionals: newProfile ? [newProfile, ...s.professionals] : s.professionals,
      applications: {
        ...s.applications,
        professional: s.applications.professional.map((a) =>
          a.id === id ? { ...a, status: "Approved", reviewedAt: now, reviewedBy: reviewer } : a,
        ),
      },
    };
  });
}

export function rejectApplication(
  kind: "business" | "professional",
  id: string,
  reviewer: string,
  notes: string,
) {
  const now = new Date().toISOString();
  update((s) => ({
    ...s,
    applications: {
      ...s.applications,
      [kind]: s.applications[kind].map((a: BusinessApplication | ProfessionalApplication) =>
        a.id === id ? { ...a, status: "Rejected", reviewedAt: now, reviewedBy: reviewer, notes } : a,
      ),
    },
  }));
}

export function createBusinessApplication(
  input: Omit<BusinessApplication, "id" | "status" | "submittedAt">,
): BusinessApplication {
  const app: BusinessApplication = {
    ...input,
    id: uid("AV-BAPP"),
    status: "Pending",
    submittedAt: new Date().toISOString(),
  };
  update((s) => ({
    ...s,
    applications: { ...s.applications, business: [app, ...s.applications.business] },
  }));
  return app;
}

export function createProfessionalApplication(
  input: Omit<ProfessionalApplication, "id" | "status" | "submittedAt">,
): ProfessionalApplication {
  const app: ProfessionalApplication = {
    ...input,
    id: uid("AV-PAPP"),
    status: "Pending",
    submittedAt: new Date().toISOString(),
  };
  update((s) => ({
    ...s,
    applications: { ...s.applications, professional: [app, ...s.applications.professional] },
  }));
  return app;
}

/** Release an escrowed order's funds to the vendor. */
export function releasePaymentToVendor(orderId: string) {
  const now = new Date().toISOString();
  update((s) => {
    const order = s.orders.find((o) => o.id === orderId);
    if (!order || order.paymentStatus !== "Escrow") return s;
    const payout = releasePayout(order);
    return {
      ...s,
      orders: s.orders.map((o) =>
        o.id === orderId
          ? { ...o, paymentStatus: "Released", status: "Completed", escrowReleaseDate: now, updatedAt: now }
          : o,
      ),
      payments: [payout, ...s.payments],
    };
  });
}

export function refundOrder(orderId: string) {
  const now = new Date().toISOString();
  update((s) => {
    const order = s.orders.find((o) => o.id === orderId);
    if (!order) return s;
    const refund: PaymentTransaction = {
      id: `TXN-${order.orderNumber}-REF`,
      orderId: order.id,
      orderNumber: order.orderNumber,
      amount: order.total,
      platformFee: "₦0",
      sellerAmount: "₦0",
      status: "Completed",
      type: "Refund",
      paystackReference: genPaystackReference(),
      paystackStatus: "reversed",
      createdAt: now,
      completedAt: now,
    };
    return {
      ...s,
      orders: s.orders.map((o) =>
        o.id === orderId
          ? { ...o, paymentStatus: "Refunded", status: "Cancelled", updatedAt: now }
          : o,
      ),
      payments: [refund, ...s.payments],
    };
  });
}
