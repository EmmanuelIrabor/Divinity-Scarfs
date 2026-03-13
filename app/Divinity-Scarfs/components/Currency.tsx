"use client";

import { useState, useEffect } from "react";

export default function Currency() {
  const [currencySymbol, setCurrencySymbol] = useState<string>("€");

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const cached = localStorage.getItem("currency_data");
        if (cached) {
          const { symbol, timestamp } = JSON.parse(cached);
          const oneHour = 60 * 60 * 1000;
          if (Date.now() - timestamp < oneHour) {
            setCurrencySymbol(symbol);
            return;
          }
        }

        const response = await fetch("https://ipapi.co/continent_code/", {
          method: "GET",
          cache: "no-cache",
        });

        if (!response.ok) {
          setCurrencySymbol("€");
          return;
        }

        const continentCode = await response.text();
        const symbol = continentCode.trim() === "AF" ? "₦" : "€";

        localStorage.setItem(
          "currency_data",
          JSON.stringify({
            symbol,
            timestamp: Date.now(),
          })
        );

        setCurrencySymbol(symbol);
      } catch (err) {
        setCurrencySymbol("€");
      }
    };

    fetchCurrency();
  }, []);

  return <span>{currencySymbol}</span>;
}
