"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import meImage from "../../../public/images/headerme.png";

function Header() {
  return (
    <section id="header" className="lg:py-16 mb-48">
      <div className="grid grid-cols-1 sm:grid-cols-12  ">
        <motion.div
          initial={{ opacity: 0, scale: 2 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 1 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className=" text-adark mb-9  text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            Hey there, Im
            <br />
            <TypeAnimation
              sequence={[
                "Jorge Machuca",
                2000,
                "a Web Developer",
                3000,
                "a Creative Developer",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={0}
            />
          </h1>
          <p className="text-white hover:text-adark text-base sm:text-lg mb-6 lg:text-xl">
            Im a front-end web
            <p>developer based in</p>
            <p> Barcelona, Spain.</p>
          </p>
          <div>
            <a href="/images/resume.png" download="jorgemachucaCV.png">
              <button className="px-6 py-3 w-fit mb-10 sm:w-fit rounded-full mr-4 bg-slate-100 hover:bg-adark hover:text-white text-adark">
                Download CV
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-3 place-self-center mt-4 lg:mt-0 "
        >
          <div className="rounded-full bg-gray-200 w-[200px] h-[200px] lg:w-[650px] lg:h-[650px] relative ">
            <Image
              src={meImage}
              alt="picture of myself"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              objectPosition="100px 50px"
              quality={100}
              width={600}
              height={600}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Header;
