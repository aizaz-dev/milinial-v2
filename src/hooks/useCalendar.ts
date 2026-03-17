import { useState } from 'react'

export interface CalendarSlot {
  day: string
  dateObj: Date | null
  type: 'empty' | 'disabled' | 'available' | 'selected'
  isToday: boolean
}

export function useCalendar(selectedDate?: Date | null) {
  const [currentMonth, setCurrentMonth] = useState(() => {
    if (selectedDate) return new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)
    const now = new Date()
    return new Date(now.getFullYear(), now.getMonth(), 1)
  })

  const handlePrevMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
  }
  
  const handleNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
  }

  const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
  const weekdays = ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.']

  const year = currentMonth.getFullYear()
  const month = currentMonth.getMonth()
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  
  const startDayOfWeek = firstDay.getDay() 
  const daysInMonth = lastDay.getDate()

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const slots: CalendarSlot[] = []

  // Empty slots at start
  for (let i = 0; i < startDayOfWeek; i++) {
    slots.push({ day: '', dateObj: null, type: 'empty', isToday: false })
  }

  // Days
  for (let date = 1; date <= daysInMonth; date++) {
    const currentDate = new Date(year, month, date)
    
    const isToday = currentDate.getTime() === today.getTime()
    const isPast = currentDate.getTime() < today.getTime()
    const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6
    
    const isSelected = selectedDate ? currentDate.getTime() === selectedDate.getTime() : false

    let type: CalendarSlot['type'] = 'disabled'
    
    if (isSelected) {
      type = 'selected'
    } else if (!isPast && !isWeekend) {
      type = 'available'
    }

    slots.push({
      day: String(date),
      dateObj: currentDate,
      type,
      isToday
    })
  }

  return {
    weekdays,
    monthName: `${monthNames[month]} ${year}`,
    slots,
    handlePrevMonth,
    handleNextMonth
  }
}
