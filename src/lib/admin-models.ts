export type BusinessProduct = {
  id: string;
  sellerId: string;
  sellerName: string;
  name: string;
  description: string;
  category: string;
  price: string;
  unit: string;
  images: string[];
  specifications: Record<string, string>;
  stock: number;
  minOrder: number;
  status: "Draft" | "Pending Approval" | "Active" | "Rejected" | "Inactive";
  submittedAt: string;
  approvedAt?: string;
  approvedBy?: string;
  rejectionReason?: string;
  views: number;
  inquiries: number;
  orders: number;
  totalRevenue: string;
  rating: number;
  reviews: number;
};

export type ProfessionalProfile = {
  id: string;
  userId: string;
  fullName: string;
  headline: string;
  bio: string;
  avatar: string;
  location: string;
  skills: string[];
  services: ProfessionalService[];
  portfolio: PortfolioItem[];
  hourlyRate: string;
  availability: "Available" | "Busy" | "Offline";
  rating: number;
  reviews: number;
  completedJobs: number;
  responseTime: string;
  verified: boolean;
  joinedAt: string;
};

export type ProfessionalService = {
  id: string;
  title: string;
  description: string;
  category: string;
  priceType: "Fixed" | "Hourly" | "Project-based";
  price: string;
  deliveryTime: string;
  revisions: number;
  features: string[];
  status: "Active" | "Paused" | "Draft";
};

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: string;
  completedAt: string;
  clientFeedback?: string;
};

export type ServiceRequest = {
  id: string;
  professionalId: string;
  professionalName: string;
  clientId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  serviceId: string;
  serviceTitle: string;
  message: string;
  budget: string;
  timeline: string;
  status: "New" | "In Discussion" | "Quoted" | "Accepted" | "In Progress" | "Completed" | "Cancelled";
  createdAt: string;
  updatedAt: string;
  quote?: ServiceQuote;
};

export type ServiceQuote = {
  id: string;
  requestId: string;
  amount: string;
  description: string;
  deliveryTime: string;
  terms: string;
  status: "Pending" | "Accepted" | "Rejected" | "Expired";
  createdAt: string;
};

export type SalesRecord = {
  id: string;
  productId: string;
  productName: string;
  sellerId: string;
  sellerName: string;
  buyerId: string;
  buyerName: string;
  quantity: number;
  unitPrice: string;
  totalAmount: string;
  commission: string;
  sellerPayout: string;
  status: "Pending" | "Paid" | "Shipped" | "Delivered" | "Completed" | "Refunded" | "Disputed";
  paymentStatus: "Escrow" | "Released" | "Refunded";
  orderDate: string;
  shippedDate?: string;
  deliveredDate?: string;
};

export type ProductPerformance = {
  productId: string;
  productName: string;
  views: number;
  inquiries: number;
  orders: number;
  conversionRate: number;
  revenue: string;
  avgRating: number;
  topRegions: { region: string; orders: number }[];
  monthlyTrend: { month: string; views: number; orders: number; revenue: string }[];
};

export type PlatformOrder = {
  id: string;
  orderNumber: string;
  type: "product" | "service";
  buyerId: string;
  buyerName: string;
  buyerEmail: string;
  sellerId: string;
  sellerName: string;
  sellerType: "business" | "professional";
  items: OrderItem[];
  subtotal: string;
  platformFee: string;
  total: string;
  paymentStatus: "Pending" | "Paid" | "Escrow" | "Released" | "Refunded" | "Failed";
  paymentMethod: "Card" | "Bank Transfer" | "USSD" | "Wallet";
  paystackReference: string;
  escrowReleaseDate?: string;
  status: "New" | "Confirmed" | "Processing" | "Shipped" | "Delivered" | "Completed" | "Cancelled" | "Disputed";
  createdAt: string;
  updatedAt: string;
};

export type OrderItem = {
  id: string;
  name: string;
  quantity: number;
  unitPrice: string;
  total: string;
  sellerPayout: string;
  platformCommission: string;
};

export type ApprovalQueue = {
  businessApplications: BusinessApplication[];
  professionalApplications: ProfessionalApplication[];
  productApprovals: ProductApproval[];
  profileChanges: ProfileChangeRequest[];
};

export type BusinessApplication = {
  id: string;
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  category: string;
  address: string;
  cacNumber: string;
  bankDetails: BankDetails;
  paystackConnected: boolean;
  status: "Pending" | "Under Review" | "Approved" | "Rejected";
  submittedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
  notes?: string;
};

export type ProfessionalApplication = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  headline: string;
  skills: string[];
  experience: string;
  portfolio: PortfolioItem[];
  hourlyRate: string;
  status: "Pending" | "Under Review" | "Approved" | "Rejected";
  submittedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
  notes?: string;
};

export type ProductApproval = {
  id: string;
  productId: string;
  productName: string;
  sellerId: string;
  sellerName: string;
  category: string;
  price: string;
  images: string[];
  status: "Pending" | "Under Review" | "Approved" | "Rejected" | "Changes Requested";
  submittedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
  notes?: string;
  changeRequests?: ChangeRequest[];
};

export type ProfileChangeRequest = {
  id: string;
  userId: string;
  userName: string;
  userType: "business" | "professional";
  field: string;
  currentValue: string;
  requestedValue: string;
  reason: string;
  status: "Pending" | "Approved" | "Rejected";
  requestedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
};

export type ChangeRequest = {
  id: string;
  field: string;
  currentValue: string;
  requestedValue: string;
  reason: string;
  status: "Pending" | "Approved" | "Rejected";
  requestedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
};

export type BankDetails = {
  bankName: string;
  accountNumber: string;
  accountName: string;
  paystackSubaccountCode?: string;
};

export type PaymentTransaction = {
  id: string;
  orderId: string;
  orderNumber: string;
  amount: string;
  platformFee: string;
  sellerAmount: string;
  status: "Initiated" | "Processing" | "Completed" | "Failed" | "Refunded";
  type: "Customer Payment" | "Seller Payout" | "Platform Fee" | "Refund";
  paystackReference: string;
  paystackStatus: string;
  createdAt: string;
  completedAt?: string;
  failureReason?: string;
};

export type PlatformAnalytics = {
  totalRevenue: string;
  totalCommission: string;
  totalOrders: number;
  activeUsers: number;
  activeSellers: number;
  activeProfessionals: number;
  conversionRate: number;
  avgOrderValue: string;
  monthlyRevenue: { month: string; revenue: string; commission: string; orders: number }[];
  categoryPerformance: { category: string; revenue: string; orders: number }[];
  topSellers: { id: string; name: string; revenue: string; orders: number }[];
  topProfessionals: { id: string; name: string; revenue: string; jobs: number }[];
  disputes: { total: number; resolved: number; pending: number; refunded: string };
  paymentSuccessRate: number;
};