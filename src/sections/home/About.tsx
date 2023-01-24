/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import AboutImg from "/public/img/about-img.jpg";
import { mont } from "@/assets/fonts";
import { Iconify } from "@/components";
import { Icon } from "@iconify/react";

export default function About() {
  return (
    <section className="h-screen bg-darker text-milk">
      <div className="container items-center justify-center h-full flex">
        <div className="flex w-full lg:w-1/2 flex-col items-center gap-5">
          <div className="text-center font-extrabold">
            <h2 className={`${mont.className} text-center font-extrabold `}>ABOUT ME</h2>
          </div>
          <Image src={AboutImg} alt="hero-img" priority className="w-64" />
          <p className="text-center text-sm font-extralight">
            "1 year of experience as a front-end developer has honed my skills in creating clean, organized, and efficient code. My innate curiosity and desire to learn allows me to bring new ideas and innovative solutions to every project
            I work on."
          </p>
          <button className="flex h-full items-center text-sm gap-1 text-darker bg-milk py-2 px-5">
            See Details{` `}
            <span>
              <Icon icon="material-symbols:arrow-outward-rounded" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
