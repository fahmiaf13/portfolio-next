import React from "react";
import { mont } from "@/assets/fonts";
import { Card } from "@/components";
import { experienceDatas } from "@/data/ExperienceData";

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
          <div className="w-full flex-wrap flex gap-3">
            {experienceDatas.map((experience, index) => (
              <Card key={index} data={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
