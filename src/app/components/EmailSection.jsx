"use client";
import React, { useState } from "react";
import Gitlogo from "../../../public/images/gitlogo.png";
import LinkLogo from "../../../public/images/linklogo.png";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4  -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2 ">Let`s Connect</h5>
        <p className="text-slate-300 mb-4 max-w-md">
          Enim qui enim consectetur sunt aliquip aliquip labore elit tempor
          velit et adipisicing nostrud. Nisi esse sint fugiat consectetur non
          tempor aliqua reprehenderit cupidatat cillum sit. Sunt ad minim
          deserunt ipsum amet esse elit aliqua nisi dolore laboris.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={Gitlogo} width={50} height={50} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image
              src={LinkLogo}
              width={100}
              height={100}
              alt="Linkedin Icon"
            />
          </Link>
        </div>
      </div>
      <div className="">
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-slate-600 border border-slate-500 placeholder-indigo-200 text-gray-300 text-sm rounded-lg block w-full p-2.53"
              placeholder="jorge@google.com"
            />
          </div>

          <div>
            <label
              htmlFor="Subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-slate-600 border mb-2 border-slate-500 placeholder-indigo-200 text-gray-300 text-sm rounded-lg block w-full p-2.53"
              placeholder=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-slate-600 border border-slate-500 placeholder-indigo-200 text-gray-300 text-sm rounded-lg block w-full p-2.53"
              placeholder="Leave your message here!"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500  hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
