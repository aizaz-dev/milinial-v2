import React from 'react'
import Image from 'next/image'

const cards = [
  {
    image: '/client-first-book-site/senior.jpg',
    title: 'Senior Professionals',
    subtitle: 'Vom Experten zur Führungspersönlichkeit',
  },
  {
    image: '/client-first-book-site/Unternehmer.png',
    title: 'Unternehmer & Geschäftsführer',
    subtitle: 'Wirkung als Strategie.',
  },
  {
    image: '/client-first-book-site/Führungskräfte.jpg',
    title: 'Führungskräfte in PSFs',
    subtitle: 'Klienten führen. Teams entwickeln.',
  },
]

const TargetGroup = () => {
  return (
    <section className="w-full bg-[rgba(214,205,254,0.2)] py-[80px] lg:py-[100px]">
      {/* Inner container — 1260px max-width centered */}
      <div className="w-full max-w-[1260px] mx-auto px-6 xl:px-0 flex flex-col items-start gap-[38px]">

        {/* Eyebrow */}
        <div className="flex flex-row items-center pl-[10px] pr-[14px] py-[4px] gap-[4px] h-[35px] bg-[rgba(174,175,179,0.2)] rounded-[54px]">
          <span className="font-['Figtree',sans-serif] font-normal text-[16px] leading-[170%] tracking-[-0.2px] text-[#0C2217] whitespace-nowrap">
            Für Führung in der Medizin
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-['Inter',sans-serif] font-semibold text-[40px] lg:text-[64px] leading-[120%] tracking-[-1.5px] text-[#181C39] max-w-[737px] m-0">
          Für wen &ldquo;Clients First&rdquo; gedacht ist
        </h2>

        {/* Cards row */}
        <div className="flex flex-col md:flex-row items-stretch gap-[24px] w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-1 min-h-[415px] h-auto bg-[#FCFEFF] rounded-[16px] p-6 flex flex-col gap-[16px]"
            >
              {/* Image container — 294px tall, bg dark, rounded */}
              <div className="relative w-full h-[294px] bg-[#0D1101] rounded-[8px] overflow-hidden shrink-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 404px"
                />
              </div>

              {/* Text block */}
              <div className="flex flex-col gap-[2px]">
                <span className="font-['Inter',sans-serif] font-medium text-[20px] leading-[170%] text-[#0D1101]">
                  {card.title}
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[16px] leading-[170%] text-[#474842]">
                  {card.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TargetGroup
