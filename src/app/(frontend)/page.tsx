import { BookPromo } from '@/components/BookPromo'
import { Memberships } from '@/components/Memberships'
import HeroSection from '@/components/Home/Hero'
import InsightsSection from '@/components/Home/InsightsSection'
import Leadership from '@/components/Home/Leadership'
import LeadershipSection from '@/components/Home/LeadershipSection'
import ServicesSection from '@/components/Home/ServicesSection'
import TrustedLogos from '@/components/Home/TrustedLogo'
import React from 'react'

import { generateMetadata } from './[slug]/page'

export const dynamic = 'force-static'
export const revalidate = 600

export { generateMetadata }

export default async function Page() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      <TrustedLogos />
      <LeadershipSection />
      <ServicesSection />
      <Leadership />
      <InsightsSection />
      <div className="pt-12">
        <BookPromo />
      </div>
      <Memberships />
    </div>
  )
}
