import type { OrderItem, PaymentTransaction, PlatformOrder } from "@/lib/admin-models";

/**
 * Payment seam for Aluminium Village.
 *
 * The marketplace runs an escrow model: a buyer pays Aluminium Village, the
 * platform holds the funds, keeps its commission, and later releases the
 * balance to the vendor. Today every money movement is simulated in the
 * client store (see src/lib/platform-store.ts). These helpers are pure and
 * carry the Paystack-shaped fields so that, later, `initiatePayment` and
 * `releasePayout` can be swapped for `createServerFn` handlers that call
 * Paystack (transaction init + subaccount split / transfer) without the UI
 * or the store having to change.
 */

/** Platform commission taken from each order's subtotal. */
export const PLATFORM_FEE_RATE = 0.075;

/** Flat freight estimate added to the buyer's total (collected by platform). */
export const SHIPPING_FEE = 0;

/** Parse a Naira display string (e.g. "₦21,750") or number into a number. */
export function parseNaira(value: string | number): number {
  if (typeof value === "number") return value;
  const n = Number(String(value).replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

/** Format a number as a Naira display string (e.g. "₦21,750"). */
export function formatNaira(amount: number): string {
  return "₦" + Math.round(amount).toLocaleString("en-NG");
}

/** A unique, Paystack-looking reference for a transaction. */
export function genPaystackReference(): string {
  return (
    "AVX_" +
    Date.now().toString(36).toUpperCase() +
    Math.random().toString(36).slice(2, 8).toUpperCase()
  );
}

export type CartLine = {
  productId: string;
  name: string;
  image: string;
  unitPrice: string;
  quantity: number;
  sellerId: string;
  sellerName: string;
  sellerType: "business" | "professional";
};

export type OrderTotals = {
  subtotal: number;
  platformFee: number;
  sellerPayout: number;
  total: number;
};

/** Commission + payout math for a set of line items. */
export function computeTotals(lines: Pick<CartLine, "unitPrice" | "quantity">[]): OrderTotals {
  const subtotal = lines.reduce((sum, l) => sum + parseNaira(l.unitPrice) * l.quantity, 0);
  const platformFee = subtotal * PLATFORM_FEE_RATE;
  return {
    subtotal,
    platformFee,
    sellerPayout: subtotal - platformFee,
    total: subtotal + SHIPPING_FEE,
  };
}

/** Build the order line items (with per-line commission + payout) for a seller's lines. */
export function buildOrderItems(lines: CartLine[]): OrderItem[] {
  return lines.map((l) => {
    const lineSubtotal = parseNaira(l.unitPrice) * l.quantity;
    const commission = lineSubtotal * PLATFORM_FEE_RATE;
    return {
      id: `OI-${l.productId}-${l.quantity}`,
      name: l.name,
      quantity: l.quantity,
      unitPrice: formatNaira(parseNaira(l.unitPrice)),
      total: formatNaira(lineSubtotal),
      sellerPayout: formatNaira(lineSubtotal - commission),
      platformCommission: formatNaira(commission),
    };
  });
}

/**
 * The buyer's payment INTO Aluminium Village. In the simulated flow this
 * succeeds immediately and the funds are considered held in escrow.
 */
export function initiatePayment(order: PlatformOrder): PaymentTransaction {
  const now = new Date().toISOString();
  return {
    id: `TXN-${order.orderNumber}-IN`,
    orderId: order.id,
    orderNumber: order.orderNumber,
    amount: order.total,
    platformFee: order.platformFee,
    sellerAmount: formatNaira(parseNaira(order.subtotal) - parseNaira(order.platformFee)),
    status: "Completed",
    type: "Customer Payment",
    paystackReference: order.paystackReference,
    paystackStatus: "success",
    createdAt: now,
    completedAt: now,
  };
}

/**
 * The payout OUT of Aluminium Village to the vendor, created when the overall
 * admin releases an escrowed order.
 */
export function releasePayout(order: PlatformOrder): PaymentTransaction {
  const now = new Date().toISOString();
  const sellerAmount = parseNaira(order.subtotal) - parseNaira(order.platformFee);
  return {
    id: `TXN-${order.orderNumber}-OUT`,
    orderId: order.id,
    orderNumber: order.orderNumber,
    amount: formatNaira(sellerAmount),
    platformFee: order.platformFee,
    sellerAmount: formatNaira(sellerAmount),
    status: "Completed",
    type: "Seller Payout",
    paystackReference: genPaystackReference(),
    paystackStatus: "success",
    createdAt: now,
    completedAt: now,
  };
}
