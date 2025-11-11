"use client";
import Navbar from "@/components/Navbar";
// import { useEffect } from "react";
// import CartIndicator from "@/components/ui/CartIndicator";
import { useRouter } from "next/navigation";
import { CaretLeft, ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ScarfPage() {
  const router = useRouter();
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowDetails((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

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
            {/* <button
              className="blank-btn p-0 m-0 mb-10"
              onClick={() => router.push("/Shop")}
            >
              <div className="flex items-center gap-1 p-0 m-0 -mx-6">
                <CaretLeft weight="bold" /> Back to Shop
              </div>
            </button> */}
            <Link className="blank-btn p-0 m-0 mb-10" href={"/Shop"}>
              <div className="flex items-center gap-1 p-0 m-0 -mx-6">
                <CaretLeft weight="bold" /> Back to Shop
              </div>
            </Link>

            <p className="comforter text-black text-[3rem] text-center lg:text-left">
              Divinity Collection
            </p>

            <div className="flex flex-row gap-20 mt-10">
              <div className="flex flex-col">
                <p className="text-charcoal">CREATOR</p>
                <p className="text-black">Michael Irabor</p>
              </div>

              <div className="flex flex-col">
                <p className="text-charcoal">YEAR</p>
                <p className="text-black">2025</p>
              </div>
            </div>

            <div className="flex flex-row gap-20 mt-10">
              <div className="flex flex-col">
                <p className="text-charcoal">DIMENSIONS</p>
                <p className="text-black">80 x 80</p>
              </div>

              <div className="flex flex-col">
                <p className="text-charcoal">MATERIAL</p>
                <p className="text-black">Satin</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-start">
            <img
              className="w-[300px] md:w-[300px] lg:w-[300px] xl:w-[320px] 2xl:w-[360px]"
              src="/images/collection.png"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-start mt-20 flex-1 max-w-sm">
            <p className="text-black text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              adipisci, quasi dolores praesentium itaque cumque ad cum neque
              asperiores id exercitationem molestiae laborum enim deleniti
              facilis explicabo magnam eligendi velit.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between px-8 mt-20 ">
          <div className="flex flex-row gap-5">
            <button className="primary-btn">ADD TO CART</button>
            <button className="alt-btn">PURCHASE</button>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-black text-xl">$490</p>
            <img src="/images/stars.png" alt="" width={130} height={130} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start  xl:hidden px-3 relative top-6">
        {/* <button
          className="blank-btn p-0 m-0"
          onClick={() => router.push("/Shop")}
        >
          <div className="flex items-center gap-1 p-0 m-0 -mx-6">
            <CaretLeft weight="bold" /> Back to Shop
          </div>
        </button> */}

        <Link className="blank-btn p-0 m-0 mb-10" href={"/Shop"}>
          <div className="flex items-center gap-1 p-0 m-0 -mx-6">
            <CaretLeft weight="bold" /> Back to Shop
          </div>
        </Link>
      </div>

      <div className="block xl:hidden px-6 py-20">
        <div className="flex flex-col items-center">
          {/* <button
            className="blank-btn p-0 m-0"
            onClick={() => router.push("/Shop")}
          >
            <div className="flex items-center gap-1 p-0 m-0 -mx-6">
              <CaretLeft weight="bold" /> Back to Shop
            </div>
          </button> */}
          <p className="comforter text-black text-[2rem] text-center">
            Divinity Collection
          </p>
          <img
            className="w-[300px] md:w-[280px] lg:w-[300px] xl:w-[320px] 2xl:w-[360px] mt-10"
            src="/images/collection.png"
            alt=""
          />
        </div>
        <div className="flex flex-row gap-10 items-end ">
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {!showDetails ? (
                <motion.div
                  key="price-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg text-black font-bold">$490</p>
                  <p className="text-black text-xs leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus consectetur nobis modi architecto? Beatae libero in
                    autem error quae iusto assumenda ipsam possimus ratione iure
                    fugit dicta, porro eligendi obcaecati.
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
                  <div className="flex flex-row gap-20 mt-10">
                    <div className="flex flex-col">
                      <p className="text-charcoal text-xs">CREATOR</p>
                      <p className="text-black text-xs">Michael Irabor</p>
                    </div>

                    <div className="flex flex-col">
                      <p className="text-charcoal text-xs">YEAR</p>
                      <p className="text-black text-xs">2025</p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-20 mt-5">
                    <div className="flex flex-col">
                      <p className="text-charcoal text-xs">DIMENSIONS</p>
                      <p className="text-black text-xs">80 x 80</p>
                    </div>

                    <div className="flex flex-col">
                      <p className="text-charcoal text-xs">MATERIAL</p>
                      <p className="text-black text-xs">Satin</p>
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
          <img src="/images/stars.png" alt="" width={100} height={100} />
        </div>

        <div className="flex flex-col gap-2 w-full mt-5">
          <button className="primary-btn h-15">ADD TO CART</button>
          <button className="alt-btn h-15">PURCHASE</button>
        </div>
      </div>

      <div className="hidden xl:flex justify-end px-8 mt-5">
        <button
          className="secondary-btn font-bold"
          onClick={() => router.push("/Cart")}
        >
          CART ( 0 )
        </button>
      </div>

      <div className="xl:hidden fixed bottom-0 left-1/2 -translate-x-1/2">
        <button
          className="secondary-btn font-bold"
          onClick={() => router.push("/Cart")}
        >
          CART ( 0 )
        </button>
      </div>

      {/* <CartIndicator /> */}
    </div>
  );
}
