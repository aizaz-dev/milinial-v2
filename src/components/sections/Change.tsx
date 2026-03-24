"use client";

import Image from "next/image";

function ChangeSection() {
  return (
    <section className="w-full bg-[#FBFAF8] pt-[120px] lg:pt-[140px] pb-12 md:pb-20 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 xl:px-0">
        
        {/* Title Container */}
        <div className="w-full relative mb-10 md:mb-[60px]"> {/* Reduced gap above visuals */}
          
          {/* Eyebrow */}
          <div className="inline-flex items-center pt-[4px] pb-[4px] pr-[14px] pl-[10px] gap-[4px] bg-[#EBEDEC] rounded-[54px] mb-4 lg:mb-[11px]">
            <span className="text-[#0C2217] font-inter text-sm md:text-[16px] font-normal leading-[170%] tracking-[-0.2px]">
              Unsere LbC Methode für KMU & Mid-Market
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[#1E1A1C] font-inter text-[32px] md:text-[48px] xl:text-[62px] font-semibold leading-[1.2] md:leading-[110%] max-w-[1042px]">
            Veränderungen sicher umsetzen – <br className="hidden md:block" /> strategisch klar, operativ präsent
          </h1>

          {/* Subheadline Container (Aligned via robust flex block structure) */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[40px] xl:gap-[62px] w-full mt-6 md:mt-[22px]">
            {/* Empty block to push the subheadline exactly to right-image position */}
            <div className="hidden lg:block lg:w-[40%] xl:w-[507px] shrink-0"></div>
            <div className="w-full lg:flex-1">
              <p className="text-[#1E1A1C] font-inter text-[16px] md:text-[20px] font-normal leading-[1.6] md:leading-[170%] max-w-[700px]">
                Wir verbinden Erfahrung mit einer eigenen LbC-Methodik, die
                Führung, Organisation und Alltag in Deckung bringt – für sichere
                Veränderung, schnelle Umsetzung und messbare Resultate bei
                überschaubarem Risiko.
              </p>
            </div>
          </div>
        </div>

        {/* Visuals Container */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-[40px] xl:gap-[62px] w-full items-start">
          
          {/* Left Image */}
          <div className="relative w-full lg:w-[40%] xl:w-[507px] shrink-0 h-[260px] md:h-[380px] xl:h-[427px] rounded-tl-none rounded-br-none rounded-tr-[18px] rounded-bl-[18px] overflow-hidden">
            <Image
              src="/assets/how-to-work/hero1.png"
              alt="Team discussion"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right Image */}
          <div className="relative w-full lg:flex-1 h-[260px] md:h-[380px] xl:h-[427px] rounded-tl-none rounded-br-none rounded-tr-[18px] rounded-bl-[18px] overflow-hidden">
            <Image
              src="/assets/how-to-work/hero2.png"
              alt="Meeting presentation"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default ChangeSection;