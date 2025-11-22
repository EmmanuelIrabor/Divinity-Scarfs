"use client";
import BackgroundTwo from "@/components/BackgroundTwo";
import Navbar from "@/components/Navbar";
import ShopNow from "@/components/ui/ShopNow";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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

  const [email, setEmail] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // Check if user is already subscribed on component mount
    const subscribed = localStorage.getItem("email") === "true";
    setIsSubscribed(subscribed);
  }, []);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = async (): Promise<void> => {
    if (!email || !validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      // Add email to Mails.json via API
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Set localStorage and update state
        localStorage.setItem("email", "true");
        setIsSubscribed(true);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to subscribe");
      }
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Failed to subscribe. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && email && validateEmail(email) && !isSubscribed) {
      handleSubscribe();
    }
  };

  return (
    <>
      {/* <BackgroundTwo /> */}

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
                      Divinity Scarfs respects your privacy and handles personal
                      data with care. We collect only the information needed to
                      process orders, provide customer support, and improve your
                      experience on our platform. Your details are never sold,
                      traded, or shared with third parties outside of essential
                      payment processors and trusted service providers who help
                      us operate securely. We use industry-standard measures to
                      protect your information from unauthorized access and
                      retain data only for as long as it serves a clear purpose.
                      By using our site, you consent to these practices, and you
                      may request updates or deletion of your data at any time.
                    </p>
                  </div>
                )}

                {activeNav === "terms" && (
                  <div>
                    <p className="text-xs">
                      By purchasing from Divinity Scarfs, you agree to use our
                      products for personal, non-commercial purposes unless
                      otherwise stated. All designs, images, and written content
                      remain the intellectual property of Divinity Scarfs and
                      may not be reproduced or distributed without permission.
                      Prices, availability, and product details may change at
                      any time, and orders are considered final once confirmed.
                      We are not responsible for delays caused by shipping
                      partners or inaccuracies caused by user-submitted
                      information. By accessing our site, you accept these terms
                      and acknowledge that continued use constitutes ongoing
                      agreement.
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
                      value={email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                      }
                      onKeyDown={handleKeyDown}
                      disabled={isSubscribed || isLoading}
                    />
                    <button
                      onClick={handleSubscribe}
                      disabled={
                        isSubscribed ||
                        isLoading ||
                        !email ||
                        !validateEmail(email)
                      }
                      className={`secondary-btn ${
                        isSubscribed ? "opacity-50 cursor-default" : ""
                      }`}
                    >
                      {isSubscribed ? "SUBSCRIBED" : "SUBSCRIBE"}
                    </button>
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
