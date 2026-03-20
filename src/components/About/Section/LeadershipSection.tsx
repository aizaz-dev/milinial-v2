"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from 'next/link';

export default function LeadershipSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TOP AREA */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-10">

          {/* LEFT TEXT */}
          <div className="w-full lg:max-w-3xl">

            {/* Badge */}
            <div className="inline-block bg-[#EBEDEC] text-[#4a4a4a] text-sm px-4 py-1 rounded-full mb-5 lg:mb-6">
              Wie wir arbeiten
            </div>

            {/* Heading */}
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.2] font-semibold text-[#111827] mb-4 lg:mb-6">
              Leadership by Congruence® – so
              <br className="hidden sm:block" />
              {" "}machen wir Umsetzung möglich
            </h2>

            {/* Description */}
            <p className="text-[15px] lg:text-[17px] leading-[1.7] text-[#5b5b5b] max-w-xl">
              Strategische Klarheit, operative Durchsetzungskraft und echte
              Wertschätzung als Führungsprinzip – damit Veränderung in KMU und
              Mid-Market sicher, schnell und messbar gelingt.
            </p>
          </div>

          {/* CTA */}
          <div className="flex shrink-0 lg:pt-20">
            <Link
              href="/how-we-work"
              className="inline-flex flex-row items-center pl-[16px] pr-[8px] py-[8px] gap-[12px] rounded-[16px] h-[54px] hover:opacity-90 transition-opacity bg-[#1a037f] shadow-[0px_75px_30px_rgba(0,0,0,0.01),0px_42px_25px_rgba(0,0,0,0.05),0px_19px_19px_rgba(0,0,0,0.09),0px_5px_10px_rgba(0,0,0,0.1)] font-['Figtree',sans-serif]"
            >
              <span className="font-semibold text-[18px] lg:text-[20px] leading-[170%] tracking-[-0.2px] text-white whitespace-nowrap">
                Mehr erfahren über LbC®
              </span>
              <div className="flex flex-row items-center justify-center p-[8px] gap-[8px] w-[38px] h-[38px] bg-white rounded-[12px]">
                <ArrowUpRight className="w-5 h-5 text-[#888888]" />
              </div>
            </Link>
          </div>

        </div>

        {/* IMAGE */}
        <div className="mt-8 lg:mt-12 relative w-full h-[240px] sm:h-[340px] lg:h-[420px] rounded-2xl overflow-hidden">
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
