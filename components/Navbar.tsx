"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavItem from "./ui/Navitem";

export default function Navbar({ isDark = false }: { isDark?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      {/* Desktop Nav */}
      <nav
        className={`w-full hidden xl:flex flex-row items-center justify-between gap-5 px-6 py-8 ${
          isDark ? "text-white" : "text-black"
        } bg-transparent`}
      >
        <NavItem text="COLLECTION" />
        <NavItem text="SHOP" />
        <NavItem text="ABOUT" />
        <NavItem text="CONTACT" />
        <NavItem text="MORE" />
      </nav>

      {/* Mobile Nav */}
      <div className="xl:hidden fixed top-0 left-0 w-full flex items-center px-6 py-6 z-50">
        {/* Brand Name (left, only when menu is open) */}
        {menuOpen && (
          <span className="font-bold text-white text-lg tracking-wide">
            DIVINITY
          </span>
        )}

        {/* Spacer pushes the button to the far right */}
        <div className="flex-1" />

        {/* Hamburger / Close Button (always on the right) */}
        <div
          onClick={toggleMenu}
          className={`flex justify-center items-center w-10 h-10 cursor-pointer transition-all ${
            isDark && !menuOpen ? "bg-white" : "bg-black"
          }`}
        >
          {!menuOpen ? (
            <div className="flex flex-col justify-center items-center gap-2">
              <span
                className={`block w-5 h-[2px] rounded ${
                  isDark ? "bg-black" : "bg-white"
                }`}
              />
              <span
                className={`block w-5 h-[2px] rounded ${
                  isDark ? "bg-black" : "bg-white"
                }`}
              />
            </div>
          ) : (
            <div className="relative w-5 h-5">
              <span className="absolute left-0 top-1/2 w-5 h-[2px] bg-white rotate-45" />
              <span className="absolute left-0 top-1/2 w-5 h-[2px] bg-white -rotate-45" />
            </div>
          )}
        </div>
      </div>

      {/* Animated Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="dropdown"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
             className={`fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-start pt-35 gap-8 text-2xl font-bold z-40 ${
              isDark ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            <NavItem text="COLLECTION" />
            <NavItem text="SHOP" />
            <NavItem text="ABOUT" />
            <NavItem text="CONTACT" />
            <NavItem text="MORE" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
