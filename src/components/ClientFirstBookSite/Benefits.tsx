import React from 'react'
import { Megaphone, Zap, ShieldCheck, Network, Search, HandCoins } from 'lucide-react'
import { BoltIcon, MegaphoneIcon, PuzzleIcon, HandshakeIcon, ShieldCheckIcon, SearchIcon, HierarchyIcon, StarIcon, CompassIcon, AwardIcon, ListIcon, TrendingUpIcon, ArrowUpRightIcon } from './BookIcons'


import type { LucideProps } from 'lucide-react'

const iconMap: Record<string, React.FC<any>> = {
  Megaphone: MegaphoneIcon,
  Zap: BoltIcon,
  ShieldCheck: ShieldCheckIcon,
  Network: HierarchyIcon,
  Search: SearchIcon,
  HandCoins: HandshakeIcon,
  Star: StarIcon,
  Compass: CompassIcon,
  Award: AwardIcon,
  List: ListIcon,
  TrendingUp: TrendingUpIcon,
  ArrowUpRight: ArrowUpRightIcon,
}
const defaultBenefits = [
  {
    icon: MegaphoneIcon,
    title: 'Entscheidungen klar kommunizieren',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  },
  {
    icon: BoltIcon,
    title: 'Leistung steigern, ohne Kultur zu zerstören',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  },
  {
    icon: BoltIcon,
    title: 'Team-Vertrauen aufbauen',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  },
  {
    icon: MegaphoneIcon,
    title: 'Führung im klinischen Alltag strukturieren',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  },
  {
    icon: PuzzleIcon,
    title: 'Konflikte früh erkennen und wirksam lösen',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  },
  {
    icon: HandshakeIcon,
    title: 'Verantwortung sauber delegieren',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  },
]

export interface BenefitsProps {
  data?: {
    eyebrow?: string;
    headline?: string;
    benefits?: {
     icon?: 'Megaphone' | 'Zap' | 'ShieldCheck' | 'Network' | 'Search' | 'HandCoins' | 'Star' | 'Compass' | 'Award' | 'List' | 'TrendingUp' | 'ArrowUpRight' | null;
      title?: string;
      description?: string;
      id?: string | null;
    }[] | null;
  } | null;
}

const Benefits: React.FC<BenefitsProps> = ({ data }) => {
  const eyebrow = data?.eyebrow || 'Das können Sie daraus mitnehmen'
  const headline = data?.headline || 'Was Sie nach dem Lesen besser können'
  const benefitsList = data?.benefits && data.benefits.length > 0 ? data.benefits : defaultBenefits

  return (
    <section className="w-full bg-[#FFFFFF] py-[80px] lg:py-[100px] flex flex-col items-center">
      {/* Eyebrow */}
      <div className="flex flex-row items-center px-[14px] pl-[10px] py-[4px] gap-[4px] h-[35px] bg-[rgba(174,175,179,0.2)] rounded-[54px] mb-[20px]">
        <span className="font-['Figtree',sans-serif] font-normal text-[16px] leading-[170%] tracking-[-0.2px] text-[#0C2217] whitespace-nowrap">
          {eyebrow}
        </span>
      </div>

      {/* Headline */}
      <h2 className="font-['Archivo',sans-serif] font-semibold text-[32px] md:text-[48px] leading-[115%] tracking-[-1.5px] text-[#262729] text-center max-w-[849px] mb-[80px] lg:mb-[116px]">
        {headline}
      </h2>

      {/* Grid List */}
      <div className="w-full max-w-[1055px] mx-auto px-6 xl:px-0 grid grid-cols-1 md:grid-cols-2 gap-x-[110px] gap-y-[56px]">
        {benefitsList.map((benefit, index) => {
          // If it's from CMS, it's a string, if default, it might be the component itself
          // We will use IconMap for CMS value, otherwise fall back to Megaphone if string not found or component not passed
          const IconComponent = typeof benefit.icon === 'string' 
            ? (iconMap[benefit.icon] || Megaphone) 
            : (benefit.icon || Megaphone)
          
          return (
            <div key={index} className="flex flex-row items-start gap-[20px] w-full">
              {/* Icon */}
              <div className="w-[37px] h-[37px] rounded-full bg-[#6A4BFA] flex items-center justify-center shrink-0">
                <IconComponent className="w-[18px] h-[18px] text-white" strokeWidth={2} />
              </div>

              {/* Text Group */}
              <div className="flex flex-col gap-[13px] w-full">
                <span className="font-['Archivo',sans-serif] font-semibold text-[20px] leading-[150%] text-[#182226]">
                  {benefit.title}
                </span>
                <p className="font-['Archivo',sans-serif] font-normal text-[16px] leading-[150%] text-[#62686A] m-0 max-w-[416px]">
                  {benefit.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Benefits
