import React from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/utilities/ui'

interface MarketRealityProps {
  tagline: string
  heading: string
  intro: string
  content: string[]
  className?: string
}

export const MarketRealitySection: React.FC<MarketRealityProps> = ({
  tagline,
  heading,
  intro,
  content,
  className,
}) => {
  return (
    <section className={cn('container mb-32 relative overflow-hidden', className)}>
      {/* Background Graphic Element */}
      <div className="absolute top-0 left-0 w-1/3 h-full -z-10 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            fill="currentColor"
            d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,89.1,-6.5C88.1,7.4,83.4,20.8,75.4,32.8C67.4,44.8,56.1,55.4,43.5,63.1C30.9,70.8,17,75.6,2.6,71.1C-11.8,66.6,-26.7,52.8,-40.4,41.2C-54.1,29.6,-66.6,20.2,-71.4,7.8C-76.2,-4.6,-73.3,-20,-64.8,-32.8C-56.3,-45.6,-42.2,-55.8,-27.6,-62.8C-13,-69.8,2.1,-73.6,16.8,-75.6C31.5,-77.6,45.8,-77.8,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Left Column: Tagline + Headline */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <div className="mb-6">
            <Badge
              variant="secondary"
              className="rounded-full bg-muted/50 text-muted-foreground font-medium px-4 py-1.5 text-sm hover:bg-muted/50"
            >
              {tagline}
            </Badge>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            {heading}
          </h2>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-7 flex flex-col gap-8 pt-2">
          <p className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed">{intro}</p>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            {content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
