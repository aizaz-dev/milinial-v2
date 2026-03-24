import React from 'react'
import Image from 'next/image'
import { useBooking } from '@/providers/Booking'

export default function Sidebar() {
  const { currentStep, bookingData, setStep } = useBooking()

  const isStep1 = currentStep === 1
  const isStep2 = currentStep === 2
  const isStep3 = currentStep === 3

  return (
    <div className="w-full h-full bg-white flex flex-col pt-[24px] pb-[40px] items-center">

      {/* Back Button / Top Space */}
      <div className={`flex flex-col items-center w-[310px] ${(isStep2 || isStep3) ? 'gap-[24px]' : ''}`}>
        {/* Back Button (Only on Step 2 or 3) */}
        { (isStep2 || isStep3) && (
          <div
            className="flex flex-row items-center justify-start px-[23.5px] w-full cursor-pointer gap-2"
            onClick={() => setStep((currentStep - 1) as 1 | 2 | 3 | 4)}
          >
            <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
              <path d="M5 11L1 6L5 1" stroke="#044343" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-['Inter'] font-semibold text-[14px] text-[#044343]">Zurück</span>
          </div>
        ) }

        {/* Logo Section */}
        <div className="flex flex-col items-center px-[23.5px] w-full">
          <div className="relative w-[263px] h-[27.12px]">
            <Image src="/assets/booking-modal-logo.png" alt="MillennialC Logo" fill className="object-contain" />
          </div>
        </div>
      </div>

      <div className="w-[310px] h-px bg-[#E6EDED] my-[32px] shrink-0"></div>

      {/* Step Info */}
      <div className="flex flex-col items-start gap-[74px] w-[262px]">
        {/* Header Title */}
        <div className="flex flex-col items-start gap-[2px] w-[176px]">
          <div className="flex flex-row items-center gap-[4px] h-[15px]">
            <div className="w-[8px] h-[8px] rounded-full bg-[#050503]"></div>
            <span className="font-['Inter'] font-semibold text-[12px] leading-[15px] text-[#050503]">
              {isStep1 ? 'Schritt 1' : isStep2 ? 'Schritt 2' : 'Schritt 3'}
            </span>
          </div>
          <p className="font-['Inter'] font-normal text-[14px] leading-[17px] tracking-[-0.03em] text-[#192020] m-0">
            {isStep1 ? 'Bitten wählen Sie Ihr Wunschdatum aus.' :
              isStep2 ? 'Bitte wählen Sie Ihre Wunschzeit aus.' :
                'Geben Sie Ihre Daten Kontaktdaten und Details ein.'}
          </p>
        </div>

        {/* Timeline Visualizer */}
        <div className="flex flex-col items-start gap-[4px] w-[262px] h-[214px]">

          {/* Tag */}
          <div className="flex flex-row items-center gap-[8px] w-full h-[34px]">
            <div className={`w-[34px] h-[34px] rounded-full border-[0.944px] bg-white flex items-center justify-center shrink-0 ${isStep1 ? 'border-[#1A037F]' : 'border-[#BDC6C6]'}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isStep1 ? "#1A037F" : "#BDC6C6"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                {isStep1 && <rect x="8" y="14" width="4" height="4" fill="#1A037F" />}
              </svg>
            </div>
            <span className={`font-['Inter'] font-normal text-[14px] leading-[17px] ${isStep1 ? 'text-[#1A037F]' : (isStep2 || isStep3) ? 'text-[#044343]' : 'text-[#BDC6C6]'}`}>
              {(isStep2 || isStep3) && bookingData.date ? bookingData.date : 'Tag'}
            </span>
          </div>

          {/* Line 1 */}
          <div className="flex flex-col items-center px-[14px] gap-[4px] w-[34px] h-[48px]">
            <div className={`box-border w-[6px] h-[6px] rounded-full border ${(isStep2 || isStep3) ? 'border-[#044343]' : 'border-[#BDC6C6]'}`}></div>
            <div className={`w-0 h-[28px] border-l border-dashed ${(isStep2 || isStep3) ? 'border-[#044343]' : 'border-[#BDC6C6]'}`}></div>
            <div className={`box-border w-[6px] h-[6px] rounded-full border ${(isStep2 || isStep3) ? 'border-[#044343]' : 'border-[#BDC6C6]'}`}></div>
          </div>

          {/* Uhrzeit */}
          <div className="flex flex-row items-center gap-[8px] w-full h-[34px]">
            <div className={`w-[34px] h-[34px] rounded-full border-[0.944px] bg-white flex items-center justify-center shrink-0 ${isStep2 ? 'border-[#1A037F]' : 'border-[#BDC6C6]'}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isStep2 ? "#1A037F" : "#BDC6C6"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <span className={`font-['Inter'] font-normal text-[14px] leading-[17px] ${isStep2 ? 'text-[#1A037F]' : isStep3 ? 'text-[#044343]' : 'text-[#BDC6C6]'}`}>
              {isStep3 && bookingData.time ? bookingData.time : 'Uhrzeit'}
            </span>
          </div>

          {/* Line 2 */}
          <div className="flex flex-col items-center px-[14px] gap-[4px] w-[34px] h-[48px]">
            <div className={`box-border w-[6px] h-[6px] rounded-full border ${isStep3 ? 'border-[#044343]' : 'border-[#BDC6C6]'}`}></div>
            <div className={`w-0 h-[28px] border-l border-dashed ${isStep3 ? 'border-[#044343]' : 'border-[#BDC6C6]'}`}></div>
            <div className={`box-border w-[6px] h-[6px] rounded-full border ${isStep3 ? 'border-[#044343]' : 'border-[#BDC6C6]'}`}></div>
          </div>

          {/* Information */}
          <div className="flex flex-row items-center gap-[8px] w-full h-[34px]">
            <div className={`w-[34px] h-[34px] rounded-full border-[0.944px] bg-white flex items-center justify-center shrink-0 ${isStep3 ? 'border-[#1A037F]' : 'border-[#BDC6C6]'}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isStep3 ? "#1A037F" : "#BDC6C6"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span className={`font-['Inter'] font-normal text-[14px] leading-[17px] ${isStep3 ? 'text-[#1A037F]' : 'text-[#BDC6C6]'}`}>
              Information eingeben
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}
