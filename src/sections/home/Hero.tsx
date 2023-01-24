/* eslint-disable react/no-unescaped-entities */
import HeroImg from "public/img/hero-img.png";
import Image from "next/image";
import React from "react";
import { mont } from "@/assets/fonts";

export default function Hero() {
  return (
    <section className={`${mont.className} h-screen bg-milk text-darker`}>
      <div className="container justify-center h-full flex">
        <div className="flex w-full lg:w-1/2 flex-col items-center justify-end gap-5">
          <div className="text-center font-extrabold">
            <h1 className="text-5xl md:text-7xl">HELLO, I'M</h1>
            <h2 className="text-3xl md:text-5xl outlined-text">FRONT-END DEVELOPER</h2>
          </div>
          <Image src={HeroImg} alt="hero-img" priority className="w-64 md:w-80" />
        </div>
      </div>
    </section>
  );
}
