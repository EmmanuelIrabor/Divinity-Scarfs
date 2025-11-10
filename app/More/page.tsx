"use client";
import BackgroundTwo from "@/components/BackgroundTwo";
import Navbar from "@/components/Navbar";
import ShopNow from "@/components/ui/ShopNow";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItems = [
  {
    id: "privacy",
    label: "Privacy Policy",
    content: "Privacy policy content goes here...",
  },
  {
    id: "terms",
    label: "Terms & Conditions",
    content: "Terms and conditions content goes here...",
  },
  {
    id: "socials",
    label: "Socials",
    content: "Divinityscarf@instagram.com\nDivinityscarf@x.com",
  },
  {
    id: "newsletter",
    label: "News-Letter",
    content: "Subscribe to News Letter to get the latest updates",
  },
];

const scarves = [
  "/images/scarf_one.png",
  "/images/scarf_two.png",
  "/images/scarf_three.png",
  "/images/scarf_four.png",
];

export default function More() {
  const [activeNav, setActiveNav] = useState("privacy");
  const [currentScarfIndex, setCurrentScarfIndex] = useState(0);

  const handleNavClick = (navId: string, index: number) => {
    setActiveNav(navId);
    setCurrentScarfIndex(index);
  };

  const scarfVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <BackgroundTwo />

      <div
        className="min-h-screen w-full"
        data-barba="container"
        data-barba-namespace="more"
      >
        <Navbar isDark />

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-0 lg:px-6 mt-25 gap-10">
          {/* Left Section - Navigation */}
          <div className="flex flex-row lg:flex-col lg:items-start lg:w-1/3 flex-wrap gap-0 text-center lg:text-left">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                className={`blank-btn--white transition-all duration-300 ${
                  activeNav === item.id ? "underline font-bold" : "no-underline"
                }`}
                onClick={() => handleNavClick(item.id, index)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Center Scarf Image */}
          <div className="w-full lg:w-1/3 flex justify-center order-3 lg:order-2 lg:-mt-10">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentScarfIndex}
                variants={scarfVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                src={scarves[currentScarfIndex]}
                alt={`Scarf ${currentScarfIndex + 1}`}
                width={200}
                height={200}
                className="mt-10 lg:mt-0"
              />
            </AnimatePresence>
          </div>

          {/* Right Section - Content */}
          <div className="w-full lg:w-1/3 px-5 lg:px-0 text-center lg:text-right order-2 lg:order-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNav}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeNav === "privacy" && (
                  <div>
                    <p className="text-xs">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laborum nam optio modi pariatur beatae saepe fuga enim
                      cupiditate. Explicabo hic adipisci deserunt dolore, earum
                      nostrum nisi debitis soluta minima sed. Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Laborum nam optio
                      modi.
                    </p>
                  </div>
                )}

                {activeNav === "terms" && (
                  <div>
                    <p className="text-xs">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Corporis harum commodi a fuga adipisci corrupti ipsam
                      sapiente nemo aut debitis ipsum asperiores dicta,
                      consequatur assumenda? Maxime tenetur fugiat minima
                      assumenda.
                    </p>
                  </div>
                )}

                {activeNav === "socials" && (
                  <div>
                    <p className="text-xs">Divinityscarf@instagram.com</p>
                    <p className="text-xs">Divinityscarf@x.com</p>
                  </div>
                )}

                {activeNav === "newsletter" && (
                  <div className="flex flex-col gap-2">
                    <p className="text-xs text-left">
                      Subscribe to News Letter to get the latest updates
                    </p>
                    <input
                      className="border border-white outline-none px-3 py-2 mt-2 bg-transparent text-white placeholder-gray-300"
                      type="email"
                      placeholder="EMAIL"
                    />
                    <button className="secondary-btn">SUBSCRIBE</button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="xl:fixed xl:bottom-0 xl:left-0 xl:right-0 xl:flex xl:justify-end">
          <ShopNow isDark />
        </div>
      </div>
    </>
  );
}
