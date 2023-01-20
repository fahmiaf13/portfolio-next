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
    <section className="h-screen bg-milk">
      <div className="flex flex-col container h-full">
        <div className="h-1/4">
          <div className={`${mont.className} text-center font-extrabold flex items-center justify-center h-full`}>
            <h2>EXPERIENCE</h2>
          </div>
        </div>
        <div className="h-3/4">
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
