"use client"

import Image from "next/image"

export default function BookPromo() {
  return (
    <section className="px-6 bg-[#f3f3f3] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">

        <div className="bg-[#0B0332CC] rounded-2xl pl-16 pr-0 flex items-center justify-between overflow-visible">

          {/* LEFT */}
          <div className="max-w-[560px] text-white flex-shrink-0">

            <span className="inline-block bg-[#D6CDFE] text-[#6D6E72] text-[14px] px-4 py-1 rounded-full mb-6">
              Jetzt im Handel erhältlich
            </span>

            <h2 className="text-[56px] leading-[1.05] font-semibold mb-6">
              Bessere Führung.
              <br />
              Stärkere Teams.
              <br />
              Erfolgreichere Kliniken.
            </h2>

            <p className="text-[18px] text-[#D8D8D8] leading-relaxed">
              Unser aktuelles Buch "Patience First" zeigt, wie Sie als Arzt
              Führung leben, Ihr Team nachhaltig für sich gewinnen und den
              Klinik-Erfolg langfristig sichern.
            </p>

          </div>

          {/* RIGHT BOOK - LARGER */}
          <div className="relative w-[480px] h-[580px]  flex-shrink-0">

            <Image
              src="/assets/Home/book.png"
              alt="Patients First Book"
              fill
              className="
              object-contain
              rotate-[12deg]
              scale-[1.4]
              drop-shadow-[0_70px_100px_rgba(0,0,0,0.55)]
              "
            />

          </div>

        </div>

      </div>
    </section>
  )
}