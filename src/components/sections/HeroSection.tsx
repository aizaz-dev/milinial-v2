import React from 'react'
import Image from 'next/image'
import { cn } from '@/utilities/ui'
import { Badge } from '@/components/ui/badge'

interface HeroProps {
  tagline: string
  heading: string
  subheading: string
  image1: { src: string; alt: string }
  image2: { src: string; alt: string }
  className?: string
}

export const HeroSection: React.FC<HeroProps> = ({
  tagline,
  heading,
  subheading,
  image1,
  image2,
  className,
}) => {
  return (
    <section className={cn('container mb-24 pt-[120px] lg:pt-[140px]', className)}>
      <div className="mb-6">
        <Badge
          variant="secondary"
          className="rounded-full bg-muted/50 text-muted-foreground font-medium px-4 py-1.5 text-sm hover:bg-muted/50"
        >
          {tagline}
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
        <div className="lg:col-span-7">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
            {heading}
          </h1>
        </div>
        <div className="lg:col-span-5 pt-2">
          <p className="text-lg text-muted-foreground leading-relaxed">{subheading}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-muted">
          <Image
            alt={image1.alt}
            src={image1.src}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-muted">
          <Image
            alt={image2.alt}
            src={image2.src}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  )
}
