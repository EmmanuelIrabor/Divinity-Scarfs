"use client";
import { X, Plus, Minus, Lightning } from "phosphor-react";
import BackgroundTwo from "@/components/BackgroundTwo";
import { useRouter } from "next/navigation";
import CartItem from "@/components/ui/CartItem";

export default function Cart() {
  const router = useRouter();
  return (
    <>
      <BackgroundTwo />

      <div
        className="min-h-screen w-full  px-5 py-10"
        data-barba="container"
        data-barba-namespace="cart"
      >
        <div className="flex flex-row justify-between items-center">
          <h4 className="font-bold">MY CART</h4>
          <button
            className="blank-btn--white unset"
            onClick={() => router.push("/Shop")}
          >
            <X size={32} />
          </button>
        </div>

        {/* <div className="flex flex-row justify-between gap-5 mt-10 w-full">
          <div className="flex flex-row gap-2 justify-center">
            <div>
              <img
                src="/images/scarf_three.png"
                alt=""
                className="w-[100px] lg:w-[100px] lg:h-[100px]"
              />
            </div>
            <div className="flex flex-col justify-around">
              <div>
                <p className="comforter text-xs lg:text-xl">
                  Paris Qui Roque Scarf #1
                </p>
                <p className="text-xs mt-1">SIZE 80 x 80</p>
              </div>

              <div>
                <button className="blank-btn--white underline -mx-6">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-around">
            <div className="flex flex-row items-center gap-2 lg:gap-2 text-xs ">
              <button className="blank-btn--white unset">
                <Minus />
              </button>
              <span>1</span>
              <button className="blank-btn--white unset ">
                <Plus />
              </button>
            </div>
            <div>
              <p className="text-xs lg:text-md">$ 49</p>
            </div>
          </div>
        </div> */}
        <CartItem
          imageSrc="/images/scarf_three.png"
          name="Paris Qui Roque Scarf #1"
          size="80 x 80"
          price={49}
          onRemove={() => console.log("Removed")}
          onIncrease={() => console.log("Increased")}
          onDecrease={() => console.log("Decreased")}
        />
        {/* <CartItem
          imageSrc="/images/scarf_three.png"
          quantity={2}
          name="Paris Qui Roque Scarf #1"
          size="80 x 80"
          price={49}
          onRemove={() => console.log("Removed")}
          onIncrease={() => console.log("Increased")}
          onDecrease={() => console.log("Decreased")}
        /> */}

        <div className="fixed bottom-10 w-full px-6 left-0 right-0">
          <div className="border-b border-dotted border-gray-400 w-full mt-20"></div>

          <div className="flex flex-row justify-between mt-10">
            <p className="font-bold">TOTAL</p>
            <p className="font-bold">$ 49</p>
          </div>

          <div>
            <div className="flex flex-row items-center gap-2 mt-5">
              <Lightning weight="fill" />
              Shipping is free
            </div>
          </div>

          <div className="flex justify-center mt-10 flex-1">
            <button
              onClick={() => router.push("/Checkout")}
              className="secondary-btn px-10 py-4 flex items-center gap-2 w-80 lg:w-100"
            >
              CONTINUE TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
