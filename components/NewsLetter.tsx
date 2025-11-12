"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "phosphor-react";
import Image from "next/image";

export default function NewsLetter() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 5 }}
          className="fixed inset-0 flex items-center justify-center z-50   h-full w-full"
        >
          <div className="relative flex flex-row bg-gradient-to-r from-[#A2B0ED] to-[#DDDDDD] shadow-xl w-[90%] max-w-2xl overflow-hidden">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="blank-btn absolute top-3 left-3 text-black hover:opacity-70 transition"
            >
              <X size={22} />
            </button>

            {/* Text and input section */}
            <div className="flex flex-col justify-center p-8 flex-1">
              <h1 className="text-black text-xl font-bold mb-4 leading-snug mt-10 md:mt-0">
                SUBSCRIBE TO OUR NEWSLETTER AND STAY UPDATED
              </h1>
              <input
                className="border border-black text-black outline-none px-3 py-2 mt-2 placeholder-gray-700"
                type="text"
                placeholder="EMAIL"
              />
              <button className="bg-black text-white font-semibold py-2 mt-3 hover:bg-gray-800 transition mb-10 md:mb-0">
                SUBSCRIBE
              </button>
            </div>

            {/* Image section */}
            <div className="hidden md:flex w-[40%] bg-white/10 items-center justify-center">
              <img
                src="/images/black_king.png"
                alt="Newsletter"
                className="h-full w-auto object-cover"
              />
              {/* <Image
                src={"/images/black_king.png"}
                alt={"black_king"}
                fill
                className="object-cover"
              /> */}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
