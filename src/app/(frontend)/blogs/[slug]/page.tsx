import type { Metadata } from 'next'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import RichText from '@/components/RichText'

import type { Blog } from '@/payload-types'

import { PostHero } from '@/heros/PostHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { BookPromo } from '@/components/BookPromo'
import { Memberships } from '@/components/Memberships'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'blogs',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const url = '/blogs/' + decodedSlug
  const post = await queryPostBySlug({ slug: decodedSlug })

  if (!post) return <PayloadRedirects url={url} />

  let relatedDocs = (post.relatedPosts?.filter((p) => typeof p === 'object') as Blog[]) || []

  // If no related posts are set, fetch the latest 3 posts (excluding current)
  if (relatedDocs.length === 0) {
    const payload = await getPayload({ config: configPromise })
    const fallbackPosts = await payload.find({
      collection: 'blogs',
      depth: 1,
      limit: 3,
      overrideAccess: false,
      where: {
        id: {
          not_equals: post.id,
        },
      },
    })
    relatedDocs = fallbackPosts.docs as Blog[]
  }

  return (
    <article className="bg-white">
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <PostHero post={post} />

      <div className="flex flex-col items-center gap-4 pt-8 shrink-0">
        <div className="container px-4 md:px-0 max-w-3xl mx-auto w-full">

          {/* ── AUTHOR SECTION ── */}
          <div className="flex items-center justify-center mb-12">
            {(function () {
              const authors = post.authors || [];
              const hasAuthor = authors.length > 0;
              if (!hasAuthor) return null;

              const firstAuthor = authors[0];
              if (typeof firstAuthor !== 'object') return null;

              const authorName = firstAuthor.name || 'Unknown Author';

              let authorImageSrc = '';
              if (firstAuthor.picture && typeof firstAuthor.picture === 'object' && firstAuthor.picture.url) {
                authorImageSrc = firstAuthor.picture.url;
              }

              // Format date
              const dateToFormat = post.publishedAt || post.createdAt || new Date().toISOString();
              const dateStr = new Date(dateToFormat).toLocaleDateString('de-DE', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              });

              return (
                <>
                  {authorImageSrc && (
                    <div
                      className="relative w-[50px] md:w-[67.61px] h-[50px] md:h-[56px] rounded-full overflow-hidden mr-3 md:mr-4 bg-gray-200 shrink-0"
                    >
                      <Image
                        src={authorImageSrc}
                        alt={authorName}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  {!authorImageSrc && (
                    <div
                      className="w-[50px] md:w-[67.61px] h-[50px] md:h-[56px] rounded-full overflow-hidden mr-3 md:mr-4 bg-gray-200 flex items-center justify-center text-[#556987] font-bold text-[18px] shrink-0"
                    >
                      {authorName.charAt(0)}
                    </div>
                  )}
                  <div className="flex flex-col justify-center shrink-0">
                    <span className="font-inter font-bold text-[16px] md:text-[18px] leading-[150%] md:leading-[28px] text-[#333F51]">
                      {authorName}
                    </span>
                    <span className="font-inter font-normal text-[14px] md:text-[18px] leading-[150%] md:leading-[28px] text-[#556987]">
                      {dateStr}
                    </span>
                  </div>
                </>
              );
            })()}
          </div>

          {/* ── RICH TEXT ── */}
          <RichText
            className="max-w-3xl mx-auto px-4 md:px-0
              [&>p]:mb-4 md:[&>p]:mb-6
              [&>p]:font-inter [&>p]:font-normal [&>p]:text-[16px] md:[&>p]:text-[18px] [&>p]:leading-[160%] md:[&>p]:leading-[28px] [&>p]:text-[#4C5157] [&>p]:tracking-normal
              [&>p:first-of-type]:font-inter [&>p:first-of-type]:font-medium [&>p:first-of-type]:text-[18px] md:[&>p:first-of-type]:text-[20px] [&>p:first-of-type]:leading-[150%] md:[&>p:first-of-type]:leading-[30px] [&>p:first-of-type]:text-[#4C5157] [&>p:first-of-type]:tracking-normal
              [&>h2]:font-inter [&>h2]:font-medium [&>h2]:text-[28px] md:[&>h2]:text-[32px] [&>h2]:leading-[120%] [&>h2]:tracking-[-0.5px] [&>h2]:text-[#111111] [&>h2]:mt-8 md:[&>h2]:mt-12 [&>h2]:mb-4 md:[&>h2]:mb-6
              [&>h3]:font-inter [&>h3]:font-medium [&>h3]:text-[22px] md:[&>h3]:text-[24px] [&>h3]:leading-[130%] [&>h3]:text-[#111111] [&>h3]:mt-6 md:[&>h3]:mt-8 [&>h3]:mb-3 md:[&>h3]:mb-4
            "
            data={post.content}
            enableGutter={false}
          />

          {/* ── BACK BUTTON ── */}
          <div className="mt-16 text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center justify-center px-8 py-3 rounded text-white bg-[#1C1163] hover:bg-[#1a0e5b] transition-colors font-inter font-medium text-[16px] gap-2"
            >
              Zurück zum Blog ↗
            </Link>
          </div>
        </div>
      </div>

      {relatedDocs.length > 0 && (
        <div
          className="pb-24 pt-24 mt-24 mb-24 w-full"
          style={{ background: 'linear-gradient(180deg, #FBFAF8 0%, #F7F6F4 100%)' }}
        >
          <div className="container px-4 md:px-0 mb-8 md:mb-12 text-center">
            <h2
              className="font-inter font-medium text-[36px] md:text-[64px] leading-[110%] tracking-[-1px] md:tracking-[-3px] text-[#111111] text-center align-middle"
            >
              Das könnte Sie auch interesieren
            </h2>
          </div>
          <CollectionArchive posts={relatedDocs} />
        </div>
      )}

      <BookPromo />
      <Memberships />
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const post = await queryPostBySlug({ slug: decodedSlug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'blogs',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
