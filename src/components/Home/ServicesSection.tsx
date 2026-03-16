import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

type CardProps = {
  image: string
  title: string
  description: string
}

function ServiceCard({ image, title, description }: CardProps) {
  return (
    <div className="relative rounded-[18px] overflow-hidden group cursor-pointer">
      
      <Image
        src={image}
        alt={title}
        width={600}
        height={500}
        className="w-full h-[480px] object-cover"
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* arrow button */}
      <div className="absolute top-5 right-5 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
        <ArrowUpRight size={18} className="text-black" />
      </div>

      {/* text */}
      <div className="absolute bottom-6 left-6 right-6 text-white">
        <h3 className="text-[20px] font-semibold leading-snug mb-1">
          {title}
        </h3>

        <p className="text-[14px] opacity-90">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#f3f4f6] py-[90px] px-6">
      <div className="max-w-[1280px] mx-auto">

        {/* TOP AREA */}
        <div className="grid grid-cols-2 gap-16 items-start mb-[60px]">

          {/* LEFT */}
          <div>
            <div className="inline-block text-[14px] px-4 py-1 rounded-full border border-gray-200 bg-white text-gray-600 mb-6">
              Unser Angebot
            </div>

            <h2 className="text-[56px] leading-[1.05] font-semibold text-[#0f172a] tracking-[-0.02em]">
              Handfeste Lösungen statt
              <br />
              Management-Floskeln
            </h2>
          </div>

          {/* RIGHT */}
          <div className="">
            <p className="text-[16px] leading-relaxed text-gray-600 max-w-[420px] mb-6">
              Individuell zugeschnittene Beratung, Interim-Lösungen
              und Restrukturierungen & Turnaround Partner – gezielt
              für Unternehmen, die mehr als Standard erwarten.
            </p>

            <button className="bg-[#2e1fb3] text-white text-[15px] font-medium px-6 py-3 rounded-lg hover:bg-[#24188f] transition">
              Angebote entdecken
            </button>
          </div>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

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