"use client";
import { useState, useEffect } from "react";
import scarfsData from "../app/data/Scarfs.json";

export default function CartTotal() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      try {
        const cart = localStorage.getItem("cartItems");
        if (!cart) {
          setTotal(0);
          return;
        }

        const cartItems = JSON.parse(cart);
        const scarfs = scarfsData.scarfs;

        const calculatedTotal = cartItems.reduce(
          (sum: number, cartItem: any) => {
            const scarf = scarfs.find((s: any) => s.id === cartItem.scarf_id);
            return sum + (scarf ? scarf.price * cartItem.quantity : 0);
          },
          0
        );

        setTotal(calculatedTotal);
      } catch (error) {
        setTotal(0);
      }
    };

    calculateTotal();

    window.addEventListener("cartUpdated", calculateTotal);
    return () => window.removeEventListener("cartUpdated", calculateTotal);
  }, []);

  return total;
}
