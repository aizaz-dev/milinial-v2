import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ServiceHero } from '@/components/sections/services/ServiceHero'
import { ServiceSection } from '@/components/sections/services/ServiceSection'
import { PurpleCTA } from '@/components/sections/services/PurpleCTA'
import { CaseStudySection } from '@/components/sections/services/CaseStudySection'
import PatientsFirstBookFAQ from '@/components/PatientsFirstBookSite/FAQ'
import { ServicesHowItWorks } from '@/components/sections/services/ServicesHowItWorks'
import { Memberships } from '@/components/Memberships'
import { BottomCTA } from '@/components/sections/services/BottomCTA'
import { ServicesCTA } from '@/components/sections/services/ServicesCTA'

export const dynamic = 'force-static'
export const revalidate = 600

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <ServiceHero />

      {/* Section Intro */}
      <section className="w-full bg-[#F5F8FB] pt-[80px] lg:pt-[130px]">
        <div className="flex flex-col items-center gap-[30px] w-full px-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center py-[4px] pl-[10px] pr-[14px] gap-[4px] bg-[#EBEDEC] border border-[rgba(0,0,0,0.04)] rounded-[54px]">
            <span className="font-['Figtree',sans-serif] font-normal text-[16px] leading-[170%] tracking-[-0.2px] text-[#0C2217] whitespace-nowrap">
              Leistungsspektrum
            </span>
          </div>
          {/* Heading */}
          <h2 className="font-['Inter',sans-serif] font-semibold text-[32px] lg:text-[52px] leading-[120%] tracking-[-1px] text-center text-black m-0 max-w-[912px]">
            Drei Services – ein gemeinsamer Kern
          </h2>
          {/* Subheader */}
          <p className="font-['Inter',sans-serif] font-medium text-[16px] leading-[170%] text-center text-[#4B4B56] m-0 max-w-[802px]">
            Drei Service-Linien für KMU & Mid-Market: Stabilisieren, integrieren, transformieren – strukturiert, umsetzungsstark, verlässlich.
          </p>
        </div>

        {/* Service 1: Restrukturierung */}
        <ServiceSection
          title="Restrukturierungen, Sanierung & Turnaround"
          description="Stabilität und Liquiditätssicherung: nicht (nur) durch Kostenkürzung, sondern durch operative Klarheit und Führung."
          situations={[
            'Ergebnis- und Liquiditätsdruck; Kostenziele gehen nicht mehr auf',
            'Margenerosion, Preiskraft schwindet bei Stoff/Log. Volatilität',
            'Operative Probleme: Schlechte Quali, Ausfälle, Durchlaufzeiten',
            'Führung im Übergang: Unsicherheit, Haltung, unklare Erwartungshaltung'
          ]}
          benefits={[
            'Sofortige Transparenz: Klares Cash-Reporting, Maßnahmen-Tracking',
            'Operative Stabilisierung: Einsetzung in die kritischen Mechanismen',
            'Kommunikative Führung: In sensiblen Momenten',
            'Steuerung & Konsequenz: Takt, KPI-Logik, Entscheidungs- & Genehmigungsmechanik'
          ]}
          image="/assets/services/feature-image-1.png"
          reversed={false}
        />

        {/* Service 2: Interim COO */}
        <ServiceSection
          title="Interim COO & Operating Partner (Integration)"
          description="Integration von Übernahme oder Fusion (Post-Merger-Integration): Synergien realisieren, Kultur bewahren – und Tagesgeschäft stabil halten."
          situations={[
            'Post-Merger-Integration, Fusion, Carve-out, Buy & Build',
            'Unklare Verantwortung zwischen „Alt" und „Neu" (Doppelstrukturen)',
            'Unvereinbare Prozesse, Systeme, KPIs, IT-Landschaft',
            'Synergien geplant, aber nicht in Umsetzung übersetzt'
          ]}
          benefits={[
            'Integrations-Roadmap & Brücke: (PMO/IMO) mit starkem Business-Fokus',
            'Operating Partner: Mandat, Entscheidungskräfte, KPI-Tracking',
            'Kulturelle und Menschenführung: Brücken bauen',
            'Schnittstellenklärung und Harmonisierung der operativen Routinen',
            'Hands-on Interim Führung (COO-level, part-time) zum Stabilisieren'
          ]}
          image="/assets/services/feature-image-2.png"
          reversed={true}
        />

        {/* Service 3: Transformation */}
        <ServiceSection
          title="Transformation (Performance & Wirksamkeit)"
          description="Leistungssteigerung, Wachstum und Veränderung verankern – mit einem Vorgehen, das den Alltag greift statt nur Papierwände zu erstellen."
          situations={[
            'Wachstumsschmerzen: Komplexität frisst Marge, Führung kommt nicht hinterher',
            'Strategiewechsel, neues Geschäftsmodell, Portfoliobereinigung',
            'Zu viele Meetings, zu wenig Entscheidungen, zu wenig Accountability',
            'Ineffiziente Abläufe, lange Durchlaufzeiten, hohe Reibung an Schnittstellen',
            'Kultur / Haltungsthemen blockieren die Vorhaben'
          ]}
          benefits={[
            'Performance Portfolio: Fokus, Engpass, Hebel, messbarer Fortschritt',
            'Operating Model: Rollen, Routinen, Governance, KPI-Set',
            'Führungsqualität: Verantwortungskultur, Entscheidung, kongruentes Verhalten',
            'Enablement: Umsetzungskompetenz im Führungsteam (on the job)'
          ]}
          image="/assets/services/feature-image-3.png"
          reversed={false}
        />
      </section>


      {/* CTA — Nicht gefunden */}
      <ServicesCTA />

      {/* Steps */}
      <ServicesHowItWorks />

      {/* Case Studies */}
      <CaseStudySection />

      {/* FAQ */}
      <PatientsFirstBookFAQ
        eyebrow="Häufige Fragen"
        title="Häufig gestellte Fragen"
        description="Alle wichtigen Informationen zu unserem Vorgehen, unserer Arbeitsweise und Preisgestaltung auf einen Blick."
        faqs={[
          {
            question: 'Wie wird Vertraulichkeit sichergestellt – gerade in sensiblen Situationen?',
            answer: 'Wir arbeiten mit strengen NDAs und diskreten Kommunikationswegen. In sensiblen Phasen (z.B. Restrukturierung) agieren wir im Hintergrund oder mit neutraler Mandatierung.',
          },
          {
            question: 'Wie schnell sieht man Wirkung?',
            answer: 'Unser Ansatz zielt auf schnelle Stabilisierung. Oft sind bereits nach wenigen Tagen/Wochen erste operative Effekte (Cash, Ruhe, Klarheit) sichtbar.',
          },
          {
            question: 'Wie schnell kann gestartet werden?',
            answer: 'In akuten Krisen oft innerhalb von 48 Stunden. Bei geplanten Transformationen stimmen wir den Starttermin gemeinsam ab.',
          },
          {
            question: 'Wie läuft die Preisgestaltung ab?',
            answer: 'Transparent und erfolgsorientiert. Tagessätze oder Pauschalen je nach Mandat, oft kombiniert mit einer Erfolgskomponente.',
          },
          {
            question: 'Wird vor Ort (im Office) gearbeitet?',
            answer: 'Ja, operative Präsenz ist Teil des Modells. Wir sind dort, wo die Entscheidungen fallen und die Wertschöpfung stattfindet – aber nicht unnötig permanent.',
          },
        ]}
      />

      {/* Bottom CTA */}
      <BottomCTA />

      {/* Logos Section */}
      <Memberships />

    </div>
  )
}
