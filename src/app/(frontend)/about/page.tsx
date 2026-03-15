import React from 'react'
import HeroSection from '@/components/About/Section/Hero'
import ValuesSection from '@/components/About/Section/Values'
import PerspectiveSection from '@/components/About/Section/PerspectiveSection'
import TeamImpactSection from '@/components/About/Section/TeamImpact'
import ProfileSection from '@/components/About/Section/ProfileSection'
import ProfileSectionTwo from '@/components/About/Section/ProfileSectionTwo'
import LeadershipSection from '@/components/About/Section/LeadershipSection'



export const dynamic = 'force-static'
export const revalidate = 600

export default function Page() {
  return (
    <div className="bg-background text-foreground">
        <HeroSection />
        <ValuesSection />
        <PerspectiveSection />
        <TeamImpactSection />
        <ProfileSection />
        <ProfileSectionTwo />
        <LeadershipSection />
    </div>
  )
}
