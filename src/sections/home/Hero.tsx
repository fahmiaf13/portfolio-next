"use client";
/* eslint-disable react/no-unescaped-entities */
import HeroImg from "public/img/hero-img.png";
import Image from "next/image";
import React from "react";
import { mont } from "@/assets/fonts";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className={`${mont.className} h-screen bg-milk text-darker`}>
      <div className="container justify-center h-full flex">
        <div className="flex w-full lg:w-1/2 flex-col items-center justify-end gap-5">
          <div className="text-center font-extrabold">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ rotate: 360, scale: 1, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}
              className="text-5xl md:text-7xl"
            >
              Hello i'm
            </motion.div>
            <motion.h2
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}
              className="text-3xl md:text-5xl outlined-text"
            >
              FRONT-END DEVELOPER
            </motion.h2>
          </div>
          <motion.div
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
              stiffness: 150,
              damping: 20,
            }}
          >
            <Image src={HeroImg} alt="hero-img" priority className="w-64 md:w-80" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
