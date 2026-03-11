import React from 'react'
import { cn } from '@/utilities/ui'
import { Zap, XCircle } from 'lucide-react'

interface ProblemItem {
  title?: string
  description: string
}

interface ProblemSolutionProps {
  className?: string
}

export const ProblemSolutionSection: React.FC<ProblemSolutionProps> = ({ className }) => {
  const painPoints: ProblemItem[] = [
    {
      title: 'Zu viele Prioritäten gleichzeitig:',
      description: 'Alles ist wichtig – dadurch wird nichts konsequent fertig.',
    },
    {
      title: 'Entscheidungen werden langsam:',
      description: 'Zu viele Schleifen, zu wenig klare Verantwortung.',
    },
    {
      title: 'Mikromanagement nimmt zu:',
      description: 'Kontrolle ersetzt Vertrauen – Ownership sinkt.',
    },
    {
      title: 'Silos & politische Reibung:',
      description: 'Abstimmung frisst Energie, statt Wert zu schaffen.',
    },
    {
      title: 'Change-Müdigkeit:',
      description: 'Initiativen starten, aber verankern nicht im Alltag.',
    },
  ]

  const symptoms: ProblemItem[] = [
    {
      description: 'Meetings nehmen zu, Resultate nicht.',
    },
    {
      description: 'Projekte laufen „gelb/rot“, aber es gibt keine echte Eskalation.',
    },
    {
      description: 'Führungskräfte sind im Tagesgeschäft gefangen, Strategie bleibt PowerPoint',
    },
    {
      description: 'Leistungsträger ziehen sich zurück oder gehen – Kultur kippt leise.',
    },
  ]

  return (
    <section className={cn('container mb-32', className)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left Column: Pain-Punkte */}
        <div>
          <h3 className="text-xl font-medium text-foreground mb-6">Pain-Punkte</h3>
          <div className="bg-[#F5F5FA] rounded-3xl p-8 space-y-4">
            {painPoints.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white rounded-full px-6 py-4 shadow-sm border border-purple-100/50"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-red-200 text-red-500 bg-red-50">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="text-sm">
                  {item.title && <span className="font-bold text-foreground block md:inline md:mr-1">{item.title}</span>}
                  <span className="text-muted-foreground">{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Typische Symptome */}
        <div className="flex flex-col">
          <h3 className="text-xl font-medium text-foreground mb-6">Typische Symptome</h3>
          <div className="bg-[#F5F5FA] rounded-3xl p-8 space-y-4 mb-8">
            {symptoms.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white rounded-full px-6 py-4 shadow-sm border border-purple-100/50"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-red-200 text-red-500 bg-red-50">
                  <XCircle className="w-4 h-4" />
                </div>
                <div className="text-sm text-foreground font-medium">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-auto px-2">
            <p className="text-sm leading-relaxed text-foreground font-medium">
              Genau hier setzt Leadership by Congruence® an: <span className="text-muted-foreground font-normal">Nicht mit mehr Programmen, sondern indem Richtung, Verhalten und System wieder zusammenpassen. So wird Veränderung steuerbar, Teams ziehen mit und Umsetzung wird wieder verlässlich.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
