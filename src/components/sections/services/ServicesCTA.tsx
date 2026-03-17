import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

export interface ServicesCTAProps {
  title?: React.ReactNode
  description?: React.ReactNode
  imageSrc?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

export const ServicesCTA: React.FC<ServicesCTAProps> = ({
  title = "Nicht gefunden, was Sie suchen?",
  description = "Viele Situationen lassen sich nicht sauber in drei Kategorien pressen. Wenn Ihr Anliegen in eine andere Richtung geht: kurz schildern – dann erfolgt eine klare Rückmeldung, ob und wie wir Sie unterstützen können. Unser Ansatz Leadership by Congruence© funktioniert nicht nur für unsere Kernleistungen.",
  imageSrc = "/assets/services/man-standing.png",
  primaryButtonText = "Erstgespräch buchen",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Anfrage senden",
  secondaryButtonHref = "/contact",
}) => {
  return (
    <section className="w-full bg-[rgba(246,247,249,0.5)] overflow-hidden">

      {/* ── MOBILE & TABLET layout (< lg) ── */}
      <div className="lg:hidden w-full px-4 sm:px-6 pt-[48px] pb-0 flex flex-col gap-0">
        {/* Man image on top */}
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
          style={{ background: 'linear-gradient(94.78deg, rgba(106, 84, 213, 0.72) 53.06%, rgba(55, 44, 111, 0.8) 98.1%)' }}
        >
          <div className="flex flex-col gap-[14px]">
            <h2 className="font-['Inter',sans-serif] font-bold text-[24px] sm:text-[30px] leading-[110%] tracking-[-0.03em] text-white m-0">
              {title}
            </h2>
            <p className="font-['Inter',sans-serif] font-medium text-[14px] sm:text-[16px] leading-[140%] text-[#E6E3E3] m-0">
              {description}
            </p>
          </div>
          <div className="flex flex-row flex-wrap items-center gap-[14px]">
            <Link
              href={primaryButtonHref}
              className="inline-flex items-center pl-[14px] pr-[8px] py-[8px] gap-[10px] rounded-[14px] font-['Inter',sans-serif] font-semibold text-[15px] sm:text-[17px] leading-[170%] text-white shrink-0 hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), #2905C7', boxShadow: '0px 5px 10px rgba(0,0,0,0.1)' }}
            >
              <span>{primaryButtonText}</span>
              <span className="w-[34px] h-[34px] bg-white rounded-[10px] flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-[14px] h-[14px] text-[#666666]" strokeWidth={2} />
              </span>
            </Link>
            <Link
              href={secondaryButtonHref}
              className="inline-flex items-center pl-[14px] pr-[12px] py-[8px] gap-[10px] rounded-[14px] border border-white font-['Inter',sans-serif] font-semibold text-[15px] sm:text-[17px] leading-[170%] text-white shrink-0 hover:opacity-90 transition-opacity"
            >
              <span>{secondaryButtonText}</span>
              <ArrowRight className="w-[18px] h-[18px] text-white shrink-0" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── DESKTOP layout (≥ lg) — absolute positioned, 670px tall ── */}
      <div className="hidden lg:block relative w-full max-w-[1320px] mx-auto h-[670px]">

        {/* group-bg decorative arrows — top-left background */}
        <div className="absolute left-[-54px] top-[46px] w-[526px] h-[343px] pointer-events-none select-none" aria-hidden="true">
          <Image
            src="/assets/services/group-bg.png"
            alt=""
            fill
            className="object-contain object-top-left"
            sizes="526px"
          />
        </div>

        {/* Man standing — right side, overflows above the card */}
        <div className="absolute right-0 top-[34px] w-[515px] h-[637px] pointer-events-none z-10 max-md:-top-[100px]">
          <Image
            src={imageSrc}
            alt="Consultant"
            fill
            className="object-contain object-bottom"
            sizes="515px"
            priority
          />
        </div>

        {/* Purple gradient card — bottom-anchored, 385px tall */}
        <div
          className="absolute left-0 right-0 bottom-0 h-[385px] rounded-tr-[16px] rounded-bl-[16px] flex flex-col justify-center px-0"
          style={{ background: 'linear-gradient(94.78deg, rgba(106, 84, 213, 0.72) 53.06%, rgba(55, 44, 111, 0.8) 98.1%)' }}
        >
          {/* Text + Buttons — 621px wide, 42px from card left */}
          <div className="flex flex-col items-start gap-[36px] w-[621px] ml-[42px]">

            <div className="flex flex-col gap-[16px] w-full">
              <h2 className="font-['Inter',sans-serif] font-bold text-[40px] leading-[110%] tracking-[-0.03em] text-white m-0">
                {title}
              </h2>
              <p className="font-['Inter',sans-serif] font-medium text-[19px] leading-[130%] text-[#E6E3E3] m-0">
                {description}
              </p>
            </div>

            <div className="flex flex-row items-center gap-[38px]">
              {/* Primary */}
              <Link
                href={primaryButtonHref}
                className="inline-flex flex-row items-center pl-[16px] pr-[8px] py-[8px] gap-[12px] rounded-[16px] font-['Inter',sans-serif] font-semibold text-[20px] leading-[170%] tracking-[-0.2px] text-white hover:opacity-90 transition-opacity shrink-0"
                style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), #2905C7', boxShadow: '0px 19px 19px rgba(0,0,0,0.09), 0px 5px 10px rgba(0,0,0,0.1)' }}
              >
                <span className="whitespace-nowrap">{primaryButtonText}</span>
                <span className="w-[38px] h-[38px] bg-white rounded-[12px] flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-[16px] h-[16px] text-[#666666]" strokeWidth={2} />
                </span>
              </Link>
              {/* Secondary */}
              <Link
                href={secondaryButtonHref}
                className="inline-flex flex-row items-center pl-[16px] pr-[12px] py-[8px] gap-[12px] rounded-[16px] border border-white font-['Inter',sans-serif] font-semibold text-[20px] leading-[170%] tracking-[-0.02em] text-white hover:opacity-90 transition-opacity shrink-0"
              >
                <span className="whitespace-nowrap">{secondaryButtonText}</span>
                <ArrowRight className="w-[22px] h-[22px] text-white shrink-0" strokeWidth={2} />
              </Link>
            </div>

          </div>
        </div>

      </div>

    </section>
  )
}


