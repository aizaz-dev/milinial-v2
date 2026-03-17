import React from 'react'

const cards = [
  {
    icon: (
      // Lock / secure icon
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 14.667h-1.333V10.667a6.667 6.667 0 1 0-13.334 0v4H8A2.667 2.667 0 0 0 5.333 17.333v9.334A2.667 2.667 0 0 0 8 29.333h16a2.667 2.667 0 0 0 2.667-2.666v-9.334A2.667 2.667 0 0 0 24 14.667zm-9.333 8.666a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 0 1-2.666 0zM21.333 14.667H10.667V10.667a5.333 5.333 0 1 1 10.666 0v4z"
          fill="white"
        />
      </svg>
    ),
    title: 'Sichere Datenübermittlung',
    text: 'Das Formular wird verschlüsselt übertragen; Daten werden SSL-geschützt verarbeitet.',
  },
  {
    icon: (
      // User protection / discreet icon
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 4C13.06 4 10.667 6.394 10.667 9.333c0 2.94 2.393 5.334 5.333 5.334s5.333-2.394 5.333-5.334C21.333 6.394 18.94 4 16 4zm0 8C14.16 12 12.667 10.507 12.667 8.667S14.16 5.333 16 5.333 19.333 6.827 19.333 8.667 17.84 12 16 12z"
          fill="white"
        />
        <path
          d="M22.667 17.333H21.04A7.987 7.987 0 0 0 16 15.333a7.987 7.987 0 0 0-5.04 2H9.333A5.34 5.34 0 0 0 4 22.667V26a1.333 1.333 0 0 0 1.333 1.333H18a1.333 1.333 0 1 0 0-2.666H6.667v-1.334a2.667 2.667 0 0 1 2.666-2.666h1.227a8 8 0 0 0-.027.666 8 8 0 0 0 16 0c0-.224-.012-.445-.027-.666h.161a1.333 1.333 0 1 0 0-2.667 2.667 2.667 0 0 1 2.666 2.667v1.333h-2a1.333 1.333 0 1 0 0 2.667h2.667A1.333 1.333 0 0 0 31.333 26v-3.333a5.34 5.34 0 0 0-5.333-5.334h-.507l-.013-.014A7.96 7.96 0 0 0 22.667 17.333z"
          fill="white"
        />
        <path d="M20.667 23.333l-1.334 1.334-1.333-1.334-1.334 1.334L18 26l-1.334 1.333L18 28.667l1.333-1.334L20.667 28.667l1.333-1.334L20.667 26l1.333-1.333-1.333-1.334z" fill="white" />
      </svg>
    ),
    title: 'Vertraulich & diskret',
    text: 'Nur die Personen, die für die Einordnung nötig sind. Keine Weitergabe, keine unnötigen Verteiler.',
  },
  {
    icon: (
      // Clock / time icon
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 2.667C8.64 2.667 2.667 8.64 2.667 16S8.64 29.333 16 29.333 29.333 23.36 29.333 16 23.36 2.667 16 2.667zm0 24A10.667 10.667 0 1 1 16 5.333a10.667 10.667 0 0 1 0 21.334z"
          fill="white"
        />
        <path
          d="M16.667 9.333H14.667v7.448l4.943 4.943 1.413-1.413-4.356-4.356V9.333z"
          fill="white"
        />
      </svg>
    ),
    title: 'Schnelle, klare Rückmeldung',
    text: 'Zeitnahe Antwort mit gezielten Fragen – und einer eindeutigen Empfehlung zum nächsten Schritt.',
  },
]

export const ContactTrust: React.FC = () => {
  return (
    <section className="w-full bg-white py-[70px] lg:py-[100px]">
      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col items-center gap-[60px]">

        {/* ── HEADING BLOCK ── */}
        <div className="flex flex-col items-center gap-[16px] w-full text-center">

          {/* Heading + subheading */}
          <div className="flex flex-col items-center gap-[12px] w-full">
            <h2
              className="font-['Inter',sans-serif] font-medium text-[36px] md:text-[48px] lg:text-[58px] leading-[120%] text-center tracking-[-2.5px] text-[#0A0D11] m-0 max-w-[1052px]"
            >
              Vertraulich anfragen – sicher übermittelt
            </h2>
          </div>

          {/* Supporting text */}
          <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[170%] text-center text-[#4B4757] max-w-[548px] m-0">
            Vertrauliche, SSL-geschützte Übermittlung – mit schneller Rückmeldung, auch wenn der Bedarf nicht exakt in die Services passt.
          </p>

        </div>

        {/* ── 3 CARDS ── */}
        <div className="flex flex-col md:flex-row items-stretch gap-[24px] w-full">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex-1 relative bg-[#FCFBFF] rounded-[16px] flex flex-col items-center px-6 py-[31px] gap-[24px] min-h-[286px]"
            >
              {/* Icon bubble */}
              <div
                className="relative w-[70px] h-[70px] rounded-[16px] flex items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(193.18deg, #A899F0 -6.91%, #6A4BFA 73.67%)' }}
              >
                {/* Blurred glow shadow */}
                <div
                  className="absolute w-[71px] h-[30px] rounded-full pointer-events-none"
                  style={{
                    bottom: '-8px',
                    left: '10px',
                    background: 'rgba(49, 45, 65, 0.5)',
                    filter: 'blur(15px)',
                  }}
                />
                <span className="relative z-10">{card.icon}</span>
              </div>

              {/* Text */}
              <div className="flex flex-col items-center gap-[16px] w-full">
                <h3
                  className="font-['Geist',sans-serif] font-semibold text-[24px] leading-[140%] text-center tracking-[-0.5px] text-[#0A0D11] m-0"
                >
                  {card.title}
                </h3>
                <p
                  className="font-['Inter',sans-serif] font-normal text-[16px] leading-[170%] text-center text-[#4B4757] m-0 max-w-[319px]"
                >
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
