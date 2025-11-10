"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import barba from "@barba/core";

export default function Preloader() {
  const router = useRouter();
  return (
    <div
      className="min-h-screen w-full flex flex-col justify-between"
      data-barba="container"
      data-barba-namespace="preloader"
    >
      <div></div>

      <div className="flex items-center justify-center w-full max-w-6xl mx-auto px-6">
        <div className="h-[1px] bg-black w-[60px] sm:flex-1 sm:w-auto" />

        <motion.div
          className="mx-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="font-bold text-[20px] sm:text-[40px] text-black tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            DIVINITY SCARF
          </motion.h1>

          <motion.h2
            className="comforter text-[30px] sm:text-[60px] text-black leading-none mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            An Exclusive Foulard Collection
          </motion.h2>
        </motion.div>

        {/* Right Line */}
        <div className="h-[1px] bg-black w-[60px] sm:flex-1 sm:w-auto" />
      </div>

      {/* Bottom Section */}
      <motion.div
        className="flex justify-center mb-20 xl:mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <Link className="primary-btn rounded" href="/Home">
          Explore
        </Link>
      </motion.div>
    </div>
  );
}
