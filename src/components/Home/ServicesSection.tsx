import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

type CardProps = {
  image: string
  title: string
  description: string
}

function ServiceCard({ image, title, description }: CardProps) {
  return (
    <Link href="/services" className="block relative w-full lg:w-[424px] h-[562px] rounded-tr-[16px] rounded-bl-[16px] overflow-hidden group cursor-pointer shrink-0">
      
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 1024px) 100vw, 424px"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* arrow button */}
      <div className="absolute top-[32px] right-[32px] bg-white w-[48px] h-[48px] rounded-full flex items-center justify-center transition-transform group-hover:bg-gray-100 z-10">
        <ArrowUpRight size={24} className="text-[#0B1327]" strokeWidth={2} />
      </div>

      {/* text box */}
      <div className="absolute bottom-0 left-0 w-full h-[148px] bg-[rgba(35,35,35,0.5)] backdrop-blur-[36px] flex flex-col justify-center px-[25px] z-10 border-t border-white/10">
        <div className="flex flex-col items-start gap-[4px] w-full">
          <h4 className="font-['Geist',sans-serif] font-medium text-[24px] leading-[140%] tracking-[-1px] text-[#FFFFFF] m-0 line-clamp-2">
            {title}
          </h4>
          <p className="font-['Geist',sans-serif] font-normal text-[16px] leading-[170%] tracking-[-0.4px] text-[#FFFFFF] opacity-80 m-0 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-[#F7F6F4] flex justify-center py-16 lg:py-[72px] overflow-hidden">
      <div className="w-full max-w-[1320px] px-6 lg:px-0 flex flex-col">
        
        {/* Top Content Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full mb-12 lg:mb-[91px] gap-8 lg:gap-[129px]">
          
          {/* Left Title */}
          <div className="flex flex-col items-start gap-[12px] w-full lg:w-[700px]">
            <div className="flex flex-row items-center px-[14px] pl-[10px] py-[4px] bg-[#FFFFFF] rounded-[54px] w-fit">
              <span className="font-['Figtree',sans-serif] font-normal text-[16px] leading-[170%] tracking-[-0.2px] text-[#0C2217] whitespace-nowrap">
                Unser Angebot
              </span>
            </div>

            <h2 className="font-['Inter',sans-serif] font-semibold text-[36px] lg:text-[57px] leading-[1.2] lg:leading-[120%] tracking-[-1.5px] text-[#0B1327] m-0">
              Handfeste Lösungen statt
              <br className="hidden lg:block" />
              Management-Floskeln
            </h2>
          </div>

          {/* Right Text & Button */}
          <div className="flex flex-col items-start gap-[32px] w-full lg:w-[486px]">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] lg:text-[18px] leading-[170%] text-[#3B3B3B] m-0">
              Individuell zugeschnittene Beratung, Interim-Lösungen und Restrukturierungen & Turnaround Partner - gezielt für Unternehmen, die mehr als Standard erwarten.
            </p>

            <Link href="/services" className="flex flex-row justify-center items-center px-[24px] py-[14px] gap-[8px] h-[56px] bg-[#19037C] hover:bg-[#11015c] transition-colors rounded-[8px] w-max">
              <span className="font-['IBM_Plex_Sans',sans-serif] font-medium text-[16px] leading-[24px] text-[#FFFFFF]">
                Angebote entdecken
              </span>
            </Link>
          </div>
          
        </div>

        {/* Cards Row */}
        <div className="flex flex-col xl:flex-row items-center lg:items-stretch lg:justify-between gap-[24px] w-full">
          <ServiceCard
            image="/assets/Home/Unser Angebot1.jpg"
            title="Restrukturierungen, Sanierung & Turnaround"
            description="Führung in kritischen Übergangsphasen"
          />

          <ServiceCard
            image="/assets/Home/Unser Angebot2.jpg"
            title="Interim COO & Operating Partner"
            description="Erfolgreiche Integration bei Übernahme oder Fusion"
          />

          <ServiceCard
            image="/assets/Home/Unser Angebot3.jpg"
            title="Transformationen"
            description="Verbesserung der Unternehmensleistung"
          />
        </div>

      </div>
    </section>
  )
}