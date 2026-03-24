import Image from "next/image"
import Link from "next/link"
import configPromise from "@payload-config"
import { getPayload } from "payload"
import type { Blog, Media, Author } from "@/payload-types"

function formatDate(dateStr?: string | null): string {
  if (!dateStr) return ""
  const date = new Date(dateStr)
  return date.toLocaleDateString("de-DE", { month: "short", year: "numeric" })
}

type SelectedBlog = Pick<Blog, 'id' | 'title' | 'slug' | 'heroImage' | 'publishedAt' | 'authors'>

type BlogCardProps = {
  blog: SelectedBlog
}

function BlogCard({ blog }: BlogCardProps) {
  const { title, slug, heroImage, publishedAt, authors } = blog

  const imageUrl =
    heroImage && typeof heroImage !== "string"
      ? (heroImage as Media).url ?? null
      : null

  const imageAlt =
    heroImage && typeof heroImage !== "string"
      ? (heroImage as Media).alt ?? title
      : title

  const firstAuthor = authors?.[0]
  const authorName =
    firstAuthor && typeof firstAuthor !== "string"
      ? (firstAuthor as Author).name
      : null

  const dateFormatted = formatDate(publishedAt)

  return (
    <Link
      href={`/blogs/${slug}`}
      className="flex flex-col items-start pb-[24px] gap-[24px] bg-[#FEFEFE] w-full lg:w-[424px] shrink-0 hover:shadow-md transition-shadow duration-300 group"
    >
      {/* Image */}
      <div className="relative w-full h-[276px] shrink-0 overflow-hidden rounded-tr-[16px] rounded-bl-[16px]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt ?? title}
            fill
            sizes="(max-width: 1024px) 100vw, 424px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>

      {/* Title Container */}
      <div className="flex flex-col items-start px-[16px] gap-[16px] w-full">
        <h3 className="font-['Instrument_Sans',sans-serif] font-medium text-[24px] leading-[140%] tracking-[-0.8px] text-[#02140D] line-clamp-3 m-0">
          {title}
        </h3>

        {/* Date + Author row */}
        <div className="flex flex-row items-start justify-between w-full">
          {authorName && (
            <span className="font-['Instrument_Sans',sans-serif] font-normal text-[16px] leading-[180%] text-[#676565]">
              by {authorName}
            </span>
          )}
          {dateFormatted && (
            <span className="font-['Instrument_Sans',sans-serif] font-normal text-[16px] leading-[180%] text-[#676565]">
              {dateFormatted}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

export default async function InsightsSection() {
  const payload = await getPayload({ config: configPromise })

  const { docs } = await payload.find({
    collection: "blogs",
    depth: 2,
    limit: 3,
    overrideAccess: false,
    sort: "-publishedAt",
    select: {
      title: true,
      slug: true,
      heroImage: true,
      publishedAt: true,
      authors: true,
    },
  })

  return (
    <section className="relative w-full bg-[#F7F6F4] flex flex-col items-start px-4 md:px-[60px] py-14 md:py-[90px] gap-[10px] min-h-[912px]">
      <div className="w-full max-w-[1320px] mx-auto flex flex-col gap-[48px]">

        {/* Title block */}
        <div className="flex flex-col items-center gap-[10px] w-full">
          {/* Eyebrow */}
          <div className="flex flex-row items-center px-[14px] pl-[10px] py-[4px] gap-[4px] bg-[rgba(174,175,179,0.2)] rounded-[54px] w-fit">
            <span className="font-['Figtree',sans-serif] font-normal text-[16px] leading-[170%] tracking-[-0.2px] text-[#0C2217]">
              Insights mit Relevanz
            </span>
          </div>

          {/* Header */}
          <h2 className="font-['Inter',sans-serif] font-medium text-[40px] lg:text-[64px] leading-[110%] tracking-[-3px] text-[#001305] text-center m-0">
            Perspektiven aus der Praxis
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col xl:flex-row items-stretch gap-[24px] w-full">
          {docs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center w-full">
          <Link
            href="/blogs"
            className="flex flex-row justify-center items-center px-[24px] py-[14px] gap-[8px] w-[167px] h-[56px] bg-[#19037C] hover:bg-[#11015c] transition-colors rounded-[8px]"
          >
            <span className="font-['IBM_Plex_Sans',sans-serif] font-medium text-[16px] leading-[24px] text-[#FFFFFF]">
              Mehr entdecken
            </span>
          </Link>
        </div>

      </div>
    </section>
  )
}
