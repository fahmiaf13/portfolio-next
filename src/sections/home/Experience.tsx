"use client";

import React, { useEffect, useState } from "react";
import { mont } from "@/assets/fonts";
import { Card, Carousel, CardHeader, CardContent } from "@/components";
import { experienceDatas } from "@/data/ExperienceData";
import { useScreenSize } from "@/hooks";
import Image from "next/image";

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
              {experienceDatas.map((data, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="rounded-full w-20 h-20 p-5 border-darker/10 border-2">
                      <Image src={data.icon} alt="soluvas" className="rounded-full w-full h-full" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="font-extrabold text-xl">{data.company}</div>
                    <div className="text-sm text-neon-blue">{data.role}</div>
                    <div className="text-sm">{data.entryDate}</div>
                    <div className="text-sm">{data.status}</div>
                    <ul className="text-sm flex flex-col gap-2 mt-5">
                      {data?.desc.map((item, index) => (
                        <li key={index} className="pb-2 border-b-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Carousel>
              {experienceDatas.map((data, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="rounded-full w-20 h-20 p-5 border-darker/10 border-2">
                      <Image src={data.icon} alt="soluvas" className="rounded-full w-full h-full" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="font-extrabold text-xl">{data.company}</div>
                    <div className="text-sm text-neon-blue">{data.role}</div>
                    <div className="text-sm">{data.entryDate}</div>
                    <div className="text-sm">{data.status}</div>
                    <ul className="text-sm flex flex-col gap-2 mt-5">
                      {data?.desc.map((item, index) => (
                        <li key={index} className="pb-2 border-b-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
}
