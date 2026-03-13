import { headers } from "next/headers";

export const currencySymbols: Record<string, string> = {
  AF: "&#x20A6;", // Naira
  EU: "&#x20AC;", // Euro
  AS: "&#x00A5;", // Yuan/Yen
  NA: "&#x24;", // Dollar
  SA: "&#x24;",
  OC: "&#x24;",
  AN: "&#x24;",
  DEFAULT: "&#x24;",
};

export async function getCurrency(ip?: string) {
  if (!ip) return currencySymbols.DEFAULT;

  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`);
    if (!res.ok) return currencySymbols.DEFAULT;

    const data = await res.json();
    const continent = data.continent_code;

    return currencySymbols[continent] || currencySymbols.DEFAULT;
  } catch (err) {
    console.error("Currency lookup failed", err);
    return currencySymbols.DEFAULT;
  }
}

// Helper to get IP from headers
export async function getIpFromHeaders() {
  const h = await headers();
  const forwardedFor = h.get("x-forwarded-for");
  return forwardedFor?.split(",")[0] || undefined;
}
