"use client";

import { useEffect } from "react";

export default function BackgroundTwo() {
  useEffect(() => {
    document.body.classList.add("bg-two");
    return () => {
      document.body.classList.remove("bg-two");
    };
  }, []);

  return null;
}
