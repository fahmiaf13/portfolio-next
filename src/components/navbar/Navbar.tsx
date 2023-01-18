"use client";

import Link from "next/link";
import React from "react";

const navList = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Skills",
    url: "#skills",
  },
  {
    name: "Experience",
    url: "#experience",
  },
  {
    name: "Articles",
    url: "/articles",
  },
  {
    name: "Contact",
    url: "#contact",
  },
];

export default function Navbar() {
  return (
    <div className="fixed bg-transparent w-full h-16">
      <ul className="flex h-full gap-10 justify-center items-center">
        {navList.map((item, index) => (
          <li key={index} className="text-sm">
            <Link href={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
