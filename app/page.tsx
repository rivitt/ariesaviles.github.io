"use client";

export default function Home() {
  return (
    <main className="px-40 py-28 relative flex justify-center items-center bg-gradient-to-b from-[#FFE7C8] to-[#FFF7EC]">
      <div className="fixed inset-0 border-[20px] border-white z-50 pointer-events-none" />

      <div className="flex flex-col w-full bg-blue-300">
        {/* Top Row */}
        <div
          id="top-row"
          className="flex flex-row justify-between items-center bg-white"
        >
          <h1 className="text-4xl font-bold">Aries</h1>
          <p>Let&apos;s talk</p>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col justify-center bg-green-600 h-[calc(100vh-10.5rem)] relative">
          {/* Hero Graphic */}
          <div className="relative w-full flex justify-end items-center">
            {/* Parallax Background Element */}
            <div
              id="dreamsicle"
              className="absolute w-[45rem] bg-orange-400 h-60 rounded-2xl"
            />
            {/* Parallax Foreground Element */}
            <div id="aries" className="absolute w-2/3 flex justify-center">
              <div className="bg-gray-200 h-60 w-40 rounded-full mt-4">
                {/* Optionally include an image here */}
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="absolute flex flex-col justify-end text-left z-10 p-4 h-fit border-2 top-1/2 transform -translate-y-1/2">
            <h1 className="text-4xl font-bold">I&apos;m Aries,</h1>
            <p className="text-4xl">a Software Engineer & Mentor.</p>
            <p className="text-4xl">I enjoy bringing dreams to life.</p>
          </div>

          {/* Scroll Text */}
          <div className="absolute bottom-0 left-40 items-center flex flex-col space-y-3">
            <p className="text-lg">SCROLL</p>
            <div className="h-40 border-[1px]" />
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
      <div className="fixed bottom-36 -left-5 z-50 pointer-events-none transform -rotate-90 origin-center opacity-20">
        my work in progress
      </div>
    </main>
  );
}
