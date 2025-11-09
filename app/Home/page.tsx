"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { scrollTo } from "../../components/Lenis";
import Navbar from "../../components/Navbar";
import Brandlabels from "@/components/ui/Brandlabels";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const scarves = [
  "/images/scarf_one.png",
  "/images/scarf_two.png",
  "/images/scarf_three.png",
  "/images/scarf_four.png",
];

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => t,
      orientation: "vertical",
      smoothWheel: true,
      lerp: 0.1,
    });

    // Animation frame loop
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Optional: scroll to top on page load
    lenis.scrollTo(0);
  }, []);

  return (
    <div
      className="min-h-screen w-full bg-[url('/images/bg_one.jpg')] bg-cover bg-center"
      data-barba="container"
      data-barba-namespace="home"
    >
      <Navbar />

      <h1 className="text-center font-bold text-black big-text pt-32 xl:pt-0  xl:-mt-10">
        DIVINITY
      </h1>

      <div className="relative w-full max-w-6xl mx-auto px-6 xl:-mt-20 flex items-center justify-center">
        <p className="text-center font-bold text-black text-[22px] sm:text-[25px] text-wrap">
          EXCLUSIVE FOULARD COLLECTION
        </p>
        <div
          className="absolute hidden right-0 blank-btn xl:flex items-center cursor-pointer text-[1rem]"
          onClick={() => scrollTo("home-scarfs")}
        >
          <span>Scroll</span>
          <img
            src="https://img.icons8.com/?size=100&id=26230&format=png&color=000000"
            alt="Sign In Icon"
            width={16}
            height={16}
          />
        </div>
      </div>

      <Brandlabels />

      <div className="hidden xl:flex justify-end px-10 mt-17 mb-5">
        <button className="primary-btn" onClick={() => router.push("/Shop")}>
          Shop Now
        </button>
      </div>

      <div id="home-scarfs" className="overflow-hidden w-full mt-10 xl:mt-0">
        <motion.div
          className="flex gap-2 xl:gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {scarves.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Scarf ${idx + 1}`}
              className="w-[250px] h-[250px] xl:w-[300px] xl:h-[300px]"
              onClick={() => router.push("/Shop")}
            />
          ))}
          {/* duplicate for seamless loop */}
          {scarves.map((src, idx) => (
            <img
              key={idx + scarves.length}
              src={src}
              alt={`Scarf ${idx + 1}`}
              className="w-[250px] h-[250px] xl:w-[300px] xl:h-[300px]"
              onClick={() => router.push("/Shop")}
            />
          ))}
        </motion.div>
      </div>

      <div className="xl:hidden absolute bottom-0 left-1/2 -translate-x-1/2">
        <button className="primary-btn" onClick={() => router.push("/Shop")}>
          Shop Now
        </button>
      </div>
    </div>
  );
}
