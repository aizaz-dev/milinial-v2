import React from 'react'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface StepProps {
  steps: {
    title: string
    description: string
    icon: React.ReactNode
  }[]
  className?: string
}

export const ProcessSteps: React.FC<StepProps> = ({ steps, className }) => {
  return (
    <section className={cn('container mb-32', className)}>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Von Prinzip zu Praxis
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Der Weg zur Congruence ist klar strukturiert.
        </p>
      </div>
      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 -translate-y-1/2 hidden md:block" />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
          {steps.map(({ title, description, icon }, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-card border-2 border-primary/20 shadow-sm transition-all group-hover:border-primary group-hover:scale-110">
                  <span className="text-2xl font-bold text-primary">{i + 1}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Jetzt Beratungsgespräch vereinbaren
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
