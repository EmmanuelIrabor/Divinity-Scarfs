// "use client";
// import { useEffect } from "react";

// export default function BarbaProvider() {
//   useEffect(() => {
//     import("@barba/core").then((mod) => {
//       const barba = mod.default;
//       barba.init({
//         transitions: [
//           {
//             name: "slide",
//             leave({ current }: any) {
//               return current.container.animate(
//                 [
//                   { opacity: 1, transform: "translateX(0%)" },
//                   { opacity: 0, transform: "translateX(-100%)" },
//                 ],
//                 { duration: 500, easing: "ease-in-out" }
//               ).finished;
//             },
//             enter({ next }: any) {
//               return next.container.animate(
//                 [
//                   { opacity: 0, transform: "translateX(100%)" },
//                   { opacity: 1, transform: "translateX(0%)" },
//                 ],
//                 { duration: 500, easing: "ease-in-out" }
//               ).finished;
//             },
//           },
//         ],
//       });
//     });
//   }, []);
//   return null;
// }
