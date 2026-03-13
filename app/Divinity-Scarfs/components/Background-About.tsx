"use client";

import { useEffect } from "react";

export default function BackgroundAbout() {
  useEffect(() => {
    document.body.classList.add("bg-about");
    return () => {
      document.body.classList.remove("bg-about");
    };
  }, []);

  return null;
}
