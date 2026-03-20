"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { useBooking } from "@/providers/Booking"

export default function CTABanner() {
  const { openModal } = useBooking()
  return (
    <section className="bg-[#F6F7F980] py-40">
      <div className="max-w-[1280px] mx-auto px-6 relative">

        {/* CARD */}
        <div className="relative bg-gradient-to-r from-[#6A54D5E5] to-[#372C6F]
        rounded-[20px] px-[70px] pr-[280px] py-9 overflow-visible">

          <div className="max-w-[560px]">

            <h2 className="text-white text-[36px] font-semibold leading-[1.2] mb-6">
              Ist Ihr Übergang sauber gesteuert – oder nur „irgendwie in Arbeit“?
            </h2>

            <p className="text-white/90 text-[16px] mb-8">
              Wir bringen Klarheit in Ziele, Verantwortungen und Taktung –
              damit Fortschritt sichtbar wird.
            </p>

            <div className="flex gap-5 items-stretch">

              <button
                onClick={openModal}
                className="flex items-center gap-3 bg-[#2905C7] text-white
                px-6 h-[52px] rounded-[12px] font-semibold whitespace-nowrap font-['Figtree',sans-serif] hover:opacity-90 transition-opacity"
              >
                Jetzt Erstgespräch buchen
                <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#1e1a88] shrink-0">
                  <ArrowUpRight size={16} />
                </span>
              </button>

              <Link
                href="/kontakt"
                className="flex items-center gap-2 border border-white/40
                px-6 h-[52px] rounded-[12px] text-white font-semibold whitespace-nowrap font-['Figtree',sans-serif] hover:bg-white/10 transition-all"
              >
                Angebot anfragen
                <ArrowRight size={16} />
              </Link>

            </div>
          </div>

          {/* IMAGE */}
          <div className="absolute right-[40px] -top-[211px]">
            <Image
              src="/assets/About/Cta.png"
              alt="team"
              width={460}
              height={560}
              priority
            />
          </div>

        </div>
      </div>
    </section>
  )
}