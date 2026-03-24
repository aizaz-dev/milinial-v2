'use client'

import React from 'react'

export const Memberships: React.FC = () => {
  const logos = [
    '/blog/logos/sog-logo.png',
    '/blog/logos/logo-1.png',
    '/blog/logos/logo3.png',
    '/blog/logos/logo4.png',
    '/blog/logos/procure.ch Logo 1.png',
    '/blog/logos/logo5.png',
    '/blog/logos/logo7.png',
  ]

  return (
    <div className="w-full mx-auto my-12 border-t border-b border-gray-200">
      <div className="w-full max-w-[1440px] mx-auto py-8 px-6 lg:px-[50px]">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0 w-full">
          
          {/* Label */}
          <span className="shrink-0 font-sans font-medium text-[16px] leading-[170%] text-[#767676] whitespace-nowrap text-center md:text-left md:pr-[48px]">
            Mitglied von:
          </span>

          {/* Logos */}
          <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 items-center gap-y-6 md:gap-y-0">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  className="object-contain h-auto max-h-[30px] md:max-h-[45px] max-w-[100px] md:max-w-[140px] grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}