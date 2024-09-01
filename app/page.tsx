import Image from "next/image";

export default function Home() {
  return (
    <main className="px-20 py-36 flex justify-center h-full w-full overflow-x-hidden bg-gradient-to-b from-[#FFE7C8] to-[#FFF7EC]">
      {/* border */}
      <div className="fixed inset-0 border-[20px] border-white z-50 pointer-events-none"></div>
      {/* header */}
      <div
        id="top-row"
        className="flex flex-row justify-between items-center bg-white"
      >
        <h1 className="text-4xl font-bold">Aries</h1>
        <p>Let&apos;s talk</p>
      </div>
      {/* content */}
    </main>
  );
}
