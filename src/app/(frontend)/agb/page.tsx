import React from "react";
import type { Metadata } from "next/types";
import { BookPromo } from "@/components/BookPromo";
import { Memberships } from "@/components/Memberships";

export const dynamic = "force-static";
export const revalidate = 600;

export default function AGBPage() {
  return (
    <div className="bg-white text-foreground">
      {/* ── HERO SECTION ── */}
      <div className="px-4 md:px-8 flex justify-center pt-[120px] lg:pt-[140px] pb-12">
        <div
          className="relative flex items-center justify-center overflow-hidden w-full max-w-[1320px] min-h-[400px] md:min-h-[585px] bg-cover bg-center rounded-tr-[16px] rounded-bl-[16px] px-6 md:px-12"
          style={{ backgroundImage: "url('/assets/legal-page/hero-bg.jpg')" }}
        >
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(61,53,97,0.75) 0%, rgba(106,75,250,0.45) 100%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center mx-auto gap-[13px] max-w-[892px]">
            {/* Badge */}
            <span
              className="inline-flex items-center px-[10px] py-[10px] rounded-[54px] font-['Inter',sans-serif] text-[16px] leading-[170%] tracking-[-0.2px] text-white"
              style={{ background: "#7063AA" }}
            >
              Unser &quot;Kleingedrucktes&quot;
            </span>

            {/* Heading */}
            <h1 className="font-['Inter',sans-serif] font-medium text-[40px] md:text-[64px] leading-[110%] tracking-[-2px] md:tracking-[-3px] text-white m-0">
              Unsere AGB
            </h1>

            {/* Subheadline FIXED */}
            <p className="max-w-[794px] font-['Inter',sans-serif] font-light text-[22px] md:text-[40px] leading-[110%] tracking-[-2px] md:tracking-[-3px] text-white m-0">
              Was Sie wissen sollten, bevor es losgeht:
              <br />
              Rechte, Pflichten &amp; Bedingungen
            </p>
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="relative w-full bg-[#FEFEFE] flex justify-center py-[80px]">
        <div className="w-full max-w-[1440px] flex justify-start">
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
            <div
              className="
                w-full max-w-[750px]
                mx-auto xl:mx-0 xl:ml-[345px]
                flex flex-col gap-[32px]
                px-6 xl:px-0
                pb-[120px]
              "
            >
              <p className="text-[#6B7280] text-[14px] mb-[24px]">
                Letztes Update: 01. Januar 2026
              </p>

              <h2 className="text-[30px] font-semibold text-[#333F51]">
                Unsere AGB
              </h2>

              {/* BODY */}
              <div className="flex flex-col gap-[32px] text-[#4C5157] text-[16px] leading-[28px]">
                {/* 1 */}
                <div className="flex flex-col gap-[12px]">
                  <h3 className="font-semibold text-[#333F51]">
                    1. GELTUNGSBEREICH
                  </h3>

                  <p>
                    1.1. Diese Allgemeinen Geschäftsbedingungen (AGBs) regeln
                    das Rechtsverhältnis zwischen den
                    (Beratungs-)Dienstleistungsbezügern (nachfolgend "Kunde")
                    und den Beratungsdienstleistern (im Folgenden "Berater") von
                    Millennial C (nachfolgend "MC"). Mit der Buchung einer
                    (Beratungs-)Dienstleistung stimmen beide Vertragsparteien
                    den vorliegenden, allgemeinen Mandats- und
                    Geschäftsbedingungen (nachfolgend "Bedingungen") zu.
                  </p>

                  <p>
                    1.2. Diese Bedingungen gelten für alle Verträge, deren
                    Gegenstand die Erteilung von Führungsarbeit, Rat und
                    Auskünften durch MC, „5015 Erlinsbach in Solothurn“, ist.
                  </p>

                  <p>
                    1.3. Die vereinbarte Leistung ist das Angebot von
                    Führungslösungen im Sinne einer (Ad-interim-)Führungs- bzw.
                    Managementleistung und / oder Beratung, bei der bestimmte
                    persönliche und / oder organisationale Ziele erreicht werden
                    sollen. Eine Erfüllungsgarantie ist nicht geschuldet.
                  </p>

                  <p>
                    1.4. Die Geltungsdauer dieser AGBs ist auf die Zeit des
                    jeweiligen Beratungseinsatzes (sog. "Assignments" inklusive)
                    beschränkt. Der Kunde ist nicht verpflichtet, den Beratern
                    weitere Einsätze anzubieten bzw. mit ihm weitere
                    Einsatzverträge abzuschliessen. Ebenso ist der Berater nicht
                    verpflichtet, weitere Einsatzangebote des Kunden anzunehmen.
                    Sollten sich die Parteien später auf einen weiteren Einsatz
                    einigen, bestätigen Sie die vorliegenden Bedingungen
                    automatisch.
                  </p>
                </div>

                {/* 2 */}
                <div className="flex flex-col gap-[12px]">
                  <h3 className="font-semibold text-[#333F51]">
                    2. MANDATSVERHÄLTNIS UND AUFTRAGSINHALT
                  </h3>

                  <p>
                    2.1. Das Mandatsverhältnis kommt dadurch zustande, dass der
                    Kunde die angeführten Offerten von MC annimmt bzw.
                    bestätigt.
                  </p>

                  <p>
                    2.2. Der Umfang des Mandatsverhältnisses wird durch den
                    festgelegten Auftragsumfang begrenzt, wie zum Beispiel aus
                    der Anzahl der gebuchten Beratertage oder die Dauer einer zu
                    erbringenden Führungsleistung.
                  </p>

                  <p>
                    2.3. Erweiterungen des Auftrags oder Änderungen des
                    Auftragsumfangs bedürfen der schriftlichen Zustimmung beider
                    Parteien. Mündliche Absprachen oder informelle Änderungen
                    des Auftragsumfangs sind nicht verbindlich. Der Kunde hat
                    das Recht, den Auftrag innerhalb der vereinbarten Frist zu
                    überprüfen und gegebenenfalls Anpassungen oder Erweiterungen
                    vorzuschlagen. In einem solchen Fall ist eine schriftliche
                    Bestätigung des geänderten Auftrags erforderlich und etwaige
                    Änderungen der Vergütung müssen von beiden Parteien
                    genehmigt werden.
                  </p>
                </div>

                {/* 3 */}
                <div className="flex flex-col gap-[12px]">
                  <h3 className="font-semibold text-[#333F51]">
                    3. MANDATSVERHÄLTNIS UND RECHNUNGSSTELLUNG
                  </h3>

                  <p>
                    3.1. Der Auftragsumfang sowie die detaillierten Ziele werden
                    in einer separaten Service-Vereinbarung festgehalten. Zu
                    Beginn eines Prozesses klären die Berater zusammen mit dem
                    Kunden die jeweiligen Erwartungen an die
                    Beratungsdienstleistung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookPromo />
      <Memberships />
    </div>
  );
}

export function generateMetadata(): Metadata {
  return {
    title: "AGB | Millenial Group",
    description:
      "Was Sie wissen sollten – Rechte, Pflichten und Bedingungen im Überblick.",
  };
}
