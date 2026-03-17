import React from 'react'
import Image from 'next/image'
import { cn } from '@/utilities/ui'
import { Check, Zap } from 'lucide-react'

interface ServiceSectionProps {
  title: string
  description: string
  situations: string[]
  benefits: string[]
  image: string
  reversed?: boolean
  className?: string
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  situations,
  benefits,
  image,
  reversed = false,
  className,
}) => {
  return (
    <div className={cn('w-full flex justify-center py-[48px] md:py-[64px] lg:py-[80px] px-4 sm:px-6 lg:px-8', className)}>
      <div
        className={cn(
          'flex flex-col w-full max-w-[1320px] gap-[40px] md:gap-[56px]',
          'lg:flex-row lg:items-center lg:gap-[134px]',
          reversed ? 'lg:flex-row-reverse' : ''
        )}
      >
        {/* Text Container */}
        <div className="flex flex-col items-start gap-[32px] md:gap-[48px] lg:gap-[72px] w-full lg:w-[603px] shrink-0">

          {/* Heading & Subheading */}
          <div className="flex flex-col items-start gap-[12px] md:gap-[16px] w-full">
            <h2 className="font-['Inter',sans-serif] font-medium text-[28px] sm:text-[36px] lg:text-[48px] leading-[120%] tracking-[-1px] lg:tracking-[-1.5px] text-[#000000] m-0 w-full">
              {title}
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] lg:text-[18px] leading-[170%] text-[#3F3F43] m-0 w-full">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-[28px] md:gap-[36px] lg:gap-[40px] w-full">
            {/* Typische Situationen List */}
            <div className="flex flex-col items-start gap-[10px] md:gap-[12px] w-full">
              <span className="font-['Inter',sans-serif] font-medium text-[16px] md:text-[18px] leading-[170%] text-[#0F0F0F]">
                Typische Situationen:
              </span>
              <ul className="flex flex-col gap-[10px] md:gap-[12px] p-0 m-0 list-none w-full">
                {situations.map((item, index) => (
                  <li key={index} className="flex flex-row items-start gap-[10px] w-full">
                    <div className="w-[20px] h-[20px] rounded-[100px] bg-[rgba(241,127,4,0.1)] flex items-center justify-center shrink-0 mt-[5px]">
                      <Zap className="w-[11px] h-[11px] text-[#000000] fill-transparent" strokeWidth={1.5} />
                    </div>
                    <span className="font-['Inter',sans-serif] font-medium text-[14px] sm:text-[16px] lg:text-[18px] leading-[170%] text-[#0F0F0F]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Wir liefern List */}
            <div className="flex flex-col items-start gap-[10px] md:gap-[12px] w-full">
              <span className="font-['Inter',sans-serif] font-medium text-[16px] md:text-[18px] leading-[170%] text-[#0F0F0F]">
                Wir liefern:
              </span>
              <ul className="flex flex-col gap-[10px] md:gap-[12px] p-0 m-0 list-none w-full">
                {benefits.map((item, index) => (
                  <li key={index} className="flex flex-row items-start gap-[10px] w-full">
                    <div className="w-[20px] h-[20px] rounded-[100px] bg-[rgba(66,156,140,0.1)] flex items-center justify-center shrink-0 mt-[5px]">
                      <Check className="w-[11px] h-[11px] text-[#060E1F]" strokeWidth={2.5} />
                    </div>
                    <span className="font-['Inter',sans-serif] font-medium text-[14px] sm:text-[16px] lg:text-[18px] leading-[170%] text-[#0F0F0F]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Image Container */}
        <div className="relative w-full lg:w-[507px] h-[280px] sm:h-[360px] md:h-[440px] lg:h-[616px] shrink-0 rounded-[16px] overflow-hidden drop-shadow-xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 507px"
          />
        </div>

      </div>
    </div>
  )
}

