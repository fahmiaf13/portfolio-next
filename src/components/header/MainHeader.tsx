"use client";

import { useScreenSize, useModal } from "@/hooks";
import { useEffect, useState } from "react";
import { Navbar } from "../navbar";
import { Iconify } from "../icon";
import { Modal } from "../modal";
import { HamburgerMenu } from "../hamburger-menu";

export default function MainHeader() {
  const [isHide, setIsHide] = useState<boolean>(true);
  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize < 768) {
      setIsHide(false);
    } else {
      setIsHide(true);
    }
  }, [screenSize]);
  return <div>{isHide ? <Navbar /> : <HamburgerMenu />}</div>;
}
