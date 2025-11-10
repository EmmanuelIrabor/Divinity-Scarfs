"use client";
import { X, Lightning } from "phosphor-react";
import BackgroundTwo from "@/components/BackgroundTwo";
import { useRouter } from "next/navigation";
import CartItem from "@/components/ui/CartItem";

export default function Cart() {
  const router = useRouter();

  return (
    <>
      <BackgroundTwo />

      <div
        className="min-h-screen w-full flex flex-col px-5 py-10 relative"
        data-barba="container"
        data-barba-namespace="cart"
      >
        {/* Header */}
        <div className="flex flex-row justify-between items-center">
          <h4 className="font-bold">MY CART</h4>
          <button
            className="blank-btn--white unset"
            onClick={() => router.push("/Shop")}
          >
            <X size={32} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto mt-0 pb-40">
          <CartItem
            imageSrc="/images/scarf_three.png"
            name="Paris Qui Roque Scarf #1"
            size="80 x 80"
            price={49}
            onRemove={() => console.log("Removed")}
            onIncrease={() => console.log("Increased")}
            onDecrease={() => console.log("Decreased")}
          />
        </div>

        {/* Checkout Section */}
        <div className="sticky bottom-0 z-20 bg-white/10 backdrop-blur-md px-6 py-6 border-t border-white/10">
          <div className="border-b border-dotted border-gray-400 w-full mb-6"></div>

          <div className="flex flex-row justify-between">
            <p className="font-bold">TOTAL</p>
            <p className="font-bold">$ 147</p>
          </div>

          <div className="flex flex-row items-center gap-2 mt-3 text-sm">
            <Lightning weight="fill" />
            Shipping is free
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => router.push("/Checkout")}
              className="secondary-btn px-10 py-4 flex items-center gap-2 w-full max-w-sm"
            >
              CONTINUE TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
