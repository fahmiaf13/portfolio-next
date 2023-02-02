"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface Props {
  children: React.ReactNode;
}

export default function Carousel({ children }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaying: true,
    autoplaySpeed: 3000,
  };
  return <Slider {...settings}>{children}</Slider>;
}
