import React from 'react'
import Image from 'next/image'

export const ServiceHero: React.FC = () => {
  return (
    <section className="w-full flex justify-center pt-[80px] pb-[60px] lg:pt-[191px] lg:pb-[140px] px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="flex flex-col items-start gap-[40px] md:gap-[56px] w-full max-w-[1270px] mx-auto">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end w-full gap-[24px] md:gap-[32px] lg:gap-[128px]">
          {/* Section Title */}
          <div className="flex flex-col items-start gap-[12px] shrink-0">
            {/* sub header badge */}
            <div className="bg-[#EBEDEC] rounded-[54px] inline-flex min-h-[35px] items-center py-[4px] px-[14px]">
              <span className="font-['Inter',sans-serif] font-normal text-[14px] md:text-[16px] leading-[170%] tracking-[-0.2px] text-[#0A0132] whitespace-nowrap">
                Verantwortung übernehmen, wenn es zählt
              </span>
            </div>
            
            {/* Main title */}
            <h1 className="font-['Inter',sans-serif] font-semibold text-[40px] md:text-[52px] lg:text-[62px] leading-[115%] tracking-[-2px] text-[#000000] m-0">
              Unser Angebot
            </h1>
          </div>
          
          {/* Subtext */}
          <p className="font-['Inter',sans-serif] font-medium text-[18px] md:text-[22px] lg:text-[32px] leading-[150%] tracking-[-0.5px] lg:tracking-[-1px] text-[#000000] w-full m-0">
            Wir stabilisieren Unternehmen in kritischen Phasen, integrieren nach Übernahme/Fusion und verbessern Leistung nachhaltig.
          </p>
        </div>

        {/* Images Row — stack on mobile, 2-col on md, 3-col on lg */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] md:gap-[24px] w-full">
          {/* Image 1 — tallest */}
          <div className="relative w-full h-[260px] md:h-[420px] lg:h-[512px] rounded-[18px] overflow-hidden">
            <Image
              src="/assets/services/Image-1.png"
              alt="Professional floor discussion"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 392px"
            />
          </div>
          {/* Image 2 — medium height */}
          <div className="relative w-full h-[260px] md:h-[380px] lg:h-[460px] rounded-[18px] overflow-hidden">
            <Image
              src="/assets/services/Image-2.png"
              alt="White board presentation"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 392px"
            />
          </div>
          {/* Image 3 — shortest */}
          <div className="relative w-full h-[260px] md:h-[320px] lg:h-[396px] rounded-[18px] overflow-hidden">
            <Image
              src="/assets/services/Image-3.png"
              alt="Team meeting"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 392px"
            />
          </div>
        </div>
        
      </div>
    </section>
  )
}
