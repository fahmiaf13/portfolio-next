/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import AboutImg from "/public/img/about-img.jpg";
import { mont } from "@/assets/fonts";
import { Iconify } from "@/components";
import { Icon } from "@iconify/react";

export default function About() {
  return (
    // <section className="h-screen sm:py-0 bg-darker text-milk ">
    //   <div className="container flex flex-col gap-y-10 items-center justify-center h-full">
    //     <div className={`${mont.className} text-center font-extrabold `}>
    //       <h2>ABOUT ME</h2>
    //     </div>
    //     <div className="flex flex-col gap-5">
    //       <div className="flex justify-center max-w-8/12 basis-8/12 grow-0 md:basis-4/12 md:max-w-4/12 object-cover">
    //         <Image src={AboutImg} alt="about-img" className="md:max-w-full h-full" priority />
    //       </div>
    //       <div className="w-full flex flex-col items-center justify-center md:items-start md:justify-start md:w-8/12">
    //         <div className="lg:text-left text-center text-[12px] sm:text-sm">
    //           <p className="text-[14px] sm:text-lg">Introducing, my name is Fahmi Achmad Fahrudin</p>
    //           <p>
    //             "1 year of experience as a front-end developer has honed my skills in creating clean, organized, and efficient code. My innate curiosity and desire to learn allows me to bring new ideas and innovative solutions to every
    //             project I work on."
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
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
