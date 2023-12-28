"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

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
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/joe.JPG"
          alt="joe pendejo"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0  text-left flex flex-col h-full">
          <h2 className="text-4xl  font-bold  text-white mb-6 ">About Me</h2>
          <p className="text-base lg:text-lg ">
            Id eu incididunt veniam duis ad pariatur culpa anim. Pariatur Lorem
            magna veniam laboris dolore voluptate aliqua excepteur. Culpa tempor
            laborum nostrud laboris occaecat Lorem sunt. Et consectetur nulla
            aliqua sit ut deserunt dolore duis dolor culpa cillum. Culpa esse
            mollit adipisicing nostrud non laboris excepteur amet exercitation
            deserunt commodo laborum voluptate id. Lorem ex fugiat cillum irure
            exercitation sunt dolor sint magna Lorem labore consequat laborum
            consequat.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "Education"}
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
          <div className="mt-8">{TAB_DATA.find((t)=>t.id===tab).content}</div>
        </div>
      </div>
    </section>
  );
}


export default AboutSection;
