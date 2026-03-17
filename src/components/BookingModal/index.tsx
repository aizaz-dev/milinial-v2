'use client'

import React from 'react'
import { useBooking } from '@/providers/Booking'
import Sidebar from './components/Sidebar'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'
import StepFour from './components/StepFour'

export default function BookingModal() {
  const { isOpen, closeModal, currentStep } = useBooking()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={closeModal}
      />
      
      {/* Modal Content */}
      <div 
        className={`relative flex flex-row w-full transition-all duration-300 max-h-[95vh] bg-white shadow-[0px_7px_10px_rgba(0,0,0,0.1)] rounded-[30px] overflow-hidden ${
          currentStep === 1 ? 'max-w-[768px] min-h-[616px] border border-[#E6EDED]' : 
          currentStep === 2 ? 'max-w-[1075px] min-h-[616px] border border-[#E6EDED]' : 
          currentStep === 3 ? 'max-w-[964px] min-h-[616px] border border-[#E6EDED]' : 
          'max-w-[706px] min-h-[387px] border border-[#E6EDED]'
        }`}
      >
        {/* Left Sidebar */}
        {currentStep < 4 && (
          <div className="w-[310px] hidden md:flex border-r border-[#E6EDED] shrink-0">
            <Sidebar />
          </div>
        )}

        {/* Right Content Area */}
        <div className="flex-1 flex flex-col relative bg-white">
          {/* Close button for mobile/accessibility */}
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-gray-400 hover:text-black z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>

          {/* Render Steps */}
          <div className={`flex-1 w-full h-full overflow-y-auto ${currentStep === 4 ? 'flex items-center justify-center' : ''}`}>
             {currentStep === 1 && <StepOne />}
             {currentStep === 2 && <StepTwo />}
             {currentStep === 3 && <StepThree />}
             {currentStep === 4 && <StepFour />}
          </div>
        </div>
      </div>
    </div>
  )
}
