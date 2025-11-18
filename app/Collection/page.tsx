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
    title: "Celestial Veil",
    description:
      "A quiet hymn to rising beyond the weight of the world, this piece moves like a soft passage between earth and something brighter. It carries the feeling of being lifted gently by unseen hands, guided toward a realm where innocence and courage meet. Its spirit is an invitation upward, a calm surrender into wonder.",
    size: "80 x 80",
    barcode: "Celestial Veil 80x80 handwash",
    image: "/images/scarf_one.png",
  },
  {
    id: 2,
    title: "Whispers of Dawn",
    description:
      "A meditation on love as a holy force, steady and luminous. It traces the path of devotion that doesn’t burn but glows, shaping the soul from the inside out. There’s a hush to its message, the kind that feels like a prayer whispered for you alone — a reminder that tenderness is its own form of ascension.",
    size: "80 x 80",
    barcode: "Whispers of Dawn 80x80 handwash",
    image: "/images/scarf_two.png",
  },
  {
    id: 3,
    title: "Sacred Heart",
    description:
      "A slow awakening wrapped in grace, speaking of light that returns after long silence. It holds the promise of renewal, not rushed but divinely timed, rising like a blessing over a quiet horizon. Its essence is the soft assurance that every new beginning is touched by something sacred.",
    size: "80 x 80",
    barcode: "Sacred Heart 80x80 handwash",
    image: "/images/scarf_three.png",
  },
  {
    id: 4,
    title: "Golden Hour",
    description:
      "A moment suspended between worlds, where the veil thins and everything feels an inch closer to the divine. It glows with the warmth of a final benediction before the day closes, urging the spirit upward with a gentle pull. Its presence is a reminder that transcendence often arrives in the most fleeting light.",
    size: "80 x 80",
    barcode: "Golden Hour 80x80 handwash",
    image: "/images/scarf_four.png",
  },
];

export default function Collection() {
  useEffect(() => {
    const originalOverflowX = document.body.style.overflowX;
    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.overflowX = originalOverflowX;
    };
  }, []);

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
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const currentScarf = scarves[currentIndex];

  return (
    <div
      className="min-h-screen w-full "
      data-barba="container"
      data-barba-namespace="shop"
    >
      <Navbar />

      <h1 className="text-center font-bold text-black mid-text pt-32 xl:pt-0 xl:-mt-0">
        COLLECTION
      </h1>

      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center max-w-6xl mx-auto px-6 mt-5 mb-10 ">
        {" "}
        {/* Added  */}
        <div className="flex flex-col ">
          {" "}
          {/* Added  */}
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
        <div className="mt-0 xl:-mt-10 xl:mx-0 flex flex-row items-end justify-between xl:block ">
          {" "}
          {/* Added  */}
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
          <div className="xl:hidden flex flex-col gap-1 my-10">
            <div
              className="blank-btn text-xs flex items-center gap-1"
              onClick={nextScarf}
            >
              Next <ArrowCircleRight weight="bold" />
            </div>
            <div
              className="blank-btn text-xs flex items-center gap-1"
              onClick={prevScarf}
            >
              <ArrowCircleLeft weight="bold" /> Previous
            </div>
          </div>
        </div>
      </div>

      <ShopNow />
    </div>
  );
}


