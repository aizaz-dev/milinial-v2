"use client"

import Image from "next/image"
import Link from "next/link"

type Post = {
  title: string
  image: string
  author: string
  date: string
}

const posts: Post[] = [
  {
    title:
      "Wenn die Liquidität knapp wird: Was Führung jetzt wirklich tun muss",
    image: "/assets/Home/i1.png",
    author: "Philipp Juchli",
    date: "5. Dez 2025",
  },
  {
    title:
      "Interim-COO vs. klassische Beratung: Was Unternehmen in der Krise wirklich brauchen",
    image: "/assets/Home/i2.png",
    author: "Max Mustermann",
    date: "15. Nov 2025",
  },
  {
    title:
      "Transformation ohne Burnout: Wie Sie Leistung steigern, ohne Ihre Organisation zu zerreissen",
    image: "/assets/Home/i3.jpg",
    author: "Fritz Meier",
    date: "28. Nov 2025",
  },
]

export default function InsightsSection() {
  return (
    <section className="bg-[#f4f5f7] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="text-[14px] bg-[#AEAFB333] text-[#0C2217] px-4 py-1 rounded-full">
            Insights mit Relevanz
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-[48px] font-semibold text-[##001305] mb-16 leading-tight">
          Perspektiven aus der Praxis
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-[#FEFEFE] overflow-hidden shadow-sm hover:shadow-md transition"
            >
              
              {/* Image */}
              <div className="relative w-full h-[210px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-[18px] font-medium text-[#]#02140D leading-[1.5] mb-8">
                  {post.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center justify-between text-[14px] text-[#676565]">
                  <span>by {post.author}</span>
                  <span>{post.date}</span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-16">
          <Link
            href="#"
            className="bg-[#19037C] text-[#FFFFFF] px-8 py-3 rounded-lg text-[15px] font-medium hover:bg-[#25168c] transition"
          >
            Mehr entdecken
          </Link>
        </div>

      </div>
    </section>
  )
}