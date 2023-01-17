import { IconButton, Iconify } from "@/components";
import { HeroImg } from "@/assets/img";
import Image from "next/image";
import React from "react";
import { mont } from "@/assets/fonts";

export default function Hero() {
  return (
    <div className={mont.className}>
      <div className="h-screen items-center justify-end flex-col gap-10 flex">
        <div className={`text-center font-bold`}>
          <div className="text-8xl">{`HELLO, I'M`}</div>
          <div style={{ WebkitTextStroke: "1.5px #515151", color: "transparent" }} className="text-6xl">
            FRONT-END DEVELOPER
          </div>
        </div>
        <Image src={HeroImg} alt="hero-img" />
        <div className="fixed bottom-5 right-5">
          <IconButton>
            <Iconify icon="fluent:document-one-page-24-filled" width={30} className="text-milk" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
