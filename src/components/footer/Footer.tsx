import Image from "next/image";
import Logo from "public/icons/ic-logo.svg";
import { Iconify } from "@/components";
import Link from "next/link";
import { iconFooter } from "@/data/IconsData";

export default function Footer() {
  return (
    <section className="bg-milk text-darker h-screen flex items-end">
      <footer className="bg-darker w-full text-milk">
        <div className="container py-5 flex flex-col w items-center justify-center gap-3">
          <div className="flex flex-col items-center">
            <Image src={Logo} width={64} alt="logo" />
            <div className="text-2xl font-extrabold tracking-wider">FAHMI ACHMAD FAHRUDIN</div>
          </div>
          <div className="flex gap-2 flex-col items-center">
            <div className="text-lg font-extrabold text-milk/30 tracking-wide">SOCIAL</div>
            <div className="flex gap-2">
              {iconFooter?.social?.map((item, index) => (
                <Link key={index} href={item.link} target="_blank" className="hover:text-milk/10 duration-300 text-milk/30">
                  <Iconify icon={item.icon} />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-2 flex-col items-center">
            <div className="text-lg font-extrabold text-milk/30 tracking-wide">WAS BUILT WITH</div>
            <div className="flex gap-2">
              {iconFooter?.support?.map((item, index) => (
                <Link key={index} href={item.link} target="_blank" className="hover:text-milk/10 duration-300 text-milk/30">
                  <Iconify icon={item.icon} />
                </Link>
              ))}
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
