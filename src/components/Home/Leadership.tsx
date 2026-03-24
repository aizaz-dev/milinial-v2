"use client";

import Image from "next/image";

export default function Leadership() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FEFEFE] py-20 lg:py-[81px] flex justify-center items-center min-h-[1000px]">
      
      {/* brand-pattern2 1 */}
      <div className="absolute w-[661px] h-[571px] left-[-210px] top-[557px] pointer-events-none hidden xl:block">
        <div className="absolute left-[0.66%] right-[53.29%] top-[0.77%] bottom-[68.46%] bg-[rgba(235,230,254,0.1)]" />
        <div className="absolute left-[0.66%] right-[53.29%] top-[45.6%] bottom-[23.63%] bg-[rgba(235,230,254,0.1)]" />
        <div className="absolute left-[26.33%] right-[26.33%] top-[67.58%] bottom-[0.78%] bg-[rgba(235,230,254,0.1)]" />
        <div className="absolute left-[26.33%] right-[26.33%] top-[22.75%] bottom-[45.61%] bg-[rgba(235,230,254,0.1)]" />
        <div className="absolute left-[53.29%] right-[0.67%] top-[45.59%] bottom-[23.64%] bg-[rgba(235,230,254,0.1)]" />
      </div>

      {/* brand-pattern 1 - FIXED: right-0 instead of left-[1067px] */}
      <div className="absolute w-[454px] h-[406px] right-0 top-[-49px] pointer-events-none hidden xl:block" style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }}>
        <div className="absolute left-[0.93%] right-[37.14%] top-[59.09%] bottom-[1.02%] bg-[rgba(235,230,254,0.15)]" style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }} />
        <div className="absolute left-[35.44%] right-[0.89%] top-[29.49%] bottom-[29.51%] bg-[rgba(235,230,254,0.15)]" style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }} />
        <div className="absolute left-[0.93%] right-[37.14%] top-[1%] bottom-[59.11%] bg-[rgba(235,230,254,0.15)]" style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-[80px] w-full max-w-[1182px] px-6 lg:px-0">
        
        {/* Content (Image + Text) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-[117px] w-full">
          {/* Image */}
          <div className="relative w-full lg:w-[482.83px] h-[400px] lg:h-[556px] shrink-0 overflow-hidden">
            <Image
              src="/assets/Home/Leader.png"
              alt="Leadership"
              fill
              sizes="(max-width: 1024px) 100vw, 483px"
              className="object-cover rounded-tr-[16px] rounded-bl-[16px]"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start gap-[16px] w-full lg:w-[589px]">
            <div className="flex flex-row items-center px-[14px] pl-[10px] py-[4px] gap-[4px] bg-[rgba(174,175,179,0.2)] rounded-[54px] w-fit">
              <span className="font-['Figtree',sans-serif] font-normal text-[16px] leading-[170%] tracking-[-0.2px] text-[#0C2217]">
                Unsere Erfahrung - Ihr Gewinn
              </span>
            </div>

            <h2 className="font-['Inter',sans-serif] font-semibold text-[36px] lg:text-[46px] leading-[1.2] lg:leading-[120%] tracking-[-1.5px] text-[#181C39] m-0">
              Führung, die<br/>
              Menschen und Zahlen<br/>
              zusammenbringt.
            </h2>

            <p className="font-outfit font-normal text-[16px] lg:text-[20px] leading-[1.6] lg:leading-[160%] text-[#5E6075] m-0">
              Wir kennen Restrukturierungen, Turnarounds und Transformationen aus der ersten Reihe: als Interim-COO, Operating Partner und Sparringpartner für Eigentümer und Management. Wir verbinden strategische Klarheit mit konsequenter operativer Umsetzung und stehen in kritischen Phasen selbst in der Verantwortung.
            </p>
          </div>
        </div>

        {/* Trust Section Facts */}
        <div className="flex flex-col lg:flex-row items-start gap-[30px] lg:gap-[37px] w-full">
          
          {/* Card 1 */}
          <div className="flex flex-col justify-center items-start gap-[10px] w-full lg:w-[286px] rounded-[12px]">
            <h3 className="font-['Barlow',sans-serif] font-medium text-[50px] lg:text-[70px] leading-[115%] tracking-[-2px] text-[#6A4BFA] m-0">
              20+
            </h3>
            <h4 className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[170%] text-[#0D0901] m-0">
              Jahre Leadership in Schlüsselrollen
            </h4>
            <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[170%] text-[#3B3B3B] m-0">
              Führungserfahrung vom Programm- und Projektleiter bis und mit C-Level Positionen in komplexen Umfeldern
            </p>
          </div>

          {/* Divider 1 */}
          <div className="hidden lg:block w-px h-[196px] bg-[#222222] opacity-[0.16] shrink-0" />

          {/* Card 2 */}
          <div className="flex flex-col justify-center items-start gap-[10px] w-full lg:w-[224px] rounded-[12px]">
            <h3 className="font-['Barlow',sans-serif] font-medium text-[50px] lg:text-[70px] leading-[115%] tracking-[-2px] text-[#6A4BFA] m-0">
              +8
            </h3>
            <h4 className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[170%] text-[#0D0901] m-0">
              Branchen Cross-Industry Execution Experience
            </h4>
            <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[170%] text-[#3B3B3B] m-0">
              Erprobte Lösungen aus Industrie, Services und PE-Portfolios
            </p>
          </div>

          {/* Divider 2 */}
          <div className="hidden lg:block w-px h-[196px] bg-[#222222] opacity-[0.16] shrink-0" />

          {/* Card 3 */}
          <div className="flex flex-col justify-center items-start gap-[10px] w-full lg:w-[224px] rounded-[12px]">
            <h3 className="font-['Barlow',sans-serif] font-medium text-[50px] lg:text-[70px] leading-[115%] tracking-[-2px] text-[#6A4BFA] m-0 whitespace-nowrap">
              +7 %
            </h3>
            <h4 className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[170%] text-[#0D0901] m-0">
              EBITDA-Marge verbessert
            </h4>
            <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[170%] text-[#3B3B3B] m-0">
              Messbare Ergebnissteigerung durch Performance- und Effizienzprogramme
            </p>
          </div>

          {/* Divider 3 */}
          <div className="hidden lg:block w-px h-[196px] bg-[#222222] opacity-[0.16] shrink-0" />

          {/* Card 4 */}
          <div className="flex flex-col justify-center items-start gap-[10px] w-full lg:w-[224px] rounded-[12px]">
            <h3 className="font-['Barlow',sans-serif] font-medium text-[50px] lg:text-[70px] leading-[115%] tracking-[-2px] text-[#6A4BFA] m-0">
              8+
            </h3>
            <h4 className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[170%] text-[#0D0901] m-0">
              Projekte Transformation & Post-M&A Integration
            </h4>
            <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[170%] text-[#3B3B3B] m-0">
              Organisationen, Systeme und Teams erfolgreich ausgerichtet
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}