import React from "react";
import { buttonColor } from "@/theme/button";

interface ButtonProps {
  children: React.ReactNode;
  color: "blue" | "black" | "white" | string;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: any) => void;
  type?: "submit";
}

export default function Button(props: ButtonProps) {
  const { children, color, className, fullWidth, disabled, loading, onClick, type } = props;

  let colors: string;
  switch (color) {
    case "blue":
      colors = buttonColor.blue;
      break;
    case "white":
      colors = buttonColor.white;
      break;
    default:
      colors = buttonColor.dark;
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={`${colors} ${className} ${fullWidth && "w-full"} disabled:opacity-30 disabled:pointer-events-none cursor-pointer duration-300 tracking-wider py-2 px-4`}>
      {children}
    </button>
  );
}
