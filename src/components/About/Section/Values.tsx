import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Link from 'next/link';

const items = [
  "Erreichen der Marktführerschaft. Setzen neuer Branchenstandards",
  "Brückenbauer mit dem Talent, Menschen zu begeistern und zu verbinden",
  "20 Jahre Führung funktionsübergreifender Teams, davon 15+ Jahre C‑Level/Top-Management",
  "Stakeholder-sicher: VR, Geschäftsführung, Agenturen, Sales, Technik, Finance, Verwaltung",
  "Führung über 6 Ebenen und bis zu 10 Standorte: CH, DE, China, Japan",
];

export default function ValuesSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-[80px] lg:py-[133px]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-[58px]">

        {/* 3-column grid: text | image | features */}
        <div className="grid grid-cols-1 lg:grid-cols-[414px_398px_1fr] gap-10 lg:gap-[51px] items-start">

          {/* ── LEFT: Text + Button ── */}
          <div className="flex flex-col gap-0">

            {/* Eyebrow */}
            <div className="inline-flex flex-row items-center px-[14px] pl-[10px] py-[4px] gap-[4px] bg-[#EBEDEC] border border-black/4 rounded-[54px] h-[35px] w-fit mb-[62px]">
              <span className="font-['Figtree',sans-serif] font-normal text-[16px] leading-[170%] tracking-[-0.2px] text-[#0C2217]">
                Was wir mitbringen
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-['Inter',sans-serif] font-semibold text-[32px] sm:text-[40px] lg:text-[48px] leading-[115%] tracking-[-1.5px] text-[#182226] m-0 mb-[30px]">
              Werte, die sich im<br className="hidden sm:block" /> Alltag beweisen
            </h2>

            {/* Subheadline */}
            <p className="font-['Inter',sans-serif] font-normal text-[16px] lg:text-[20px] leading-[150%] text-[#3E4447] m-0 max-w-[366px] mb-[55px]">
              Klarheit vor Komplexität, Verantwortung vor Rhetorik, Tempo
              mit Substanz – damit Umsetzung gelingt.
            </p>

            {/* Button */}
            <Link
              href="/how-we-work"
              className="inline-flex flex-row justify-center items-center px-6 gap-[10px] w-full sm:w-fit min-w-[min(100%,316px)] h-[52px] md:h-[64px] bg-[#1A037F] rounded-[8px] hover:opacity-90 transition-opacity font-['Inter',sans-serif] shrink-0"
            >
              <span className="font-semibold text-[15px] sm:text-[16px] leading-[150%] text-[#FFFFFF] text-center whitespace-normal sm:whitespace-nowrap">
                Mehr über Leadership by Congruence
              </span>
            </Link>

          </div>

          {/* ── CENTER: Image ── */}
          <div className="relative w-full h-[300px] sm:h-[420px] lg:h-[510px] rounded-tr-[15px] rounded-bl-[15px] overflow-hidden">
            <Image
              src="/assets/About/meeting.png"
              alt="Modern Office Activity"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* ── RIGHT: Features list ── */}
          <div className="flex flex-col gap-[20px] pt-[5px]">

            {items.map((item, index) => (
              <div key={index} className="flex flex-row items-start gap-[10px]  border-[#f0f0f0] pb-[20px] last:border-0 last:pb-0">
                <CheckCircle
                  size={22}
                  className="text-[#6A26DA] shrink-0 mt-[4px]"
                  strokeWidth={1.5}
                />
                <p className="font-['Inter',sans-serif] font-normal text-[16px] lg:text-[20px] leading-[150%] text-[#182226] m-0">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}