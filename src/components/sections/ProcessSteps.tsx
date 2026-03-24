'use client'

import React from "react"
import { ArrowUpRight } from "lucide-react"
import { useBooking } from "@/providers/Booking"

interface Step {
  title: string
  description: string
  icon?: React.ReactNode
}

interface ProcessStepsProps {
  steps: Step[]
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ steps }) => {
  const { openModal } = useBooking()
  return (
    <section className="w-full bg-[#F7F7F6] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 text-sm bg-[#E9E8F3] text-gray-700 rounded-full">
            So setzen wir LbC um
          </span>
        </div>

        {/* heading */}
        <h2 className="text-center text-5xl font-semibold text-gray-900">
          Von Prinzip zu Praxis
        </h2>

        {/* description */}
        <p className="text-center text-gray-500 max-w-2xl mx-auto mt-6 leading-relaxed">
          Ein 4-Phasen-Operating-Model, das Klarheit schafft, Kongruenz
          herstellt und Umsetzung in einen verlässlichen Takt bringt –
          typischerweise mit sichtbarer Wirkung.
        </p>

        {/* steps */}
        <div className="relative mt-20">

          {/* background colors */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 top-10 w-[40%] h-[160px] bg-purple-200/40 blur-2xl rounded-xl"></div>
            <div className="absolute left-[25%] top-0 w-[40%] h-[200px] bg-indigo-200/40 blur-2xl rounded-xl"></div>
            <div className="absolute right-0 top-10 w-[35%] h-[160px] bg-blue-200/40 blur-2xl rounded-xl"></div>
          </div>

          {/* horizontal line */}
          <div className="absolute top-6 left-0 w-full h-px bg-gray-300"></div>

          <div className="grid md:grid-cols-4 gap-10 relative">

            {steps.map((step, index) => (
              <div key={index} className="relative">

                {/* number box */}
                <div className="absolute -top-2 left-0">
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-white shadow border text-gray-900 font-medium">
                    {index + 1}
                  </div>
                </div>

                {/* text */}
                <div className="pt-12">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* CTA text */}
        <p className="text-center text-2xl text-gray-900 mt-24">
          Lassen Sie uns in 30 Minuten prüfen, welche Phase bei Ihnen gerade
          entscheidend ist.
        </p>

        {/* button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={openModal}
            className="flex items-center gap-3 bg-[#2B1E78] text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition cursor-pointer"
          >
            LbC-Erstgespräch buchen
            <ArrowUpRight size={18} />
          </button>
        </div>

      </div>
    </section>
  )
}