"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";


function Header() {
  return (
    <section className="lg:py-16 ">
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
                // Same substring at the start will only be typed out once, initially
                "Jorge Machuca",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
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
          <p className="text-slate-200 text-base sm:text-lg mb-6 lg:text-xl ">
            Im a front-end web
            <p>developer based in</p>
            <p> Barcelona, Spain.</p>
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              Hire me
            </button>

            <a href="/images/resume.png" download="resume.png">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
                Download CV
              </button>
            </a>
          </div>
        </motion.div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className=" rounded-full  w-[250px] h-[250px] lg:w-[800px] lg:h-[800px]  relative">
            <Image
              src="/images/calavera2.png"
              alt="me image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
// npm i -D prettier-plugin-tailwindcss
