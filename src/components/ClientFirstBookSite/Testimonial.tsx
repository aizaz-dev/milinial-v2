/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ClientFirstBookTestimonial = () => {
  return (
    <section className="bg-[#FFFFFF] w-full px-4 md:px-8 xl:px-14 flex justify-center py-[60px]">
      {/* Layout wrapper */}
      <div className="flex flex-col items-center w-full max-w-[1320px] gap-[60px]">

        {/* Top Header Section */}
        <div className="flex flex-col items-center gap-[24px] w-full">
          {/* Top Badge */}
          <div className="w-[286px] h-[35px] border border-gray-200 bg-[#FBFAF8] rounded-[54px] pt-[4px] pr-[14px] pb-[4px] pl-[10px] flex items-center justify-center gap-[4px]">
            <span className="font-['Figtree',sans-serif] font-normal text-[16px] text-[#0C2217] leading-[170%] tracking-[-0.2px] align-middle whitespace-nowrap">
              Das sagen Führungspersönlichkeiten
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['Inter',sans-serif] font-semibold text-[32px] md:text-[44px] lg:text-[57px] text-[#1E1A1C] leading-[1.1] lg:leading-[60px] tracking-[0px] lg:tracking-[-1.5px] text-center w-full mx-auto">
           Geprüft von denen, für die Wirkung <br /> keine Frage der Theorie ist.
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-[30px] lg:gap-[60px] w-full justify-center">
          {/* Testimonial Card */}
          <div className="w-full lg:w-[810px] lg:min-h-[321px] bg-[#B0A8DA3B] rounded-[10px] pt-[30px] pr-[20px] lg:pr-[40px] pb-[10px] pl-[20px] lg:pl-[40px] flex flex-col gap-[12px] justify-start">
            {/* Stars */}
            <div className="flex items-center gap-[4px] w-[116px] h-[20px] shrink-0">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill="#FBBF24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p className="font-['Inter',sans-serif] font-medium text-[20px] md:text-[24px] lg:text-[28px] text-[#0A0D11] leading-[140%] tracking-[-0.8px]">
                Ich erkenne hier meine eigene Überzeugung wieder: Wirkung entsteht nicht durch Kontrolle, sondern durch Haltung. Endlich ein Buch, das das nicht nur behauptet, sondern zeigt, wie es geht.
            </p>
            {/* Author */}
            <div className="flex flex-wrap gap-x-1 pt-[12px]">
              <span className="font-['Inter',sans-serif] font-medium text-[16px] text-[#0A0D11] leading-[170%] tracking-[0px]">
                lic. iur. Simone Stebler, LL.M.
              </span>
              <span className="font-['Inter',sans-serif] font-normal text-[16px] text-[#6d6e71] leading-[170%] tracking-[0px] ml-1">
                • Managing Partner Egon Zehnder Zürich office 
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="w-full max-w-[321px] aspect-square rounded-tr-[16px] rounded-bl-[16px] overflow-hidden drop-shadow-2xl shrink-0">
            <img
              src="/client-first-book-site/simone.jpg"
              alt="lic. iur. Simone Stebler, LL.M."
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default ClientFirstBookTestimonial
