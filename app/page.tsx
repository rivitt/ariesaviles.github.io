import {
  AriesIllustration,
  AriesIllustrationOutline,
  AriesWritten,
} from "@/components/SvgContainers";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-10 lg:px-32 py-10 relative flex flex-col items-center bg-gradient-to-b from-[#FFE7C8] to-[#FFE7C8]">
      {/* border */}
      <div className="fixed inset-0 border-[20px] border-white z-50 pointer-events-none"></div>

      {/* header */}
      <div className="fixed px-10 lg:px-32 z-50 flex flex-row w-full h-fit justify-between items-center">
        <AriesWritten className="h-20 w-auto" />
        <p>Let&apos;s talk</p>
      </div>

      {/* hero */}
      <div className="flex flex-col lg:flex-row-reverse w-full h-[calc(100vh-5rem)] items-center bg-green-600/ space-y-10">
        <div className="relative justify-center items-start lg:justify-end lg:items-center w-full h-2/4 transform translate-y-40 lg:translate-y-0">
          <div className="absolute flex w-full items-center lg:w-[125%] bg-orange-400 h-40 rounded-2xl lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 z-10">
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-200 w-48 h-64 rounded-full z-30" /> */}
            <AriesIllustration className="absolute left-1/2 transform -translate-x-1/2 scale-[.25] z-30" />
            <AriesIllustrationOutline className="absolute left-1/2 transform -translate-x-[49.85%] translate-y-[0.1%] scale-[.26] z-20" />
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 bg-yellow-400 w-56 h-72 rounded-full z-20" /> */}
          </div>
        </div>
        <div className="relative flex w-full h-2/5 lg:h-full justify-center text-2xl">
          {/* <!-- Hero text section with higher z-index to be on top --> */}
          <div className="absolute flex flex-col text-center lg:justify-center lg:text-left w-full lg:h-4/5 leading-19 z-30">
            <p className="text-4xl my-2">I&apos;m Aries,</p>
            <p>a Software Engineer & Mentor.</p>
            <p>tag line here</p>
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
