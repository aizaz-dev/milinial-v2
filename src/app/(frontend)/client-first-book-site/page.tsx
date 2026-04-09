import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import ClientFirstBookHero from '@/components/ClientFirstBookSite/Hero'
import ClientFirstBookTestimonial from '@/components/ClientFirstBookSite/Testimonial'
import ClientFirstBookAbout from '@/components/ClientFirstBookSite/About'
import ClientFirstBookAuthor from '@/components/ClientFirstBookSite/Author'
import ClientFirstBookFreeChapter from '@/components/ClientFirstBookSite/FreeChapter'
import TargetGroup from '@/components/ClientFirstBookSite/TargetGroup'
import Benefits from '@/components/ClientFirstBookSite/Benefits'
import FAQ from '@/components/ClientFirstBookSite/FAQ'
import CTA from '@/components/ClientFirstBookSite/CTA'
import { Memberships } from '@/components/Memberships'
export const dynamic = 'force-dynamic'
export const revalidate = 60 // Revalidate every 60 seconds to pick up CMS changes
export default async function PatientsFirstBookPage() {
  const payload = await getPayload({ config: configPromise })
  
const bookBenefits = await payload.findGlobal({
  slug: 'clients-first-book-benefits',
})
 const bookFAQ = await payload.findGlobal({
    slug: 'clients-first-book-faq',
})


  return (
    <div className="bg-[#FBFAF8] min-h-screen text-foreground">
      <ClientFirstBookHero />
      <ClientFirstBookTestimonial />
      <ClientFirstBookAbout/> 
      <ClientFirstBookAuthor />
      <ClientFirstBookFreeChapter />
      <TargetGroup />
      <Benefits data={bookBenefits} />
      <FAQ data={bookFAQ} />
      <CTA />
      <Memberships />
    </div>
  )
}
