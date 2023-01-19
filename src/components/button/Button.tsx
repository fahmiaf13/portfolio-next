import React from "react";
import { buttonColor } from "@/theme/button";
interface Props {
  children: React.ReactNode;
  color: "blue" | "black" | string;
}
export default function Button(props: Props) {
  const { children, color } = props;

  let variants: string;
  switch (color) {
    case "blue":
      variants = buttonColor.blue;
      break;
    default:
      variants = buttonColor.dark;
  }
  return <button className={`${variants} text-sm font-extrabold rounded-lg w-full tracking-wider duration-300 py-2 px-4`}>{children}</button>;
}
