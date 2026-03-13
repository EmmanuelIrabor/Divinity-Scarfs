"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

let lenis: Lenis;

export function scrollTo(id: string) {
  if (!lenis) return;
  const el = document.getElementById(id);
  if (el) lenis.scrollTo(el);
}

export default function LenisProvider() {
  useEffect(() => {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => t,
      orientation: "vertical",
      smoothWheel: true,
      //   smoothTouch: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return null;
}
