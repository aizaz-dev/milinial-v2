import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/utilities/ui'

interface PurpleCTAProps {
  heading: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  image: string
  className?: string
}

export const PurpleCTA: React.FC<PurpleCTAProps> = ({
  heading,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  image,
  className,
}) => {
  return (
    <section className={cn('container py-12', className)}>
      <div className="bg-[#7C3AED] rounded-3xl overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-16 relative z-10">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              {heading}
            </h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-xl">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={primaryButtonLink}
                className="inline-flex items-center justify-center rounded-full bg-white text-[#7C3AED] px-6 py-3 font-semibold hover:bg-white/90 transition-colors"
              >
                {primaryButtonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              {secondaryButtonText && secondaryButtonLink && (
                <Link
                  href={secondaryButtonLink}
                  className="inline-flex items-center justify-center rounded-full bg-white/20 text-white border border-white/30 px-6 py-3 font-semibold hover:bg-white/30 transition-colors backdrop-blur-sm"
                >
                  {secondaryButtonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              )}
            </div>
          </div>

          <div className="relative h-64 lg:h-96 w-full lg:w-auto flex justify-center lg:justify-end items-end">
            <div className="relative w-full h-full max-w-sm lg:absolute lg:-bottom-16 lg:right-0">
              <Image
                src={image}
                alt="Person"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-10">
          {/* Add subtle pattern here if needed */}
        </div>
      </div>
    </section>
  )
}
