"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { navList } from "@/data/NavigationList";

const variants = {
  open: { display: "block", transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  closed: {
    display: "none",
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ open }: any) => (
  <motion.ul className={` absolute w-screen h-screen`} variants={variants}>
    <div className="flex gap-5 flex-col justify-center items-center w-full h-full">
      {navList.map((item, index) => (
        <MenuItem item={item} key={index} />
      ))}
    </div>
  </motion.ul>
);
