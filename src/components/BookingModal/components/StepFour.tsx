import React from 'react'
import { useBooking } from '@/providers/Booking'

export default function StepFour() {
  const { bookingData } = useBooking()

  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-[40px] px-[16px]">
      <div className="flex flex-col items-center gap-[72px] w-full max-w-[704px]">
        {/* Checkmark icon */}
        <div className="w-[103px] h-[103px] rounded-full bg-[#1A037F] flex items-center justify-center shrink-0">
           <svg width="45" height="34" viewBox="0 0 45 34" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M4 17L16 29L41 4" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
        </div>

        {/* Info Area */}
        <div className="flex flex-col items-center gap-[32px] w-full">
           
           <div className="flex flex-row flex-wrap items-center justify-center gap-[24px] w-full">
             
             {/* Tag */}
             <div className="flex flex-row items-center gap-[8px]">
               <div className="w-[34px] h-[34px] rounded-full border-[0.94px] border-[#050503] bg-white flex items-center justify-center shrink-0">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#050503" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                   <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                   <line x1="16" y1="2" x2="16" y2="6" />
                   <line x1="8" y1="2" x2="8" y2="6" />
                   <line x1="3" y1="10" x2="21" y2="10" />
                 </svg>
               </div>
               <span className="font-inter font-normal text-[14px] leading-[17px] text-[#050503] flex items-center h-[34px]">
                 {bookingData.date || '18. Jan, 2026'}
               </span>
             </div>

             {/* Uhrzeit */}
             <div className="flex flex-row items-center gap-[8px]">
               <div className="w-[34px] h-[34px] rounded-full border-[0.94px] border-[#050503] bg-white flex items-center justify-center shrink-0">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#050503" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                 </svg>
               </div>
               <span className="font-inter font-normal text-[14px] leading-[17px] text-[#050503] flex items-center h-[34px]">
                 {bookingData.time ? `${bookingData.time} - ${bookingData.time.replace(/([0-9]+):[0-9]+/, (m: string, p1: string) => `${p1}:30`)}` : '16:00 - 16:30'} 
               </span>
             </div>

           </div>

           {/* Message */}
           <p className="font-inter font-medium text-[18px] leading-[22px] text-center text-[#3C413F] max-w-[428px]">
             Danke!<br/>
             Ihre Buchung ist abgeschlossen. Eine E-Mail mit Details zu Ihrer Buchung wurde Ihnen zugesandt.
           </p>

        </div>
      </div>
    </div>
  )
}
