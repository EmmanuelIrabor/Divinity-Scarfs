"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

import BackgroundNone from "@/app/Divinity-Scarfs/components/BackgroundNone";
import { ArrowRight } from "phosphor-react";
// import barba from "@barba/core";

export default function Preloader() {
  const router = useRouter();
  return (

  <>
<BackgroundNone/>
   
    <div
      className="min-h-screen w-full flex flex-col justify-between"
      data-barba="container"
      data-barba-namespace="preloader"
    >
      <div></div>

      <div className="flex items-center justify-center w-full max-w-6xl mx-auto px-6">
       

        <motion.div
          className="mx-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="comforter text-6xl sm:text-8xl text-white tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Welcome to lowal studios
          </motion.h1>

          <div className="flex justify-center">
             <motion.h2
            className=" text-white leading-none mt-2 text-sm w-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos provident odit dolor, natus assumenda quia iste vitae possimus exercitationem sint beatae dolorem sunt voluptatibus blanditiis ea consectetur culpa veniam error.
          </motion.h2>

          
          </div>
           
        </motion.div>

       
       
      </div>

      {/* Bottom Section */}
      <motion.div
        className="flex justify-center mb-20 xl:mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <Link className="bg-white/10 backdrop-blur-md px-5 py-1 rounded flex flex-row gap-1 items-center text-xs" href="/Divinity-Scarfs">
         View Collection <ArrowRight />
        </Link>
      </motion.div>
    </div>

    </>

   
  );
}
