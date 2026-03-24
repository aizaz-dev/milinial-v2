import React, { useState } from 'react'
import { useBooking } from '@/providers/Booking'
import { useCalendar } from '@/hooks/useCalendar'

export default function StepTwo() {
  const { bookingData, updateBookingData, setStep } = useBooking()
  const { slots, weekdays, monthName, handlePrevMonth, handleNextMonth } = useCalendar(bookingData.dateObj)
  const [hoveredTime, setHoveredTime] = useState<string | null>(null)

  const handleTimeClick = (time: string) => {
    updateBookingData({ time })
    setStep(3)
  }

  // Generate dynamic timeslots for demonstration based on the selected date
  const generateTimeSlots = () => {
    return ['09:00', '10:30', '13:00', '15:30', '16:00']
  }
  const timeSlots = generateTimeSlots()

  return (
    <div className="w-full h-full flex flex-col pt-[42px] pr-[48px] pb-[98px] pl-[26px]">
      <div className="flex flex-col items-start gap-[72px] w-full">
        {/* Title */}
        <h2 className="font-['Inter'] font-semibold text-[24px] leading-[29px] text-[#192020]">
          Datum & Uhrzeit wählen
        </h2>

        <div className="flex flex-row items-start gap-[48px] w-full">
          {/* Calendar Desktop */}
          <div className="flex flex-col items-center gap-[8px] w-[384px] shrink-0">
            {/* Month Selector */}
            <div className="flex flex-row items-center justify-center gap-[16px] w-[226px] h-[36px] mb-[16px]">
              <button 
                onClick={handlePrevMonth}
                className="w-[36px] h-[36px] rounded-full bg-[rgba(4,67,67,0.09)] flex items-center justify-center shrink-0"
              >
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1L1 7L7 13" stroke="#BDC6C6" strokeWidth="1.3259" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <span className="font-['Inter'] font-light text-[20px] leading-[24px] tracking-[0.38px] text-[#263238] w-[122px] text-center shrink-0">
                {monthName}
              </span>
              <button 
                onClick={handleNextMonth}
                className="w-[36px] h-[36px] rounded-full bg-[#1A037F] flex items-center justify-center shrink-0"
              >
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L1 13" stroke="white" strokeWidth="1.3259" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Weekdays */}
            <div className="flex flex-row gap-[8px] w-[384px] h-[48px]">
              {weekdays.map((day, idx) => (
                <div key={idx} className="w-[48px] h-[48px] flex items-center justify-center shrink-0">
                  <span className="font-['Inter'] font-normal text-[13.7143px] leading-[14px] text-center text-[#3C413F]">
                    {day}
                  </span>
                </div>
              ))}
            </div>

            {/* Date Grid */}
            <div className="flex flex-wrap gap-x-[8px] gap-y-[8px] w-[384px] h-[272px]">
              {slots.map((slot, idx) => {
                if (slot.type === 'empty') return <div key={idx} className="w-[48px] h-[48px] shrink-0"></div>
                
                const isSelected = slot.type === 'selected'
                const isAvailable = slot.type === 'available' || slot.type === 'selected'
                const isToday = slot.isToday
                
                return (
                  <button 
                    key={idx} 
                    disabled={!isAvailable && !isSelected}
                    onClick={() => {
                      if (slot.dateObj && isAvailable) {
                        const formatter = new Intl.DateTimeFormat('de-DE', { day: 'numeric', month: 'short', year: 'numeric' })
                        updateBookingData({ dateObj: slot.dateObj, date: formatter.format(slot.dateObj) })
                      }
                    }}
                    className="relative w-[48px] h-[48px] flex items-center justify-center focus:outline-none group shrink-0"
                  >
                    {/* Background */}
                    <div className={`absolute w-[41.14px] h-[41.14px] rounded-[10px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-colors
                      ${isSelected ? 'bg-black text-white' : isAvailable ? 'bg-[rgba(4,67,67,0.09)] group-hover:bg-[rgba(4,67,67,0.15)]' : 'bg-transparent'}
                    `}></div>
                    <span className={`relative z-10 font-['Inter'] text-[17.1429px] leading-[18px] tracking-[-0.274px] transition-colors
                      ${isSelected ? 'font-normal text-white' : isAvailable ? 'font-normal text-[#263238]' : 'font-normal text-[#BFC9C9]'}
                    `}>
                      {slot.day}
                    </span>
                    {isToday && <div className="absolute top-[38px] w-[3.43px] h-[3.43px] rounded-full bg-[#BFC9C9] left-1/2 -translate-x-1/2"></div>}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Separator Dashed Line */}
          <div className="w-px h-[374px] border-l border-dashed border-[#D5DFDF] hidden md:block"></div>

          {/* Time Selector */}
          <div className="flex flex-col items-center gap-[16px] w-[211px] shrink-0">
            <h3 className="w-[174px] font-['Inter'] font-light text-[16px] leading-[19px] text-center text-[#192020]">
              {bookingData.dateObj 
                ? new Intl.DateTimeFormat('de-DE', { weekday: 'long', day: 'numeric', month: 'long' }).format(bookingData.dateObj)
                : 'Bitte wählen Sie ein Datum'
              }
            </h3>

            <div className="flex flex-col items-end w-[211px] gap-[8px]">
              {timeSlots.map((time) => {
                const isHovered = hoveredTime === time
                return (
                  <div 
                    key={time} 
                    className="flex flex-row w-[211px] h-[56px] items-center justify-start gap-[6px] overflow-hidden" 
                    onMouseEnter={() => setHoveredTime(time)} 
                    onMouseLeave={() => setHoveredTime(null)}
                  >
                    <button 
                      className={`h-[56px] flex items-center justify-center rounded-[10px] border border-[rgba(4,67,67,0.32)] font-['Inter'] font-normal text-[18px] leading-[24px] outline-none transition-all duration-300 ease-in-out shrink-0
                        ${isHovered ? 'w-[106px] text-[#044343] border-[#044343] cursor-pointer' : 'w-[211px] text-[#044343] cursor-default'}
                      `}
                    >
                      {time}
                    </button>
                    <button
                      onClick={() => handleTimeClick(time)}
                      className={`h-[56px] flex items-center justify-center bg-[#044343] text-white rounded-[10px] border border-[#044343] font-['Inter'] font-normal text-[18px] leading-[24px] overflow-hidden outline-none whitespace-nowrap transition-all duration-300 ease-in-out shrink-0 cursor-pointer
                        ${isHovered ? 'w-[99px] opacity-100 pointer-events-auto' : 'w-0 opacity-0 pointer-events-none -ml-2'}
                      `}
                    >
                      Weiter
                    </button>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
