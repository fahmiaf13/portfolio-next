import { mont } from "@/assets/fonts";
import { Iconify } from "@/components";
import Link from "next/link";

const iconSkill = {
  techStack: [
    {
      icon: "fa-brands:react",
      link: "https://beta.reactjs.org/",
    },
    {
      icon: "mdi:language-typescript",
      link: "https://www.typescriptlang.org/",
    },
    {
      icon: "simple-icons:redux",
      link: "https://redux-toolkit.js.org/",
    },
    {
      icon: "mdi:tailwind",
      link: "https://tailwindcss.com/",
    },
    {
      icon: "file-icons:nextjs",
      link: "https://nextjs.org/",
    },
  ],
  otherSkill: [
    {
      icon: "cib:arduino",
      link: "https://www.arduino.cc/",
    },
    {
      icon: "teenyicons:c-solid",
      link: "https://devdocs.io/c/",
    },
    {
      icon: "icomoon-free:html-five",
      link: "https://devdocs.io/html/",
    },
    {
      icon: "simple-icons:css3",
      link: "https://devdocs.io/css/",
    },
    {
      icon: "bxl:javascript",
      link: "https://www.javascript.com/",
    },
    {
      icon: "mdi:bootstrap",
      link: "https://getbootstrap.com/",
    },
    {
      icon: "mdi:sass",
      link: "https://sass-lang.com/",
    },
    {
      icon: "akar-icons:vue-fill",
      link: "",
    },
    {
      icon: "teenyicons:nodejs-solid",
      link: "https://vuejs.org/",
    },

    {
      icon: "simple-icons:windicss",
      link: "https://windicss.org/",
    },
    {
      icon: "mdi:git",
      link: "https://git-scm.com/",
    },
    {
      icon: "file-icons:adobe-photoshop",
      link: "https://www.adobe.com/id_id/products/photoshop.html",
    },
    {
      icon: "file-icons:adobe-illustrator",
      link: "https://www.adobe.com/id_id/products/illustrator.html",
    },
    {
      icon: "ph:figma-logo-bold",
      link: "https://www.figma.com/",
    },
  ],
};

export default function Skill() {
  return (
    <section className="flex flex-col bg-darker text-milk h-screen justify-center items-center gap-5">
      <h2 className={`${mont.className} font-extrabold`}>SKILL</h2>
      <div className="text-xl font-extrabold">TECH STACK</div>
      <div className="flex gap-3 opacity-30">
        {iconSkill?.techStack.map((item, index) => (
          <Link key={index} href={item.link} className="hover:text-milk/30 duration-300">
            <Iconify icon={item.icon} />
          </Link>
        ))}
      </div>

      <div className="text-xl font-extrabold">OTHER SKILLS</div>
      <div className="flex flex-wrap justify-center gap-3 opacity-30">
        {iconSkill?.otherSkill.map((item, index) => (
          <Link key={index} href={item.link} className="hover:text-milk/30 duration-300">
            <Iconify icon={item.icon} />
          </Link>
        ))}
      </div>
    </section>
  );
}
