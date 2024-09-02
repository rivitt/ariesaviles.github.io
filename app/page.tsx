import Image from "next/image";

export default function Home() {
  return (
    <main className="px-10 lg:px-32 py-10 relative flex flex-col items-center bg-gradient-to-b from-[#FFE7C8] to-[#FFF7EC]">
      {/* border */}
      <div className="fixed inset-0 border-[20px] border-white z-50 pointer-events-none"></div>

      {/* header */}
      <div className="fixed px-10 lg:px-32 z-50 flex flex-row w-full h-fit justify-between items-center bg-white">
        <h1 className="text-4xl font-bold">Aries</h1>
        <p>Let&apos;s talk</p>
      </div>

      {/* hero */}
      <div className="flex flex-col lg:flex-row-reverse w-full h-[calc(100vh-5rem)] items-center bg-green-600 space-y-10">
        <div className="relative flex justify-center items-center lg:justify-end w-full h-2/4 bg-yellow-400 transform translate-y-20">
          {/* <!-- Adjust z-index to layer behind hero text --> */}
          <div className="absolute flex w-full lg:w-[40rem] bg-orange-400 h-40 rounded-2xl z-10" />
          <div className="absolute flex justify-center bg-gray-200 w-48 h-64 rounded-full z-30" />
          <div className="absolute flex justify-center bg-yellow-400 w-56 h-72 rounded-full z-20" />
        </div>
        <div className="relative flex w-full h-2/5 justify-center bg-white text-2xl">
          {/* <!-- Hero text section with higher z-index to be on top --> */}
          <div className="absolute text-center lg:text-left w-full flex flex-col leading-19 z-30">
            <p className="text-4xl my-2">I&apos;m Aries,</p>
            <p>a Software Engineer & Mentor.</p>
            <p>I enjoy bringing dreams to life.</p>
          </div>
          {/* <!-- "SCROLL" section with higher z-index to be on top --> */}
          <div className="absolute bottom-0 w-full h-fit flex flex-col items-center pt-10 space-y-2 z-30">
            <p>SCROLL</p>
            <div className="border-[1px] border-black h-[7rem] w-fit" />
          </div>
        </div>
      </div>

      {/* projects */}
      <div className="flex flex-col w-full h-60 bg-red-500">projects</div>
      <div className="pt-10">my work in progress</div>
    </main>
  );
}
