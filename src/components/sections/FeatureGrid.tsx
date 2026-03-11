import React from 'react'
import { cn } from '@/utilities/ui'
import { LucideIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface FeatureGridProps {
  badge: string
  heading: string
  subheading: string
  features: {
    title: string
    description: string
    Icon: LucideIcon
  }[]
  className?: string
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  badge,
  heading,
  subheading,
  features,
  className,
}) => {
  return (
    <section className={cn('container mb-32', className)}>
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <Badge
          variant="secondary"
          className="rounded-full bg-muted/50 text-muted-foreground font-medium px-4 py-1.5 text-sm hover:bg-muted/50 mb-6"
        >
          {badge}
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-6">
          {heading}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">{subheading}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map(({ title, description, Icon }, i) => (
          <div
            key={i}
            className="flex flex-col items-start p-8 rounded-3xl border border-border/50 bg-card hover:shadow-lg transition-all duration-300 group"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">{title}</h3>
            <div className="text-muted-foreground leading-relaxed text-base space-y-2">
              {description.split('\n').map((line, j) => (
                <p key={j} className={j === 0 ? 'font-medium text-foreground' : ''}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
