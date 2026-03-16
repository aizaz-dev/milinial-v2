import MembershipLogos from '@/components/About/Section/MembershipLogos'
import BookPromo from '@/components/Home/BookPromo'
import HeroSection from '@/components/Home/Hero'
import InsightsSection from '@/components/Home/InsightsSection'
import Leadership from '@/components/Home/Leadership'
import LeadershipSection from '@/components/Home/LeadershipSection'
import ServicesSection from '@/components/Home/ServicesSection'
import TrustedLogos from '@/components/Home/TrustedLogo'
import React from 'react'



export const dynamic = 'force-static'
export const revalidate = 600

export default function Page() {
  return (
    <div className="bg-background text-foreground">
        <HeroSection />
        <TrustedLogos />
        <LeadershipSection />
        <ServicesSection />
        <Leadership />
        <InsightsSection />
        <BookPromo />
       <MembershipLogos />
    </div>
  )
}
