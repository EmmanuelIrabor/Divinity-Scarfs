"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundNone from "@/app/Divinity-Scarfs/components/BackgroundNone";
import { ArrowRight } from "phosphor-react";

export default function Preloader() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden">
      
      <BackgroundNone />

      <div />

      <div className="relative z-10 flex items-center justify-center w-full max-w-6xl mx-auto px-5 xl:px-30">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl text-white tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Welcome To Lowal Studios
          </motion.h1>

          <div className="flex justify-center">
            <motion.h2
              className="text-white leading-none mt-3 text-sm text-center px-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              An artistic studio dedicated to bringing you exclusive fashion pieces.
            </motion.h2>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 flex justify-center mb-20 xl:mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <Link
          className="bg-white/10 backdrop-blur-md px-5 py-1 rounded flex flex-row gap-1 items-center text-xs text-white"
          href="/Divinity-Scarfs"
        >
          View Collection <ArrowRight />
        </Link>
      </motion.div>
    </div>
  );
}