import React from 'react'
import HeroSection from '@/components/About/Section/Hero'
import ValuesSection from '@/components/About/Section/Values'
import PerspectiveSection from '@/components/About/Section/PerspectiveSection'
import TeamImpactSection from '@/components/About/Section/TeamImpact'
import LeadershipSection from '@/components/About/Section/LeadershipSection'
import { ServicesCTA } from '@/components/sections/services/ServicesCTA'
import { Memberships } from '@/components/Memberships'



export const dynamic = 'force-static'
export const revalidate = 600

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      <ValuesSection />
      <PerspectiveSection />
      <TeamImpactSection />
      <LeadershipSection />
      <ServicesCTA
        title="Ist Ihr Übergang sauber gesteuert – oder nur „irgendwie in Arbeit“?"
        description="Wir bringen Klarheit in Ziele, Verantwortungen und Taktung – damit Fortschritt sichtbar wird."
        imageSrc="/assets/about/team2.png"
        primaryButtonText="Jetzt Erstgespräch buchen"
        primaryButtonHref="#booking"
        secondaryButtonText="Angebot anfragen"
        secondaryButtonHref="/kontakt"
      />
      <Memberships />

    </div>
  )
}
