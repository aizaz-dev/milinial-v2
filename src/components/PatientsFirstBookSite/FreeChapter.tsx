'use client'

import React, { useState } from 'react'
import { ArrowUpRight, CheckCircle2, Loader2 } from 'lucide-react'

const PatientsFirstBookFreeChapter = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Fehler beim Senden.')
      setSuccess(true)
      setEmail('')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Unbekannter Fehler.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      className="relative w-full min-h-[918px] overflow-hidden flex flex-col items-center justify-start  bg-linear-to-b from-[#433E72] to-[#4C39A8]"
    >

      {/* Huge Background Text */}
      <div className="absolute top-[87px] left-1/2 -translate-x-1/2 w-full max-w-[1222px] min-h-[218px] text-center pointer-events-none z-0 select-none overflow-hidden xl:overflow-visible">
        <h1
          className="font-['Inter',sans-serif] font-bold text-[80px] md:text-[130px] lg:text-[180px] leading-[1.1] lg:leading-[218px] tracking-[-0.04em] opacity-70 m-0 p-0 whitespace-nowrap bg-linear-to-b from-white/30 to-white/0 bg-clip-text text-transparent"
        >
          Ihre Leseprobe
        </h1>
      </div>

      {/* Main Glassmorphism Card — wrapped in a relative container for the fading border */}
      <div className="relative z-10 w-full max-w-[1326px] mt-[120px] lg:mt-[270px] mx-4 md:mx-auto rounded-[40px] lg:rounded-[78px]">

        {/* Fading border overlay: 3px border visible at top/sides, fades to transparent at bottom */}
        <div
          className="absolute inset-0 rounded-[40px] lg:rounded-[78px] pointer-events-none z-30"
          style={{
            padding: '3px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0) 100%)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        {/* Glass card body */}
        <div
          className="relative h-auto lg:h-[648px] rounded-[40px] lg:rounded-[78px] overflow-hidden flex flex-col items-center px-6 lg:px-[166px] py-[60px] lg:py-[127px] backdrop-blur-[94px]"
          style={{
            background: 'linear-gradient(178.47deg, rgba(255, 255, 255, 0.1) 1.3%, rgba(198, 198, 198, 0) 117.67%)',
          }}
        >
          {/* Background Decorative Vectors Inside Card */}
          <div
            className="absolute w-[500px] h-[856px] pointer-events-none -left-[100px] top-0 -rotate-45 mask-[linear-gradient(to_bottom,black_60%,transparent_100%)]"
            style={{ background: 'linear-gradient(134.18deg, rgba(186, 197, 255, 0.09) 34.86%, rgba(0, 0, 0, 0) 91.63%)' }}
          />
          <div
            className="absolute w-[205.5px] h-[856px] left-[500px] -top-[200px] pointer-events-none hidden lg:block -scale-x-100 -rotate-40 mask-[linear-gradient(to_bottom,black_60%,transparent_100%)]"
            style={{ background: 'linear-gradient(134.16deg, rgba(186, 197, 255, 0.09) 36.65%, rgba(0, 0, 0, 0) 93.4%)' }}
          />

          <div
            className="absolute w-[205.5px] h-[856px] right-[50px] -top-[200px] pointer-events-none hidden lg:block -scale-x-100 rotate-40 mask-[linear-gradient(to_bottom,black_60%,transparent_100%)]"
            style={{ background: 'linear-gradient(134.16deg, rgba(186, 197, 255, 0.09) 36.65%, rgba(0, 0, 0, 0) 93.4%)' }}
          />


          {/* Card Content Wrapper */}
          <div className="relative z-20 flex flex-col items-center w-full">

            {/* Eyebrow Badge */}
            <div className="bg-[#D6CDFE] rounded-[54px] min-w-[300px] h-[35px] px-[14px] pl-[10px] py-[4px] flex items-center justify-center gap-[4px] mb-[41px]">
              <span className="font-['Figtree',sans-serif] font-normal text-[16px] text-[#5D5D60] leading-[170%] tracking-[-0.2px] text-center whitespace-nowrap">
                Ein Kapitel gratis – direkt in Ihr Postfach
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-['Inter',sans-serif] font-bold text-[36px] lg:text-[56px] leading-[110%] lg:leading-[100%] tracking-[-0.03em] text-white text-center w-full max-w-[989px] mb-[32px]">
              Entdecken Sie, wie ärztliche Führung wirksam, menschlich und konsequent gelingt.
            </h2>

            {/* Subheadline */}
            <p className="font-['Inter',sans-serif] font-medium text-[16px] lg:text-[18px] leading-[140%] lg:leading-[120%] text-[#F1EDED] text-center w-full max-w-[597px] mb-[46px]">
              E-Mail eintragen, <strong className="font-bold">kostenloses</strong> PDF erhalten: ein schneller Einblick in Sprache, Haltung und Werkzeuge aus „Patience First&quot;.
            </p>

            {/* Opt-in Form & Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-[20px] w-full max-w-[527px]">

              {/* Input Group */}
              <div className="flex flex-col w-full md:w-[338.63px] relative">
                {success ? (
                  <div className="flex flex-row items-center justify-center gap-[8px] w-full h-[55px] bg-green-500/20 border border-green-500/50 rounded-[16px] text-white">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="font-['Figtree',sans-serif] font-medium text-[15px]">Leseprobe wurde gesendet!</span>
                  </div>
                ) : (
                  <form 
                    onSubmit={handleSubmit}
                    className="flex flex-row gap-1 relative w-full h-[55px] shadow-[0px_75px_30px_rgba(0,0,0,0.01),0px_42px_25px_rgba(0,0,0,0.05),0px_19px_19px_rgba(0,0,0,0.09),0px_5px_10px_rgba(0,0,0,0.1)]"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      placeholder="eMail eintragen"
                      className="w-full flex-1 h-[55px] bg-white/80 border-none outline-none pl-[16px] pr-[10px] rounded-l-[16px] rounded-r-none font-['Figtree',sans-serif] font-semibold text-[16px] text-[#1B1B1D] tracking-[-0.2px] placeholder-[#1B1B1D] disabled:opacity-70"
                    />
                    <button 
                      type="submit"
                      disabled={loading || !email}
                      className="shrink-0 w-[65px] h-[55px] bg-white rounded-r-[16px] rounded-l-none flex items-center justify-center relative disabled:cursor-not-allowed group"
                    >
                      <div className="w-[38.63px] h-[38.63px] bg-[#E8E7E7] rounded-[12px] flex items-center justify-center group-hover:bg-[#d6d6d6] group-disabled:opacity-70 transition-colors">
                        {loading ? (
                          <Loader2 className="w-[18px] h-[18px] text-[#666666] animate-spin" strokeWidth={2} />
                        ) : (
                          <ArrowUpRight className="w-[18px] h-[18px] text-[#666666]" strokeWidth={2} />
                        )}
                      </div>
                    </button>
                  </form>
                )}
                {error && <span className="absolute -bottom-6 left-0 text-red-200 text-sm">{error}</span>}
              </div>

              {/* Buch Kaufen Button */}
              <button className="w-full md:w-[149px] h-[55px] rounded-[16px] border border-white flex items-center justify-center hover:bg-white/10 transition-colors shadow-[0px_75px_30px_rgba(0,0,0,0.01),0px_42px_25px_rgba(0,0,0,0.05),0px_19px_19px_rgba(0,0,0,0.09),0px_5px_10px_rgba(0,0,0,0.1)] shrink-0">
                <span className="font-['Inter',sans-serif] font-semibold text-[16px] text-white leading-[170%] tracking-[-0.2px]">
                  Buch Kaufen
                </span>
              </button>

            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default PatientsFirstBookFreeChapter
