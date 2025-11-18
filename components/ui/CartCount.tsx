"use client";

import { useState, useEffect } from "react";

export function CartCount() {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const getCartQuantity = (): number => {
      if (typeof window === "undefined") return 0;

      const cart = localStorage.getItem("cartItems");
      if (!cart) return 0;

      try {
        const cartItems = JSON.parse(cart);
        return cartItems.reduce(
          (total: number, item: any) => total + item.quantity,
          0
        );
      } catch (error) {
        return 0;
      }
    };

    setQuantity(getCartQuantity());

    const handleStorageChange = () => {
      setQuantity(getCartQuantity());
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("cartUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cartUpdated", handleStorageChange);
    };
  }, []);

  return <span>CART ({quantity})</span>;
}
