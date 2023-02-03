"use client";
import Image from "next/image";
import Link from "next/link";
import { mont } from "@/assets/fonts";

export default function Project({ data }: any) {
  return (
    <section id={data.name} style={{ backgroundImage: data.color }} className="h-screen text-milk">
      <main className="container flex justify-center h-full items-center">
        <div className="w-3/4 sm:w-1/2 flex flex-col gap-5 items-center ">
          <h2 className={`${mont.className} font-extrabold text-center`}>{data.name}</h2>
          <div>
            <Link href={data.link} target="_blank" className="group">
              <Image src={data.img} alt={data.name} width={300} className="rounded-xl group-hover:w-[320px] duration-500 shadow-xl" priority />
            </Link>
          </div>
          <p className="text-sm">{data.desc}</p>
        </div>
      </main>
    </section>
  );
}
