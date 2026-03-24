import React from "react";
import type { Metadata } from "next/types";
import { BookPromo } from "@/components/BookPromo";
import { Memberships } from "@/components/Memberships";

export const dynamic = "force-static";
export const revalidate = 600;

export default function DatenschutzPage() {
  return (
    <div className="bg-white text-foreground">
      {/* ── HERO SECTION ── */}
      <div className="px-4 md:px-8 flex justify-center pt-10 md:pt-24 pb-12">
        <div
          className="relative flex items-center justify-center overflow-hidden w-full max-w-[1320px] min-h-[400px] md:min-h-[585px] bg-cover bg-center rounded-tr-[16px] rounded-bl-[16px] px-6 md:px-12"
          style={{ backgroundImage: "url('/assets/legal-page/hero-bg.jpg')" }}
        >
          {/* Dak roverlay for readability */}
<div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(61,53,97,0.75) 0%, rgba(106,75,250,0.45) 100%)",
            }}
          />
          <div className="relative z-10 flex flex-col items-center text-center mx-auto gap-[13px] max-w-[892px]">
            {/* Eyebrow Badge */}
            <span
              className="inline-flex items-center px-[10px] py-[10px] rounded-[54px] font-['Inter',sans-serif] font-normal text-[16px] leading-[170%] tracking-[-0.2px] text-white"
              style={{ background: "#7063AA" }}
            >
              Unser &quot;Kleingedrucktes&quot;
            </span>

            {/* Heading */}
            <h1 className="font-['Inter',sans-serif] font-medium text-[40px] md:text-[64px] leading-[110%] tracking-[-2px] md:tracking-[-3px] text-center text-white m-0">
              Datenschutz{" "}
            </h1>

            {/* Subheadline */}
            <p className="max-w-[794px] font-['Inter',sans-serif] font-light text-[22px] md:text-[40px] leading-[110%] tracking-[-2px] md:tracking-[-3px] text-center text-white m-0">
              Angaben und Informationen zum Umgang mit personenbezogenen Daten
              auf einen Blick.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* ── LEGAL CONTENT SECTION ── */}
      <div className="relative w-full bg-[#FEFEFE] flex justify-center py-[80px]">
        {/* 1440 container */}
        <div className="w-full max-w-[1440px] flex justify-start">
          {/* Scroll Area */}
          <div
            className="
        w-full xl:w-[1284px]
        max-h-[75vh] xl:max-h-[1500px]
        overflow-y-auto

        [&::-webkit-scrollbar]:w-[8px]
        [&::-webkit-scrollbar-track]:bg-[#E5E7EB]
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-[#7063AA]
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:border-[2px]
        [&::-webkit-scrollbar-thumb]:border-[#E5E7EB]

        [scrollbar-width:thin]
        [scrollbar-color:#7063AA_#E5E7EB]
      "
          >
            {/* Content Container (LEFT OFFSET EXACT) */}
            <div
              className="
        w-full max-w-[750px]
        mx-auto xl:mx-0 xl:ml-[345px]
        flex flex-col
        gap-[32px]
        px-6 xl:px-0
        pb-[120px]
      "
            >
              {/* Last Update */}
              <p className="text-[#6B7280] text-[14px] mb-[24px]">
                Letztes Update: 22. März 2026
              </p>

              {/* Title */}
              <h2 className="text-[30px] font-semibold text-[#333F51] mb-[16px]">
                Impressum & Datenschutz
              </h2>

              {/* BODY */}
              <div className="flex flex-col gap-[32px] text-[#4C5157] text-[16px] leading-[28px]">
                {/* Herausgeber */}
                <div className="flex flex-col gap-[12px]">
                  <h3 className="font-semibold text-[#333F51]">
                    Herausgeber dieses Internet-Auftritts
                  </h3>
                  <p>
                    Millennial C<br />
                    Eichenheimweg 1<br />
                    5015com Erlinsbach, Solothurn
                    <br />
                    p.juchli [ät] millennial-c.com
                  </p>
                </div>

                {/* Allgemein */}
                <div className="flex flex-col gap-[12px]">
                  <h3 className="font-semibold text-[#333F51]">Allgemein</h3>
                  <p>
                    Diese Internetseite (nachfolgend: Website) von Millennial C
                    (nachfolgend: Millennial C) ist mit grösstmöglicher Sorgfalt
                    zusammengestellt worden. Die inhaltliche Genauigkeit und
                    Fehlerfreiheit können indes nicht garantiert werden. Wir
                    schliessen jegliche Haftung für unzutreffende,
                    unvollständige oder veraltete Informationen, die sich auf
                    der Website befinden, aus.
                  </p>
                  <p>
                    Personen, welche die auf der Website der veröffentlichten
                    Informationen abrufen, erklären sich mit den nachstehenden
                    Bedingungen einverstanden.
                  </p>
                </div>

                {/* Urheberrecht */}
                <div className="flex flex-col gap-[12px]">
                  <h3 className="font-semibold text-[#333F51]">Urheberrecht</h3>
                  <p>
                    Der gesamte Inhalt der Website ist urheberrechtlich
                    geschützt. Die Rechte an den Inhalten, Marken, Logos und
                    anderer Daten auf der Website gehören Millennial C. Das
                    Herunterladen und Ausdrucken einzelner Seiten oder Bereiche
                    der Website ist erlaubt, sofern weder die Copyright-Vermerke
                    noch andere gesetzlich geschützte Bezeichnungen entfernt
                    noch die heruntergeladenen Original-Daten modifiziert
                    werden. Als Quelle der Informationen müssen Sie unsere
                    Webseiten angeben. Sämtliche Rechte verbleiben bei
                    Millennial C.
                  </p>
                  <p>
                    Das Reproduzieren, Übermitteln (elektronisch oder mit
                    anderen Mitteln), Modifizieren, Verknüpfen oder Benutzen der
                    Website für öffentliche oder kommerzielle Zwecke ist ohne
                    vorgängige schriftliche Zustimmung von Millennial C nicht
                    erlaubt.
                  </p>
                  <p>
                    Teile dieser Website enthalten Bilder, Fotos und Inhalte
                    Dritter, die dem Urheber- und Markenrecht unterliegen.
                    Hierbei gelten die Urheber- und Markenrechte der
                    rechtmässigen Besitzer.
                  </p>
                </div>

                {/* Haftung */}
                <div className="flex flex-col gap-[12px]">
                  <h3 className="font-semibold text-[#333F51]">
                    Haftungsausschluss
                  </h3>
                  <p>
                    Millennial C übernimmt keinerlei Gewähr hinsichtlich der
                    inhaltlichen Richtigkeit, Genauigkeit, Aktualität,
                    Zuverlässigkeit und Vollständigkeit der Informationen.
                    Jegliche Haftungsansprüche gegen Millennial C wegen Schäden
                    materieller oder immaterieller Art, welche aus dem Zugriff
                    oder der Nutzung bzw. Nichtnutzung der veröffentlichten
                    Informationen, durch Missbrauch der Verbindung oder durch
                    technische Störungen entstanden sind, werden ausgeschlossen.
                  </p>
                  <p>
                    Alle Angebote sind unverbindlich. Millennial C behält sich
                    ausdrücklich vor, Teile der Seiten oder das gesamte Angebot
                    ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu
                    löschen oder die Veröffentlichung zeitweise oder endgültig
                    einzustellen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ── ADDITIONAL COMPONENTS ── */}
      <BookPromo />
      <Memberships />
    </div>
  );
}

export function generateMetadata(): Metadata {
  return {
    title: "Datenschutz | Millenial Group",
    description:
      "Alle rechtlichen Angaben und Informationen zum Umgang mit personenbezogenen Daten auf einen Blick.",
  };
}
