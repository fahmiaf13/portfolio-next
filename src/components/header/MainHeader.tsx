"use client";

import { useScreenSize, useModal } from "@/hooks";
import { useEffect, useState } from "react";
import { Navbar } from "../navbar";
import { Iconify } from "../icon";
import { IconButton } from "../button";
import { Modal } from "../modal";

export default function MainHeader() {
  const [isHide, setIsHide] = useState<boolean>(true);
  const { open, handleOpen, handleClose } = useModal();
  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize < 768) {
      setIsHide(false);
    } else {
      setIsHide(true);
    }
  }, [screenSize]);
  return (
    <div>
      {isHide ? (
        <Navbar />
      ) : (
        <>
          <div className="fixed top-5 left-5 z-[99]">
            <IconButton onClick={handleOpen}>
              <Iconify icon="icon-park:hamburger-button" />
            </IconButton>
          </div>
          <Modal open={open} onClose={handleClose}>
            <div>Hello</div>
          </Modal>
        </>
      )}
    </div>
  );
}
