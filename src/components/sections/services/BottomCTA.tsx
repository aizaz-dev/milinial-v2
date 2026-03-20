import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

export interface BottomCTAProps {
  title?: React.ReactNode
  description?: React.ReactNode
  imageSrc?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

export const BottomCTA: React.FC<BottomCTAProps> = ({
  title = "Ist Ihr Programm robust genug für den Alltag?",
  description = "Bei Restrukturierungen, Integrationen und Transformationen stehen wir zur Verfügung – diskret, strukturiert und umsetzungsnah, damit Steuerung und Verankerung im Alltag funktionieren.",
  imageSrc = "/assets/services/girl-standing.png",
  primaryButtonText = "Jetzt Erstgespräch buchen",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Angebot anfragen",
  secondaryButtonHref = "/contact",
}) => {
  return (
    <section className="w-full bg-white overflow-hidden pt-12 lg:pt-24">
      {/* ── MOBILE & TABLET layout (< lg) ── */}
      <div className="lg:hidden w-full px-4 sm:px-6 pt-[48px] pb-0 flex flex-col gap-0">
        {/* Girl image on top */}
        <div className="w-full flex justify-center">
          <div className="relative w-[240px] sm:w-[300px] h-[300px] sm:h-[380px]">
            <Image
              src={imageSrc}
              alt="Consultant"
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 640px) 240px, 300px"
            />
          </div>
        </div>
        {/* Card below */}
        <div
          className="w-full rounded-tr-[16px] rounded-bl-[16px] px-6 py-[36px] flex flex-col gap-[28px]"
          style={{ background: '#897ADB' }}
        >
          <div className="flex flex-col gap-[14px]">
            <h2 className="font-['Inter',sans-serif] font-bold text-[24px] sm:text-[30px] leading-[110%] tracking-[-0.03em] text-white m-0">
              {title}
            </h2>
            <p className="font-['Inter',sans-serif] font-medium text-[14px] sm:text-[16px] leading-[140%] text-[#E6E3E3] m-0">
              {description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-[14px]">
            <Link
              href={primaryButtonHref}
              className="inline-flex flex-row items-center justify-between sm:justify-start pl-[16px] pr-[8px] py-[8px] gap-[12px] rounded-[16px] font-['Inter',sans-serif] font-semibold text-[17px] leading-[170%] text-white shrink-0 hover:opacity-90 transition-opacity"
              style={{ background: '#120485', boxShadow: '0px 19px 19px rgba(0,0,0,0.09), 0px 5px 10px rgba(0,0,0,0.1)' }}
            >
              <span>{primaryButtonText}</span>
              <span className="w-[34px] h-[34px] bg-white rounded-[10px] flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-[14px] h-[14px] text-[#120485]" strokeWidth={2} />
              </span>
            </Link>
            <Link
              href={secondaryButtonHref}
              className="inline-flex items-center justify-center px-[20px] py-[12px] gap-[10px] rounded-[16px] border border-white font-['Inter',sans-serif] font-semibold text-[15px] sm:text-[17px] leading-[170%] text-white shrink-0 hover:bg-white hover:text-[#897ADB] transition-all"
            >
              <span>{secondaryButtonText}</span>
              <ArrowRight className="w-[18px] h-[18px] shrink-0" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── DESKTOP layout (≥ lg) — absolute positioned, 550px tall ── */}
      <div className="hidden lg:block relative w-full max-w-[1320px] mx-auto h-[550px]">

        {/* Purple gradient card — bottom-anchored, 350px tall */}
        <div
          className="absolute left-0 right-0 bottom-0 h-[385px] rounded-tr-[16px] rounded-bl-[16px] flex flex-col justify-center items-end px-0"
          style={{ background: '#897ADB' }}
        >
          {/* Text + Buttons — 621px wide, 42px from card right */}
          <div className="flex flex-col items-start gap-[36px] w-full lg:w-[500px] xl:w-[581px] mr-6 xl:mr-[60px] z-20">

            <div className="flex flex-col gap-[16px] w-full">
              <h2 className="font-['Inter',sans-serif] font-bold text-[40px] leading-[110%] tracking-[-0.03em] text-white m-0">
                {title}
              </h2>
              <p className="font-['Inter',sans-serif] font-medium text-[19px] leading-[140%] text-white/90 m-0">
                {description}
              </p>
            </div>

            <div className="flex flex-row items-center gap-[16px]">
              {/* Primary */}
              <Link
                href={primaryButtonHref}
                className="inline-flex flex-row items-center pl-[20px] pr-[8px] py-[9px] gap-[12px] rounded-[12px] font-figtree font-semibold text-[18px] leading-[150%] tracking-[-0.2px] text-white hover:opacity-90 transition-opacity shrink-0"
                style={{ background: '#120485', boxShadow: '0px 19px 19px rgba(0,0,0,0.09), 0px 5px 10px rgba(0,0,0,0.1)' }}
              >
                <span className="whitespace-nowrap">{primaryButtonText}</span>
                <span className="w-[32px] h-[32px] bg-white rounded-[8px] flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-[16px] h-[16px] text-[#120485]" strokeWidth={2} />
                </span>
              </Link>
              {/* Secondary */}
              <Link
                href={secondaryButtonHref}
                className="inline-flex flex-row items-center px-[24px] py-[10px] gap-[8px] rounded-[12px] border border-white font-figtree font-semibold text-[18px] leading-[150%] tracking-[-0.02em] text-white hover:bg-white/10 transition-all shrink-0"
              >
                <span className="whitespace-nowrap">{secondaryButtonText}</span>
                <ArrowRight className="w-[20px] h-[20px] shrink-0" strokeWidth={2} />
              </Link>
            </div>

          </div>
        </div>

        {/* Girl standing — left side, overflows above the card */}
        <div className="absolute left-[20px] xl:left-[30px] bottom-0 w-[350px] xl:w-[420px] h-[480px] xl:h-[550px] pointer-events-none z-10">
          <Image
            src={imageSrc}
            alt="Consultant"
            fill
            className="object-contain object-bottom"
            sizes="420px"
            priority
          />
        </div>

      </div>

    </section>
  )
}
