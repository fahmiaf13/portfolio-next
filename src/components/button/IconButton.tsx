import { buttonColor } from "@/theme/button";

interface Props {
  children: React.ReactNode;
  color?: string;
}

export default function IconButton({ children, color }: Props) {
  let variants: string;
  switch (color) {
    case "blue":
      variants = buttonColor.blue;
      break;
    default:
      variants = buttonColor.dark;
  }
  return <button className={`${variants} rounded-full p-3`}>{children}</button>;
}
