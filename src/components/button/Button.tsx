import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function Button(props: Props) {
  const { children } = props;
  return <button className="bg-darker text-milk text-sm font-bold rounded-lg w-full tracking-wider	hover:bg-transparent border-darker border-[1px] hover:text-darker duration-300 py-2 px-4">{children}</button>;
}
