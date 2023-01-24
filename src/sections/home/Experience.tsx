"use client";

import React, { useEffect, useState } from "react";
import { mont } from "@/assets/fonts";
import { Card, Carousel } from "@/components";
import { experienceDatas } from "@/data/ExperienceData";
import { useScreenSize } from "@/hooks";

export default function Experience() {
  const [isHide, setIsHide] = useState<boolean>(true);
  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize < 1024) {
      setIsHide(false);
    } else {
      setIsHide(true);
    }
  }, [screenSize]);

  return (
    <section className="h-screen  bg-milk">
      <div className="container flex flex-col h-full justify-center gap-5">
        <div className={`${mont.className} text-center font-extrabold `}>
          <h2>EXPERIENCE</h2>
        </div>
        <div>
          {isHide ? (
            <div className="w-full flex gap-3">
              {experienceDatas.map((experience, index) => (
                <Card key={index} data={experience} />
              ))}
            </div>
          ) : (
            <Carousel>
              {experienceDatas.map((experience, index) => (
                <Card key={index} data={experience} />
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
}
