// "use client";
// import { usePathname } from "next/navigation";
// import { AnimatePresence, motion } from "framer-motion";
// import { ReactNode, useEffect, useState } from "react";
// import { getRouteTransition, normalizeRoute } from "@/lib/route-transitions";

// interface RouteTransitionProps {
//   children: ReactNode;
// }

// export default function RouteTransition({ children }: RouteTransitionProps) {
//   const pathname = usePathname();
//   const [previousPath, setPreviousPath] = useState<string>("home");

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setPreviousPath(normalizeRoute(pathname));
//     }, 300);

//     return () => clearTimeout(timer);
//   }, [pathname]);

//   const currentRoute = normalizeRoute(pathname);
//   const transition = getRouteTransition(previousPath, currentRoute);

//   return (
//     <div className="min-h-screen w-full overflow-x-hidden">
//       {" "}
//       {/* Prevent horizontal scroll */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={pathname}
//           initial={transition.initial}
//           animate={transition.animate}
//           exit={transition.exit}
//           transition={{
//             duration: 0.3,
//             ease: "easeInOut",
//           }}
//           className="w-full min-h-screen"
//         >
//           {children}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { getRouteTransition, normalizeRoute } from "@/lib/route-transitions";

interface RouteTransitionProps {
  children: ReactNode;
}

export default function RouteTransition({ children }: RouteTransitionProps) {
  const pathname = usePathname();
  const [previousPath, setPreviousPath] = useState<string>("home");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreviousPath(normalizeRoute(pathname));
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  const currentRoute = normalizeRoute(pathname);
  const transition = getRouteTransition(previousPath, currentRoute);

  return (
    <div className="relative w-full min-h-screen">
      <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
        <motion.div
          key={pathname}
          initial={transition.initial}
          animate={transition.animate}
          exit={transition.exit}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute", // Absolute positioning prevents layout shifts
            top: 0,
            left: 0,
            right: 0,
          }}
          className="w-full min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
