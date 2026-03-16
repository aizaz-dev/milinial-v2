"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#f6f6f6] overflow-hidden pt-24">

      <div className="max-w-[1100px] mx-auto px-6 text-center">

        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <span className="bg-[#ECECEC] text-[#4b5563] px-5 py-2 rounded-full text-sm">
            Leadership auf Zeit. Übergänge meistern. Zukunft sichern.
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[60px] leading-[70px] font-semibold text-[#163525]">
          Von der Krise zu tragfähiger
        </h1>

        <h2 className="text-[60px] italic font-medium text-[#6C63FF] mt-2">
          operativer Performance
        </h2>

        {/* Paragraph */}
        <p className="max-w-[640px] mx-auto mt-6 text-[#6b7280] text-[18px] leading-[30px]">
          Wir sichern und steigern Unternehmenswerte durch Turnaround, Value
          Creation und Transformation in KMU’s und mittelständigen
          Grossunternehmen.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-5 mt-10">

          {/* Primary Button */}
          <button className="flex items-center gap-3 px-7 py-4 rounded-xl text-white font-medium 
          bg-gradient-to-r from-[#4338CA] to-[#6C63FF] 
          shadow-[0_10px_30px_rgba(76,70,229,0.4)]">

            Jetzt Erstgespräch buchen

            <span className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-md">
              ↗
            </span>

          </button>

          {/* Secondary Button */}
          <button className="px-7 py-4 rounded-xl border border-[#6C63FF] text-[#374151] font-medium hover:bg-white">
            Mehr erfahren
          </button>

        </div>
      </div>

      {/* Image Section */}
      <div className="relative mt-24 w-full">

        {/* fade effect like figma */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#f6f6f6] to-transparent z-10" />

        <Image
          src="/assets/Home/HeroIMG.png"
          alt="ripple"
          width={1600}
          height={800}
          className="w-full object-cover"
        />
      </div>

    </section>
  );
}