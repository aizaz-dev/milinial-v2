import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ContactForm } from '@/components/kontakt/ContactForm'
import { ContactTrust } from '@/components/kontakt/ContactTrust'
import { ServicesCTA } from '@/components/sections/services/ServicesCTA'
import { Memberships } from '@/components/Memberships'

export const metadata: Metadata = {
  title: 'Kontakt – Jetzt anfragen',
  description: 'Schreiben Sie uns oder buchen Sie direkt ein Erstgespräch. Rückmeldung zeitnah und vertraulich.',
}

export default function KontaktPage() {
  return (
    <main className="w-full bg-white min-h-screen overflow-x-hidden">

      {/* ── HERO SECTION (text + images in one unified block) ── */}
      <section className="w-full bg-white pt-[120px] lg:pt-[140px]">

        {/* ── TEXT BLOCK — constrained to 1320px ── */}
        <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-[60px] pb-[3bn0px] lg:pb-[30px]">

          {/* Mobile: stacked */}
          <div className="flex flex-col gap-[24px] lg:hidden">
            <div className="inline-flex flex-row items-center px-[10px] pr-[14px] py-[4px] gap-[4px] bg-[#EBEDEC] rounded-[54px] w-fit">
              <span className="font-['Inter',sans-serif] font-normal text-[16px] leading-[170%] tracking-[-0.2px] text-[#0C2217]">
                Kontaktaufnahme
              </span>
            </div>
            <h1 className="font-['Inter',sans-serif] font-semibold text-[38px] sm:text-[48px] leading-[110%] text-[#1E1A1C] m-0">
              Sie interessieren sich für unseren Service?
            </h1>
            <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[170%] text-[#1E1A1C] m-0">
              Beschreiben Sie kurz Ausgangslage, Ziel und Timing – oder buchen Sie direkt ein Erstgespräch. Rückmeldung zeitnah und vertraulich.
            </p>
          </div>

          {/* Desktop: absolute-positioned text block, 330px tall */}
          <div className="hidden lg:block relative w-full h-[330px]">
            {/* Eyebrow */}
            <div className="absolute top-[34px] left-0 inline-flex flex-row items-center px-[10px] pr-[14px] py-[4px] gap-[4px] bg-[#EBEDEC] rounded-[54px]">
              <span className="font-['Inter',sans-serif] font-normal text-[16px] leading-[170%] tracking-[-0.2px] text-[#0C2217]">
                Kontaktaufnahme
              </span>
            </div>
            {/* Headline */}
            <h1 className="absolute top-[80px] left-0 font-['Inter',sans-serif] font-semibold text-[62px] leading-[110%] text-[#1E1A1C] m-0 max-w-[1042px]">
              Sie interessieren sich für unseren Service?
            </h1>
            {/* Subheadline */}
            <p className="absolute top-[238px] left-[43.1%] font-['Inter',sans-serif] font-normal text-[20px] leading-[170%] text-[#1E1A1C] m-0 max-w-[700px]">
              Beschreiben Sie kurz Ausgangslage, Ziel und Timing – oder buchen Sie direkt ein Erstgespräch. Rückmeldung zeitnah und vertraulich.
            </p>
          </div>

        </div>

        {/* ── IMAGES ROW — full viewport width with px-[60px] padding, inside the same section ── */}

        {/* Mobile: stacked */}
        <div className="flex flex-col gap-4 px-4 sm:px-6 lg:hidden">
          <div className="relative w-full h-[260px] sm:h-[340px] overflow-hidden" style={{ borderRadius: '0px 18px 0px 18px' }}>
            <Image
              src="/assets/contact/service-1.png"
              alt="Beratungsszene"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
          <div className="relative w-full h-[260px] sm:h-[340px] overflow-hidden" style={{ borderRadius: '0px 18px 0px 18px' }}>
            <Image
              src="/assets/contact/service-2.png"
              alt="Seminar Szene"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Desktop — same max-w as text block, flex row, 427px tall */}
        <div className="hidden lg:block w-full max-w-[1320px] mx-auto px-6 lg:px-[60px]">
          <div className="flex flex-row items-center gap-[60px] w-full h-[427px]">

            {/* Image 1 — flex-1, top-right + bottom-left rounded 18px */}
            <div
              className="relative h-full overflow-hidden flex-1"
              style={{ borderRadius: '0px 18px 0px 18px' }}
            >
              <Image
                src="/assets/contact/service-1.png"
                alt="Beratungsszene"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 751px, 100vw"
                priority
              />
            </div>

            {/* Image 2 — fixed 507px, top-right + bottom-left rounded 18px */}
            <div
              className="relative h-full overflow-hidden shrink-0"
              style={{ width: '507px', borderRadius: '0px 18px 0px 18px' }}
            >
              <Image
                src="/assets/contact/service-2.png"
                alt="Seminar Szene"
                fill
                className="object-cover object-center"
                sizes="507px"
              />
            </div>

          </div>
        </div>

      </section>

      {/* ── CONTACT FORM SECTION ── */}
      <ContactForm />

      {/* ── TRUST SECTION ── */}
      <ContactTrust />

      {/* ── SERVICES CTA (Man on right) ── */}
      <ServicesCTA imageSrc="/assets/contact/man-standing.png" />

      {/* ── MEMBERSHIPS / LOGOS ── */}
      <Memberships />

    </main>
  )
}
