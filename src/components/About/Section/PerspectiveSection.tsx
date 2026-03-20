import Image from "next/image";

export default function PerspectiveSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-[60px] lg:py-[100px] px-6 lg:px-[58px] flex justify-center relative">
      <div className="w-full max-w-[1320px] flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-start gap-[40px] lg:gap-[72px] w-full lg:w-[581px]">
          {/* TITLE & SUBHEADING */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-row items-center px-[10px] py-[4px] pr-[14px] gap-1 bg-[#EBEDEC] border border-black/5 rounded-[54px]">
              <span className="font-figtree font-normal text-[16px] leading-[27px] tracking-[-0.2px] text-[#0C2217]">
                Unsere Perspektive
              </span>
            </div>

            <h2 className="font-inter font-semibold text-[36px] lg:text-[48px] leading-[120%] tracking-[-2px] text-[#060E1F]">
              Verankert in Beständigkeit. <br className="hidden lg:block" />
              Stark im Wandel.
            </h2>

            <p className="font-inter font-normal text-[18px] lg:text-[20px] leading-[170%] text-[#4D4F54] mt-[16px]">
              Millennials haben den Wandel nicht nur erlebt, sondern
              mitgestaltet. Sie schätzt Beständigkeit, persönlichen Austausch
              und langfristiges Denken – und beherrscht zugleich die Sprache
              der digitalen Transformation: vernetzt, agil und
              lösungsorientiert. Ideale Brückenbauer zu allen Generationen.
              Ergebnisorientiert, transparent und mit Tempo.
            </p>
          </div>

          {/* BOTTOM IMAGE */}
          <div className="relative w-full h-[320px] lg:h-[417px] rounded-tl-none rounded-br-none rounded-tr-[16px] rounded-bl-[16px] overflow-hidden bg-[#4D4F54]">
            <Image
              src="/assets/About/Building.png"
              alt="Atrium Design"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col items-start lg:items-end gap-[40px] lg:gap-[72px] w-full lg:w-[567px] lg:mt-0 mt-8">
          {/* TOP IMAGE */}
          <div className="relative w-full h-[350px] lg:h-[530px] rounded-tl-none rounded-br-none rounded-tr-[16px] rounded-bl-[16px] overflow-hidden bg-[#4D4F54]">
            <Image
              src="/assets/About/office.png"
              alt="Modern Office Building"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <p className="font-inter font-normal text-[18px] lg:text-[20px] leading-[170%] text-[#4D4F54] w-full">
            Gerade im Management ist diese doppelte Verankerung ein grosser
            Vorteil: Wer die Wurzeln versteht und zugleich den Wandel treiben
            kann, schafft nachhaltige Entwicklung. Wir bringen diese
            Perspektive mit und verbinden Erfahrung mit Innovationsgeist,
            operative Exzellenz mit strategischer Weitsicht.
          </p>
        </div>

      </div>
    </section>
  );
}
