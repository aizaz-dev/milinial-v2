import React, { forwardRef } from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

import { ProblemSolutionSection } from '@/components/sections/ProblemSolutionSection'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { SimpleCTA } from '@/components/sections/SimpleCTA'
import { ServicesHowItWorks } from '@/components/sections/services/ServicesHowItWorks'
import { TestimonialSlider } from '@/components/sections/TestimonialSlider'
import PatientsFirstBookFAQ from '@/components/PatientsFirstBookSite/FAQ'
import ChangeSection from '@/components/sections/Change'
import MarketRealitySection from '@/components/sections/MarketRealitySection'
import { BottomCTA } from '@/components/sections/services/BottomCTA'
import { Memberships } from '@/components/Memberships'

const Icon1 = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg ref={ref} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M32.5223 22.2399L27.9981 19.2797L29.7401 16.0863C30.1602 15.2889 30.3804 14.4013 30.3814 13.5V8.43752C30.3849 7.01406 29.9727 5.62055 29.1952 4.42812C28.4178 3.2357 27.3091 2.29626 26.0052 1.72517C24.7013 1.15408 23.259 0.976194 21.8554 1.21336C20.4519 1.45054 19.1481 2.09243 18.1042 3.06024L19.6334 4.71096C20.3567 4.0422 21.2594 3.59903 22.2309 3.43578C23.2024 3.27253 24.2004 3.3963 25.1025 3.79192C26.0047 4.18753 26.7718 4.8378 27.3098 5.66299C27.8478 6.48818 28.1334 7.45243 28.1314 8.43752V13.5C28.1312 14.0249 28.0055 14.542 27.7648 15.0084L25.0285 20.025L31.2904 24.1224C31.7037 24.3929 32.0429 24.7625 32.2771 25.1974C32.5113 25.6324 32.6331 26.119 32.6314 26.613V30.375H27.5689V32.625H34.8814V26.6129C34.8837 25.7451 34.6691 24.8906 34.2571 24.1269C33.8451 23.3631 33.2488 22.7145 32.5223 22.2399Z" fill="#6A4BFA"/>
    <path d="M22.3974 24.4899L17.8733 21.5297L19.6151 18.3363C20.0353 17.5389 20.2555 16.6513 20.2565 15.75V10.6875C20.2551 8.74705 19.484 6.88637 18.1125 5.51372C16.7409 4.14106 14.8808 3.36852 12.9403 3.3656C8.91021 3.3656 5.63154 6.65025 5.63154 10.6875V15.75C5.62724 16.6509 5.84495 17.539 6.26541 18.3358L8.01675 21.5465L3.51893 24.4899C2.7933 24.9637 2.1975 25.6113 1.78559 26.3738C1.37367 27.1363 1.15869 27.9896 1.16016 28.8563L1.125 34.875H24.7565V28.8629C24.7588 27.9951 24.5442 27.1406 24.1322 26.3769C23.7202 25.6131 23.1239 24.9645 22.3974 24.4899ZM22.5065 32.625H3.38808L3.40987 28.8629C3.40819 28.3689 3.52998 27.8823 3.76419 27.4473C3.9984 27.0124 4.33759 26.6429 4.75095 26.3723L10.9864 22.2922L8.24062 17.2584C8.0026 16.7913 7.87949 16.2742 7.88154 15.75V10.6875C7.88154 9.34486 8.41491 8.0572 9.36431 7.10779C10.3137 6.15839 11.6014 5.62502 12.944 5.62502C14.2867 5.62502 15.5744 6.15839 16.5238 7.10779C17.4732 8.0572 18.0065 9.34486 18.0065 10.6875V15.75C18.0063 16.2749 17.8806 16.792 17.6399 17.2584L14.9036 22.275L21.1655 26.3724C21.5788 26.6429 21.918 27.0125 22.1522 27.4474C22.3864 27.8824 22.5082 28.369 22.5065 28.863V32.625Z" fill="#6A4BFA"/>
  </svg>
))
Icon1.displayName = 'Icon1'

const Icon2 = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg ref={ref} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1.25 23.75V38.75M15 31.25H21.25C22.5761 31.25 23.8479 31.7768 24.7855 32.7145C25.7232 33.6522 26.25 34.9239 26.25 36.25H1.25V26.25H10C11.3261 26.25 12.5979 26.7768 13.5355 27.7145C14.4732 28.6522 15 29.9239 15 31.25ZM15 31.25H10M12.0833 21.25V9.58334C12.0833 8.69928 12.4345 7.85144 13.0596 7.22632C13.6848 6.6012 14.5326 6.25001 15.4167 6.25001H35.4167C36.3007 6.25001 37.1486 6.6012 37.7737 7.22632C38.3988 7.85144 38.75 8.69928 38.75 9.58334V21.25C38.75 22.1341 38.3988 22.9819 37.7737 23.607C37.1486 24.2321 36.3007 24.5833 35.4167 24.5833H18.3333M12.0833 12.9167H38.75M25.4167 12.9167V16.25M30.4167 6.25001H20.4167L21.0183 2.64334C21.0832 2.25332 21.2846 1.89906 21.5865 1.64382C21.8884 1.38858 22.2713 1.249 22.6667 1.25001H28.1667C28.5612 1.25019 28.9428 1.39031 29.2437 1.64544C29.5446 1.90057 29.7453 2.25417 29.81 2.64334L30.4167 6.25001Z" stroke="#6A4BFA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
))
Icon2.displayName = 'Icon2'

const Icon3 = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg ref={ref} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M16.5 25.5L19.5 28.5C19.7955 28.7955 20.1463 29.0299 20.5323 29.1898C20.9184 29.3497 21.3321 29.432 21.75 29.432C22.1679 29.432 22.5816 29.3497 22.9677 29.1898C23.3537 29.0299 23.7045 28.7955 24 28.5C24.2955 28.2045 24.5299 27.8537 24.6898 27.4677C24.8497 27.0816 24.932 26.6679 24.932 26.25C24.932 25.8321 24.8497 25.4184 24.6898 25.0323C24.5299 24.6463 24.2955 24.2955 24 24" stroke="#6A4BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.0001 21L24.7501 24.75C25.3468 25.3468 26.1562 25.682 27.0001 25.682C27.844 25.682 28.6534 25.3468 29.2501 24.75C29.8468 24.1533 30.1821 23.3439 30.1821 22.5C30.1821 21.6561 29.8468 20.8468 29.2501 20.25L23.4301 14.43C22.5863 13.5873 21.4426 13.114 20.2501 13.114C19.0576 13.114 17.9138 13.5873 17.0701 14.43L15.7501 15.75C15.1534 16.3468 14.344 16.682 13.5001 16.682C12.6562 16.682 11.8468 16.3468 11.2501 15.75C10.6534 15.1533 10.3181 14.3439 10.3181 13.5C10.3181 12.6561 10.6534 11.8468 11.2501 11.25L15.4651 7.03502C16.8335 5.67024 18.6179 4.80085 20.5361 4.56448C22.4542 4.32811 24.3963 4.73827 26.0551 5.73002L26.7601 6.15002C27.3988 6.5355 28.1582 6.6692 28.8901 6.52502L31.5001 6.00002" stroke="#6A4BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M31.5 4.5L33 21H30M4.5 4.5L3 21L12.75 30.75C13.3467 31.3467 14.1561 31.682 15 31.682C15.8439 31.682 16.6533 31.3467 17.25 30.75C17.8467 30.1533 18.182 29.3439 18.182 28.5C18.182 27.6561 17.8467 26.8467 17.25 26.25M4.5 6H16.5" stroke="#6A4BFA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
))
Icon3.displayName = 'Icon3'

const Icon4 = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg ref={ref} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M31.5 25.5V7.5H4.5V25.5H31.5ZM31.5 4.5C32.2956 4.5 33.0587 4.81607 33.6213 5.37868C34.1839 5.94129 34.5 6.70435 34.5 7.5V25.5C34.5 26.2956 34.1839 27.0587 33.6213 27.6213C33.0587 28.1839 32.2956 28.5 31.5 28.5H24V31.5H12V28.5H4.5C3.70435 28.5 2.94129 28.1839 2.37868 27.6213C1.81607 27.0587 1.5 26.2956 1.5 25.5V7.5C1.5 6.70435 1.81607 5.94129 2.37868 5.37868C2.94129 4.81607 3.70435 4.5 4.5 4.5H31.5ZM7.5 10.5H16.5V16.5H7.5V10.5ZM7.5 19.5H16.5V22.5H7.5V19.5ZM19.5 10.5H28.5V13.5H19.5V10.5ZM19.5 16.5H28.5V22.5H19.5V16.5Z" fill="#6A4BFA"/>
  </svg>
))
Icon4.displayName = 'Icon4'

export const dynamic = 'force-static'
export const revalidate = 60 // Revalidate every 60 seconds to pick up CMS changes

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const howWeWorkFAQ = await payload.findGlobal({
    slug: 'how-we-work-faq',
  })

  return (
    <div className="bg-background text-foreground">
      <ChangeSection />
      <MarketRealitySection />

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
            Icon: Icon1,
          },
          {
            title: 'Verantwortung statt Übersteuerung',
            description:
              'Warum es wirkt: Mikromanagement erhöht kurzfristig Kontrolle, senkt aber mittelfristig Kompetenz, Mut und Tempo. LbC schafft Verantwortung durch saubere Mandate, Entscheidungsrechte und Konsequenz.\n\nIm Alltag: Owner sind sichtbar, Entscheidungen sind zuordenbar, Eskalationen sind erlaubt und früh.',
            Icon: Icon2,
          },
          {
            title: 'Wertschätzung ist Wertschöpfung',
            description:
              'Warum es wirkt: Leistung wird nachhaltiger, wenn Menschen Orientierung, Fairness und Beteiligung erleben. Wertschätzung ist bei uns keine „Weichheit“, sondern die Basis für Ownership, Qualität und Geschwindigkeit.\n\nIm Alltag: Klarer Ton, klare Erwartungen, echte Einbindung der Betroffenen – ohne endlose Konsensschleifen.',
            Icon: Icon3,
          },
          {
            title: 'Operative Präsenz mit Blick fürs Ganze',
            description:
              'Warum es wirkt: Gerade in KMU und Mid-Market scheitert Transformation oft an der Lücke zwischen Strategie und Tagesgeschäft. LbC verbindet beides: pragmatische Umsetzung plus Systemblick (Stakeholder, Kultur, Risiken).\n\nIm Alltag: Wir sind dort, wo Wert entsteht (Teams/Prozesse), und halten gleichzeitig Governance und Stakeholder sauber geführt.',
            Icon: Icon4,
          },
        ]}
      />

      <ServicesHowItWorks />
      <SimpleCTA />

      <TestimonialSlider />

      <PatientsFirstBookFAQ data={howWeWorkFAQ} />

      <BottomCTA
        title="Wo dürfen wir Verantwortung bei Ihnen übernehmen?"
        description="Ob Übergang, Wachstum oder Stabilisierung: Wir unterstützen VR, Geschäftsleitung und Führungsteams mit Leadership by Congruence® – strategisch klar, operativ präsent, messbar wirksam."
        imageSrc="/assets/how-to-work/couple-standing.png"
        primaryButtonText="Leistungen ansehen"
        primaryButtonHref="/services"
        secondaryButtonText="Angebot anfragen"
        secondaryButtonHref="/contact"
      />

      <Memberships />
    </div>
  )
}
