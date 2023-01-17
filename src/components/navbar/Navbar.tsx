import React from "react";

export default function Navbar() {
  return (
    <div className="fixed bg-transparent w-full h-24">
      <ul className="flex h-full gap-10 justify-center items-center">
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Article</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
