import React from "react";
import { createElement } from "react";

interface Props {
  variant: string;
  // element: HTMLElement;
  children: React.ReactNode;
}

export default function Typography(props: Props) {
  const { variant, children } = props;
  return <div>{children}</div>;
}
