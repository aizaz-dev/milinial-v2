"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Props {
  heading: string
  subheading: string
  image: string
}

export default function CTABanner({ heading, subheading, image }: Props) {
  return (
    <section className="w-full bg-white pt-20 pb-14">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Banner */}
        <div className="relative bg-[#f6f6f6] rounded-xl overflow-hidden py-20">

          {/* People image */}
          <div className="absolute left-14 bottom-0 z-20">
            <Image
              src={image}
              alt="team"
              width={420}
              height={520}
              className="object-contain"
            />
          </div>

          {/* Purple content card */}
          <div className="ml-auto max-w-[760px] pr-8">
            <div className="bg-gradient-to-r from-[#7d74f5] to-[#8e86f7] text-white 
              rounded-tl-[26px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px]
              px-16 py-14 shadow-sm">

              <h2 className="text-[34px] leading-tight font-semibold mb-6 max-w-[520px]">
                {heading}
              </h2>

              <p className="text-[15px] text-white/90 leading-relaxed mb-8 max-w-[540px]">
                {subheading}
              </p>

              <div className="flex gap-4 flex-wrap">

                {/* Button 1 */}
                <Link
                  href="/services"
                  className="flex items-center gap-3 bg-[#2c2aa2] hover:opacity-90
                  px-6 py-3 rounded-lg text-sm font-semibold transition font-['Figtree',sans-serif] text-white"
                >
                  Leistungen ansehen
                  <span className="flex items-center justify-center 
                    w-6 h-6 bg-white rounded-md text-[#2c2aa2]">
                    <ArrowRight size={14} />
                  </span>
                </Link>

                {/* Button 2 */}
                <Link
                  href="/kontakt"
                  className="flex items-center gap-3 border border-white/40
                  px-6 py-3 rounded-lg text-sm hover:bg-white/10 transition font-semibold font-['Figtree',sans-serif] text-white"
                >
                  Angebot anfragen
                  <span className="flex items-center justify-center
                    w-6 h-6 bg-white/20 rounded-md">
                    <ArrowRight size={14} />
                  </span>
                </Link>

              </div>
            </div>
          </div>

          {/* Bottom blue line */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#22a7ff]" />

        </div>

        {/* Logos section */}
        <div className="mt-10 border-t border-gray-200 pt-8 flex items-center flex-wrap gap-12 opacity-70">

          <span className="text-sm text-gray-500 whitespace-nowrap">
            Mitglied von:
          </span>

          <Image src="/logos/sogi.png" alt="SOGI" width={110} height={40} />
          <Image src="/logos/university.png" alt="HSG" width={120} height={40} />
          <Image src="/logos/ehl.png" alt="EHL" width={90} height={40} />
          <Image src="/logos/interim.png" alt="Interim" width={110} height={40} />
          <Image src="/logos/procure.png" alt="Procure" width={110} height={40} />
          <Image src="/logos/schkg.png" alt="SCHKG" width={110} height={40} />

        </div>

      </div>
    </section>
  )
}