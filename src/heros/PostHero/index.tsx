import React from 'react'
import type { Blog } from '@/payload-types'
import { Media } from '@/components/Media'

export const PostHero: React.FC<{
  post: Blog
}> = ({ post }) => {
  const { heroImage, title } = post

  return (
    <div className="px-4 md:px-8 flex justify-center pt-[120px] lg:pt-[140px] mb-8 md:mb-16">
      <div 
        className="relative flex flex-col items-center justify-center text-center overflow-hidden w-full max-w-[1320px] min-h-[400px] md:min-h-[585px] rounded-tr-[16px] rounded-bl-[16px] py-[60px] md:py-[81px] px-[20px] lg:px-[214px] gap-[10px]"
      >
        {heroImage && typeof heroImage !== 'string' && (
          <Media fill priority imgClassName="object-cover z-0" resource={heroImage} />
        )}
        
        {/* Subtle overlay to ensure text is readable over different images */}
        <div className="absolute inset-0 bg-black/10 z-0" />
        
        <div className="relative z-10 flex flex-col items-center gap-[30px] w-full max-w-[900px]">
          {/* Badge */}
          <span
            className="flex items-center justify-center w-[208px] h-[47px] rounded-[54px] bg-[#EBEDEC] font-inter font-normal text-[16px] leading-[170%] tracking-[-0.2px] text-[#7063AA] align-middle"
          >
            Unser Blog & Ressourcen
          </span>

          {/* Heading */}
          <h1
            className="font-inter font-medium text-[36px] md:text-[64px] leading-[110%] tracking-[-1px] md:tracking-[-3px] text-white text-center align-middle"
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}
