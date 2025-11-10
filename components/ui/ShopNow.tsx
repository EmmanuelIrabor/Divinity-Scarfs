"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ShopNow({ isDark = false }: { isDark?: boolean }) {
  const router = useRouter();

  return (
    <div
      className="fixed bottom-0 left-1/2 -translate-x-1/2
      xl:static xl:translate-x-0 xl:bottom-auto xl:left-auto
      xl:flex xl:justify-end xl:px-40 xl:mt-12 xl:mb-0"
    >
      {/* <button
        className={isDark ? "secondary-btn" : "primary-btn"}
        onClick={() => router.push("/Shop")}
      >
        Shop Now
      </button> */}
      <Link className={isDark ? "secondary-btn" : "primary-btn"} href={"/Shop"}>
        {" "}
        Shop Now
      </Link>
    </div>
  );
}
