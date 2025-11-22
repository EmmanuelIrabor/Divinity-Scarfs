"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface CurrencyContextType {
  symbol: string;
}

const CurrencyContext = createContext<CurrencyContextType>({
  symbol: "&#xFF04;",
});

export function useCurrency() {
  return useContext(CurrencyContext);
}

export default function CurrencyProviderClient({
  children,
}: {
  children: ReactNode;
}) {
  const [symbol, setSymbol] = useState("&#xFF04;");

  useEffect(() => {
    async function fetchCurrency() {
      try {
        const res = await fetch("/api/currency");
        const data = await res.json();
        setSymbol(data.symbol);
      } catch (err) {
        console.error("Failed to fetch currency", err);
      }
    }
    fetchCurrency();
  }, []);

  return (
    <CurrencyContext.Provider value={{ symbol }}>
      {children}
    </CurrencyContext.Provider>
  );
}
