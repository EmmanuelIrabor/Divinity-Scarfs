// hooks/useRegionalData.ts
"use client";

import { useState, useEffect } from "react";

export interface Scarf {
  id: number;
  name: string;
  description: string;
  price: number;
  dimension: string;
  creator: string;
  year: number;
  material: string;
  image: string;
}

export interface ScarfsData {
  scarfs: Scarf[];
}

// Default empty data structure
const defaultData: ScarfsData = {
  scarfs: [],
};

let cachedData: ScarfsData = defaultData;
let cachedRegion: string | null = null;

export function useRegionalData(): ScarfsData {
  const [scarfsData, setScarfsData] = useState<ScarfsData>(cachedData);

  useEffect(() => {
    // If already cached with actual data, use it immediately
    if (cachedData.scarfs.length > 0) {
      setScarfsData(cachedData);
      return;
    }

    const loadRegionalData = async () => {
      try {
        // Get continent code from cache or fetch
        let continentCode = cachedRegion || "EU";

        if (!cachedRegion) {
          const cachedContinent = localStorage.getItem("continent_code");
          if (cachedContinent) {
            continentCode = cachedContinent;
            cachedRegion = cachedContinent;
          } else {
            const response = await fetch("https://ipapi.co/continent_code/", {
              method: "GET",
              cache: "no-cache",
            });

            if (response.ok) {
              continentCode = (await response.text()).trim();
              localStorage.setItem("continent_code", continentCode);
              cachedRegion = continentCode;
            }
          }
        }

        // Import the appropriate JSON file
        let data;
        if (continentCode === "AF") {
          data = await import("@/app/data/ScarfsAF.json");
        } else {
          data = await import("@/app/data/ScarfsEU.json");
        }

        cachedData = data.default;
        setScarfsData(data.default);
      } catch (err) {
        console.error("Error loading regional data:", err);
        // Fallback to EU data
        const fallbackData = await import("@/app/data/ScarfsEU.json");
        cachedData = fallbackData.default;
        setScarfsData(fallbackData.default);
      }
    };

    loadRegionalData();
  }, []);

  return scarfsData;
}
