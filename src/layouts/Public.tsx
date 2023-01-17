import React from "react";
import { Navbar } from "@/components/navbar";

interface Props {
  children: React.ReactNode;
}

export default function PublicLayout(props: Props) {
  const { children } = props;
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
