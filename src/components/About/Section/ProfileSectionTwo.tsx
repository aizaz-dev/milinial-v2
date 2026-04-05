"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";

export default function ProfileSectionTwo() {
  return (
    <section className="w-full bg-[#F5F8FB] py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">

          {/* Image */}
          <div className="relative w-full h-[600px] rounded-xl overflow-hidden">
            <Image
              src="/assets/About/pofile2.png"
              alt="Nina Koch"
              fill
              className="object-cover"
            />
          </div>

          {/* Profile Card */}
          <div className="bg-[#D6CDFE66] px-6 py-5 flex items-center justify-between rounded-sm">

            <div>
              <h3 className="text-[18px] font-semibold text-[#3a3a3a]">
                Nina I. Koch (Jg. 1982)
              </h3>

              <p className="text-[15px] text-[#4a4a4a] mt-1">
                Co-Founder
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a 
                href="https://www.linkedin.com/in/ninaisabelkoch/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                <Linkedin size={18} color="white" />
              </a>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-8">

          {/* Vita */}
          <div className="bg-[#FFFFFF] p-10 rounded-sm">
            <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">
              Vita
            </h2>

            <p className="text-[16px] leading-[28px] text-[#555]">
              Nina I. Koch verfügt über 10+ Jahre Führungserfahrung in Marketing &
              Kommunikation auf GL-Niveau. Sie kombiniert strategische
              Markenführung mit umsetzungsstarker Operational Excellence – von
              integrierten Strategien über Rebrandings bis zu messbarer
              Kommunikations- und Wachstumswirkung.
            </p>
          </div>

          {/* Stationen */}
          <div className="bg-[#FFFFFF] p-10 rounded-sm">
            <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">
              Stationen & Erfahrung
            </h2>

            <p className="text-[16px] leading-[28px] text-[#555]">
              Nina steht für Marke, Positionierung und Kommunikation mit
              messbarer Wirkung. 10+ Jahren GL-Erfahrung in Marketing &
              Kommunikation. Führte u.a. als Head of Marketing & Communications
              (Lenz & Staehelin) Marken- und Wachstumsinitiativen, inkl.
              Marken-Refresh 2023 (18 Monate, 50 Stakeholder),
              Prozess-Digitalisierung/Automatisierung sowie Kampagnenarbeit.
              Zuvor Aufbau und Leitung Marketing/Kommunikation bei Kellerhals
              Carrard; davor Unilever (Strategic Event Management). Ehrenamtlich
              in Kommissionen und als Vorstandsmitglied tätig.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}