import React from 'react'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'

const CTA = () => {
  return (
    <section className="w-full bg-[#FEFEFE] py-[80px] lg:py-[93px] flex justify-center overflow-hidden">
      <div className="w-full max-w-[1360px] mx-auto px-4 xl:px-0 flex flex-col items-stretch lg:flex-row  justify-center gap-[30px]">

        {/* Left Block: Book Details */}
        <div className="w-full lg:w-[681px] h-auto bg-[rgba(87,71,164,0.8)] rounded-[16px] lg:rounded-none lg:rounded-tr-[16px] lg:rounded-bl-[16px] relative p-[30px] lg:p-[44px] flex flex-col justify-start">

          <div className="flex flex-col items-start gap-[25px] w-full max-w-[593px]">

            {/* Eyebrow */}
            <div className="flex flex-row items-center px-[14px] pl-[10px] py-[4px] gap-[4px] h-[35px] bg-[#E1DAFF] rounded-[54px] shrink-0">
              <span className="font-['Figtree',sans-serif] font-normal text-[16px] leading-[170%] tracking-[-0.2px] text-[#6D6E72] whitespace-nowrap">
                Patients First
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-['Inter',sans-serif] font-normal text-[28px] lg:text-[35px] leading-[110%] lg:leading-[100%] tracking-[-0.03em] text-[#FFFFFF] m-0 shrink-0">
              Wie Sie als Arzt Führung leben, Ihr Team nachhaltig für sich gewinnen und den Klinik-Erfolg langfristig sichern.
            </h2>

            {/* Book Metadata */}
            <p className="font-['Inter',sans-serif] font-medium text-[16px] lg:text-[18px] leading-[140%] lg:leading-[120%] text-[#D8D8D8] m-0 w-full shrink-0">
              Philipp R. Juchli<br />
              <br />
              Gesellschaft, Politik & Medien<br />
              <br />
              Paperback<br />
              120 Seiten<br />
              ISBN-13: 9783751956932<br />
              Verlag: BoD - Books on Demand<br />
              Erscheinungsdatum: 03.07.2020<br />
              Sprache: Deutsch<br />
              Schlagworte: Führung für Ärzte, Leadership im Krankenhaus,<br />
              Spitalführung, Führung im Gesundheitswesen, Patientensicherheit
            </p>

            {/* CTA Button */}
            <a 
              href="https://www.bod.de/buchshop/patients-first-philipp-r-juchli-9783751956932" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-between w-full max-w-[331px] h-[55px] bg-[#FFFFFF] rounded-[16px] px-[16px] pr-[8px] hover:bg-[#f6f6f6] transition-colors shadow-[0px_75px_30px_rgba(0,0,0,0.01),0px_42px_25px_rgba(0,0,0,0.05),0px_19px_19px_rgba(0,0,0,0.09),0px_5px_10px_rgba(0,0,0,0.1)] group shrink-0 cursor-pointer"
            >
              <span className="font-['Inter',sans-serif] font-medium text-[16px] leading-[170%] tracking-[-0.2px] text-[#1B1B1D]">
                Buch kaufen bei BookOnDemand
              </span>
              <div className="w-[38.63px] h-[38.63px] bg-[#F3F3F3] rounded-[12px] flex items-center justify-center shrink-0 group-hover:bg-[#e6e6e6] transition-colors cursor-pointer">
                <ShoppingCart className="w-[18px] h-[18px] text-[#000000]" strokeWidth={2} />
              </div>
            </a>

          </div>
        </div>

        {/* Right Block: Book Picture */}
        <div
          className="w-full lg:w-[649px] rounded-[16px] lg:rounded-none lg:rounded-tr-[16px] lg:rounded-bl-[16px] flex flex-row py-[60px] lg:py-0 justify-center items-center overflow-hidden"
          style={{ background: 'linear-gradient(180deg, rgba(11, 3, 50, 0.8) 0%, rgba(33, 9, 152, 0.8) 73.08%)' }}
        >
          {/* Internal image wrapper mapped 553x560 */}
          <div className="relative w-[300px] h-[304px] lg:w-[553px] lg:h-[560px]">
            <Image
              src="/patients-first-book-site/second-book.png"
              alt="Patients First Book"
              fill
              className="object-contain"

            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default CTA
