import Image from "next/image";
import Logo from "public/icons/ic-logo.svg";
import { Iconify } from "@/components";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-milk text-darker h-screen flex items-end">
      <footer className="bg-darker w-full text-milk">
        <div className="container py-5 flex flex-col w items-center justify-center gap-3">
          <div className="flex flex-col items-center">
            <Image src={Logo} width={64} alt="logo" />
            <div className="text-xl font-extrabold tracking-wider">FAHMI ACHMAD FAHRUDIN</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-lg font-extrabold text-milk/30 tracking-wide">SOCIAL</div>
            <div className="flex gap-2">
              <Link href="https://github.com/fahmiaf13" className="hover:text-milk/30 duration-300">
                <Iconify icon="mdi:github" />
              </Link>
              <Link href="https://www.linkedin.com/in/fahmi-achmad-fahrudin/" className="hover:text-milk/30 duration-300">
                <Iconify icon="mdi:linkedin" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-lg font-extrabold text-milk/30 tracking-wide">WAS BUILT WITH</div>
            <div className="flex gap-2">
              <Link href="https://nextjs.org/" className="hover:text-milk/30 duration-300">
                <Iconify icon="file-icons:nextjs" />
              </Link>
              <Link href="https://tailwindcss.com/" className="hover:text-milk/30 duration-300">
                <Iconify icon="mdi:tailwind" />
              </Link>
              <Link href="https://www.typescriptlang.org/" className="hover:text-milk/30 duration-300">
                <Iconify icon="mdi:language-typescript" />
              </Link>
              <Link href="https://vercel.com" className="hover:text-milk/30 duration-300">
                <Iconify icon="ion:logo-vercel" />
              </Link>
            </div>
          </div>
          <div className="font-extralight text-milk/30 mt-5">Copyright © 2023 - All right reserved</div>
        </div>
      </footer>
    </section>
  );
}
{
}
