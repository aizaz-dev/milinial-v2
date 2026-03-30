'use client'

import React, { useState, useEffect, useRef } from 'react'
import { cn } from '@/utilities/ui'
import { HorizontalCard } from './HorizontalCard'


export type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialPosts: any[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  categories: any[]
}

export const CategoryArchive: React.FC<Props> = ({ initialPosts, categories }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [showAllCategories, setShowAllCategories] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any[]>(initialPosts)
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [hasNextPage, setHasNextPage] = useState(true) // assume initial has more, we don't have the full initial page data object 
  const [nextPage, setNextPage] = useState(2)

  const isFirstMount = useRef(true)

  useEffect(() => {
    let isMounted = true
    
    // Check URL params on first mount before doing the initial fetch logic
    if (isFirstMount.current) {
      isFirstMount.current = false
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const categoryParam = params.get('category');
        if (categoryParam && categories) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const match = categories.find((c: any) => c.title?.toLowerCase() === categoryParam.toLowerCase());
          if (match) {
            setActiveCategory(match.id);
            return; // Re-trigger useEffect with the new activeCategory
          }
        }
      }
    } else {
      setLoading(true)
    }

    // Build query
    const url = new URL('/api/blogs', window.location.origin)
    url.searchParams.set('limit', '5')
    url.searchParams.set('depth', '1')
    url.searchParams.set('sort', '-createdAt')

    if (activeCategory) {
      url.searchParams.set('where[categories][in]', activeCategory)
    }

    fetch(url.toString())
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setPosts(data.docs)
          setHasNextPage(data.hasNextPage)
          setNextPage(data.nextPage)
        }
      })
      .catch((err) => console.error(err))
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [activeCategory])

  const loadMore = async () => {
    if (!hasNextPage) return
    setLoadingMore(true)

    const url = new URL('/api/blogs', window.location.origin)
    url.searchParams.set('limit', '5')
    url.searchParams.set('depth', '1')
    url.searchParams.set('sort', '-createdAt')
    url.searchParams.set('page', String(nextPage))

    if (activeCategory) {
      url.searchParams.set('where[categories][in]', activeCategory)
    }

    try {
      const res = await fetch(url.toString())
      const data = await res.json()
      setPosts((prev) => [...prev, ...data.docs])
      setHasNextPage(data.hasNextPage)
      setNextPage(data.nextPage)
    } catch (err) {
      console.error(err)
    } finally {
      setLoadingMore(false)
    }
  }

  return (
    <div className="container max-w-[1320px] mx-auto py-16 md:py-[100px]">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 md:mb-16 gap-6 md:gap-8 px-4 md:px-8">
        <div className="w-full lg:max-w-[600px] xl:max-w-[700px] text-center md:text-left shrink-0">
          <h2
            className="mb-4 font-inter font-normal text-[36px] md:text-[48px] lg:text-[60px] leading-[120%] tracking-[-1px] md:tracking-[-1.5px] text-[#111111]"
          >
            Aus dem Maschinenraum
          </h2>
          <p
            className="font-inter font-normal text-[16px] md:text-base leading-[160%] text-[#444444]"
          >
            Unsere Artikel, kurze News und bewährte Ansätze rund um Restrukturierung bis
            Transformation.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3 mt-4 lg:mt-0 justify-center lg:justify-end w-full lg:flex-1">
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              'px-6 py-2 text-sm transition-colors border cursor-pointer',
              // Use rounded-[10px] to better match the slight pill shape of the design
              'rounded-[10px] font-inter font-normal text-[14px] leading-[170%] tracking-normal',
              !activeCategory
                ? 'bg-black text-white border-black'
                : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300',
            )}
          >
            Alle
          </button>
          {categories?.slice(0, showAllCategories ? categories.length : 2).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'px-6 py-2 text-sm cursor-pointer transition-colors border rounded-[10px] font-inter font-normal text-[14px] leading-[170%] tracking-normal',
                activeCategory === cat.id
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300',
              )}
            >
              {cat.title}
            </button>
          ))}
          {categories && categories.length > 3 && (
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="px-6 py-2 text-sm transition-colors cursor-pointer border bg-white text-gray-700 border-gray-200 hover:border-gray-300 rounded-[10px] font-inter font-normal text-[14px] leading-[170%] tracking-normal"
            >
              {showAllCategories ? 'Weniger anzeigen' : 'Weitere anzeigen'}
            </button>
          )}
        </div>
      </div>

      <div className="px-4 md:px-8 mt-16 min-h-[400px]">
        {loading ? (
          <div className="text-center py-20 text-gray-500">Lädt...</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 text-gray-500">Keine Beiträge gefunden.</div>
        ) : (
          <div className="flex flex-col">
            {posts.map((post, i) => (
              <HorizontalCard key={i} doc={post} index={i} />
            ))}
          </div>
        )}

        {hasNextPage && posts.length > 0 && !loading && (
          <div className="text-center mt-12 mb-8">
            <button
              onClick={loadMore}
              disabled={loadingMore}
              className="px-8 py-3 cursor-pointer rounded text-white inline-flex items-center gap-2 bg-[#1C1163] font-inter font-medium text-[16px]"
            >
              {loadingMore ? 'Lädt...' : 'Mehr anzeigen ↗'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
