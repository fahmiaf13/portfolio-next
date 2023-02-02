"use client";

import { Hero, About, Skill, Project } from "@/sections/home";
import { Footer } from "@/components";
import ReactFullpage from "@fullpage/react-fullpage";
import { ProjectCardsData } from "@/data/ProjectData";
import { useEffect, useState } from "react"; // will return static version on server and "live" version on client

export default function Home() {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      navigation={true}
      fadingEffect={true}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Hero />
          </div>
          <div className="section">
            <About />
          </div>
          <div className="section">
            <Skill />
          </div>
          {ProjectCardsData.map((item, index) => (
            <div key={index} className="section">
              <Project data={item} />
            </div>
          ))}
          <div className="section">
            <Footer />
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
