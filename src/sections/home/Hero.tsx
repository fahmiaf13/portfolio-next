/* eslint-disable react/no-unescaped-entities */
import { IconButton, Iconify } from "@/components";
import HeroImg from "public/img/hero-img.png";
import Image from "next/image";
import React from "react";
import { mont } from "@/assets/fonts";

export default function Hero() {
  return (
    <section className={mont.className}>
      <div className="h-screen container items-center justify-end flex-col gap-10 flex">
        <div className="text-center font-extrabold">
          <h1 className="text-5xl md:text-7xl">HELLO, I'M</h1>
          <h2 className="text-3xl md:text-5xl" style={{ WebkitTextStroke: "1.5px #515151", color: "transparent" }}>
            FRONT-END DEVELOPER
          </h2>
        </div>
        <Image src={HeroImg} alt="hero-img" priority />
        <div className="fixed bottom-5 right-5">
          <IconButton>
            <Iconify icon="fluent:document-one-page-24-filled" width={30} className="text-milk" />
          </IconButton>
        </div>
      </div>
    </section>
  );
}
