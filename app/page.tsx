import Image from "next/image";

export default function Home() {
  return (
    <main className="px-60 py-36 relative flex justify-center items-center bg-gradient-to-b from-[#FFE7C8] to-[#FFF7EC]">
      {/* border */}
      <div className="fixed inset-0 border-[20px] border-white z-50 pointer-events-none"></div>
      {/* content */}
      <div className="flex flex-col w-full max-w-screen-sm md:max-w-screen-lg bg-red-500">
        <div
          id="top-row"
          className="flex flex-row justify-between items-center bg-white"
        >
          <h1 className="text-4xl font-bold">Aries</h1>
          <p>Let&apos;s talk</p>
        </div>
        <div className="relative flex flex-col bg-green-600 m-10">
          {/* Orange Box and Image - Right Side */}
          <div className="relative w-full flex justify-end items-start bg-blue-500 border-2">
            {/* Orange Box */}
            <div className="absolute w-2/3 bg-orange-400 h-40 rounded-2xl" />

            {/* Image on top of Orange Box */}
            <div className="absolute w-2/3 flex justify-center">
              <div className="bg-gray-200 w-40 h-40 rounded-full mt-4">
                Image here of head with masked outline
              </div>
            </div>
          </div>

          {/* Hero Text - Overlapping the Orange Box */}
          <div className="absolute flex flex-col justify-start text-left z-10 p-4">
            <h1 className="text-4xl font-bold">I&apos;m Aries,</h1>
            <p className="text-4xl">a Software Engineer & Mentor.</p>
            <p className="text-4xl">I enjoy bringing dreams to life.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
