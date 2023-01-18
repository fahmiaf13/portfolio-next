import "@/assets/styles/globals.css";
import { plusJakartaSans, mont } from "@/assets/fonts";
import { Navbar } from "@/components/navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.className}>
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
