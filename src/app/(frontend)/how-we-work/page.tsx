import React from 'react'
import {
  CheckCircle,
  Compass,
  Lightbulb,
  Sparkles,
  Target,
  Users,
  Layers,
  Handshake,
  Layout,
} from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { MarketRealitySection } from '@/components/sections/MarketRealitySection'
import { ProblemSolutionSection } from '@/components/sections/ProblemSolutionSection'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { ProcessSteps } from '@/components/sections/ProcessSteps'
import { Testimonial } from '@/components/sections/Testimonial'
import { FAQ } from '@/components/sections/FAQ'
import { CTABanner } from '@/components/sections/CTABanner'

export const dynamic = 'force-static'
export const revalidate = 600

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection
        tagline="Unsere LbC Methode für KMU & Mid-Market"
        heading="Veränderungen sicher umsetzen – strategisch klar, operativ präsent"
        subheading="Wir verbinden Erfahrung mit einer eigenen LbC-Methodik, die Führung, Organisation und Alltag in Deckung bringt – für sichere Veränderung, schnelle Umsetzung und messbare Resultate bei überschaubarem Risiko."
        image1={{ src: '/website-template-OG.webp', alt: 'Workshop' }}
        image2={{ src: '/website-template-OG.webp', alt: 'Leadership' }}
      />

      <MarketRealitySection
        tagline="Die Realität im Markt"
        heading="Warum klassisches Management nicht mehr reicht"
        intro="Die Anforderungen sind gestiegen, der Spielraum ist kleiner geworden. In dieser Lage erzeugen alte Steuerungslogiken oft Friktion – und genau die wird teuer."
        content={[
          'Unternehmern und Führungskräften wird heute vieles gleichzeitig abverlangt: Nachfolge, Kostendruck, Substanzwerte regenerieren, Digitalisierung, geopolitische Unsicherheit. Was früher mit Planung, Reporting und Kontrolle ausreichend war, führt heute oft zu einem Paradox: Mehr Steuerung – weniger Wirkung.',
          'Die Folge sind Frustration, zäher Fortschritt und mikroökonomische Schäden, die man erst spät in der GuV sieht: Opportunitätskosten, Fluktuation, Qualitätsverluste und verpasste Entscheidungen.',
        ]}
      />

      <ProblemSolutionSection />

      <FeatureGrid
        badge="Woran wir uns orientieren"
        heading="Die 4 Prinzipien von Leadership by Congruence®"
        subheading="Ein gemeinsamer Kern, der Führung, Organisation und Alltag in Deckung bringt damit Entscheidungen greifen und Umsetzung verlässlich wird."
        features={[
          {
            title: 'Kongruenz vor Komplexität',
            description:
              'Warum es wirkt: Wenn Ziele, Entscheidungen und Verhalten nicht zusammenpassen, entsteht Reibung – selbst bei guten Strategien. LbC reduziert Komplexität, bis Richtung und Handeln stimmig sind.\n\nIm Alltag: Wenige priorisierte Outcomes, klare Trade-offs, weniger Parallelprojekte – mehr Fertigstellung.',
            Icon: Users,
          },
          {
            title: 'Verantwortung statt Übersteuerung',
            description:
              'Warum es wirkt: Mikromanagement erhöht kurzfristig Kontrolle, senkt aber mittelfristig Kompetenz, Mut und Tempo. LbC schafft Verantwortung durch saubere Mandate, Entscheidungsrechte und Konsequenz.\n\nIm Alltag: Owner sind sichtbar, Entscheidungen sind zuordenbar, Eskalationen sind erlaubt und früh.',
            Icon: Layers,
          },
          {
            title: 'Wertschätzung ist Wertschöpfung',
            description:
              'Warum es wirkt: Leistung wird nachhaltiger, wenn Menschen Orientierung, Fairness und Beteiligung erleben. Wertschätzung ist bei uns keine „Weichheit“, sondern die Basis für Ownership, Qualität und Geschwindigkeit.\n\nIm Alltag: Klarer Ton, klare Erwartungen, echte Einbindung der Betroffenen – ohne endlose Konsensschleifen.',
            Icon: Handshake,
          },
          {
            title: 'Operative Präsenz mit Blick fürs Ganze',
            description:
              'Warum es wirkt: Gerade in KMU und Mid-Market scheitert Transformation oft an der Lücke zwischen Strategie und Tagesgeschäft. LbC verbindet beides: pragmatische Umsetzung plus Systemblick (Stakeholder, Kultur, Risiken).\n\nIm Alltag: Wir sind dort, wo Wert entsteht (Teams/Prozesse), und halten gleichzeitig Governance und Stakeholder sauber geführt.',
            Icon: Layout,
          },
        ]}
      />

      <ProcessSteps
        steps={[
          {
            title: 'Klarheit schaffen (Diagnose & Prioritäten)',
            description: 'Ziele, Engpässe, Entscheidungslogik, Rollen – mangel/muss.',
            icon: <Compass />,
          },
          {
            title: 'Kongruenz herstellen (Führungssystem ausrichten)',
            description: 'Rollen, Verantwortungen, Steuerung (meeting), Meeting-Architektur.',
            icon: <Target />,
          },
          {
            title: 'Umsetzen im Takt (Execution & Etablieren)',
            description: 'Maßnahmenpläne, Demos, KPI-Tracking, Eskalation / Coaching on the job.',
            icon: <Lightbulb />,
          },
          {
            title: 'Verankern (Stabilisierung & Übergabe)',
            description: 'Standards, Routinen, Governance – damit es ohne uns weiterläuft.',
            icon: <Sparkles />,
          },
        ]}
      />

      <div className="bg-primary/5 py-24">
        <Testimonial
          quote="Wir hatten nicht zu wenig Strategie – wir hatten zu wenig Kongruenz. LbC hat Ziele, Entscheidungswege und Verhalten wieder stimmig gemacht. Ab Woche 6 waren Entscheidungen schneller und Diskussionen kürzer."
          author="Stefan K."
          role="CEO, Mittelstand"
          image="/website-template-OG.webp"
        />
      </div>

      <div className="py-24">
        <FAQ
          heading="Häufig gefragt. Direkt beantwortet."
          questions={[
            {
              question: 'Was ist Leadership by Congruence® (LbC) in einem Satz?',
              answer:
                'Ein Führungsansatz, der Strategie, Struktur und Verhalten in Einklang bringt, um Reibungsverluste zu minimieren und Umsetzungskraft zu maximieren.',
            },
            {
              question: 'Wie schnell sieht man Wirkung?',
              answer:
                'Oft schon nach wenigen Wochen, da wir an den echten Engpässen (Entscheidungen, Rollenklarheit) ansetzen und nicht nur Konzepte schreiben.',
            },
            {
              question: 'Wie unterscheidet sich LbC von OKR/Agile/Change-Programmen?',
              answer:
                'LbC ist kein Framework, das "eingeführt" wird, sondern eine Haltung und Arbeitsweise, die bestehende Strukturen nutzt und optimiert, statt alles umzuwerfen.',
            },
            {
              question: 'Für welche Unternehmen ist das gemacht?',
              answer:
                'Für Organisationen im Wandel, die merken, dass klassische Hierarchie zu langsam, aber reine Selbstorganisation zu chaotisch ist.',
            },
          ]}
        />
      </div>

      <CTABanner
        heading="Wir dürfen wir Verantwortung bei Ihnen übernehmen?"
        subheading="Ob Strategie, Wachstum oder Stabilisierung: Wir unterstützen Sie, Ihre Zielsetzung, via Führungssystem und Leadership by Congruence® – strategisch klar, operativ präsent, messbar wirksam."
        image="/website-template-OG.webp"
      />
    </div>
  )
}
