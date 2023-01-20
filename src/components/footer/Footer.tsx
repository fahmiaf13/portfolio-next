import Image from "next/image";
import Logo from "public/icons/ic-logo.svg";
import { Iconify } from "@/components";

export default function Footer() {
  return (
    <footer className="bg-darker w-full text-milk">
      <div className="p-8 opacity-50">
        <div className="flex w-full justify-between">
          <div className="w-4/12 flex flex-col items-start justify-center gap-1">
            <div className="font-extralight text-sm">Was Made with:</div>
            <div className="flex gap-1 items-center">
              <Iconify icon="logos:nextjs" size={70} />
              <Iconify icon="vscode-icons:file-type-tailwind" />
              <Iconify icon="vscode-icons:file-type-typescript-official" />
            </div>
          </div>
          <div className="w-4/12 flex flex-col items-center">
            <Image src={Logo} alt="logo" width={50} />
            <div className="font-extrabold text-md">Fahmi Achmad Fahrudin</div>
            <div className="font-extralight text-sm">Copyright © 2023 - All right reserved</div>
          </div>
          <div className="w-4/12 flex justify-end items-center">
            <Iconify icon="mdi:github" />
            <Iconify icon="mdi:linkedin" />
          </div>
        </div>
      </div>
    </footer>
  );
}
