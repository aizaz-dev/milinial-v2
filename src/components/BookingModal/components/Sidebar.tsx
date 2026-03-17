import React from 'react'
import { useBooking } from '@/providers/Booking'

export default function Sidebar() {
  const { currentStep, bookingData, setStep } = useBooking()

  const isStep1 = currentStep === 1
  const isStep2 = currentStep === 2
  const isStep3 = currentStep === 3

  return (
    <div className="w-full h-full bg-white flex flex-col pt-6 pb-[98px]">
      
      {/* Back Button (Only on Step 3) */}
      {isStep3 ? (
        <div 
          className="flex flex-row items-center px-[25px] w-full mb-8 cursor-pointer gap-2" 
          onClick={() => setStep(2)}
        >
          <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
            <path d="M5 11L1 6L5 1" stroke="#044343" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-inter font-normal text-base text-[#044343]">Back</span>
        </div>
      ) : (
        <div className="h-[24px] mb-8" /> /* Reserved space so logo doesn't jump, or just pt-12 if no Back button */
      )}

      {/* Logo Section */}
      <div className="flex flex-col items-center px-[23px] w-full">
        {/* Replace with actual SVG Logo later, roughly matching width 263px height 27px */}
        <div className="w-[263px] h-[27px] flex items-center justify-center relative">
          <div className="absolute inset-0 flex items-center">
            {/* Real logo goes here, creating placeholder for layout */}
            <span className="text-[#0A0132] font-semibold text-xl tracking-tight flex items-center gap-2">
              {/* MillenialC Mountains */}
              <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 1A1.5 1.5 0 0 1 8.8 1.83l6.5 10.74 3.48-5.75a1.5 1.5 0 0 1 2.56 0L33 23" stroke="#6A4BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 23l6.5-10.74A1.5 1.5 0 0 1 8.8 11.43l6.5 10.74" stroke="#6A4BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              MillennialC 
              <span className="text-[6px] font-normal uppercase whitespace-pre-wrap leading-tight text-left ml-1 mt-1">
                Leadership<br/>Advisory
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-[#E6EDED] my-8 transform rotate-[-0.04deg]"></div>

      {/* Step Info */}
      <div className="flex flex-col px-6 gap-[48px]">
        {/* Header Title */}
        <div className="flex flex-col gap-[3px]">
          <div className="flex flex-row items-center gap-1.5 h-[15px]">
            <div className="w-2 h-2 rounded-full bg-[#050503]"></div>
            <span className="font-inter font-semibold text-xs leading-[15px] text-[#050503]">
              {isStep1 ? 'Schritt 1' : isStep2 ? 'Schritt 2' : 'Schritt 3'}
            </span>
          </div>
          <p className="font-inter font-normal text-sm leading-[17px] tracking-[-0.03em] text-[#192020] mt-1 pr-6">
            {isStep1 ? 'Bitten wählen Sie Ihr Wunschdatum aus.' : 
             isStep2 ? 'Bitte wählen Sie Ihre Wunschzeit aus.' : 
             'Geben Sie Ihre Daten Kontaktdaten und Details ein.'}
          </p>
        </div>

        {/* Timeline Visualizer */}
        <div className="flex flex-col px-1">
          
          {/* Tag */}
          <div className="flex flex-row items-start gap-3 h-[34px]">
            {/* Tag Icon */}
            <div className={`w-[34px] h-[34px] rounded-full border-[0.94px] bg-white flex items-center justify-center shrink-0 ${isStep1 ? 'border-[#1A037F]' : 'border-[#BDC6C6]'}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isStep1 ? "#1A037F" : "#BDC6C6"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                {isStep1 && <rect x="8" y="14" width="4" height="4" fill="#1A037F" />}
              </svg>
            </div>
            <span className={`font-inter font-normal text-sm leading-[17px] mt-[8.5px] ${isStep1 ? 'text-[#1A037F]' : (isStep2 || isStep3) ? 'text-[#044343]' : 'text-[#BDC6C6]'}`}>
              {(isStep2 || isStep3) && bookingData.date ? bookingData.date : 'Tag'}
            </span>
          </div>

          {/* Dotted Line 1 */}
          <div className="flex flex-col items-center w-[34px]">
             <div className="flex flex-col items-center py-1 gap-1">
               <div className={`w-[6px] h-[6px] rounded-full border ${(isStep2 || isStep3) ? 'border-[#044343]' : 'border-[#BDC6C6]'}`}></div>
               <div className={`w-px h-[26px] border-l border-dashed ${(isStep2 || isStep3) ? 'border-[#044343]' : 'border-[#BDC6C6]'}`}></div>
               <div className={`w-[6px] h-[6px] rounded-full border ${(isStep2 || isStep3) ? 'border-[#044343]' : 'border-[#BDC6C6]'}`}></div>
             </div>
          </div>

          {/* Uhrzeit */}
          <div className="flex flex-row items-start gap-3 h-[34px]">
            <div className={`w-[34px] h-[34px] rounded-full border-[0.94px] bg-white flex items-center justify-center shrink-0 ${isStep2 ? 'border-[#1A037F]' : 'border-[#BDC6C6]'}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isStep2 ? "#1A037F" : "#BDC6C6"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                 <circle cx="12" cy="12" r="10" />
                 <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <span className={`font-inter font-normal text-sm leading-[17px] mt-[8.5px] ${isStep2 ? 'text-[#1A037F]' : isStep3 ? 'text-[#044343]' : 'text-[#BDC6C6]'}`}>
              {isStep3 && bookingData.time ? bookingData.time : 'Uhrzeit'}
            </span>
          </div>

          {/* Dotted Line 2 */}
          <div className="flex flex-col items-center w-[34px]">
             <div className="flex flex-col items-center py-1 gap-1">
               <div className={`w-[6px] h-[6px] rounded-full border ${isStep3 ? 'border-[#044343]' : 'border-[#BDC6C6]'}`}></div>
               <div className={`w-px h-[26px] border-l border-dashed ${isStep3 ? 'border-[#044343]' : 'border-[#BDC6C6]'}`}></div>
               <div className={`w-[6px] h-[6px] rounded-full border ${isStep3 ? 'border-[#044343]' : 'border-[#BDC6C6]'}`}></div>
             </div>
          </div>

          {/* Information */}
          <div className="flex flex-row items-start gap-3 h-[34px]">
            <div className={`w-[34px] h-[34px] rounded-full border-[0.94px] bg-white flex items-center justify-center shrink-0 ${isStep3 ? 'border-[#1A037F]' : 'border-[#BDC6C6]'}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isStep3 ? "#1A037F" : "#BDC6C6"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span className={`font-inter font-normal text-sm leading-[17px] mt-[8.5px] ${isStep3 ? 'text-[#1A037F]' : 'text-[#BDC6C6]'}`}>
              Information eingeben
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}
