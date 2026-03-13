interface OrderRecord {
  id: string;
  timestamp: string;
  customer: any;
  items: any[];
  total: number;
  paymentMethod: string;
  paymentStatus: string;
  shippingAddress: any;
}

export function saveOrderToFile(order: OrderRecord): { success: boolean } {
  try {
    if (typeof window === "undefined") {
      return { success: false };
    }

    const existingOrdersJSON = localStorage.getItem("divinity_orders");
    const existingOrders: OrderRecord[] = existingOrdersJSON
      ? JSON.parse(existingOrdersJSON)
      : [];

    const updatedOrders = [...existingOrders, order];

    localStorage.setItem("divinity_orders", JSON.stringify(updatedOrders));

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}

export function generateOrderId(): string {
  return `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function getAllOrders(): OrderRecord[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const ordersJSON = localStorage.getItem("divinity_orders");
    return ordersJSON ? JSON.parse(ordersJSON) : [];
  } catch (error) {
    return [];
  }
}

export function clearOrders(): void {
  if (typeof window === "undefined") return;

  localStorage.removeItem("divinity_orders");
}
