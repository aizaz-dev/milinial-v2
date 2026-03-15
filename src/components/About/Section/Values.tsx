import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function ValuesSection() {
  const items = [
    "Erreichen der Marktführerschaft. Setzen neuer Branchenstandards",
    "Brückenbauer mit dem Talent, Menschen zu begeistern und zu verbinden",
    "20 Jahre Führung funktionsübergreifen der Teams, davon 15+ Jahre C-Level/Top-Management",
    "Stakeholder-sicher: VR, Geschäftsführung, Agenturen, Sales, Technik, Finance, Verwaltung",
    "Führung über 6 Ebenen und bis zu 10 Standorte: CH, DE, China, Japan",
  ];

  return (
    <section className="w-full py-[80px] bg-[#f6f7f6]">
      <div className="max-w-[1180px] mx-auto">

        <div className="grid grid-cols-[400px_360px_1fr]  gap-[30px] items-start">

          {/* LEFT */}
          <div className="flex flex-col justify-between h-full">
                <div>
                         <div className="inline-block bg-[#EBEDEC] text-[#0C2217] text-[14px] px-4 py-2 rounded-full mb-[24px]">
              Was wir mitbringen
            </div>

            <h2 className="text-[44px] leading-[112%] tracking-[-1px] font-semibold text-[#182226] mb-[22px]">
              Werte, die sich im
              <br />
              Alltag beweisen
            </h2>

            <p className="text-[18px] text-[#3E4447] leading-[160%] max-w-[320px] mb-[30px]">
              Klarheit vor Komplexität, Verantwortung vor Rhetorik, Tempo
              mit Substanz – damit Umsetzung gelingt.
            </p>
                </div>
           

          <button className="bg-[#1A037F] text-white text-[15px] font-medium w-80 py-4 rounded-lg transition">
  Mehr über Leadership by Congruence
</button>
          </div>

          {/* IMAGE */}
          <div className="relative w-full h-[500px] rounded-[12px]    overflow-hidden">
            <Image
              src="/assets/About/meeting.png"
              alt="Office"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-[15px] pt-[4px]">

            {items.map((item, index) => (
              <div key={index} className="flex gap-3">

                <CheckCircle
                  size={20}
                  className="text-[#6A26DA] mt-[4px] shrink-0"
                />

                <p className="text-[16.5px] leading-[165%] text-[#2d3737]">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}