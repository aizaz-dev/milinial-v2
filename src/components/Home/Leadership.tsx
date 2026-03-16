"use client";

import Image from "next/image";

export default function Leadership() {
  return (
    <section className="w-full bg-[#FEFEFE] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div className="relative w-[483px] h-[480px]  overflow-hidden">
            <Image
              src="/assets/Home/Leader.png" 
              alt="Leadership Meeting"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <div>

            <div className="inline-block bg-[#AEAFB333] text-[#0C2217] text-sm px-4 py-2 rounded-full mb-6">
              Unsere Erfahrung - Ihr Gewinn
            </div>

            <h2 className="text-[44px] leading-[1.15] font-semibold text-[#181C39] mb-6">
              Führung, die <br />
              Menschen und Zahlen <br />
              zusammenbringt.
            </h2>

            <p className="text-[#5E6075] text-[17px] leading-[1.8] max-w-[520px]">
              Wir kennen Restrukturierungen, Turnarounds und Transformationen
              aus der ersten Reihe: als Interim-COO, Operating Partner und
              Sparringpartner für Eigentümer und Management. Wir verbinden
              strategische Klarheit mit konsequenter operativer Umsetzung und
              stehen in kritischen Phasen selbst in der Verantwortung.
            </p>

          </div>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-10 mt-20 border-t pt-14">

          {/* STAT 1 */}
          <div className="space-y-3">
            <h3 className="text-[48px] font-semibold text-[#6A4BFA]">20+</h3>
            <p className="font-medium text-[#0D0901]">
              Jahre Leadership in Schlüsselrollen
            </p>
            <p className="text-[#3B3B3B] text-sm">
              Führungserfahrung vom Programm- und Projektleiter bis und mit
              C-Level Positionen in komplexen Umfeldern
            </p>
          </div>

          {/* STAT 2 */}
          <div className="space-y-3 border-l pl-8">
            <h3 className="text-[48px] font-semibold text-[#6A4BFA]">+8</h3>
            <p className="font-medium text-[#0D0901]">
              Branchen Cross-Industry Execution Experience
            </p>
            <p className="text-[#3B3B3B] text-sm">
              Erprobte Lösungen aus Industrie, Services und PE-Portfolios
            </p>
          </div>

          {/* STAT 3 */}
          <div className="space-y-3 border-l pl-8">
            <h3 className="text-[48px] font-semibold text-[#6A4BFA]">+7%</h3>
            <p className="font-medium text-[#0D0901]">
              EBITDA-Marge verbessert
            </p>
            <p className="text-[#3B3B3B] text-sm">
              Messbare Ergebnissteigerung durch Performance- und
              Effizienzprogramme
            </p>
          </div>

          {/* STAT 4 */}
          <div className="space-y-3 border-l pl-8">
            <h3 className="text-[48px] font-semibold text-[#6C63FF]">8+</h3>
            <p className="font-medium text-gray-900">
              Projekte Transformation & Post-M&A Integration
            </p>
            <p className="text-gray-600 text-sm">
              Organisationen, Systeme und Teams erfolgreich ausgerichtet
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}