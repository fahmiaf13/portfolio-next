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
      <div className="fixed bottom-5 right-5">
        <IconButton color="blue">
          <Iconify icon="fluent:document-one-page-24-filled" width={30} />
        </IconButton>
      </div>
    </main>
  );
}
