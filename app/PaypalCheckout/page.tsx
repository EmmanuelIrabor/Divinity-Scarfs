"use client";
import { useState, useEffect } from "react";
import PayPalButton from "@/components/ui/paypalButton";
import Link from "next/link";
import { CaretDoubleLeft, X } from "phosphor-react";
import CartTotal from "@/components/CartTotal";

export default function PaypalCheckout() {
  const [open, setOpen] = useState(false);
  const total = CartTotal();

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex justify-start items-start px-8 mt-4">
        {" "}
        <Link href={"/Checkout"}>
          {" "}
          <div className="flex gap-2 text-black items-center">
            <CaretDoubleLeft /> Back
          </div>{" "}
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <button onClick={() => setOpen(true)} className="primary-btn rounded">
          Pay now
        </button>

        {open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setOpen(false)}
          >
            <div
              className="bg-white/10 backdrop-blur-md border-t border-white/10 p-6 w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg text-black font-bold">Checkout</h3>
                <button
                  className="blank-btn--black"
                  onClick={() => setOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="paypal-modal-body max-h-[70vh] overflow-auto">
                <PayPalButton amount={total.toString()} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
