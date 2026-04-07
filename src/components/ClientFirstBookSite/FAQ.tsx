'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CMSFAQData {
  eyebrow?: string | null;
  title?: string | null;
  description?: string | null;
  faqs?: { question: string; answer: string; id?: string | null }[] | null;
}

export interface FAQProps {
  data?: CMSFAQData | null;
  // Legacy direct props (still supported for backwards compat)
  faqs?: FAQItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

const defaultFaqs = [
  {
    question: 'Für wen ist das Buch am hilfreichsten?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Zigi Energy und es lauft alte.',
  },
  {
    question: 'Ist das Buch praxisnah oder theoretisch?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Zigi Energy und es lauft alte.',
  },
  {
    question: 'Wie erhalte ich das kostenlose Kapitel?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Zigi Energy und es lauft alte.',
  },
  {
    question: 'Gibt es das Buch auch als eBook?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Zigi Energy und es lauft alte.',
  },
  {
    question: 'Wo kann ich das Buch bestellen?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Zigi Energy und es lauft alte.',
  },
]

const FAQ: React.FC<FAQProps> = ({
  data,
  faqs: faqsProp,
  eyebrow: eyebrowProp,
  title: titleProp,
  description: descriptionProp,
}) => {
  // CMS data takes priority, but fallback to direct props, then defaults
  const eyebrow = data?.eyebrow ?? eyebrowProp ?? 'Häufige Fragen - transparent'
  const title = data?.title ?? titleProp ?? 'Alles, was Sie vorab wissen möchten'
  const description = data?.description ?? descriptionProp ?? 'Die häufigsten Fragen zum kostenlosen Kapitel und zum Buchkauf – kompakt beantwortet, ohne Kleingedrucktes.'
  const faqs = (data?.faqs && data.faqs.length > 0) ? data.faqs : (faqsProp ?? defaultFaqs)
  const [openIndex, setOpenIndex] = useState<number | null>(1) // Default open second one matching mockup

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-[#F5F8FB] py-[80px] lg:py-[102px] flex flex-col items-center">
      {/* Header Container */}
      <div className="flex flex-col items-center gap-[16px] w-full max-w-[1017px] px-4 md:px-0 mb-[80px]">
        {/* Eyebrow */}
        <div className="flex flex-row justify-center items-center px-[12px] py-[4px] gap-[4px] min-w-[120px] md:min-w-[240px] h-auto md:h-[35px] bg-[#F6F6F6] border border-[rgba(152,157,173,0.3)] rounded-[36px] box-border text-center">
          <span className="font-['Geist',sans-serif] font-normal text-sm md:text-[16px] leading-[170%] text-center text-[#403F3C]">
            {eyebrow}
          </span>
        </div>

        {/* Headline Container */}
        <div className="flex flex-col items-center gap-[16px] w-full">
          <h2 className="font-['Inter',sans-serif] font-semibold text-[40px] md:text-[60px] leading-[120%] text-center tracking-[-1.5px] text-[#050503] m-0">
            {title}
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16px] md:text-[18px] leading-[170%] text-center text-[#403F3C] max-w-[630px] m-0">
            {description}
          </p>
        </div>
      </div>

      {/* FAQs List */}
      <div className="flex flex-col items-center gap-[16px] w-full max-w-[880px] px-4 md:px-0">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index

          return (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`w-full box-border cursor-pointer transition-all duration-300 ease-in-out flex flex-col justify-center ${isOpen
                ? 'bg-[linear-gradient(63.5deg,rgba(106,75,250,0.03)_-7.14%,rgba(106,75,250,0.135)_96.56%)] border border-[rgba(195,187,168,0.2)] rounded-[12px] px-[24px] md:px-[30px] py-[26px]'
                : 'bg-[#FFFFFF] border border-transparent rounded-[12px] px-[24px] md:px-[30px] py-[17px]'
                }`}
            >
              {/* Question Row */}
              <div className="flex flex-row justify-between items-center gap-[20px] w-full">
                <span className="font-['Inter',sans-serif] font-medium text-[16px] md:text-[20px] leading-[170%] text-[#050503]">
                  {faq.question}
                </span>
                <div
                  className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                >
                  <ChevronDown className="w-[24px] h-[24px] text-[#050503]" strokeWidth={2} />
                </div>
              </div>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-[16px]' : 'grid-rows-[0fr] opacity-0 mt-0'
                  }`}
              >
                <div className="overflow-hidden">
                  <p className="font-['Archivo',sans-serif] font-normal text-[16px] leading-[150%] text-[#62686A] m-0 max-w-[677px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQ
