'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/utilities/ui'
import { Media } from '@/components/Media'
import type { Blog } from '@/payload-types'
import useClickableCard from '@/utilities/useClickableCard'

export type HorizontalCardPostData = Pick<Blog, 'slug' | 'categories' | 'meta' | 'title' | 'createdAt' | 'heroImage'>

export const HorizontalCard: React.FC<{
  className?: string
  doc?: HorizontalCardPostData
  relationTo?: 'blogs'
  index?: number
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo = 'blogs', index = 0 } = props

  const { slug, meta, title, createdAt, heroImage } = doc || {}
  const { description, image: metaImage } = meta || {}
  const imageToUse = heroImage || metaImage

  let textDescription = description || ''

  const sanitizedDescription = textDescription.replace(/\s+/g, ' ').trim()

  // Alternate char limits: even index = shorter, odd index = longer
  const MAX_CHARS = index % 2 === 0 ? 90 : 250
  const shortDescription =
    sanitizedDescription.length > MAX_CHARS
      ? sanitizedDescription.slice(0, MAX_CHARS).trimEnd() + '…'
      : sanitizedDescription
  const href = `/${relationTo}/${slug}`

  // Format date if needed, or hardcode like the design
  // The design for this section shows dates like "24. Dez 2025"
  const dateStr = createdAt ? new Date(createdAt).toLocaleDateString('de-DE', { day: 'numeric', month: 'short', year: 'numeric' }) : '24. Dez 2025'

  return (
    <article
      className={cn('relative flex flex-col md:flex-row hover:cursor-pointer mb-12 gap-6 md:gap-[56px]', className)}
      ref={card.ref}
    >
      <div
        className="relative w-full h-[220px] md:w-[380px] md:min-w-[380px] lg:w-[405px] lg:min-w-[405px] md:h-[265px] bg-gray-100 shrink-0 rounded-[8px] overflow-hidden"
      >
        {!imageToUse && <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>}
        {imageToUse && typeof imageToUse !== 'string' && (
          <div className="w-full h-full [&_img]:w-full [&_img]:h-full [&_img]:object-cover">
            <Media resource={imageToUse} size="33vw" />
          </div>
        )}
      </div>

      <div className="flex flex-col grow justify-center">
        <div className="mb-3 uppercase font-inter font-normal text-[14px] md:text-[16px] leading-[170%] text-[#756DFF] tracking-[0.02em]">
          {dateStr}
        </div>

        {title && (
          <h3 className="mb-3 md:mb-4 font-inter font-normal text-[24px] md:text-[40px] leading-[120%] tracking-[0px] text-[#111111] align-middle">
            <Link className="after:absolute after:inset-0" href={href} ref={link.ref}>
              {title}
            </Link>
          </h3>
        )}

        {shortDescription && (
          <p className="font-inter font-normal text-[16px] md:text-[18px] leading-[160%] tracking-normal text-[#333333]">
            {shortDescription}
          </p>
        )}
      </div>
    </article>
  )
}
