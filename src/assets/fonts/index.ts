import { Plus_Jakarta_Sans } from "@next/font/google";
import localFont from "@next/font/local";

export const mont = localFont({
  src: [
    { path: "./mont/Mont-ExtraLight.otf", weight: "100", style: "normal" },
    { path: "./mont/Mont-Heavy.otf", weight: "700", style: "normal" },
  ],
  preload: true,
});
export const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], display: "optional" });
