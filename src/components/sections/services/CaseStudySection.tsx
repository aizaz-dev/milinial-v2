'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import core Swiper styles
import 'swiper/css';

const caseStudies = [
  {
    logo: '/assets/services/logo-1.png',
    logoWidth: 110,
    title: 'Wie ein Interim-COO-Setup Entscheidungstempo und Ownership erhöhte',
    description: 'Entdecken Sie, wie ein klares Mandat in der Linie, saubere Entscheidungsfenster und ein einfacher Operating Rhythmus Meetinglast reduziert und Verantwortung dorthin gebracht haben, wo Umsetzung passiert.',
    link: '/case-studies',
  },
  {
    logo: '/assets/services/logo-2.png',
    logoWidth: 155,
    description: 'Entdecken Sie, wie klare Trade-offs, ein schlanker Steuerungsrhythmus und transparente Verantwortungen aus vielen Initiativen ein umsetzbares Portfolio gemacht haben – mit sichtbaren Effekten auf Ergebnis und Führungskapazität.',
    link: '/case-studies',
  },
  {
    logo: '/assets/services/logo-1.png',
    logoWidth: 110,
    title: 'Neuausrichtung der Supply Chain nach akutem Wachstum',
    description: 'Wie wir gemeinsam mit dem Leadership-Team Prozesse verschlankt und die Lieferfähigkeit signifikant gesteigert haben, ohne die Kostenstruktur aus den Augen zu verlieren.',
    link: '/case-studies',
  },
  {
    logo: '/assets/services/logo-2.png',
    logoWidth: 155,
    description: 'Wie eine Restrukturierung in einem schwierigen Marktumfeld zur Stabilisierung der Margen und neuem Vertrauen bei den Stakeholdern geführt hat.',
    link: '/case-studies',
  }
];

export const CaseStudySection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full bg-[#FBFBFB] py-[80px] lg:pt-[120px] lg:pb-[140px] overflow-hidden">

      {/* ── Background decoration (group-bg) ── */}
      {/* Positioned inside the frame so it's clearly visible on the top right */}
      <div className="absolute right-0 top-0 w-[526px] h-[343px] pointer-events-none select-none z-0">
        <Image
          src="/assets/services/group-bg.png"
          alt=""
          fill
          className="object-contain object-top-right"
          sizes="(max-width: 1024px) 100vw, 526px"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 lg:px-[60px] flex flex-col items-start gap-[60px] lg:gap-[80px]">

        {/* Header content */}
        <div className="flex flex-col items-start gap-[20px] lg:gap-[24px] max-w-[540px]">
          {/* Badge */}
          <div className="inline-flex items-center px-[12px] py-[4px] bg-white border border-[rgba(152,157,173,0.3)] rounded-[36px]">
            <span className="font-['Geist',sans-serif] font-normal text-[14px] sm:text-[16px] leading-[170%] text-[#403F3C]">
              Referenzmuster
            </span>
          </div>

          {/* Title */}
          <h2 className="font-['Inter',sans-serif] font-medium text-[36px] sm:text-[40px] lg:text-[48px] leading-[120%] tracking-[-1.5px] text-[#181C39] m-0">
            Wirkung in der Praxis
          </h2>

          {/* Subheading */}
          <p className="font-['Geist',sans-serif] font-normal text-[16px] lg:text-[18px] leading-[170%] text-[#373A46] opacity-80 m-0">
            Kurze Fallbeispiele aus Restrukturierung, Integration und Transformation – pragmatisch beschrieben, klar auf Resultate bezogen.
          </p>
        </div>

        {/* Outer carousel container using Swiper */}
        <div className="w-full relative">

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            breakpoints={{
              1024: {
                spaceBetween: 26,
              },
            }}
            className="w-full pb-6 lg:pb-0"
          >
            {caseStudies.map((caseStudy, index) => (
              <SwiperSlide key={index} style={{ width: 'auto' }}>
                <div
                  className={`flex flex-col ${caseStudy.title ? 'justify-between min-h-[550px]' : 'min-h-[384px]'} w-[320px] sm:w-[400px] lg:w-[634px] bg-white border border-[rgba(12,14,23,0.1)] rounded-[16px] p-[24px] sm:p-[32px] lg:p-[41px_38px] shadow-sm`}
                >
                  <div className={`flex flex-col items-start gap-[36px] w-full ${!caseStudy.title ? 'mb-[36px]' : ''}`}>
                    {/* Logo image */}
                    <div
                      className="h-[42px] relative flex items-center shrink-0"
                      style={{ width: `${caseStudy.logoWidth}px` }}
                    >
                      <Image
                        src={caseStudy.logo}
                        alt="Company Logo"
                        fill
                        className="object-contain object-left"
                      />
                    </div>

                    {/* Title (if exists) */}
                    {caseStudy.title && (
                      <h3 className="font-['Inter',sans-serif] font-medium text-[24px] lg:text-[36px] leading-[140%] tracking-[-1px] text-[#1D2B19] m-0">
                        {caseStudy.title}
                      </h3>
                    )}
                  </div>

                  <div className={`flex flex-col items-start gap-[16px] w-full mt-auto ${caseStudy.title ? 'pt-[36px]' : ''}`}>
                    {/* Divider Line */}
                    <div className="w-full h-px bg-[#1D2B19] opacity-20"></div>
                    {/* Paragraph */}
                    <p className="font-['Inter',sans-serif] font-normal text-[15px] lg:text-[18px] leading-[170%] text-[#545D52] m-0">
                      {caseStudy.description}
                    </p>
                  </div>

                  {/* Button - position differs slightly based on presence of title */}
                  <div className={caseStudy.title ? 'mt-[13px]' : 'mt-[29px]'}>
                    <Link
                      href={caseStudy.link}
                      className="inline-flex flex-row items-center justify-center px-[22px] py-[14px] border-[1.5px] border-[#545D52] rounded-[16px] text-[#1D2B19] hover:bg-[#1D2B19] hover:text-white transition-colors duration-200 w-[176px]"
                    >
                      <span className="font-['Inter',sans-serif] font-medium text-[16px] leading-[170%]">Casestudy lesen</span>
                    </Link>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ── Custom Slider Dots ── */}
          <div className="flex flex-row items-center justify-center gap-[4px] mt-[40px] lg:mt-[60px]">
            {caseStudies.map((_, i) => (
              <button
                key={`dot-${i}`}
                onClick={() => {
                  // Using Swiper's loop logic means we use slideToLoop for accurate native jumping
                  if (swiperRef.current) {
                    swiperRef.current.slideToLoop(i);
                  }
                }}
                className={`h-[6px] rounded-[8px] transition-all duration-300 ${activeIndex === i ? 'w-[60px] bg-[#6A4BFA]' : 'w-[16px] bg-[#9283DF] opacity-20'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
