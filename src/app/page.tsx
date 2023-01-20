import { Hero, About, Skill, Experience, Articles, Contact } from "@/sections/home";
import { IconButton, Iconify } from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skill />
      <Experience />
      <Articles />
      <Contact />
    </main>
  );
}
