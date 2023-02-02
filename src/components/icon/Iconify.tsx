"use client";

import { Icon, IconifyIcon } from "@iconify/react";

interface PropsIcon {
  icon: IconifyIcon | string;
  size?: number | string;
  className?: string;
  color?: string;
}

export default function Iconify(props: PropsIcon) {
  const { icon, size, color, className } = props;

  let variants: string | number;
  switch (size) {
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
      variants = size || 24;
  }

  return <Icon icon={icon} color={color || ""} width={variants} className={className} />;
}
