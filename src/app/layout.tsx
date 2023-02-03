"use client";

import "@/assets/styles/globals.css";
import { plusJakartaSans } from "@/assets/fonts";
import { Footer, MainHeader } from "@/components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.className}>
      <head />
      <body>
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
