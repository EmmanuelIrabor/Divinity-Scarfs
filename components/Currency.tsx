"use client";

import { useState, useEffect } from "react";

interface GeolocationData {
  ip: string;
  city: string;
  region: string;
  country: string;
  country_name: string;
  continent_code: string;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  org: string;
}

export default function Currency() {
  const [geoData, setGeoData] = useState<GeolocationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGeolocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) {
          throw new Error("Failed to fetch geolocation data");
        }
        const data = await response.json();
        setGeoData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchGeolocation();
  }, []);

  const getCurrencySymbol = (continentCode: string): string => {
    if (continentCode === "AF") {
      return "&#8358;";
    } else {
      return "&#8364;";
    }
  };

  if (!geoData) {
    return <span className="">&#8364;</span>;
  }

  return (
    <span
      className=""
      dangerouslySetInnerHTML={{
        __html: getCurrencySymbol(geoData.continent_code),
      }}
    />
  );
}
