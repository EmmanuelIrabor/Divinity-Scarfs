"use client";
import { useRegionalData } from "@/app/Divinity-Scarfs/hooks/RegionalData";
import Currency from "../components/Currency";

export default function RegionalProvider() {
  // Initialize regional data
  useRegionalData();

  return (
    <div className="hidden">
      <Currency />
    </div>
  );
}
