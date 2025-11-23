"use client";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { CaretLeft, ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { use } from "react";
import scarfsData from "@/app/data/Scarfs.json";
import { addToCart, getCartItems } from "@/lib/Cart";
import { CartCount } from "@/components/ui/CartCount";
import Currency from "@/components/Currency";

interface Scarf {
  id: number;
  name: string;
  description: string;
  price: number;
  dimension: string;
  creator: string;
  year: number;
  material: string;
  image: string;
}

interface ScarfPageProps {
  params: Promise<{
    name: string;
  }>;
}

export default function ScarfPage({ params }: ScarfPageProps) {
  const router = useRouter();
  const [showDetails, setShowDetails] = useState(false);
  const [scarf, setScarf] = useState<Scarf | null>(null);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    if (!scarf) return; // Add null check

    const checkIfInCart = () => {
      const cartItems = getCartItems();
      const isInCart = cartItems.some((item) => item.scarf_id === scarf.id);
      setIsAddedToCart(isInCart);
    };

    checkIfInCart();

    const handleCartUpdate = () => {
      checkIfInCart();
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, [scarf?.id]);

  const handleAddToCart = (scarfId: number) => {
    addToCart(scarfId);
    setIsAddedToCart(true);
  };
  const [loading, setLoading] = useState(true);

  const { name } = use(params);

  useEffect(() => {
    const decodedName = decodeURIComponent(name);

    const normalizeString = (str: string) => {
      return str.toLowerCase().replace(/[^a-z0-9]/g, "");
    };

    const foundScarf = scarfsData.scarfs.find((s: Scarf) => {
      const scarfNameNormalized = normalizeString(s.name);
      const paramNameNormalized = normalizeString(decodedName);
      return scarfNameNormalized === paramNameNormalized;
    });

    setScarf(foundScarf || null);
    setLoading(false);
  }, [name]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowDetails((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <Navbar />
        <p className="text-black">Loading...</p>
      </div>
    );
  }

  if (!scarf) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-black text-xl mb-4">Scarf not found</p>
          <Link href="/Shop" className="primary-btn">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full"
      data-barba="container"
      data-barba-namespace="shop-scarf"
    >
      <Navbar />

      <div className="hidden xl:block">
        <div className="flex flex-col lg:flex-row w-full px-8 gap-10 lg:gap-20">
          <div className="flex flex-col items-center lg:items-start flex-1">
            <Link className="blank-btn p-0 m-0 mb-10 text-xs" href={"/Shop"}>
              <div className="flex items-center gap-1 p-0 m-0 -mx-6">
                <CaretLeft weight="bold" /> Back to Shop
              </div>
            </Link>

            <p className="comforter text-black text-[3rem] text-center lg:text-left">
              {scarf.name}
            </p>

            <div className="flex flex-row gap-20 mt-10">
              <div className="flex flex-col">
                <p className="text-charcoal">CREATOR</p>
                <p className="text-black">{scarf.creator}</p>
              </div>

              <div className="flex flex-col">
                <p className="text-charcoal">YEAR</p>
                <p className="text-black">{scarf.year}</p>
              </div>
            </div>

            <div className="flex flex-row gap-20 mt-10">
              <div className="flex flex-col">
                <p className="text-charcoal">DIMENSIONS</p>
                <p className="text-black">{scarf.dimension}</p>
              </div>

              <div className="flex flex-col">
                <p className="text-charcoal">MATERIAL</p>
                <p className="text-black">{scarf.material}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-start">
            <img
              className="w-[250px] md:w-[280px] lg:w-[300px] xl:w-[320px] 2xl:w-[360px]"
              src={scarf.image}
              alt={scarf.name}
            />
          </div>

          <div className="flex flex-col justify-start mt-20 flex-1 max-w-sm">
            <p className="text-black text-sm leading-relaxed">
              {scarf.description}
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between px-8 mt-20 ">
          <div className="flex flex-row gap-5">
            <button
              className={`primary-btn ${
                isAddedToCart ? "opacity-70 pointer-events-none" : ""
              }`}
              onClick={() => handleAddToCart(scarf.id)}
              disabled={isAddedToCart}
            >
              {isAddedToCart ? "ADDED TO CART" : "ADD TO CART"}
            </button>
            <button className="alt-btn">PURCHASE</button>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-black text-xl">
              <Currency />
              {scarf.price}
            </p>
            <img
              src="/images/stars.png"
              alt="Rating"
              width={130}
              height={130}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start  xl:hidden px-3 relative top-6">
        <Link
          href="/Shop"
          className="blank-btn p-0 m-0 text-xs relative z-50 pointer-events-auto flex items-center gap-1 py-3"
        >
          <CaretLeft weight="bold" size={10} /> Back to Shop
        </Link>
      </div>

      <div className="block xl:hidden px-6 py-20">
        <div className="flex flex-col items-center">
          <p className="comforter text-black text-[2rem] text-center">
            {scarf.name}
          </p>
          <img
            className="w-[300px] md:w-[280px] lg:w-[300px] xl:w-[320px] 2xl:w-[360px] -mt-10"
            src={scarf.image}
            alt={scarf.name}
          />
        </div>
        <div className="flex flex-row gap-10 items-end -mt-5">
          <div className="flex-1">
            <p className="text-lg text-black font-bold">
              <Currency />
              {scarf.price}
            </p>
            <AnimatePresence mode="wait">
              {!showDetails ? (
                <motion.div
                  key="price-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-black text-xs leading-relaxed">
                    {scarf.description}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="details-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-row gap-20 mt-1">
                    <div className="flex flex-col">
                      <p className="text-charcoal text-xs">CREATOR</p>
                      <p className="text-black text-xs">{scarf.creator}</p>
                    </div>

                    <div className="flex flex-col">
                      <p className="text-charcoal text-xs">YEAR</p>
                      <p className="text-black text-xs">{scarf.year}</p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-20 mt-5">
                    <div className="flex flex-col">
                      <p className="text-charcoal text-xs">DIMENSIONS</p>
                      <p className="text-black text-xs">{scarf.dimension}</p>
                    </div>

                    <div className="flex flex-col">
                      <p className="text-charcoal text-xs">MATERIAL</p>
                      <p className="text-black text-xs">{scarf.material}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div>
            <motion.button
              className="blank-btn px-5"
              onClick={toggleDetails}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={showDetails ? "left" : "right"}
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: -180 }}
                  transition={{ duration: 0.2 }}
                >
                  {showDetails ? (
                    <ArrowCircleLeft size={18} />
                  ) : (
                    <ArrowCircleRight size={18} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <img src="/images/stars.png" alt="Rating" width={100} height={100} />
        </div>

        <div className="flex flex-col gap-2 w-full mt-5">
          <button
            className={`primary-btn h-15 ${
              isAddedToCart ? "opacity-70 pointer-events-none" : ""
            }`}
            onClick={() => handleAddToCart(scarf.id)}
            disabled={isAddedToCart}
          >
            {isAddedToCart ? "ADDED TO CART" : "ADD TO CART"}
          </button>
          <button className="alt-btn h-15">PURCHASE</button>
        </div>
      </div>

      <div className="hidden xl:flex justify-end px-8 mt-5">
        <button
          className="secondary-btn font-bold"
          onClick={() => router.push("/Cart")}
        >
          <CartCount />
        </button>
      </div>

      <div className="xl:hidden fixed bottom-0 left-1/2 -translate-x-1/2">
        <button
          className="secondary-btn font-bold"
          onClick={() => router.push("/Cart")}
        >
          <CartCount />
        </button>
      </div>
    </div>
  );
}
