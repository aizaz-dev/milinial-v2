'use client'

import React from 'react'
import Image from 'next/image'

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

          {/* Logos — responsive: wraps on mobile/tablet, single row on lg */}
          <div className="w-full flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-x-4 gap-y-5">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center w-[calc(33.33%-12px)] sm:w-[calc(25%-12px)] lg:w-auto lg:flex-1">
                <Image
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  width={140}
                  height={45}
                  className="object-contain h-auto max-h-[28px] sm:max-h-[34px] lg:max-h-[45px] max-w-[90px] sm:max-w-[110px] lg:max-w-[140px] grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}