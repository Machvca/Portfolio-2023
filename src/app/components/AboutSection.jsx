"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Carousel from "./Carousel";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>React.js</li>
        <li>Javascript</li>
        <li>HTML</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>IronHack</li>
        <li>FreeCodeCamp</li>
        <li>UQROO</li>
        <li>UB</li>
      </ul>
    ),
  },

  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>IronHack</li>
        <li>adsojads</li>
        <li>s;lmdsalas</li>
        <li>Usd,sa;lmdsalas</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-white mt-8">
      <div className="md:grid md:grid-cols-2 gap-24 items-center xl:py-0 py-8 px-4 xl:gap-16 sm:py-16 xl:px-8 ">

        <Carousel />
        <div className="mt-4 md:mt-0 xl:mt-12  text-left flex flex-col h-full">
          <h2 className="text-4xl  font-bold  text-white mb-6 ">About Me</h2>
          <p className="text-base lg:text-lg  text-white">
            Less than two years ago, I embarked on an exciting journey into the
            world of web development, discovering a true passion. I find immense
            joy in creating digital landscapes and bringing ideas to life
            through code. When Im not immersed in the world of programming,
            youll likely find me strumming away on my guitar, channeling
            creativity through music. Ive also cultivated a love for nurturing
            green life, as I take pride in caring for my collection of plants.
            Theres something incredibly rewarding about watching them flourish
            under my care. Beyond that, I have a keen eye for the art of
            photography. Capturing moments and freezing them in time has become
            another outlet for my creative expression. Whether its behind the
            lens or behind the screen coding, I find fulfillment in the balance
            between the digital and the tangible, the structured and the
            artistic.
          </p>
          <div className="flex flex-row justify-start mt-8 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
