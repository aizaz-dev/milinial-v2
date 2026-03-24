"use client";

import Image from "next/image";
import Link from 'next/link';
import { useBooking } from "@/providers/Booking";

export default function Hero() {
  const { openModal } = useBooking()
  return (
    <section className="relative w-full bg-[#FBFAF8] overflow-hidden pt-[120px] max-md:pt-0 lg:pt-[140px] min-h-screen lg:min-h-[1048px] flex flex-col lg:block">

      {/* Blurred decorative backgrounds — hidden on mobile to keep it clean */}
      <div className="absolute w-[635px] h-[161.42px] left-[-170px] top-[439px] bg-[#FBFAF8] blur-[35px] -rotate-[19.56deg] z-0 pointer-events-none hidden lg:block" />
      <div className="absolute w-[635px] h-[161.42px] left-[256px] top-[430px] bg-[#FBFAF8] blur-[35px] -rotate-[5.89deg] z-0 pointer-events-none hidden lg:block" />
      <div className="absolute w-[440.27px] h-[111.92px] left-[746px] top-[472px] bg-[#FBFAF8] blur-2xl rotate-[7.78deg] z-0 pointer-events-none hidden lg:block" />
      <div className="absolute w-[635px] h-[161.42px] left-[999px] top-[482px] bg-[#FBFAF8] blur-[50px] rotate-[14.34deg] z-0 pointer-events-none hidden lg:block" />
      <div className="absolute w-[924px] h-[169px] left-0 top-[230px] blur-[46.5px] rotate-34 bg-[rgba(25,32,38,0.09)] z-0 pointer-events-none hidden lg:block" />
      <div className="absolute w-[924px] h-[169px] left-[95px] top-[642px] blur-3xl rotate-34 opacity-20 bg-[rgba(25,32,38,0.6)] z-0 pointer-events-none hidden lg:block" />

      {/* ── MOBILE/TABLET LAYOUT (up to lg) ── */}
      <div className="relative z-20 flex flex-col lg:hidden min-h-screen">
        {/* Content area — centered vertically in top portion */}
        <div className="relative z-20 flex flex-col items-center text-center px-5 sm:px-8 pt-[120px] pb-4 gap-5">
          {/* Eyebrow */}
          <div className="inline-flex items-center px-[10px] py-[4px] gap-[4px] bg-[#EBEDEC] rounded-[54px] max-w-full">
            <span className="font-['Inter'] font-normal text-[11px] sm:text-[13px] leading-[170%] tracking-[-0.2px] text-[#0C2217] text-center whitespace-nowrap">
              Leadership auf Zeit. Übergänge meistern. Zukunft sichern.
            </span>
          </div>

          {/* Headline */}
          <div className="flex flex-col items-center gap-1">
            <h1 className="font-['Inter'] font-semibold text-[30px] sm:text-[42px] leading-[115%] tracking-[-1.5px] text-center text-[#0C2217] m-0">
              Von der Krise zu tragfähiger
            </h1>
            <h2
              className="font-['Instrument_Serif',serif] italic font-normal text-[36px] sm:text-[50px] leading-[115%] text-center m-0 text-transparent bg-clip-text bg-[linear-gradient(193.18deg,#A899F0_-6.91%,#6A4BFA_73.67%)] flex items-center justify-center shrink-0 pr-2"
            >
              operativer Performance
            </h2>
          </div>

          {/* Subheadline */}
          <p className="font-['Inter'] font-medium text-[14px] sm:text-[16px] leading-[170%] text-center text-[#565959] opacity-80 m-0 max-w-[500px]">
            Wir sichern und steigern Unternehmenswerte durch Turnaround, Value Creation und Transformation in KMU&apos;s und mittelständigen Grossunternehmen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-[290px] sm:w-auto max-w-full mx-auto mt-4">
            <button onClick={openModal} className="flex flex-row items-center justify-between pl-[24px] pr-[8px] py-[8px] w-full sm:w-auto h-[54px] bg-[#1a037f] rounded-[16px] shadow-[0px_5px_10px_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity relative font-['Figtree',sans-serif] cursor-pointer">
              <div className="absolute inset-0 rounded-[16px] pointer-events-none" style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))' }} />
              <span className="font-semibold text-[15px] leading-[170%] tracking-[-0.2px] text-[#FFFFFF] relative z-10 whitespace-nowrap">
                Jetzt Erstgespräch buchen
              </span>
              <div className="flex items-center justify-center w-[38px] h-[38px] bg-[#FFFFFF] rounded-[12px] shadow-[0px_2px_4px_rgba(0,0,0,0.05)] ml-[8px] relative z-10 shrink-0">
                <svg className="w-[16px] h-[16px] text-[#666666] transform -rotate-45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>

            <Link href="/about" className="flex flex-row justify-center items-center px-[28px] py-[8px] w-full sm:w-auto h-[54px] border border-[#19037C] rounded-[16px] hover:bg-black/5 transition-colors bg-white font-['Figtree',sans-serif]">
              <span className="font-semibold text-[15px] leading-[170%] tracking-[-0.2px] text-[#0A0400]">
                Mehr erfahren
              </span>
            </Link>
          </div>
        </div>

        {/* Hero image — taller and pulled up closer to buttons */}
        <div className="relative z-0 flex-1 -mt-8 mx-0 w-full overflow-hidden min-h-[360px] sm:min-h-[460px]">
          <div className="absolute inset-x-0 top-0 h-[60px] bg-linear-to-b from-[#FBFAF8] to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-[80px] bg-linear-to-b from-transparent to-[#FBFAF8] z-10" />
          <Image
            src="/assets/Home/HeroIMG.png"
            alt="ripple"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* ── DESKTOP LAYOUT (lg and above) — original unchanged ── */}
      <div className="hidden lg:block">
        {/* Hero Header Wrapper */}
        <div className="absolute w-[984px] h-[433px] left-[50%] -translate-x-[50%] top-[150px] z-20 flex flex-col items-center">
          {/* EyeBrowText */}
          <div className="flex flex-row items-center px-[10px] py-[4px] gap-[4px] bg-[#EBEDEC] rounded-[54px] w-[453px] h-[35px] absolute top-0 left-[265px] justify-center">
            <span className="font-['Inter'] font-normal text-[16px] leading-[170%] tracking-[-0.2px] text-[#0C2217]">
              Leadership auf Zeit. Übergänge meistern. Zukunft sichern.
            </span>
          </div>

          {/* Headline Group */}
          <div className="flex flex-col items-center gap-[13px] absolute w-[805px] h-auto left-[89px] top-[53px]">
            <h1 className="w-[794px] font-['Inter'] font-semibold text-[62px] leading-[115%] tracking-[-2px] text-center text-[#0C2217] m-0">
              Von der Krise zu tragfähiger
            </h1>
            <h2 className="w-full lg:w-[805px] h-auto lg:h-[80px] font-['Instrument_Serif',serif] italic font-normal text-[50px] lg:text-[70px] leading-[115%] text-center m-0 text-transparent bg-clip-text bg-[linear-gradient(193.18deg,#A899F0_-6.91%,#6A4BFA_73.67%)] flex items-center justify-center shrink-0 lg:flex-none lg:order-1 lg:self-stretch lg:grow-0 pr-2">
              operativer Performance
            </h2>
          </div>

          {/* Subheadline */}
          <p className="absolute w-[822px] min-h-[85px] left-[81px] top-[216px] font-['Inter'] font-medium text-[21px] leading-[170%] text-center text-[#565959] opacity-80 m-0 flex items-center justify-center">
            Wir sichern und steigern Unternehmenswerte durch Turnaround, Value Creation und Transformation in KMU&apos;s und mittelständigen Grossunternehmen.
          </p>

          {/* CTA Buttons */}
          <div className="absolute w-full h-[55px] left-0 top-[324px] flex justify-center gap-[20px]">
            <button onClick={openModal} className="inline-flex flex-row justify-between items-center pl-[24px] pr-[8px] py-[8px] w-auto h-[55px] bg-[#1a037f] rounded-[16px] shadow-[0px_5px_10px_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity relative font-['Figtree',sans-serif] cursor-pointer">
              <div className="absolute inset-0 rounded-[16px] pointer-events-none" style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))' }} />
              <span className="font-semibold text-[16px] leading-[170%] tracking-[-0.2px] text-[#FFFFFF] relative z-10 whitespace-nowrap">
                Jetzt Erstgespräch buchen
              </span>
              <div className="flex items-center justify-center w-[39px] h-[39px] bg-[#FFFFFF] rounded-[12px] shadow-[0px_2px_4px_rgba(0,0,0,0.05)] ml-[16px] relative z-10 shrink-0">
                <svg className="w-[16px] h-[16px] text-[#666666] transform -rotate-45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>

            <Link href="/about" className="flex flex-row justify-center items-center px-[16px] py-[8px] gap-[12px] w-[149px] h-[55px] border border-[#19037C] rounded-[16px] shadow-[0px_5px_10px_rgba(0,0,0,0.1)] hover:bg-black/5 transition-colors bg-white font-['Figtree',sans-serif]">
              <span className="font-semibold text-[16px] leading-[170%] tracking-[-0.2px] text-[#0A0400]">
                Mehr erfahren
              </span>
            </Link>
          </div>
        </div>

        {/* Main Bottom Image */}
        <div className="absolute w-full h-[757.99px] left-0 top-[290px] max-md:bottom-0  max-md:top-10 z-10 pointer-events-none flex justify-center overflow-visible">
          <div className="absolute inset-x-0 bottom-0 h-[150px] bg-linear-to-b from-transparent  z-20" />
          <Image
            src="/assets/Home/HeroIMG.png"
            alt="ripple"
            fill
            priority
            className="object-cover object-top"
          />
        </div>
      </div>

    </section>
  );
}