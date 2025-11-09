"use client";

import Navbar from "@/components/Navbar";
import { StarFour } from "phosphor-react";
import ShopScarf from "@/components/ui/Shopscarf";
import { motion } from "framer-motion";

export default function Shop() {
  return (
    <div
      className="min-h-screen w-full bg-[url('/images/bg_two.jpg')] bg-cover bg-center"
      data-barba="container"
      data-barba-namespace="shop"
    >
      <Navbar isDark />

      <h1 className="text-center font-bold  mid-text pt-32 xl:pt-0  xl:-mt-0">
        SHOP
      </h1>

      <div className="flex xl:hidden justify-center mt-2 mb-5">
        <button className="secondary-btn rounded">
          <div className="flex gap-2 items-center p-0 m-0 justify-center">
            {" "}
            PURCHASE COLLECTION <StarFour weight="fill" />
          </div>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center max-w-6xl mx-auto px-6 mt-0 gap-10 lg:gap-15 -mt-5">
        <ShopScarf
          name="Paris Qui Roque Scarf"
          dimension="80 x 80"
          price="490"
          image="/images/scarf_one.png"
          route="/shop/paris-qui-roque"
        />
        <ShopScarf
          name="Paris Qui Roque Scarf"
          dimension="80 x 80"
          price="490"
          image="/images/scarf_two.png"
          route="/shop/paris-qui-roque"
        />
        <ShopScarf
          name="Paris Qui Roque Scarf"
          dimension="80 x 80"
          price="490"
          image="/images/scarf_three.png"
          route="/shop/paris-qui-roque"
        />
        <ShopScarf
          name="Paris Qui Roque Scarf"
          dimension="80 x 80"
          price="490"
          image="/images/scarf_four.png"
          route="/shop/paris-qui-roque"
        />
      </div>

      <div className="flex flex-row justify-between ">
        <div className="hidden xl:flex justify-start mx-20 pt-5 mb-5">
          <a className="font-bold" href="">
            <div className="flex gap-2 items-center p-0 m-0 justify-center mt-10 mx-10 cursor-pointer text-[0.6rem]">
              {" "}
              PURCHASE COLLECTION <StarFour weight="fill" />
            </div>
          </a>
        </div>

        <div className="hidden xl:flex justify-end mx-30  mt-10 mb-5">
          <button className="secondary-btn font-bold">CART ( 0 )</button>
        </div>

        <div className="xl:hidden fixed bottom-0 left-1/2 -translate-x-1/2">
          <button className="secondary-btn font-bold">CART ( 0 )</button>
        </div>
      </div>
    </div>
  );
}
