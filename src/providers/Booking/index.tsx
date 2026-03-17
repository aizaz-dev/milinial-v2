/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import BookingModal from '@/components/BookingModal'

type BookingStep = 1 | 2 | 3 | 4

interface BookingContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
  currentStep: BookingStep
  setStep: (step: BookingStep) => void
  bookingData: any
  updateBookingData: (data: any) => void
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState<BookingStep>(1)
  const [bookingData, setBookingData] = useState({})

  const openModal = () => setIsOpen(true)
  const closeModal = () => {
    setIsOpen(false)
    // Optional: reset step on close
    setTimeout(() => setCurrentStep(1), 300)
  }

  const setStep = (step: BookingStep) => setCurrentStep(step)
  const updateBookingData = (data: any) => setBookingData((prev) => ({ ...prev, ...data }))

  return (
    <BookingContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        currentStep,
        setStep,
        bookingData,
        updateBookingData,
      }}
    >
      {children}
      <BookingModal />
    </BookingContext.Provider>
  )
}

export const useBooking = () => {
  const context = useContext(BookingContext)
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return context
}
