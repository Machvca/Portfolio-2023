"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

import { images } from "../../../lib/images";


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/thumbs";

export default function Page() {



  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="">
      <div className="container">
        <Swiper
          loop={true}
          spaceBetween={50}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          autoplay={{ delay: 4000 }}
          className="w-full rounded-lg swiper-slide"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail */}
        <Swiper
          modules={[FreeMode, Navigation, Thumbs]}
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          className="thumbs mt-2 h-32 w-full rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <button className="flex h-full w-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-full w-full object-cover"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
