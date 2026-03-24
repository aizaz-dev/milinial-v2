import type { Metadata } from 'next/types'
import { CategoryArchive } from '@/components/CategoryArchive'
import { CollectionArchive } from '@/components/CollectionArchive'
import { BookPromo } from '@/components/BookPromo'
import { Memberships } from '@/components/Memberships'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'blogs',
    depth: 1,
    limit: 3, // Display 3 cards in the top grid
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      heroImage: true,
    },
  })

  // Fetch initial posts for the Category Archive (limit 5)
  const categoryPosts = await payload.find({
    collection: 'blogs',
    depth: 1,
    limit: 5,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      createdAt: true,
      heroImage: true,
    },
  })

  // Fetch categories
  const categoriesDocs = await payload.find({
    collection: 'categories',
    depth: 0,
    limit: 100,
  })

  return (
    <>
      <div
        className="pb-24 w-full"
        style={{ background: 'linear-gradient(180deg, #FBFAF8 0%, #F7F6F4 100%)' }}
      >
        <PageClient />

        {/* ── HERO SECTION ── */}
        <div className="px-4 md:px-8 flex justify-center pt-[120px] lg:pt-[140px]">
          <div
            className="relative flex items-center justify-center overflow-hidden w-full max-w-[1320px] min-h-[400px] md:min-h-[585px] bg-[url('/blog/blog-bg.jpg')] bg-cover bg-center rounded-tr-[16px] rounded-bl-[16px] px-6 md:px-12"
          >
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-white/40" />

            <div
              className="relative z-10 flex flex-col items-center text-center mx-auto gap-[30px] max-w-[1100px]"
            >
              {/* Badge */}
              <span
                className="inline-flex items-center px-4 py-1.5 rounded-full font-sans font-normal text-base leading-[170%] tracking-[-0.2px] text-[#7063AA] bg-[#EBEDEC]"
              >
                Unser Blog &amp; Ressourcen
              </span>

              {/* Heading */}
              <h1
                className="font-inter font-medium text-[36px] md:text-[64px] leading-[110%] tracking-[-1px] md:tracking-[-3px] text-center text-[#2905C7]"
              >
                Perspektiven aus der Praxis
              </h1>

              {/* Paragraph */}
              <p
                className="max-w-[800px] font-inter font-medium text-[16px] md:text-[21px] leading-[170%] text-center text-[#191820]"
              >
                Frische Insights aus laufender Arbeit. Was wir gerade sehen, lernen und umsetzen
                mit Relevanz für Entscheider.
              </p>
            </div>
          </div>
        </div>

        {/* ── LATEST POSTS SECTION ── */}
        <div className="container mt-12 md:mt-22 mb-8 text-center px-4 md:px-0">
          <h2
            className="font-inter font-medium text-[36px] md:text-[64px] leading-[110%] tracking-[-1px] md:tracking-[-3px] text-[#111111] text-center align-middle"
          >
            Die neuesten Beiträge
          </h2>
        </div>

        <CollectionArchive posts={posts.docs} />
      </div>

      {/* ── CATEGORY ARCHIVE SECTION ── */}
      <div className="bg-white w-full">
        <CategoryArchive initialPosts={categoryPosts.docs} categories={categoriesDocs.docs} />
      </div>

      <BookPromo />

      {/* ── BOTTOM CTA SECTION ── */}
      {/* <BottomCTA /> */}

      <Memberships />
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Blogs`,
  }
}
