"use client";

import Navbar from "@/components/Navbar";
import { StarFour } from "phosphor-react";
import ShopScarf from "@/components/ui/Shopscarf";
import { motion } from "framer-motion";
import CartIndicator from "@/components/ui/CartIndicator";
import BackgroundTwo from "@/components/BackgroundTwo";
import NewsLetter from "@/components/NewsLetter";
import { useRouter } from "next/navigation";
import Link from "next/link";
import scarfsData from "@/app/data/Scarfs.json";

export default function Shop() {
  const router = useRouter();
  const displayScarfs = scarfsData.scarfs.filter((scarf) => scarf.id <= 4);

  return (
    <>
      <BackgroundTwo />

      <div
        className="min-h-screen w-full"
        data-barba="container"
        data-barba-namespace="shop"
      >
        <Navbar isDark />

        <h1 className="text-center font-bold  mid-text pt-20 xl:pt-0  xl:-mt-0">
          SHOP
        </h1>

        <div className="flex xl:hidden justify-center mt-2 mb-5">
          <Link
            className="secondary-btn rounded"
            href="/Shop/Scarf/Divinity-Collection"
          >
            <div className="flex gap-2 items-center p-0 m-0 justify-center">
              PURCHASE COLLECTION
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "linear",
                }}
                className="inline-block"
              >
                <StarFour weight="fill" />
              </motion.div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center max-w-6xl mx-auto px-6 mt-0 gap-10 lg:gap-15 -mt-5">
          {displayScarfs.map((scarf) => (
            <ShopScarf
              key={scarf.id}
              name={scarf.name}
              dimension={scarf.dimension}
              price={scarf.price.toString()}
              image={scarf.image}
              route={`/Shop/Scarf/${scarf.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            />
          ))}
        </div>

        <div className="flex flex-row justify-between ">
          <div className="hidden xl:flex justify-start mx-20 pt-5 mb-5">
            <Link className="font-bold" href="/Shop/Scarf/Divinity-Collection">
              <div className="flex gap-2 items-center p-0 m-0 justify-center mt-10 mx-10 cursor-pointer text-[0.6rem]">
                {" "}
                PURCHASE COLLECTION{" "}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "linear",
                  }}
                  className="inline-block"
                >
                  <StarFour weight="fill" />
                </motion.div>
              </div>
            </Link>
          </div>
          <CartIndicator />
        </div>
      </div>
      <NewsLetter />
    </>
  );
}
