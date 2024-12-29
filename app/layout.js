"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Naviagtion from "./components/Naviagtion.jsx";
import { Footer } from "./components/Footer";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-raleway layout-body`}
      >
        {/* Centered container */}
        <div className="max-w-screen-lg sm:max-w-[1140px] mx-auto pt-4 z-0">
          <Naviagtion/>
          {children}
          {path === '/' ? '' : <Footer/>}
        </div>
      </body>
    </html>
  );
}

