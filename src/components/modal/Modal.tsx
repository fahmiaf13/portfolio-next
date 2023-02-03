"use client";

import { Icon } from "@iconify/react";
import { IconButton } from "../button";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
  open: boolean;
}

export default function Modal({ children, onClose, open }: Props) {
  return (
    <div className={`fixed bg-darker text-milk h-screen w-screen z-[110] ${open ? "block" : "hidden"}`}>
      <div className="flex h-full items-center justify-center w-full relative">
        <div>
          <IconButton onClick={onClose}>
            <Icon icon="mdi:close-circle" className="top-5 right-5 absolute" />
          </IconButton>
          {children}
        </div>
      </div>
    </div>
  );
}
