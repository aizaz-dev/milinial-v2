"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function LeadershipSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP AREA */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

          {/* LEFT TEXT */}
          <div className="max-w-3xl">

            {/* Badge */}
            <div className="inline-block bg-[#EBEDEC] text-[#4a4a4a] text-sm px-4 py-1 rounded-full mb-6">
              Wie wir arbeiten
            </div>

            {/* Heading */}
            <h2 className="text-[42px] leading-[50px] font-semibold text-[#111827] mb-6">
              Leadership by Congruence® – so
              <br />
              machen wir Umsetzung möglich
            </h2>

            {/* Description */}
            <p className="text-[17px] leading-[28px] text-[#5b5b5b] max-w-xl">
              Strategische Klarheit, operative Durchsetzungskraft und echte
              Wertschätzung als Führungsprinzip – damit Veränderung in KMU und
              Mid-Market sicher, schnell und messbar gelingt.
            </p>
          </div>

          {/* CTA */}
          <div className="flex lg:pt-20">
            <button className="flex items-center gap-4 bg-[#2905C7] text-white px-8 py-1 rounded-xl shadow-lg hover:shadow-xl transition">

              <span className="text-[14px] font-medium">
                Mehr erfahren über LbC®
              </span>

              <span className="bg-white text-black w-8 h-8 rounded-lg flex items-center justify-center">
                <ArrowUpRight size={16} />
              </span>

            </button>
          </div>

        </div>

        {/* IMAGE */}
        <div className="mt-12 relative w-full h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/assets/About/MeetingRoom.png"
            alt="Leadership"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}