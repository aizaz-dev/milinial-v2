import React from 'react'
import { cn } from '@/utilities/ui'

interface ComparisonListProps {
  title: string
  subtitle: string
  items: string[]
  iconType?: 'number' | 'check' | 'alert'
  variant?: 'default' | 'highlight'
  className?: string
}

export const ComparisonList: React.FC<ComparisonListProps> = ({
  title,
  subtitle,
  items,
  iconType = 'number',
  variant = 'default',
  className,
}) => {
  return (
    <div
      className={cn(
        'h-full rounded-2xl p-8',
        variant === 'highlight' ? 'bg-primary/5' : 'bg-muted/30',
        className,
      )}
    >
      <div className="mb-8">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-4">
            <span
              className={cn(
                'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium',
                variant === 'highlight'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground',
              )}
            >
              {iconType === 'number' ? i + 1 : '•'}
            </span>
            <span className="text-foreground leading-tight pt-1.5 font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
