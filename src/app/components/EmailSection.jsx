"use client";
import Gitlogo from "../../../public/images/gitlogo.png";
import LinkLogo from "../../../public/images/linklogo.png";
import InstagramLogo from "../../../public/images/insta.png";
import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r5qwv09",
        "template_qch4ouy",
        form.current,
        "QioI1SFje5LlE6K61"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-700 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4  -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2 ">Lets Connect</h5>
        <p className="text-slate-100 mb-4 max-w-md">
          Feel free to reach out through my social media profiles or drop me an
          email. Let's build connections that go beyond the digital realm,
          bridging our shared interests and creating meaningful interactions.
          Looking forward to connecting with you!
        </p>
        <div className="flex flex-row gap-4">
          <a target="_blank" href="https://github.com/Machvca">
            <Image src={Gitlogo} width={50} height={50} alt="Github Icon" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/machvca/">
            <Image
              src={LinkLogo}
              width={100}
              height={100}
              alt="Linkedin Icon"
            />
          </a>
          <a
            target="_blank"
            href="
          https://www.instagram.com/machvca/"
          >
            <Image
              src={InstagramLogo}
              width={55}
              height={55}
              alt="Instagram Icon"
            />
          </a>
        </div>
      </div>
      <div className="">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="user_email"
              type="email"
              id="email"
              required
              className="bg-slate-100 border border-adark placeholder-slate-400 text-adark text-sm rounded-lg block w-full p-2.53"
              placeholder="@gmail.com"
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
              className=" border mb-2 border-adark bg-slate-100 text-adark text-sm rounded-lg block w-full p-2.53"
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
              type="textarea"
              id="message"
              className="bg-slate-100 border border-adark placeholder-slate-400 text-adark  text-sm rounded-lg block w-full p-2.53"
              placeholder="Leave your message here!"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-600  hover:bg-yellow-700 text-white font-medium py-2.5 px-5 rounded-lg w-full border-adark "
          >
            Send Message
          </button>
          {submitted && (
            <p className="text-adark text-sm mt-2">Email sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
