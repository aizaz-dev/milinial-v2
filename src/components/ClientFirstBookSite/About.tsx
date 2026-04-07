import React from 'react'

const ClientFirstBookAbout = () => {
  return (
    <section className="w-full bg-[#F1F1F126] py-[80px] lg:py-[120px]">

      {/* Container (same as rest of site) */}
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-[60px] flex justify-center">

        {/* Content Wrapper */}
        <div className="flex flex-col items-center w-full max-w-[900px] gap-[40px] lg:gap-[48px]">
          
          {/* Header */}
          <div className="flex flex-col items-center gap-[24px] w-full">

            {/* Badge */}
            <div className="inline-flex items-center justify-center px-[14px] py-[4px] border border-gray-200 bg-white rounded-[54px]">
              <span className="font-['Figtree'] text-[14px] md:text-[16px] text-[#0C2217]">
                Über das Buch
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-['Inter'] font-semibold text-[36px] md:text-[48px] lg:text-[56px] text-[#1E1A1C] leading-[110%] tracking-[-1px] text-center">
              Was in „Clients First“ drinsteckt
            </h2>

          </div>

          {/* Content */}
          <div className="flex flex-col items-center gap-[24px] w-full text-center">

            <p className="text-[16px] lg:text-[18px] text-[#363435] leading-[170%]">
              Führungskräfte in Professional Service Firms jonglieren täglich zwischen Klientenerwartungen, Teamdynamiken und Ergebnisdruck. Bestehende Führungskonzepte greifen oft zu kurz, weil sie die spezifische Realität von PSFs schlicht nicht kennen.
            </p>

            <p className="text-[16px] lg:text-[18px] text-[#363435] leading-[170%]">
              Philipp R. Juchli zeigt, warum Wirkung kein Zufall ist, sondern das Ergebnis klarer Haltung und gezielter Hebel. Praxisnah, direkt und ohne Umwege: Was wirklich funktioniert, wenn Klienten und Teams gleichzeitig Höchstleistung erwarten.
            </p>

            <p className="text-[16px] lg:text-[18px] text-[#363435] leading-[170%]">
              Wer verstehen will, wie aus Beratern echte Führungspersönlichkeiten werden und wie Klientenbeziehungen von transaktionalen zu wirklich tragfähigen werden, findet hier die entscheidenden Antworten.
              <br />
              <span className="font-semibold text-[#1E1A1C]">
                Konkret. Sofort anwendbar.
              </span>
            </p>

          </div>

        </div>
      </div>
    </section>
  )
}

export default ClientFirstBookAbout