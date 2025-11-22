"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "phosphor-react";

export default function NewsLetter() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const subscribed = localStorage.getItem("email") === "true";
    setIsSubscribed(subscribed);

    if (!subscribed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
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
        setIsOpen(false);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to subscribe");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      alert(
        error instanceof Error
          ? error.message
          : "Failed to subscribe. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && email && validateEmail(email)) {
      handleSubscribe();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 5 }}
          className="fixed inset-0 flex items-center justify-center z-50 h-full w-full"
        >
          <div className="relative flex flex-row bg-gradient-to-r from-[#A2B0ED] to-[#DDDDDD] shadow-xl w-[90%] max-w-2xl overflow-hidden">
            <button
              onClick={handleClose}
              className="blank-btn absolute top-3 left-3 text-black hover:opacity-70 transition"
            >
              <X size={22} />
            </button>

            <div className="flex flex-col justify-center p-8 flex-1">
              <h1 className="text-black text-xl font-bold mb-4 leading-snug mt-10 md:mt-0">
                SUBSCRIBE TO OUR NEWSLETTER AND STAY UPDATED
              </h1>
              <input
                className="border border-black text-black outline-none px-3 py-2 mt-2 placeholder-gray-700"
                type="email"
                placeholder="EMAIL"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                onKeyDown={handleKeyDown}
                required
                disabled={isLoading}
              />
              <button
                onClick={handleSubscribe}
                disabled={isLoading || !email || !validateEmail(email)}
                className={`font-semibold py-2 mt-3 transition mb-10 md:mb-0 ${
                  isSubscribed
                    ? "bg-green-600 text-white cursor-default"
                    : !email || !validateEmail(email) || isLoading
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {isSubscribed ? "SUBSCRIBED!" : "SUBSCRIBE"}
              </button>
            </div>

            {/* Image section */}
            <div className="hidden md:flex w-[40%] bg-white/10 items-center justify-center">
              <img
                src="/images/black_king.png"
                alt="Newsletter"
                className="h-full w-auto object-cover"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
