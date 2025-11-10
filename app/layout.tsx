import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/main.scss";
import LenisProvider from "../components/Lenis";
import RouteTransition from "@/components/RouteTransitions";
// import BarbaProvider from "../components/Barba";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divinity Scarfs",
  description: "Handmade Scarfs Crafted with Love and Care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider />
        {/* <BarbaProvider /> */}

        <RouteTransition>{children}</RouteTransition>
      </body>
    </html>
  );
}
