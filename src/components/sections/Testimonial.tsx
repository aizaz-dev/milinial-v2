import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Quote, CheckCircle } from 'lucide-react'

interface TestimonialProps {
  quote: string
  author: string
  role: string
  image: string
}

export const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, image }) => {
  return (
    <section className="container mb-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Die Wirkung von LbC – beschrieben von unseren Kunden
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2].map((i) => (
          <Card key={i} className="overflow-hidden border-none shadow-xl bg-card">
            <CardContent className="p-0 grid grid-cols-1 md:grid-cols-5 h-full">
              <div className="md:col-span-3 p-8 flex flex-col justify-center bg-card">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-lg font-medium text-foreground leading-relaxed italic mb-6">
                  &quot;{quote}&quot;
                </p>
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-foreground">{author}</span>
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{role}</p>
                </div>
              </div>
              <div className="md:col-span-2 relative h-64 md:h-full">
                <Image alt={author} src={image} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-l" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
