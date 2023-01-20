import React from "react";
import { mont } from "@/assets/fonts";
import { Card, Carousel } from "@/components";
import { experienceDatas } from "@/data/ExperienceData";
import Image from "next/image";

export default function Experience() {
  return (
    <section className="h-screen bg-milk">
      <div className="flex flex-col container h-full">
        <div className="h-1/4">
          <div className={`${mont.className} text-center font-extrabold flex items-center justify-center h-full`}>
            <h2>EXPERIENCE</h2>
          </div>
        </div>
        <div className="h-3/4">
          <div className="w-full">
            <Carousel>
              {experienceDatas.map((experience, index) => (
                <Card key={index} data={experience} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
