export interface CartItem {
  scarf_id: number;
  quantity: number;
}

export function addToCart(scarfId: number, quantity: number = 1): void {
  if (typeof window === "undefined") return;

  const existingCart = localStorage.getItem("cartItems");
  let cart: CartItem[] = existingCart ? JSON.parse(existingCart) : [];

  const existingItem = cart.find((item) => item.scarf_id === scarfId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ scarf_id: scarfId, quantity });
  }

  localStorage.setItem("cartItems", JSON.stringify(cart));
  window.dispatchEvent(new Event("cartUpdated"));
}

export function getCartItems(): CartItem[] {
  if (typeof window === "undefined") return [];

  const cart = localStorage.getItem("cartItems");
  return cart ? JSON.parse(cart) : [];
}

export function removeFromCart(scarfId: number): void {
  if (typeof window === "undefined") return;

  const existingCart = localStorage.getItem("cartItems");
  if (!existingCart) return;

  const cart: CartItem[] = JSON.parse(existingCart);
  const updatedCart = cart.filter((item) => item.scarf_id !== scarfId);

  localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("cartUpdated"));
}

export function updateCartQuantity(scarfId: number, newQuantity: number): void {
  if (typeof window === "undefined") return;

  const existingCart = localStorage.getItem("cartItems");
  if (!existingCart) return;

  const cart: CartItem[] = JSON.parse(existingCart);
  const updatedCart = cart
    .map((item) =>
      item.scarf_id === scarfId ? { ...item, quantity: newQuantity } : item
    )
    .filter((item) => item.quantity > 0);

  localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("cartUpdated"));
}

export function clearCart(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem("cartItems");
  window.dispatchEvent(new Event("cartUpdated"));
}

// Add this to your lib/cart.ts
export const getCartTotal = async (): Promise<number> => {
  if (typeof window === "undefined") return 0;

  try {
    // Get cart items from localStorage
    const cart = localStorage.getItem("cartItems");
    if (!cart) return 0;

    const cartItems = JSON.parse(cart);

    // Fetch scarf data
    const response = await fetch("/data/Scarfs.json");
    const data = await response.json();
    const scarfs = data.scarfs;

    // Calculate total
    return cartItems.reduce((total: number, cartItem: any) => {
      const scarf = scarfs.find((s: any) => s.id === cartItem.scarf_id);
      return total + (scarf ? scarf.price * cartItem.quantity : 0);
    }, 0);
  } catch (error) {
    return 0;
  }
};
