"use client";
import React, { use, useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
const Tab_Data = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul>
        <li>Html,CSS</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>React.js</li>
        <li>PostgresSql</li>
      </ul>
    ),
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul>
        <li>Netaju Subhas Institute of Technology, Dwarka</li>
        <li>B.Tech, Computer Science</li>
      </ul>
    ),
  },
  {
    title: "certification",
    id: "certification",
    content: (
      <ul>
        <li>Web Devlopment by Angela Yu,Udemy</li>
      </ul>
    ),
  },
];
const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-12 item-center py-8 xl:gap-16 mr-10 sm:py-16  ">
        <div className="w-[300px] xl:w-[500px] lg:w-[400px]">
          <Image
            src={"/images/Programming.jpeg"}
            alt="ai image of a boy coding"
            width={500}
            height={500}
          />
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I’m Ankit Mishra, a B.Tech Computer Science and Technology student
            at NSUT, Dwarka (Batch of 2027) and a full-stack web developer. I
            specialize in Node.js, React. With a passion for clean design and
            effective solutions, I’m driven to create technology that makes a
            difference. I have strong programming skills in C++, Python, and
            JavaScript, allowing me to build efficient and scalable
            applications. Beyond development, I enjoy problem-solving and
            exploring AI-driven innovations. Always eager to learn and grow, I
            thrive on turning ideas into reality.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              {" "}
              Certification
            </TabButton>
          </div>
          <div className="mt-8">
            {Tab_Data.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
