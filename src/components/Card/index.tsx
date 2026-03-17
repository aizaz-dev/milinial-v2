'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React from 'react'

import type { Blog } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPostData = Pick<Blog, 'slug' | 'categories' | 'meta' | 'title' | 'heroImage'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'blogs'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, title: titleFromProps } = props

  const { slug, meta, title, heroImage } = doc || {}
  const { image: metaImage } = meta || {}
  const imageToUse = heroImage || metaImage

  const titleToUse = titleFromProps || title
  const href = `/${relationTo}/${slug}`

  return (
    <article
      className={cn('relative hover:cursor-pointer flex flex-col h-full pb-6', className)}
      style={{ backgroundColor: '#FEFEFE' }}
      ref={card.ref}
    >
      <div
        className="relative w-full bg-gray-100"
        style={{
          height: '276px',
          borderTopRightRadius: '16px',
          borderBottomLeftRadius: '16px',
          overflow: 'hidden',
        }}
      >
        {!imageToUse && <div className="w-full h-full flex items-center justify-center">No image</div>}
        {imageToUse && typeof imageToUse !== 'string' && (
          <div className="w-full h-full [&_img]:w-full [&_img]:h-full [&_img]:object-cover max-md:object-cover">
            <Media resource={imageToUse} size="33vw" />
          </div>
        )}
      </div>

      <div className="flex flex-col grow pt-6 pb-2 px-4">
        {titleToUse && (
          <h3 className="mb-auto font-inter font-medium text-[20px] md:text-[24px] leading-[140%] tracking-[-0.8px] text-[#111111]">
            <Link className="after:absolute after:inset-0" href={href} ref={link.ref}>
              {titleToUse}
            </Link>
          </h3>
        )}

        <div className="flex justify-between items-center mt-6 font-inter font-normal text-[14px] md:text-[16px] leading-[180%] tracking-normal text-[#767676]">
          <span>by Philipp Juchli</span>
          <span>5. Dez 2025</span>
        </div>
      </div>
    </article>
  )
}
