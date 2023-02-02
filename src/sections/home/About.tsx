/* eslint-disable react/no-unescaped-entities */
import { mont } from "@/assets/fonts";
import { Card, CardContent, CardHeader, Carousel } from "@/components";
import { experienceDatas } from "@/data/ExperienceData";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useScreenSize } from "@/hooks";

export default function About() {
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
      <div className="container flex flex-col h-full justify-center gap-5 ">
        <div className="w-full flex justify-center">
          <div className={`${mont.className} text-center font-extrabold w-full md:w-1/2`}>
            <h2 className="my-5">About me</h2>
            <p className="text-sm">
              "1 year of experience as a front-end developer has honed my skills in creating clean, organized, and efficient code. My innate curiosity and desire to learn allows me to bring new ideas and innovative solutions to every
              project I work on.”
            </p>
          </div>
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
