"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

export function CarouselTransition() {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
      <Image
        src="/images/joe.JPG"
        fill
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <Image
        src="/images/joe.JPG"
        fill
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <Image
        src="/images/joe.JPG"
        fill
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
