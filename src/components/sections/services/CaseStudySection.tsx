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
    link: 'https://drive.proton.me/urls/G7Z31GJVSW#RTm4mnf47fk9',
  },
  {
    logo: '/assets/services/logo-2.png',
    logoWidth: 155,
    description: 'Entdecken Sie, wie klare Trade-offs, ein schlanker Steuerungsrhythmus und transparente Verantwortungen aus vielen Initiativen ein umsetzbares Portfolio gemacht haben – mit sichtbaren Effekten auf Ergebnis und Führungskapazität.',
    link: 'https://drive.proton.me/urls/VQJDC6ENNG#tg7LfKVYcLd4',
  },
  {
    logo: '/assets/services/logo-3.jpeg',
    logoWidth: 155,
    title: 'Wie Struktur und Verbindlichkeit ärztliche Leadership-Projekte wirksam machten',
    description: 'Entdecken Sie, wie strukturierte Agenden, Follow-up-Zyklen und eine neue Ergebnisverantwortung fachlich exzellenten Ärztinnen und Ärzten halfen, ihre Kompetenz in wirkungsvolle Projektarbeit zu übersetzen.',
    link: 'https://drive.proton.me/urls/EP4BTVH4EC#UvGKlq9Bympg',
    buttonText: 'Case Study lesen'
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
            spaceBetween={16}
            slidesPerView={1.1}
            autoHeight={false}
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
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 26,
              },
            }}
            className="w-full pb-6 lg:pb-0"
          >
            {caseStudies.map((caseStudy, index) => (
              <SwiperSlide key={index} className="!h-auto flex items-start">
                <div
                  className="flex flex-col h-fit w-full bg-white border border-[rgba(12,14,23,0.1)] rounded-[16px] p-[24px] sm:p-[32px] lg:p-[41px_38px] shadow-sm"
                >
                  <div className="flex flex-col items-start gap-[24px] lg:gap-[36px] w-full">
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

                  <div className="flex flex-col items-start gap-[16px] w-full mt-[24px]">
                    {/* Divider Line */}
                    <div className="w-full h-px bg-[#1D2B19] opacity-20"></div>
                    {/* Paragraph */}
                    <p className="font-['Inter',sans-serif] font-normal text-[15px] lg:text-[18px] leading-[170%] text-[#545D52] m-0">
                      {caseStudy.description}
                    </p>
                  </div>

                  {/* Button - wrapped directly underneath */}
                  <div className="mt-[24px] lg:mt-[32px]">
                    <Link
                      href={caseStudy.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-row items-center justify-center px-[22px] py-[14px] border-[1.5px] border-[#545D52] rounded-[16px] text-[#1D2B19] hover:bg-[#1D2B19] hover:text-white transition-colors duration-200 w-fit min-w-[176px]"
                    >
                      <span className="font-['Inter',sans-serif] font-medium text-[16px] leading-[170%] whitespace-nowrap">
                        {caseStudy.buttonText || 'Casestudy lesen'}
                      </span>
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
