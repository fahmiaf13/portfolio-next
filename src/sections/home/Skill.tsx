import { mont } from "@/assets/fonts";
import { Iconify } from "@/components";
import Link from "next/link";
import { skillsIcon } from "@/data/IconsData";

export default function Skill() {
  return (
    <section className="flex flex-col bg-darker text-milk h-screen justify-center items-center gap-5">
      <h2 className={`${mont.className} font-extrabold`}>SKILL</h2>
      <div className="text-xl font-extrabold">TECH STACK</div>
      <div className="flex gap-3 opacity-30">
        {skillsIcon?.techStack.map((item, index) => (
          <Link key={index} href={item.link} target="_blank" className="hover:text-milk/30 duration-300">
            <Iconify icon={item.icon} />
          </Link>
        ))}
      </div>

      <div className="text-xl font-extrabold">OTHER SKILLS</div>
      <div className="flex flex-wrap justify-center gap-3 opacity-30">
        {skillsIcon?.otherSkill.map((item, index) => (
          <Link key={index} href={item.link} target="_blank" className="hover:text-milk/30 duration-300">
            <Iconify icon={item.icon} />
          </Link>
        ))}
      </div>
    </section>
  );
}
