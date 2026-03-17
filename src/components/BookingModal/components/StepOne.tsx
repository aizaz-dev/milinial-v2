import React from 'react'
import { useBooking } from '@/providers/Booking'
import { useCalendar } from '@/hooks/useCalendar'

export default function StepOne() {
  const { setStep, updateBookingData, bookingData } = useBooking()
  const { slots, weekdays, monthName, handlePrevMonth, handleNextMonth } = useCalendar(bookingData.dateObj)

  return (
    <div className="w-full h-full flex flex-col pt-[42px] px-[26px] pb-[98px] items-center">
      <div className="flex flex-col items-center gap-[72px] w-[384px]">
        {/* Title */}
        <h2 className="font-inter font-semibold text-2xl leading-[29px] text-center text-[#192020]">
          Datum & Uhrzeit wählen
        </h2>

        {/* Calendar Desktop */}
        <div className="flex flex-col items-center gap-2 w-full">
          {/* Month Selector */}
          <div className="flex flex-row items-center justify-center gap-4 w-[226px] h-[36px] mb-6">
            <button onClick={handlePrevMonth} className="w-[36px] h-[36px] rounded-full bg-[rgba(4,67,67,0.09)] flex items-center justify-center shrink-0">
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L1 7L7 13" stroke="#BDC6C6" strokeWidth="1.3259" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <span className="font-inter font-light text-xl leading-[24px] tracking-[0.38px] text-[#263238] min-w-[122px] text-center">
              {monthName}
            </span>
            <button onClick={handleNextMonth} className="w-[36px] h-[36px] rounded-full bg-[#1A037F] flex items-center justify-center shrink-0">
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth="1.3259" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Weekdays */}
          <div className="flex flex-row gap-2 w-full h-[48px]">
            {weekdays.map((day, idx) => (
              <div key={idx} className="w-[48px] h-[48px] flex items-center justify-center">
                <span className="font-inter font-normal text-[13.7px] leading-[14px] text-center text-[#3C413F]">
                  {day}
                </span>
              </div>
            ))}
          </div>

          {/* Date Grid */}
          <div className="flex flex-wrap gap-x-2 gap-y-2 w-[384px]">
            {slots.map((slot, idx) => {
              if (slot.type === 'empty') {
                return <div key={idx} className="w-[48px] h-[48px]"></div>
              }

              const isAvailable = slot.type === 'available' || slot.type === 'selected'
              const isToday = slot.isToday

              return (
                <button 
                  key={idx} 
                  disabled={!isAvailable}
                  onClick={() => {
                    if (slot.dateObj) {
                      const formatter = new Intl.DateTimeFormat('de-DE', { day: 'numeric', month: 'short', year: 'numeric' })
                      updateBookingData({ dateObj: slot.dateObj, date: formatter.format(slot.dateObj) })
                      setStep(2)
                    }
                  }}
                  className="relative w-[48px] h-[48px] flex items-center justify-center focus:outline-none group"
                >
                  {/* Background Circle */}
                  <div className={`absolute w-[41.14px] h-[41.14px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-colors
                    ${isAvailable ? 'bg-[rgba(4,67,67,0.09)] group-hover:bg-[rgba(4,67,67,0.15)]' : 'bg-transparent'}
                  `}></div>
                  
                  {/* Date Text */}
                  <span className={`relative z-10 font-inter text-[17.14px] leading-[18px] tracking-[-0.27px] transition-colors
                    ${isAvailable ? 'font-normal text-[#263238]' : 'font-normal text-[#BFC9C9]'}
                  `}>
                    {slot.day}
                  </span>

                  {/* Dot for today */}
                  {isToday && (
                    <div className="absolute bottom-[4px] w-[3.43px] h-[3.43px] rounded-full bg-[#BFC9C9] left-1/2 -translate-x-1/2"></div>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
