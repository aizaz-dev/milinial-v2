"use client";

import Image from "next/image";
import { Linkedin, X } from "lucide-react";

export default function ProfileSection() {
  return (
    <section className="w-full bg-[#F5F8FB] py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8">

          {/* Card 1 */}
          <div className="bg-[#FFFFFF] p-10 rounded-sm">
            <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">
              Vita
            </h2>

            <p className="text-[16px] leading-[28px] text-[#555]">
              Philipp R. Juchli studierte International Relations & Governance an der Universität
              St. Gallen (HSG). Er verfügt über 20 Jahre nationale und internationale
              Führungserfahrung – in beratender und coachender Funktion sowie in C-Level-Rollen.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FFFFFF] p-10 rounded-sm">
            <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-4">
              Stationen & Erfahrung
            </h2>

            <p className="text-[16px] leading-[28px] text-[#555]">
              Philipp verbindet strategische Weitsicht mit operativer Umsetzung.
              Er führte standort- und funktionsübergreifende Teams, verantwortete
              Transformationsprogramme im Gesundheitswesen und Professional
              Services und war zuletzt COO/General Manager einer Organisation mit
              520 Mitarbeitenden – inklusive Standortintegration,
              Synergieumsetzung, operativer Mehrjahresplanung und
              ERP-Transformation (cloud-basiert, AI-unterstützt).
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-5">

          {/* Image */}
          <div className="relative w-full h-[530px] rounded-xl overflow-hidden">
            <Image
              src="/assets/About/Foto.png"
              alt="profile"
              fill
              className="object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="bg-[#D6CDFE66] px-6 py-5 flex items-center justify-between rounded-sm">

            <div>
              <h3 className="text-[18px] font-semibold text-[#333]">
                Philipp R. Juchli (Jg. 1984)
              </h3>

              <p className="text-[15px] text-[#444] mt-1">
                Co-Founder und Geschäftsführer Millenial-C
              </p>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black flex items-center justify-center">
                <Linkedin size={18} color="white" />
              </div>

              <div className="w-10 h-10 bg-white flex items-center justify-center border">
                <X size={18} />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}