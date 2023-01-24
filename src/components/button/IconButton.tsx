import { buttonColor } from "@/theme/button";

interface Props {
  children: React.ReactNode;
  color?: string;
  onClick?: () => void;
}

export default function IconButton({ children, color, onClick }: Props) {
  let variants: string;
  switch (color) {
    case "blue":
      variants = buttonColor.blue;
      break;
    default:
      variants = buttonColor.dark;
  }
  return (
    <button onClick={onClick} className={`${variants} rounded-full p-3`}>
      {children}
    </button>
  );
}
