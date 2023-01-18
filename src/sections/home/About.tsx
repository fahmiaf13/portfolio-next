/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import AboutImg from "/public/img/about-img.png";
import { mont } from "@/assets/fonts";

export default function About() {
  return (
    <section className="h-screen bg-darker text-milk ">
      <div className="flex flex-col h-full container">
        <div className="h-1/4">
          <div className={`${mont.className} text-center font-extrabold flex items-center justify-center h-full`}>
            <h2>ABOUT ME</h2>
          </div>
        </div>
        <div className="h-3/4">
          <div className="grid grid-cols-3 gap-10">
            <div className="justify-self-center">
              <Image src={AboutImg} alt="about" priority className="w-96" />
            </div>
            <div className="col-span-2">
              <div className="text-sm">
                <p className="text-lg text-neon-yellow">
                  "Introducing, my name is <span className={`${mont.className} font-extrabold uppercase`}>Fahmi Achmad Fahrudin</span>"
                </p>
                <br />
                As a graduate of electrical engineering from Telkom University, I have a strong foundation in programming and technology. However, my interest in Front End Development started since my junior high school, where I had my own
                blogspot which opened the door for me to explore this field. <br /> <br /> I chose to focus on this field where I can combine my technical skills with creativity to create attractive, intuitive and industry standard
                interfaces. I have experience in developing responsive and accessible websites using the latest technologies such as HTML, CSS, and JavaScript. I am also proficient in using frameworks such as React and Vue. <br /> <br /> My
                passion in this field grew stronger since my early age, and I've been continuously expanding my knowledge and skill set in this field. I always prioritize the user experience in every project I work on. I enjoy the design
                and development process, from gathering user feedback to iterating to improve the final quality. I am ready to continue learning and developing myself in the field of Front End Development. I am confident that with my
                skills, passion and experience, I can make a significant contribution to the development of innovative and high-quality applications.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
