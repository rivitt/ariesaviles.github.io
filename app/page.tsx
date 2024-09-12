"use client";

import {
  AriesIllustration,
  AriesIllustrationOutline,
  AriesWritten,
} from "@/components/SvgContainers";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const hairGroupRef = useRef<SVGGElement>(null);
  const entireHeadRef = useRef<SVGGElement>(null);

  const projects = [
    {
      name: "End-to-end Platform Development",
      description: "project where i led full end-to-end platform development",
      color: "bg-red-500",
    },
    {
      name: "Cross-Platform Solutions",
      description:
        "project where i led web and mobile dev, android and ios too!",
      color: "bg-green-500",
    },
    {
      name: "Award-Winning Web3 Tooling",
      description: "wallet hackathon tax tool",
      color: "bg-blue-500",
    },
  ];
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const entireHeadPath = entireHeadRef.current;

    // Configurable parameters
    const maxRotation = 2; // Maximum rotation in degrees
    const dampingFactor = 10; // Controls the damping effect

    if (entireHeadPath) {
      // Get the container dimensions
      const container = e.currentTarget.getBoundingClientRect();
      const centerX = container.width / 2;

      // Calculate the mouse position relative to the center of the container
      const mouseX = e.clientX - container.left;

      // Calculate rotation based on horizontal movement (for 1D effect)
      let rotation = (mouseX - centerX) / 10; // Adjust sensitivity as needed

      // Damping function to soften the movement as it reaches the limit
      // The dampingFactor value is increased to soften the rotation further
      const dampenedRotation =
        (rotation / maxRotation) ** dampingFactor *
        maxRotation *
        Math.sign(rotation);

      // Constrain rotation to -maxRotation to maxRotation degrees
      const constrainedRotation = Math.max(
        -maxRotation,
        Math.min(maxRotation, dampenedRotation)
      );

      // Apply transformation to the head
      const transform = `rotate(${constrainedRotation}deg)`; // Single axis rotation
      entireHeadPath.style.transform = transform;
      entireHeadPath.style.transformOrigin = "center center"; // Rotate around the center
    }
  };

  return (
    <main className="px-10 lg:px-32 py-10 min-h-screen relative flex flex-col space-y-8 items-center bg-gradient-to-b from-[#FFE7C8] from-1% to-[#FFF7EC] to-10% lg:to-20%">
      {/* border */}
      <div className="fixed inset-0 border-[20px] border-white z-50 pointer-events-none"></div>

      {/* header */}
      <div className="fixed px-10 lg:px-32 z-50 flex flex-row w-full h-fit justify-between items-center">
        <AriesWritten className="h-20 w-auto" />
        <p>Let&apos;s talk</p>
      </div>

      {/* hero */}
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="px-2 lg:px-0 flex flex-col lg:flex-row-reverse w-full max-w-5xl h-[calc(100vh-5rem)] items-center bg-green-600/ space-y-10"
        // onMouseMove={(e) => handleMouseMove(e)}
      >
        <div className="relative justify-center items-start lg:justify-end lg:items-center w-full h-2/4 bg-yellow-400/ transform translate-y-40 lg:translate-y-0">
          <div className="absolute flex w-full items-center lg:w-[125%] max-h-[10rem] bg-salmon h-3/6 rounded-2xl lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 z-10">
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-200 w-48 h-64 rounded-full z-30" /> */}
            <AriesIllustration
              groupRefs={{ entireHeadRef, hairGroupRef }}
              className="absolute left-1/2 transform -translate-x-1/2 w-3/5 max-w-2xs lg:max-w-sm h-auto z-30"
            />
            <AriesIllustrationOutline className="absolute left-1/2 transform -translate-x-[49.50%] translate-y-[0%] w-[67%] max-w-[17.75rem] lg:max-w-[26rem] h-auto z-20" />
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 bg-yellow-400 w-56 h-72 rounded-full z-20" /> */}
          </div>
        </div>
        <div className="relative flex w-full h-3/5 lg:h-full justify-center text-2xl bg-green-400/">
          {/* <!-- Hero text section with higher z-index to be on top --> */}
          <div className="absolute flex flex-col text-center font-serif  lg:justify-center lg:text-left w-full lg:h-4/5 leading-19 z-30 space-y-1">
            <p className="text-4xl my-2 font-semibold lg:hidden">
              I&apos;m Aries,
            </p>
            <p className="text-xl md:text-2xl lg:hidden">
              a Software Engineer & Mentor.
            </p>
            <p className="text-xl md:text-2xl lg:hidden">
              Let&apos;s bring dreams to life.
            </p>
            <div className="py-2 text-6xl font-medium hidden lg:block">
              <p>Hi, my</p>
              <p>
                name is <strong>Aries</strong>.
              </p>
            </div>
            <div className="text-2xl leading-9 hidden lg:block">
              <p>
                I&apos;m a Software Engineer & Mentor who&apos;s dedicated to
                bringing dreams to life.
              </p>
            </div>
          </div>
          {/* <!-- "SCROLL" section with higher z-index to be on top --> */}
          <div className="absolute bottom-0 lg:-left-[18%] w-full h-fit flex flex-col items-center pt-10 space-y-2 z-30">
            <p>SCROLL</p>
            <div className="border-[1px] border-black h-[8rem] lg:h-[12rem] w-fit" />
          </div>
        </div>
      </motion.div>

      {/* projects */}
      <div className="px-2 lg:px-0 flex-1 h-full w-full max-w-5xl space-y-10">
        <h2 className="text-3xl text-center lg:text-left">
          Portfolio Highlights
        </h2>
        <div className="grid md:grid-cols-3 gap-4 w-full h-full">
          {projects.map((project, index) => {
            return (
              <div
                key={project.name}
                className="w-full md:pt-[calc(80px*var(--index))]"
                style={{ "--index": index } as React.CSSProperties}
              >
                <div
                  className={`flex flex-col justify-between ${project.color} rounded-xl p-4 space-y-8`}
                >
                  <div className="space-y-2">
                    <h2 className="text-2xl">{project.name}</h2>
                    <p className="leading-8">{project.description}</p>
                  </div>
                  <div className="bg-white h-[30rem] w-full rounded-xl" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <h2>About Me</h2>
      <div className="">Learn more about me</div>
    </main>
  );
}
