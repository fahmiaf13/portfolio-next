import { PublicLayout } from "@/layouts";
import "@/assets/styles/globals.css";
import { plusJakartaSans, mont } from "@/assets/fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.className}>
      <head />
      <body>
        <PublicLayout>{children}</PublicLayout>
      </body>
    </html>
  );
}
