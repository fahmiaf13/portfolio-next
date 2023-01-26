"use client";

import Link from "next/link";
import { useScreenSize } from "@/hooks";
import { useEffect, useState } from "react";
import { navList } from "@/data/NavigationList";

export default function Navbar() {
  const [isHide, setIsHide] = useState<boolean>(true);
  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize < 768) {
      setIsHide(false);
    } else {
      setIsHide(true);
    }
  }, [screenSize]);

  return (
    <>
      {isHide ? (
        <div className="fixed z-[99] bg-milk/30 backdrop-blur-md w-full h-14">
          <ul className="flex h-full gap-10 justify-center items-center">
            {navList.map((item, index) => (
              <li key={index} className="text-sm">
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
