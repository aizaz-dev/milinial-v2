/* eslint-disable @next/next/no-img-element */
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
    <div className="max-w-[1320px] mx-auto my-12 border-t border-b border-gray-200">
      <div className="container py-8 px-4 md:px-8">
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-start gap-x-10 gap-y-5">
          <span className="shrink-0 font-sans font-medium text-[16px] md:text-base leading-[170%] text-[#767676] whitespace-nowrap text-center md:text-left">
            Mitglied von:
          </span>

          <div className="flex flex-wrap items-center justify-center md:justify-start grow gap-[15px] md:gap-[30px]">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                className="object-contain h-auto max-h-[30px] md:max-h-[45px] max-w-[100px] md:max-w-[140px] grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
