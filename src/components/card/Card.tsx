import Image from "next/image";
import React from "react";
import { IExperiencesData } from "@/types/data";

interface Props {
  data: IExperiencesData;
}

export default function Card(props: Props) {
  const { data } = props;
  return (
    <div className=" bg-milk max-h-[550px]  w-full p-6 rounded-xl  border-darker/10 border-2">
      <div className="flex justify-center items-center gap-2">
        <div className="rounded-full w-20 h-20 p-5 border-darker/10 border-2">
          <Image src={data.icon} alt="soluvas" className="rounded-full w-full h-full" />
        </div>
      </div>
      <div className="items-center flex flex-col">
        <div className="font-extrabold text-xl">{data.company}</div>
        <div className="text-sm text-neon-blue">{data.role}</div>
        <div className="text-sm">{data.entryDate}</div>
        <div className="text-sm">{data.status}</div>
      </div>
      {/* <div className=""></div> */}
      <ul className="text-sm flex flex-col gap-2 mt-5">
        {data?.desc.map((item, index) => (
          <li key={index} className="pb-2 border-b-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
