"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 vai-red-500 to-red-600">
              Hello, I Am
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Ankit Mishra",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Graphic Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 mt-4 ">
            I'm a B.Tech student at NSUT, passionate about web development,
            AI/ML, and video editing. I work on projects like MyGov and explore
            technologies like React, Node.js, and machine learning.{" "}
          </p>
          <div>
            <button
              onClick={() =>
                (window.location.href =
                  "mailto:ankitsocial1103@gmail.com?subject=Hire%20Me&body=Hi%20Ankit,%20I%20would%20like%20to%20hire%20you%20for...")
              }
              className="px-6 py-4 w-[300px] sm:w-fit rounded-full lg:mr-2 sm:mr-2 bg-gradient-to-br from-red-300 via-red-500 to-red-600 hover:opacity-80 text-white font-semibold"
            >
              Hire me
            </button>
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/My Resume.pdf";
                link.download = "My Resume.pdf";
                link.target = "_blank";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="px-1 py-1 w-[300px] sm:w-fit rounded-full  lg:mr-2 sm:mr-2  bg-gradient-to-br from-red-300 via-red-500 to-red-600 hover:bg-slate-800  text-white mt-4 font-semibold"
            >
              <span className="block bg-[#121212] hover:bg-slate-900 rounded-full px-5 py-3">
                Download Cv
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center py-[5px] mt-4 lg:mt-3">
          <div className="rounded-full bg-gradient-to-r from-red-400 via-blue-500 to-purple-500 blur-xl animate-[spin_8s_linear_infinite]  w-[260px] h-[260px] lg:w-[310px] lg:h-[310px] hover:bg-slate-900 ease-in duration-200 absolute p-10 -translate-x-1 -translate-y-1"></div>
          <div className="rounded-full bg-[#181818]  w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] hover:bg-slate-900 ease-in duration-200 relative">
            <Image
              src={"/images/myPhoto1.png"}
              alt="MyImage"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
