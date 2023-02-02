"use client";
import { mont } from "@/assets/fonts";
import { Iconify } from "@/components";
import Link from "next/link";
import { skillsIcon } from "@/data/IconsData";

export default function Skill() {
  return (
    <section className="bg-milk text-darker h-screen">
      <div className="container h-full flex flex-col justify-center">
        <div className="flex flex-row flex-wrap">
          <div className="w-full">
            <div className={`${mont.className} font-extrabold text-5xl mb-2`}>Tech Stack</div>
          </div>
          {skillsIcon?.techStack.map((item, index) => (
            <div key={index} className="basis-1/3 flex flex-shrink p-2">
              <div key={index} className="group gap-2 flex flex-col hover:border-darker/100 border-darker/30 text-darker/30 hover:text-darker/100 border-[1px] duration-300 rounded-xl p-3 cursor-pointer">
                <Link href={item.link} target="_blank">
                  <Iconify icon={item.icon} />
                </Link>
                <div className="font-extrabold">{item.name}</div>
                <div className="text-sm">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={`${mont.className} font-extrabold text-5xl my-5`}>Other Skill</div>
        <div className="flex gap-2 flex-wrap">
          {skillsIcon?.otherSkill.map((item, index) => (
            <Link href={item.link} key={index} target="_blank" className="opacity-30 hover:opacity-100 duration-300">
              <Iconify icon={item.icon} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
