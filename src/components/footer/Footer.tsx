"use client";
import Image from "next/image";
import Logo from "public/icons/ic-logo.svg";
import ContactImg from "public/img/contact-us.svg";
import { ContactForms, Iconify } from "@/components";
import Link from "next/link";
import { iconFooter } from "@/data/IconsData";

export default function Footer() {
  return (
    <section className="bg-darker text-milk h-screen flex flex-col pb-10">
      <footer className="w-full flex flex-col h-full container">
        <div className="h-full flex items-center justify-center w-full">
          <div className="flex flex-col lg:flex-row w-full items-center h-full">
            <div className="basis-1/2 flex justify-center items-center">
              <div className="w-48 lg:w-full">
                <Image src={ContactImg} alt="contact-us" priority />
              </div>
            </div>
            <div className="basis-1/2 flex flex-col gap-5">
              <div className="text-3xl md:text-5xl font-extrabold text-center">Want to get in touch?</div>
              <ContactForms />
            </div>
          </div>
        </div>
        <div className="h-auto items-end flex justify-center">
          <div className="flex flex-col w-full items-center">
            <div className="flex w-full justify-between">
              <div className="basis-1/3 flex flex-col items-star justify-end gap-2">
                <div className="font-extrabold text-sm opacity-30">Built Using</div>
                <div className="flex gap-1">
                  {iconFooter?.support?.map((item, index) => (
                    <Link key={index} href={item.link} className="opacity-30 hover:opacity-100 duration-300">
                      <Iconify icon={item.icon} />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="basis-1/3 hidden md:flex flex-col items-center opacity-30 ">
                <Image src={Logo} width={48} alt="logo" />
                <div className="text-xl font-extrabold ">Fahmi Achmad Fahrudin</div>
                <div className="font-extralight text-sm ">Copyright © 2023 - All right reserved</div>
              </div>
              <div className="basis-1/3 flex flex-col items-end justify-end gap-2">
                <div className="font-extrabold text-sm opacity-30">Let's Connect</div>
                <div className="flex gap-1">
                  {iconFooter?.social?.map((item, index) => (
                    <Link key={index} href={item.link} className="opacity-30 hover:opacity-100 duration-300">
                      <Iconify icon={item.icon} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
{
}
