import { mont } from "@/assets/fonts";
import { Iconify } from "@/components";

const iconSkill = {
  techStack: [
    {
      icon: "fa-brands:react",
      link: "",
    },
    {
      icon: "mdi:language-typescript",
      link: "",
    },
    {
      icon: "simple-icons:redux",
      link: "",
    },
    {
      icon: "mdi:tailwind",
      link: "",
    },
    {
      icon: "fa-brands:react",
      link: "",
    },
    {
      icon: "file-icons:nextjs",
      link: "",
    },
  ],
  otherSkill: [
    {
      icon: "cib:arduino",
      link: "",
    },
    {
      icon: "teenyicons:c-solid",
      link: "",
    },
    {
      icon: "icomoon-free:html-five",
      link: "",
    },
    {
      icon: "simple-icons:css3",
      link: "",
    },
    {
      icon: "bxl:javascript",
      link: "",
    },
    {
      icon: "mdi:bootstrap",
      link: "",
    },
    {
      icon: "mdi:sass",
      link: "",
    },
    {
      icon: "akar-icons:vue-fill",
      link: "",
    },
    {
      icon: "teenyicons:nodejs-solid",
      link: "",
    },

    {
      icon: "simple-icons:windicss",
      link: "",
    },
    {
      icon: "mdi:git",
      link: "",
    },
    {
      icon: "file-icons:adobe-photoshop",
      link: "",
    },
    {
      icon: "file-icons:adobe-illustrator",
      link: "",
    },
    {
      icon: "ph:figma-logo-bold",
      link: "",
    },
  ],
};

export default function Skill() {
  return (
    <div className="flex flex-col bg-darker text-milk h-screen justify-center items-center gap-5">
      <h2 className={`${mont.className} font-extrabold`}>SKILL</h2>
      <div className="text-xl font-extrabold">TECH STACK</div>
      <div className="flex gap-3 opacity-30">
        {iconSkill?.techStack.map((item, index) => (
          <Iconify key={index} icon={item.icon} />
        ))}
      </div>

      <div className="text-xl font-extrabold">OTHER SKILLS</div>
      <div className="flex gap-3 opacity-30">
        {iconSkill?.otherSkill.map((item, index) => (
          <Iconify key={index} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}
