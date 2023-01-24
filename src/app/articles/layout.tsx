import "@/assets/styles/globals.css";
import { plusJakartaSans } from "@/assets/fonts";
import { Footer, MainHeader } from "@/components";

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <MainHeader />
      {children}
      <Footer />
    </section>
  );
}
