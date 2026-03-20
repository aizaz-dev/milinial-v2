'use client'
import React, { useState } from 'react'
import { useBooking } from '@/providers/Booking'

export default function StepThree() {
  const { setStep, bookingData } = useBooking()
  const [ort, setOrt] = useState<string>('Anruf')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [form, setForm] = useState({
    name: '',
    email: '',
    rolle: '',
    unternehmen: '',
    mobile: '',
    anmerkung: '',
  })

  const [helpOptions, setHelpOptions] = useState({
    erstgesprach: false,
    anliegen: false,
    sonstiges: false,
  })

  // Basic styling classes for reuse
  const labelClass =
    'absolute top-[-10px] left-[15px] px-[6px] bg-white z-10 font-inter font-medium text-[16px] leading-[19px] text-[#263238]'
  const inputContainerClass =
    'w-full h-full border border-[#BDC3C6] rounded-[10px] bg-white flex flex-row items-center px-4 gap-4 focus-within:border-[#044343] transition-colors'
  const inputDivider = 'w-px h-6 bg-[#D6DCDF] shrink-0'
  const inputClass =
    'flex-1 bg-transparent border-none outline-none font-inter font-normal text-[14px] text-[#192020] placeholder-[#BDC3C6]'

  const iconColor = '#BDC3C6'

  const updateForm = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim()) {
      setError('Bitte Name und E-Mail ausfüllen.')
      return
    }
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/send-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          ort,
          helpOptions,
          date: bookingData.date,
          time: bookingData.time,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Fehler beim Senden.')
      setStep(4)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Unbekannter Fehler.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full flex justify-center pt-[42px] px-[26px] md:px-[48px] pb-[98px]">
      <div className="flex flex-col gap-[56px] w-full max-w-[580px]">

        {/* Title */}
        <h2 className="font-inter font-semibold text-[28px] leading-[34px] text-[#192020]">
          Geben Sie Details an
        </h2>

        {/* Form Container */}
        <div className="flex flex-col gap-[48px] w-full">

          {/* Top Fields: Name, Email */}
          <div className="flex flex-col gap-[32px] w-full max-w-[425px]">
            {/* Name */}
            <div className="relative w-full h-[56px]">
              <div className={labelClass}>Name *</div>
              <div className={inputContainerClass}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <div className={inputDivider}></div>
                <input
                  type="text"
                  placeholder="Ihr Name..."
                  className={inputClass}
                  value={form.name}
                  onChange={(e) => updateForm('name', e.target.value)}
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative w-full h-[56px]">
              <div className={labelClass}>E-Mail-Adresse *</div>
              <div className={inputContainerClass}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div className={inputDivider}></div>
                <input
                  type="email"
                  placeholder="example@xyz.com"
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => updateForm('email', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Ort Radios */}
          <div className="flex flex-col gap-[24px] w-full max-w-[425px]">
            <h3 className="font-inter font-medium text-[20px] leading-[24px] text-[#192020]">
              Ort *
            </h3>
            <div className="flex flex-col gap-[18px]">
              {(['Anruf', 'Zoom', 'Teams'] as const).map((option) => {
                const isActive = ort === option
                return (
                  <label
                    key={option}
                    onClick={() => setOrt(option)}
                    className="flex flex-row items-center gap-[8px] cursor-pointer w-fit group"
                  >
                    <div className="w-[26px] h-[26px] rounded-full border border-[#BDC6C6] bg-white flex items-center justify-center relative shrink-0">
                      {isActive && <div className="w-[13px] h-[13px] rounded-full bg-[#044343]"></div>}
                    </div>
                    <div className="flex flex-row items-center gap-[6px]">
                      {option === 'Anruf' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#263238" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      )}
                      {option === 'Zoom' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#263238" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M23 7l-7 5 7 5V7z" />
                          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                        </svg>
                      )}
                      {option === 'Teams' && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#263238" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="6" width="14" height="12" rx="2" ry="2" />
                          <path d="M22 8l-6 4 6 4V8z" />
                        </svg>
                      )}
                      <span className="font-inter font-medium text-[18px] leading-[20px] text-[#263238]">{option}</span>
                    </div>
                  </label>
                )
              })}
            </div>
            {ort === 'Teams' && (
              <span className="font-inter font-normal text-[12px] leading-[12px] text-[#3C413F] ml-[34px] -mt-1">
                Einzelheiten zur Webkonferenz nach Bestätigung.
              </span>
            )}
          </div>

          {/* More Fields: Rolle, Unternehmen, Mobile */}
          <div className="flex flex-col gap-[32px] w-full max-w-[425px]">
            {/* Rolle */}
            <div className="relative w-full h-[56px]">
              <div className={labelClass}>Rolle</div>
              <div className={inputContainerClass}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <circle cx="12" cy="10" r="3" />
                  <path d="M7 20h10" />
                </svg>
                <div className={inputDivider}></div>
                <input
                  type="text"
                  placeholder="Ihre Rolle..."
                  className={inputClass}
                  value={form.rolle}
                  onChange={(e) => updateForm('rolle', e.target.value)}
                />
              </div>
            </div>

            {/* Unternehmen */}
            <div className="relative w-full h-[56px]">
              <div className={labelClass}>Unternehmen</div>
              <div className={inputContainerClass}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                  <path d="M9 22v-4h6v4" />
                  <path d="M8 6h.01" /><path d="M16 6h.01" />
                  <path d="M8 10h.01" /><path d="M16 10h.01" />
                  <path d="M8 14h.01" /><path d="M16 14h.01" />
                </svg>
                <div className={inputDivider}></div>
                <input
                  type="text"
                  placeholder="Ihr Unternehmen..."
                  className={inputClass}
                  value={form.unternehmen}
                  onChange={(e) => updateForm('unternehmen', e.target.value)}
                />
              </div>
            </div>

            {/* Mobile */}
            <div className="relative w-full h-[56px]">
              <div className={labelClass}>Mobile</div>
              <div className={inputContainerClass}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
                <div className={inputDivider}></div>
                <input
                  type="tel"
                  placeholder="+41 07x 123 45 67"
                  className={inputClass}
                  value={form.mobile}
                  onChange={(e) => updateForm('mobile', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Wie dürfen wir Ihnen helfen? */}
          <div className="flex flex-col gap-[24px] w-full max-w-[425px]">
            <h3 className="font-inter font-medium text-[22px] leading-[27px] text-[#192020]">
              Wie dürfen wir Ihnen helfen? *
            </h3>
            <div className="flex flex-col gap-[16px]">
              {(
                [
                  { key: 'erstgesprach', label: 'Unverbindliches Erstgespräch' },
                  { key: 'anliegen', label: 'Konkretes Anliegen' },
                  { key: 'sonstiges', label: 'Sonstiges' },
                ] as { key: keyof typeof helpOptions; label: string }[]
              ).map(({ key, label }) => (
                <label key={key} className="flex flex-row items-center gap-[8px] cursor-pointer group">
                  <div
                    className={`w-[24px] h-[24px] rounded-[4px] border border-[#BDC6C6] bg-white flex items-center justify-center shrink-0 ${helpOptions[key] ? 'border-[#044343] bg-[rgba(4,67,67,0.05)]' : ''}`}
                  >
                    {helpOptions[key] && (
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5L4 7.5L11 1" stroke="#044343" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={helpOptions[key]}
                    onChange={() => setHelpOptions((p) => ({ ...p, [key]: !p[key] }))}
                  />
                  <span className="font-inter font-normal text-[18px] leading-[24px] text-[#192020]">{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Anmerkung */}
          <div className="flex flex-col gap-[24px] w-full max-w-[580px]">
            <h3 className="font-inter font-medium text-[22px] leading-[27px] text-[#192020]">
              Anmerkung
            </h3>
            <textarea
              className="w-full max-w-[426px] h-[142px] border border-[#BDC3C6] rounded-[10px] bg-white p-[20px] outline-none focus:border-[#044343] transition-colors resize-none font-inter font-normal text-[14px] text-[#192020] placeholder-[#CCCCCC]"
              placeholder="Schreiben Sie uns...."
              value={form.anmerkung}
              onChange={(e) => updateForm('anmerkung', e.target.value)}
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-600 font-inter text-[14px] -mt-6">{error}</p>
          )}

          {/* Submit */}
          <div className="flex pt-4">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex flex-row items-center justify-center gap-[16px] w-fit h-[55px] bg-[#1A037F] hover:bg-[#13026A] disabled:opacity-60 disabled:cursor-not-allowed transition-colors rounded-[8px] px-[24px]"
            >
              {loading ? (
                <span className="font-inter font-medium text-[16px] leading-[27px] text-white">Wird gesendet...</span>
              ) : (
                <span className="font-inter font-medium text-[16px] leading-[27px] tracking-[0.02em] text-white">Termin buchen</span>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
