"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function Home() {
  // Use the useScroll hook to get scroll position
  const { scrollYProgress } = useScroll();

  // Create motion values for the parallax effect
  const rawOrangeParallax = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-90%"]
  );
  const rawAriesParallax = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-40%"]
  );

  // Smooth the parallax effect using useSpring
  const orangeParallax = useSpring(rawOrangeParallax, {
    stiffness: 100,
    damping: 20,
  });

  const ariesParallax = useSpring(rawAriesParallax, {
    stiffness: 100,
    damping: 20,
  });
  return (
    <main className="px-40 py-28 relative flex justify-center items-center bg-gradient-to-b from-[#FFE7C8] to-[#FFF7EC]">
      <div className="fixed inset-0 border-[20px] border-white z-50 pointer-events-none"></div>

      <div className="flex flex-col w-full bg-red-500">
        {/* Top Row */}
        <div
          id="top-row"
          className="flex flex-row justify-between items-center bg-white"
        >
          <h1 className="text-4xl font-bold">Aries</h1>
          <p>Let&apos;s talk</p>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col justify-center bg-green-600 h-[calc(100vh-15rem)]">
          {/* Hero Graphic */}
          <div className="relative w-full flex justify-end items-center">
            {/* Parallax Background Element */}
            <motion.div
              id="dreamsicle"
              className="absolute w-2/3 bg-orange-400 h-60 rounded-2xl"
              style={{ y: orangeParallax }} // Apply parallax effect here
            />

            {/* Parallax Foreground Element */}
            <motion.div
              id="aries"
              className="absolute w-2/3 flex justify-center"
              style={{ y: ariesParallax }} // Apply parallax effect here
            >
              <div className="bg-gray-200 h-60 w-40 rounded-full mt-4" />
            </motion.div>
          </div>

          {/* Hero Text */}
          <div className="absolute flex flex-col justify-end text-left z-10 p-4 h-fit border-2">
            <h1 className="text-4xl font-bold">I&apos;m Aries,</h1>
            <p className="text-4xl">a Software Engineer & Mentor.</p>
            <p className="text-4xl">I enjoy bringing dreams to life.</p>
          </div>

          {/* Scroll Text */}
          <div className="relative w-full flex border-2 items-center ">
            <div className="absolute flex flex-col justify-end text-left z-10 p-4">
              <p>SCROLL</p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="py-16 h-screen">
          <h1 className="text-3xl font-semibold mb-8">Projects</h1>
          <div className="project-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
