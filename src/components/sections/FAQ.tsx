import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FAQProps {
  heading: string
  questions: {
    question: string
    answer: string
  }[]
  className?: string
}

export const FAQ: React.FC<FAQProps> = ({ heading, questions, className }) => {
  return (
    <section className="container mb-32 max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{heading}</h2>
        <p className="mt-4 text-xl text-muted-foreground">Transparenz ist Teil unserer Kultur.</p>
      </div>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {questions.map(({ question, answer }, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border rounded-lg bg-card px-6 py-2 shadow-sm"
          >
            <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
