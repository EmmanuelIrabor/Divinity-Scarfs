"use client";

import { useEffect } from "react";

export default function BackgroundTwo() {
  useEffect(() => {
    document.body.classList.add("bg-none");
    return () => {
      document.body.classList.remove("bg-none");
    };
  }, []);

  return null;
}