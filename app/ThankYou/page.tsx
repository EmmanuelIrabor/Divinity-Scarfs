// "use client";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";

// export default function ThankYou() {
//   const router = useRouter();
//   return (
//     <div
//       className="min-h-screen w-full flex flex-col justify-between"
//       data-barba="container"
//       data-barba-namespace="preloader"
//     >
//       <div></div>

//       <div className="flex items-center justify-center w-full max-w-6xl mx-auto px-6">
//         <div className="h-[1px] bg-black w-[60px] sm:flex-1 sm:w-auto" />

//         <motion.div
//           className="mx-6 text-center"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           {/* <motion.h1
//             className="font-bold text-[20px] sm:text-[40px] text-black tracking-wide"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             DIVINITY SCARF
//           </motion.h1> */}

//           <motion.h2
//             className="comforter text-[30px] sm:text-[60px] text-black leading-none mt-2"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 1 }}
//           >
//             Thank you for shopping with us
//           </motion.h2>
//         </motion.div>

//         {/* Right Line */}
//         <div className="h-[1px] bg-black w-[60px] sm:flex-1 sm:w-auto" />
//       </div>

//       {/* Bottom Section */}
//       <motion.div
//         className="flex justify-center mb-20 xl:mb-10"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.2, duration: 0.8 }}
//       >
//         <button
//           className="primary-btn rounded"
//           onClick={() => router.push("/Home")}
//         >
//           Return
//         </button>
//       </motion.div>
//     </div>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { clearCart } from "@/lib/Cart";

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    clearCart();
  }, []);

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
          <motion.h2
            className="comforter text-[30px] sm:text-[60px] text-black leading-none mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Thank you for shopping with us
          </motion.h2>

          <motion.p
            className="text-black mt-4 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Your order has been confirmed and will be processed shortly.
          </motion.p>
        </motion.div>

        <div className="h-[1px] bg-black w-[60px] sm:flex-1 sm:w-auto" />
      </div>

      <motion.div
        className="flex justify-center mb-20 xl:mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <button
          className="primary-btn rounded"
          onClick={() => router.push("/Home")}
        >
          Return
        </button>
      </motion.div>
    </div>
  );
}
