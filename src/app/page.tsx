"use client";

import { Hero, About, Skill, Experience, Articles, Contact } from "@/sections/home";
import { IconButton, Iconify, Footer } from "@/components";
import ReactFullpage from "@fullpage/react-fullpage"; // will return static version on server and "live" version on client

export default function Home() {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
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
          <div className="section">
            <Experience />
          </div>
          <div className="section">
            <Articles />
          </div>
          <div className="section">
            <Contact />
          </div>
          <div className="section">
            <Footer />
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
