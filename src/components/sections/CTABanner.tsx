import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

interface CTABannerProps {
  heading: string
  subheading: string
  image: string
}

export const CTABanner: React.FC<CTABannerProps> = ({ heading, subheading, image }) => {
  return (
    <section className="container mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-primary/5 rounded-3xl overflow-hidden border border-primary/10">
        <div className="lg:col-span-5 relative h-64 lg:h-full min-h-[400px]">
          <Image alt="Team" src={image} fill className="object-cover" />
        </div>
        <div className="lg:col-span-7 p-8 lg:p-16">
          <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-3xl font-bold text-foreground mb-4">{heading}</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                {subheading}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Ihr Thema"
                  className="col-span-2 rounded-lg border bg-background px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Anfrage senden
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </form>
              <p className="mt-4 text-sm text-muted-foreground">
                Oder direkt Termin vereinbaren – wir melden uns innerhalb von 24 Stunden.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
