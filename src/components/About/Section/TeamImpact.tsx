import Image from "next/image";

export default function TeamImpactSection() {
  return (
    <section className="w-full bg-[#F5F8FB] pt-[82px] pb-[82px] flex justify-center">
      <div className="w-full max-w-[1320px] flex flex-col items-center px-6 lg:px-0 gap-[60px] lg:gap-[89px]">
        
        {/* Section Intro */}
        <div className="flex flex-col items-center w-full max-w-[912px] gap-[30px]">
          {/* Eyebrow */}
          <div className="flex flex-row items-center px-[10px] py-[4px] pr-[14px] bg-[#EBEDEC] border border-black/5 rounded-[54px]">
            <span className="font-figtree font-normal text-[16px] leading-[170%] tracking-[-0.2px] text-[#0C2217]">
              Das Team hinter der Umsetzung
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-inter font-semibold text-[36px] lg:text-[52px] leading-[120%] tracking-[-1px] text-[#000000] text-center max-w-[912px]">
            Weniger Köpfe, Mehr Wirkung
          </h1>

          {/* Subheadline */}
          <p className="font-inter font-medium text-[16px] leading-[170%] text-[#4B4B56] text-center max-w-[802px]">
            Schlanke Besetzung, hohe Seniorität: Wir liefern Geschwindigkeit, Entscheidungskraft und Umsetzung bis ins Ergebnis, passend zur Situation und Zielsetzung.
          </p>
        </div>

        {/* TEAM MEMBERS WRAPPER */}
        <div className="flex flex-col gap-[60px] lg:gap-[89px] w-full items-center">
          
          {/* Philipp - Team Member */}
          <div className="flex flex-col lg:flex-row w-full items-start gap-[40px] lg:gap-[60px]">
             {/* Text Columns */}
             <div className="flex flex-col w-full lg:w-[718px] gap-[28px] order-2 lg:order-1">
                {/* Vita Card */}
                <div className="flex flex-col bg-[#FFFFFF] p-[32px] gap-[20px] w-full h-auto min-h-[199px]">
                   <h3 className="font-inter font-bold text-[24px] leading-[140%] tracking-[-0.5px] text-[#000000]">
                     Vita
                   </h3>
                   <p className="font-inter font-normal text-[16px] leading-[170%] text-[#4B4B56]">
                     Philipp R. Juchli studierte International Relations & Governance an der Universität St. Gallen (HSG). Er verfügt über 20 Jahre nationale und internationale Führungserfahrung – in beratender und coachender Funktion sowie in C-Level-Rollen.
                   </p>
                </div>

                {/* Stationen Card */}
                <div className="flex flex-col bg-[#FFFFFF] p-[32px] gap-[20px] w-full h-auto min-h-[307px]">
                   <h3 className="font-inter font-semibold text-[24px] leading-[140%] tracking-[-0.5px] text-[#000000]">
                     Stationen & Erfahrung
                   </h3>
                   <p className="font-inter font-normal text-[16px] leading-[170%] text-[#4B4B56]">
                     Philipp verbindet strategische Weitsicht mit operativer Umsetzung. Er führte standort- und funktionsübergreifende Teams, verantwortete Transformationsprogramme in Gesundheitswesen und Professional Services und war zuletzt COO/General Manager einer Organisation mit 520 Mitarbeitenden – inklusive Standortintegration, Synergieumsetzung, operativer Mehrjahresplanung und ERP-Transformation (cloud-basiert, AI-unterstützt).
                   </p>
                </div>
             </div>

             {/* Image Column */}
             <div className="flex flex-col gap-[22px] w-full lg:w-[542px] order-1 lg:order-2">
                <div className="relative w-full h-[320px] lg:h-[432px] overflow-hidden rounded-tl-none rounded-br-none rounded-tr-[15px] rounded-bl-[15px] bg-[#4D4F54]">
                   <Image src="/assets/About/Foto.png" alt="Philipp R. Juchli" fill className="object-cover" />
                </div>
                {/* Info & Social Bar */}
                <div className="w-full min-h-[82px] bg-[#D6CDFE]/40 flex flex-row items-center justify-between pl-[10px]">
                   <div className="flex flex-col py-2 pr-2">
                      <span className="font-inter font-semibold text-[18px] leading-[170%] text-[#4B4B56]">Philipp R. Juchli (Jg. 1984)</span>
                      <span className="font-inter font-normal text-[16px] leading-[170%] text-[#4B4B56]">Co-Founder und Geschäftsführer Millenial-C</span>
                   </div>
                   <div className="flex flex-row pr-[5px] gap-[8px] h-[82px] items-center">
                     <a href="#" className="flex justify-center items-center w-[48px] h-[48px] bg-[#000000] hover:opacity-80 transition-opacity">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6C1.13 6 0 4.881 0 3.5C0 2.119 1.13 1 2.5 1C3.87 1 4.98 2.119 4.98 3.5ZM0.28 8H4.72V23H0.28V8ZM7.44 8H11.75V10.15H11.81C12.41 9.02 13.88 8 16.03 8C20.55 8 21.41 10.97 21.41 14.8V23H16.97V15.7C16.97 13.96 16.63 12.18 14.7 12.18C12.42 12.18 11.88 13.95 11.88 15.53V23H7.44V8Z" fill="white"/>
                        </svg>
                     </a>
                     <a href="#" className="flex justify-center items-center w-[48px] h-[48px] bg-[#FFFFFF] hover:opacity-80 transition-opacity">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M18.901 0H22.581L14.541 9.18684L24 21.684H16.593L10.794 14.1032L4.156 21.684H0.474L9.083 11.8421L0 0H7.593L12.839 6.94105L18.901 0ZM17.61 19.6053H19.65L6.486 1.96842H4.316L17.61 19.6053Z" fill="#001305"/>
                        </svg>
                     </a>
                   </div>
                </div>
             </div>
          </div>

          {/* Nina - Team Member */}
          <div className="flex flex-col lg:flex-row w-full items-start gap-[40px] lg:gap-[60px]">
             {/* Image Column */}
             <div className="flex flex-col gap-[22px] w-full lg:w-[542px] order-1 lg:order-1">
                <div className="relative w-full h-[320px] lg:h-[432px] overflow-hidden rounded-tl-none rounded-br-none rounded-tr-[15px] rounded-bl-[15px] bg-[#4D4F54]">
                   {/* Fallback to pofile2.png if that's what is in the assets folder */}
                   <Image src="/assets/About/pofile2.png" alt="Nina I. Koch" fill className="object-cover" />
                </div>
                {/* Info & Social Bar */}
                <div className="w-full min-h-[82px] bg-[#D6CDFE]/40 flex flex-row items-center justify-between pl-[10px]">
                   <div className="flex flex-col py-2 pr-2">
                      <span className="font-inter font-semibold text-[18px] leading-[170%] text-[#4B4B56]">Nina I. Koch (Jg. 1982)</span>
                      <span className="font-inter font-normal text-[16px] leading-[170%] text-[#4B4B56]">Co-Founder</span>
                   </div>
                   <div className="flex flex-row pr-[5px] gap-[8px] h-[82px] items-center">
                     <a href="#" className="flex justify-center items-center w-[48px] h-[48px] bg-[#000000] hover:opacity-80 transition-opacity">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6C1.13 6 0 4.881 0 3.5C0 2.119 1.13 1 2.5 1C3.87 1 4.98 2.119 4.98 3.5ZM0.28 8H4.72V23H0.28V8ZM7.44 8H11.75V10.15H11.81C12.41 9.02 13.88 8 16.03 8C20.55 8 21.41 10.97 21.41 14.8V23H16.97V15.7C16.97 13.96 16.63 12.18 14.7 12.18C12.42 12.18 11.88 13.95 11.88 15.53V23H7.44V8Z" fill="white"/>
                        </svg>
                     </a>
                     <a href="#" className="flex justify-center items-center w-[48px] h-[48px] bg-[#FFFFFF] hover:opacity-80 transition-opacity">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M18.901 0H22.581L14.541 9.18684L24 21.684H16.593L10.794 14.1032L4.156 21.684H0.474L9.083 11.8421L0 0H7.593L12.839 6.94105L18.901 0ZM17.61 19.6053H19.65L6.486 1.96842H4.316L17.61 19.6053Z" fill="#001305"/>
                        </svg>
                     </a>
                   </div>
                </div>
             </div>

             {/* Text Columns */}
             <div className="flex flex-col w-full lg:w-[718px] gap-[28px] order-2 lg:order-2">
                {/* Vita Card */}
                <div className="flex flex-col bg-[#FFFFFF] p-[32px] gap-[20px] w-full h-auto min-h-[226px]">
                   <h3 className="font-inter font-semibold text-[24px] leading-[140%] tracking-[-0.5px] text-[#000000]">
                     Vita
                   </h3>
                   <p className="font-inter font-normal text-[16px] leading-[170%] text-[#4B4B56]">
                     Nina I. Koch verfügt über 10+ Jahre Führungserfahrung in Marketing & Kommunikation auf GL-Niveau. Sie kombiniert strategische Markenführung mit umsetzungsstarker Operational Excellence – von integrierten Strategien über Rebrandings bis zu messbarer Kommunikations- und Wachstumwirkung.
                   </p>
                </div>

                {/* Stationen Card */}
                <div className="flex flex-col bg-[#FFFFFF] p-[32px] gap-[20px] w-full h-auto min-h-[302px]">
                   <h3 className="font-inter font-semibold text-[24px] leading-[140%] tracking-[-0.5px] text-[#000000]">
                     Stationen & Erfahrung
                   </h3>
                   <p className="font-inter font-normal text-[16px] leading-[170%] text-[#4B4B56]">
                     Nina steht für Marke, Positionierung und Kommunikation mit messbarer Wirkung. 10+ Jahren GL-Erfahrung in Marketing & Kommunikation. Führte u.a. als Head of Marketing & Communications (Lenz & Staehelin) Marken- und Wachstumsinitiativen, inkl. Marken-Refresh 2023 (18 Monate, 50 Stakeholder), Prozess-Digitalisierung/Automatisierung sowie Kampagnenarbeit. Zuvor Aufbau und Leitung Marketing/Kommunikation bei Kellerhals Carrard; davor Unilever (Strategic Event Management). Ehrenamtlich in Kommissionen und als Vorstandsmitglied tätig.
                   </p>
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}