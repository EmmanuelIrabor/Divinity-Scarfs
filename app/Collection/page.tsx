"use client";
import Navbar from "@/components/Navbar";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import { useRouter } from "next/navigation";
import ShopNow from "@/components/ui/ShopNow";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const scarves = [
  {
    id: 1,
    title: "Paris Roque Scarf",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ea sunt distinctio minima, eum neque, ut cupiditate corrupti nihil provident nam mollitia sequi fugiat deserunt minus? Iste sunt vero reprehenderit.",
    size: "80 x 80",
    barcode: "Paris Roque Scarf 80x80 handwash",
    image: "/images/scarf_one.png",
  },
  {
    id: 2,
    title: "Luxury Silk Scarf",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    size: "90 x 90",
    barcode: "Luxury Silk Scarf 90x90 dryclean",
    image: "/images/scarf_two.png",
  },
  {
    id: 3,
    title: "Cashmere Winter Scarf",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
    size: "85 x 85",
    barcode: "Cashmere Winter Scarf 85x85 handwash",
    image: "/images/scarf_three.png",
  },
  {
    id: 4,
    title: "Designer Print Scarf",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    size: "75 x 75",
    barcode: "Designer Print Scarf 75x75 handwash",
    image: "/images/scarf_four.png",
  },
];

export default function Collection() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextScarf = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % scarves.length);
  };

  const prevScarf = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + scarves.length) % scarves.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextScarf();
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100, // Reduced from 300 to prevent overflow
      opacity: 0,
    }),
  };

  const currentScarf = scarves[currentIndex];

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden" // Added overflow-x-hidden
      data-barba="container"
      data-barba-namespace="shop"
    >
      <Navbar />

      <h1 className="text-center font-bold text-black mid-text pt-32 xl:pt-0 xl:-mt-0">
        COLLECTION
      </h1>

      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center max-w-6xl mx-auto px-6 mt-5 mb-10 overflow-x-hidden">
        {" "}
        {/* Added overflow-x-hidden */}
        <div className="flex flex-col overflow-x-hidden">
          {" "}
          {/* Added overflow-x-hidden */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentScarf.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }} //
              className="flex flex-col"
            >
              <h5 className="font-bold text-black text-xl">
                {currentScarf.title}
              </h5>
              <p className="text-black pr-10 xl:pr-120">
                {currentScarf.description}
              </p>
              <h6 className="font-bold text-black text-xl">
                {currentScarf.size}
              </h6>
              <h6 className="text-black barcode">{currentScarf.barcode}</h6>
            </motion.div>
          </AnimatePresence>
          <div className="hidden xl:flex flex-row gap-1 mt-4">
            <button className="blank-btn p-0 m-0" onClick={prevScarf}>
              <div className="flex items-center gap-1 p-0 m-0 -mx-6">
                <ArrowCircleLeft weight="bold" /> Previous
              </div>
            </button>
            <button
              className="blank-btn p-0 m-0 mx-0 my-0 px-0 py-0"
              onClick={nextScarf}
            >
              <div className="flex items-center gap-1 p-0 m-0 -mx-6">
                Next <ArrowCircleRight weight="bold" />
              </div>
            </button>
          </div>
        </div>
        <div className="mt-0 xl:-mt-10 xl:mx-0 flex flex-row items-end justify-between xl:block overflow-x-hidden">
          {" "}
          {/* Added overflow-x-hidden */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={currentScarf.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-[200px] xl:w-[600px] 2xl:w-[400px] -mx-8 xl:mx-0"
              src={currentScarf.image}
              alt={currentScarf.title}
            />
          </AnimatePresence>
          <div className="xl:hidden flex flex-col gap-0 justify-self-end">
            <button className="blank-btn p-0 m-0" onClick={prevScarf}>
              <div className="flex items-center gap-1 p-0 m-0 -mx-6 -my-10">
                <ArrowCircleLeft weight="bold" /> Previous
              </div>
            </button>
            <button
              className="blank-btn p-0 m-0 mx-0 my-0 px-0 py-0"
              onClick={nextScarf}
            >
              <div className="flex items-center gap-1 p-0 m-0 -mx-6 -my-10">
                Next <ArrowCircleRight weight="bold" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <ShopNow />
    </div>
  );
}
