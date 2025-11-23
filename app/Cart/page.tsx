"use client";
import { X, Lightning } from "phosphor-react";
import BackgroundTwo from "@/components/BackgroundTwo";
import { useRouter } from "next/navigation";
import CartItem from "@/components/ui/CartItem";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getCartItems, removeFromCart, updateCartQuantity } from "@/lib/Cart";
import scarfsData from "@/app/data/Scarfs.json";
import Currency from "@/components/Currency";

interface CartScarf {
  id: number;
  name: string;
  description: string;
  price: number;
  dimension: string;
  creator: string;
  year: number;
  material: string;
  image: string;
  quantity: number;
}

export default function Cart() {
  const router = useRouter();
  const [cartScarfs, setCartScarfs] = useState<CartScarf[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCartItems = () => {
      const cartItems = getCartItems();
      const scarfsWithDetails: CartScarf[] = [];

      cartItems.forEach((cartItem) => {
        const scarfDetails = scarfsData.scarfs.find(
          (scarf) => scarf.id === cartItem.scarf_id
        );
        if (scarfDetails) {
          scarfsWithDetails.push({
            ...scarfDetails,
            quantity: cartItem.quantity,
          });
        }
      });

      setCartScarfs(scarfsWithDetails);
      setLoading(false);
    };

    loadCartItems();

    const handleCartUpdate = () => {
      loadCartItems();
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  const handleRemove = (scarfId: number) => {
    removeFromCart(scarfId);
  };

  const handleIncrease = (scarfId: number) => {
    const scarf = cartScarfs.find((s) => s.id === scarfId);
    if (scarf) {
      updateCartQuantity(scarfId, scarf.quantity + 1);
    }
  };

  const handleDecrease = (scarfId: number) => {
    const scarf = cartScarfs.find((s) => s.id === scarfId);
    if (scarf && scarf.quantity > 1) {
      updateCartQuantity(scarfId, scarf.quantity - 1);
    } else {
      removeFromCart(scarfId);
    }
  };

  const calculateTotal = () => {
    return cartScarfs.reduce(
      (total, scarf) => total + scarf.price * scarf.quantity,
      0
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <p className="text-black">Loading</p>
      </div>
    );
  }

  return (
    <>
      <div
        className="min-h-screen w-full flex flex-col px-5 py-10 relative"
        data-barba="container"
        data-barba-namespace="cart"
      >
        {/* Header */}
        <div className="flex flex-row justify-between items-center">
          <h4 className="font-bold">MY CART</h4>
          <Link className="blank-btn--white unset" href={"/Shop"}>
            <X size={32} />
          </Link>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto mt-5 pb-40">
          {cartScarfs.length === 0 ? (
            <div className="text-center py-10">
              <p className="">Your cart is empty</p>
              <Link
                href="/Shop"
                className="secondary-btn mt-4 inline-block rounded"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            cartScarfs.map((scarf) => (
              <CartItem
                key={scarf.id}
                imageSrc={scarf.image}
                name={scarf.name}
                size={scarf.dimension}
                price={scarf.price}
                quantity={scarf.quantity}
                onRemove={() => handleRemove(scarf.id)}
                onIncrease={() => handleIncrease(scarf.id)}
                onDecrease={() => handleDecrease(scarf.id)}
              />
            ))
          )}
        </div>

        {cartScarfs.length > 0 && (
          <div className="sticky bottom-0 z-20 bg-white/10 backdrop-blur-md px-6 py-6 border-t border-white/10">
            <div className="border-b border-dotted border-gray-400 w-full mb-6"></div>

            <div className="flex flex-row justify-between">
              <p className="font-bold">TOTAL</p>
              <p className="font-bold">
                <Currency /> {calculateTotal()}
              </p>
            </div>

            <div className="flex flex-row items-center gap-2 mt-3 text-sm">
              <Lightning weight="fill" />
              Shipping is free
            </div>

            <div className="flex justify-center mt-6">
              <Link
                href={"/Checkout"}
                className="secondary-btn px-10 py-4 flex items-center text-center gap-2 w-full max-w-sm"
              >
                {" "}
                CONTINUE TO CHECKOUT
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
