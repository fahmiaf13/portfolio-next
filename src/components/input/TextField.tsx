import React from "react";

interface Props {
  name?: string;
  placeholder: string;
  type?: "password" | "text" | "email";
}

export default function TextField(props: Props) {
  const { name, placeholder, type } = props;
  return (
    <input
      type={`${type || "text"}`}
      className="w-full h-10 ring-darker border-darker/10 border-2 text-darker bg-darker/10 px-3 rounded-md text-sm  focus:outline-none focus:border-none focus:ring-2 duration-200 focus:ring-neon-blue"
      placeholder={placeholder}
      name={name}
    />
  );
}
