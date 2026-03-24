/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const PatientsFirstBookHero = () => {
  return (
    <section className="bg-[#FBFAF8] w-full px-4 md:px-8 xl:px-14 pt-[120px] lg:pt-[140px] pb-12 overflow-hidden">
      <div
        className="max-w-[1320px] mx-auto w-full xl:h-[585px] rounded-tr-[16px] rounded-bl-[16px] overflow-hidden relative flex flex-col justify-start px-6 py-[50px] md:px-[40px] md:py-[80px] xl:px-[48px] xl:pt-[139px] xl:pb-[139px]"
        style={{
          background: 'linear-gradient(180deg, rgba(11, 3, 50, 0.8) 0%, rgba(33, 9, 152, 0.8) 100%)'
        }}
      >
        {/* Left Content */}
        <div className="flex flex-col items-start z-10 w-full xl:max-w-[650px] gap-[24px]">
          {/* Badge */}
          <div className="bg-[#D6CDFE] rounded-[54px] inline-flex w-fit h-auto items-center py-[8px] px-[16px] gap-[4px]">
            <span className="font-['Figtree',sans-serif] font-normal text-[13px] md:text-[14px] xl:text-[16px] text-[#6D6E72] leading-[140%] xl:leading-[170%] tracking-[-0.2px]">
              Unser Buch für ärztliche Führung & Klinik-Erfolg
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-['Inter',sans-serif] font-bold text-[36px] md:text-[44px] xl:text-[56px] text-[#FFFFFF] leading-[110%] xl:leading-[100%] tracking-[-0.03em]">
            Ärztliche Führung, die Teams wirklich bindet.
          </h1>

          {/* Paragraph */}
          <p className="font-['Inter',sans-serif] font-medium text-[16px] xl:text-[18px] text-[#F1EDED] leading-[140%] xl:leading-[120%] tracking-[0%]">
            &quot;Patients First&quot; zeigt, wie Sie Ihr Team nachhaltig gewinnen, Führung im Klinikalltag stabilisieren und den Erfolg Ihrer Klinik dauerhaft sichern.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-[16px] w-full sm:w-auto mt-[6px]">
            <button className="h-[54.63px] w-full sm:w-[273.63px] bg-[#FFFFFF] rounded-[16px] flex items-center justify-center gap-[8px] group hover:bg-gray-100 transition-colors shrink-0">
              <span className="font-['Figtree',sans-serif] font-semibold text-[16px] text-[#190D00] leading-[170%] tracking-[-0.2px]">
                Kostenloses Kapitel als PDF
              </span>
              <ArrowUpRight className="w-5 h-5 text-[#190D00]" />
            </button>
            <button className="h-[55px] w-full sm:w-[149px] rounded-[16px] border border-[#FFFFFF] flex items-center justify-center hover:bg-white/10 transition-colors shrink-0">
              <span className="font-['Figtree',sans-serif] font-semibold text-[16px] text-[#FFFFFF] leading-[170%] tracking-[-0.2px]">
                Buch Kaufen
              </span>
            </button>
          </div>
        </div>

        {/* Right Image (Desktop - XL) */}
        <div className="hidden xl:block absolute w-[597px] h-[560px] right-[48px] top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <img
            src="/patients-first-book-site/right-book.png"
            alt="Patients First Buch Cover"
            className="w-full h-full object-contain -rotate-[17.53deg]"
          />
        </div>

        {/* Right Image (Tablet & Mobile) */}
        <div className="xl:hidden w-full flex justify-center z-10 mt-[40px] md:mt-[60px] pointer-events-none">
          <img
            src="/patients-first-book-site/right-book.png"
            alt="Patients First Buch Cover"
            className="w-[280px] md:w-[450px] h-auto object-contain -rotate-[17.53deg] drop-shadow-[10px_10px_15px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  )
}

export default PatientsFirstBookHero
