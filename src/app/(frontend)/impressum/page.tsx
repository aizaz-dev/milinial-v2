import React from 'react'
import type { Metadata } from 'next/types'
import { BookPromo } from '@/components/BookPromo'
import { Memberships } from '@/components/Memberships'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import RichText from '@/components/RichText'

export const revalidate = 600

export default async function ImpressumPage() {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'legal-pages',
    where: { slug: { equals: 'impressum' } },
    depth: 1,
  })

  const doc = result.docs[0]
  return (
    <div className="bg-white text-foreground">
      {/* ── HERO SECTION ── */}
      <div className="px-4 md:px-8 flex justify-center pt-[120px] lg:pt-[140px] pb-12">
        <div
          className="relative flex items-center justify-center overflow-hidden w-full max-w-[1320px] min-h-[400px] md:min-h-[585px] bg-cover bg-center rounded-tr-[16px] rounded-bl-[16px] px-6 md:px-12"
          style={{ backgroundImage: "url('/assets/legal-page/hero-bg.jpg')" }}
        >
             {/* Dak roverlay for readability */}
<div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(61,53,97,0.75) 0%, rgba(106,75,250,0.45) 100%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center mx-auto gap-[30px] max-w-[892px]">
            {/* Eyebrow Badge */}
            <span
              className="inline-flex items-center px-4 py-1.5 rounded-full font-['Inter',sans-serif] font-normal text-[16px] leading-[170%] tracking-[-0.2px] text-white"
              style={{ background: '#7063AA' }}
            >
              Unser &quot;Kleingedrucktes&quot;
            </span>

            {/* Heading */}
            <h1
              className="font-['Inter',sans-serif] font-medium text-[36px] md:text-[64px] leading-[110%] tracking-[-1px] md:tracking-[-3px] text-center text-white m-0"
            >
              {doc?.title || 'Impressum & Datenschutz'}
            </h1>

            {/* Subheadline */}
            <p
              className="max-w-[794px] font-['Inter',sans-serif] font-light text-[22px] md:text-[40px] leading-[110%] tracking-[-2px] md:tracking-[-3px] text-center text-white m-0"
            >
              {doc?.subtitle || 'Alle rechtlichen Angaben und Informationen zum Umgang mit personenbezogenen Daten auf einen Blick.'}
            </p>
          </div>
        </div>
      </div>

{/* ── LEGAL CONTENT SECTION ── */}
<div className="w-full bg-[#FEFEFE] flex justify-center py-[80px] px-[20px]">
  <div className="w-full max-w-[900px] flex flex-col">

    {/* Last Update */}
    {doc?.lastUpdate && (
      <p className="text-[#4C5157] text-[14px] mb-[40px]">
        Letztes Update:{' '}
        {new Date(doc.lastUpdate).toLocaleDateString('de-DE', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
    )}

    {/* Content */}
    <div className="text-[#4C5157] text-[16px] md:text-[18px] leading-[160%] flex flex-col gap-[32px]">
      {doc?.content ? (
        <RichText
          data={doc.content}
          enableGutter={false}
          enableProse={false}
          className="prose max-w-none text-[#4C5157] text-[16px] md:text-[18px] leading-[160%] prose-headings:font-semibold prose-headings:text-[#4C5157] prose-h3:text-[16px] md:prose-h3:text-[18px] prose-h3:mt-[32px] prose-h3:mb-[12px] prose-h2:mt-[32px] prose-h2:mb-[12px] prose-p:text-[#4C5157] prose-p:mt-0 prose-p:mb-[12px] first:prose-headings:mt-0"
        />
      ) : (
        <>
          {/* Title only shown as fallback when no CMS content */}
          <h2 className="text-[28px] md:text-[32px] font-semibold text-[#4C5157] mb-[40px]">
            {doc?.title || 'Impressum'}
          </h2>
          <p>Inhalte werden geladen oder sind noch nicht verfügbar.</p>
        </>
      )}
    </div>
  </div>
</div>
      {/* ── ADDITIONAL COMPONENTS ── */}
      <BookPromo />
      <Memberships />
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Impressum & Datenschutz | Millenial Group',
    description: 'Alle rechtlichen Angaben und Informationen zum Umgang mit personenbezogenen Daten auf einen Blick.',
  }
}
