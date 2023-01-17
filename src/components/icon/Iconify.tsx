"use client";

import { Icon, IconifyIcon } from "@iconify/react";
import colors from "tailwindcss/colors";

interface Props {
  icon: IconifyIcon | string;
  width?: number | string;
  className?: string;
}

export default function Iconify(props: Props) {
  const { icon, width, className } = props;

  console.log(colors);

  let variants;
  switch (width) {
    case "small":
      variants = 24;
      break;
    case "medium":
      variants = 36;
      break;
    case "large":
      variants = 48;
      break;
    default:
      variants = width || 36;
  }

  return <Icon icon={icon} width={variants} className={className} />;
}
