import React from 'react'
import type { Metadata } from 'next/types'
import { BookPromo } from '@/components/BookPromo'
import { Memberships } from '@/components/Memberships'

export const dynamic = 'force-static'
export const revalidate = 600

export default function ImpressumPage() {
  return (
    <div className="bg-white text-foreground">
      {/* ── HERO SECTION ── */}
      <div className="px-4 md:px-8 flex justify-center pt-[120px] lg:pt-[140px] pb-12">
        <div
          className="relative flex items-center justify-center overflow-hidden w-full max-w-[1320px] min-h-[400px] md:min-h-[585px] bg-cover bg-center rounded-tr-[16px] rounded-bl-[16px] px-6 md:px-12"
          style={{ backgroundImage: "url('/assets/legal-page/hero-bg.jpg')" }}
        >
             {/* Dak roverlay for readability */}
<div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(61,53,97,0.75) 0%, rgba(106,75,250,0.45) 100%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center mx-auto gap-[13px] max-w-[892px]">
            {/* Eyebrow Badge */}
            <span
              className="inline-flex items-center px-[10px] py-[10px] rounded-[54px] font-['Inter',sans-serif] font-normal text-[16px] leading-[170%] tracking-[-0.2px] text-white"
              style={{ background: '#7063AA' }}
            >
              Unser &quot;Kleingedrucktes&quot;
            </span>

            {/* Heading */}
            <h1
              className="font-['Inter',sans-serif] font-medium text-[40px] md:text-[64px] leading-[110%] tracking-[-2px] md:tracking-[-3px] text-center text-white m-0"
            >
              Impressum &amp; Datenschutz
            </h1>

            {/* Subheadline */}
            <p
              className="max-w-[794px] font-['Inter',sans-serif] font-light text-[22px] md:text-[40px] leading-[110%] tracking-[-2px] md:tracking-[-3px] text-center text-white m-0"
            >
              Alle rechtlichen Angaben und Informationen zum Umgang mit personenbezogenen Daten auf einen Blick.
            </p>
          </div>
        </div>
      </div>

{/* ── LEGAL CONTENT SECTION ── */}
<div className="w-full bg-[#FEFEFE] flex justify-center py-[80px] px-[20px]">
  <div className="w-full max-w-[900px] flex flex-col">

    {/* Last Update */}
    <p className="text-[#4C5157] text-[14px] mb-[40px]">
      Letztes Update: 22. März 2026
    </p>

    {/* Title */}
    <h2 className="text-[28px] md:text-[32px] font-semibold text-[#4C5157] mb-[40px]">
      Impressum
    </h2>

    {/* Content */}
    <div className="text-[#4C5157] text-[16px] md:text-[18px] leading-[160%] flex flex-col gap-[32px]">

      {/* Block 1 */}
      <div className="flex flex-col gap-[12px]">
        <h3 className="font-semibold text-[#4C5157]">
          Herausgeber dieses Internet-Auftritts
        </h3>
        <p>
          Millennial C KLG<br />
          Postanschrift<br />
          Eichenheimweg 1, 5015 Erlinsbach, Solothurn
        </p>
      </div>

      {/* Block 2 */}
      <div className="flex flex-col gap-[12px]">
        <h3 className="font-semibold text-[#4C5157]">
          Kontakt
        </h3>
        <p>
          E-Mail: p.juchli [ät] millennial-c.com<br />
          Telefon: +41 32 512 25 61<br />
          Vertreten durch: Philipp Juchli
        </p>
      </div>

    </div>
  </div>
</div>
      {/* ── ADDITIONAL COMPONENTS ── */}
      <BookPromo />
      <Memberships />
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Impressum & Datenschutz | Millenial Group',
    description: 'Alle rechtlichen Angaben und Informationen zum Umgang mit personenbezogenen Daten auf einen Blick.',
  }
}
