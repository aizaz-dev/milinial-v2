import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="w-full bg-[#FBFAF8] overflow-hidden">
      <div className="relative w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8 pt-[96px] lg:pt-[160px] pb-[96px] lg:pb-[140px]">
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute -top-[180px] -right-[140px] w-[520px] h-[520px] rounded-full bg-[#6A4BFA]/10 blur-[70px]" />
          <div className="absolute -bottom-[220px] -left-[160px] w-[560px] h-[560px] rounded-full bg-[#1A037F]/10 blur-[80px]" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="inline-flex w-fit flex-row items-center px-[10px] pr-[14px] py-[4px] gap-[6px] bg-[#EBEDEC] border border-black/5 rounded-[54px]">
              <span className="font-['Figtree',sans-serif] font-normal text-[14px] sm:text-[16px] leading-[170%] tracking-[-0.2px] text-[#0C2217]">
                404 – Seite nicht gefunden
              </span>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="font-['Inter',sans-serif] font-bold text-[44px] sm:text-[56px] lg:text-[72px] leading-[105%] tracking-[-0.03em] text-[#111111]">
                Diese Seite gibt es nicht (mehr).
              </h1>
              <p className="font-['Inter',sans-serif] font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[170%] text-[#4D4F54] max-w-[720px]">
                Vielleicht wurde der Link geändert oder die Seite verschoben. Nutzen Sie die Schnelllinks unten oder starten Sie auf der Startseite.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <Link
                href="/"
                className="inline-flex items-center w-fit pl-[16px] pr-[8px] py-[8px] gap-[12px] rounded-[16px] bg-[#1A037F] text-white font-['Inter',sans-serif] font-semibold text-[16px] leading-[170%] shadow-[0px_6px_18px_rgba(0,0,0,0.12)] hover:opacity-95 transition-opacity"
              >
                Zur Startseite
                <span className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-white/95 text-[#666666] shrink-0">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center w-fit pl-[16px] pr-[12px] py-[8px] gap-[10px] rounded-[16px] border border-[#D9DBDE] bg-white text-[#111111] font-['Inter',sans-serif] font-semibold text-[16px] leading-[170%] hover:bg-[#F6F7F9] transition-colors"
              >
                Angebot ansehen
                <ArrowRight className="h-5 w-5 text-[#666666]" strokeWidth={2} />
              </Link>

              <Link
                href="/kontakt"
                className="inline-flex items-center w-fit pl-[16px] pr-[12px] py-[8px] gap-[10px] rounded-[16px] border border-[#D9DBDE] bg-white text-[#111111] font-['Inter',sans-serif] font-semibold text-[16px] leading-[170%] hover:bg-[#F6F7F9] transition-colors"
              >
                Kontakt
                <ArrowRight className="h-5 w-5 text-[#666666]" strokeWidth={2} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[520px] rounded-tr-[16px] rounded-bl-[16px] overflow-hidden bg-white border border-black/5 shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
              <Image
                src="/assets/services/feature-image-1.png"
                alt="Team"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 560px, 520px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
