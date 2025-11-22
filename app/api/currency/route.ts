import { NextRequest, NextResponse } from "next/server";
import { getCurrency } from "@/lib/CurrencyProvider";

export async function GET(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0];
  const symbol = await getCurrency(ip);
  return NextResponse.json({ symbol });
}
