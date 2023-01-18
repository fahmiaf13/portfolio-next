import Image from "next/image";
import React from "react";
import SoluvasIcon from "/public/icons/ic-soluvas.svg";
export default function Card() {
  return (
    <div className=" bg-milk  w-96 p-6 rounded-xl shadow-lg border-darker/10 border-2">
      <div className="flex justify-center items-center gap-2">
        <div className="rounded-full p-5 w-24 h-24 border-darker/10 border-2">
          <Image src={SoluvasIcon} alt="soluvas" className="rounded-full w-full " />
        </div>
      </div>
      <div className="items-center flex flex-col">
        <div className="font-extrabold">Sagara Technology</div>
        <div>Front-End Engineer</div>
        <div>Aug 2022 - Nov 2022</div>
        <div>Internship</div>
      </div>
      {/* <div className=""></div> */}
      <ul className="text-sm flex flex-col gap-1">
        <li>Work closely with Project Manager and Team Leader</li>
        <li>Continuing internal website projects using React JS</li>
        <li>Managing application’s state using Redux, especially redux thunk and redux persist</li>
        <li>Working with asynchronous HTTP requests to REST endpoints using axios and perform CRUD operations</li>
      </ul>
    </div>
  );
}
