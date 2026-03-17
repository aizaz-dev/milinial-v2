'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export const ContactForm: React.FC = () => {
  const [agreed, setAgreed] = useState(false)
  const [formData, setFormData] = useState({
    firma: '',
    unternehmensgroesse: '',
    vorname: '',
    nachname: '',
    funktion: '',
    email: '',
    telefon: '',
    artDerBeratung: '',
    anvisierterStart: '',
    nachricht: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle submission
  }

  // Shared input classes
  const inputCls =
    "w-full h-[60px] bg-white border border-[#E8E9EA] rounded-[8px] px-[16px] py-[18px] font-['Inter',sans-serif] font-normal text-[15px] text-[#1E1A1C] placeholder:text-[#AAADB3] outline-none focus:border-[#1A037F] transition-colors"
  const labelCls =
    "font-['Inter',sans-serif] font-medium text-[14px] leading-[170%] tracking-[0.02em] text-[#1E1A1C] mb-[8px] block"

  return (
    <section className="w-full bg-white py-[70px]">
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-[60px]">

        {/* ── TITLE BLOCK — centered, max-w 910px ── */}
        <div className="flex flex-col items-center gap-[16px] w-full max-w-[910px] mx-auto mb-[60px] lg:mb-[70px] text-center">

          {/* Eyebrow */}
          <div className="inline-flex flex-row items-center px-[10px] pr-[14px] py-[4px] gap-[4px] bg-[#EBEDEC] border border-black/4 rounded-[54px]">
            <span className="font-['Figtree',sans-serif] font-normal text-[16px] leading-[170%] tracking-[-0.2px] text-[#0C2217]">
              Kontakt aufnehmen
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-['Inter',sans-serif] font-medium text-[36px] md:text-[48px] lg:text-[58px] leading-[110%] text-[#1E1A1C] m-0">
            Anliegen schildern. Rückmeldung erhalten.
          </h2>

          {/* Subtext */}
          <p className="font-['Inter',sans-serif] font-normal text-[16px] md:text-[18px] leading-[170%] text-[#2C2D2F] max-w-[649px] m-0">
            Zwei Wege zum Start: Erstgespräch buchen oder eine Anfrage per Formular senden. Vertraulich, strukturiert, mit zeitnaher Rückmeldung.
          </p>

        </div>

        {/* ── FORM CARD — max-w 829px centered ── */}
        <div className="w-full max-w-[829px] mx-auto bg-white border border-[#E8E9EA] rounded-[16px] shadow-[0px_10px_30px_rgba(11,32,78,0.06)] px-[30px] md:px-[44px] py-[40px] md:py-[50px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-[25px]">

            {/* Row 1: Firma | Unternehmensgrösse */}
            <div className="flex flex-col sm:flex-row gap-[25px]">
              <div className="flex flex-col flex-1">
                <label className={labelCls} htmlFor="firma">Firma</label>
                <input
                  id="firma"
                  name="firma"
                  type="text"
                  value={formData.firma}
                  onChange={handleChange}
                  className={inputCls}
                  placeholder=""
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className={labelCls} htmlFor="unternehmensgroesse">Unternehmensgrösse (KMU, Grossunternehmen...)</label>
                <input
                  id="unternehmensgroesse"
                  name="unternehmensgroesse"
                  type="text"
                  value={formData.unternehmensgroesse}
                  onChange={handleChange}
                  className={inputCls}
                  placeholder=""
                />
              </div>
            </div>

            {/* Row 2: Vorname | Nachname */}
            <div className="flex flex-col sm:flex-row gap-[25px]">
              <div className="flex flex-col flex-1">
                <label className={labelCls} htmlFor="vorname">Vorname</label>
                <input
                  id="vorname"
                  name="vorname"
                  type="text"
                  value={formData.vorname}
                  onChange={handleChange}
                  className={inputCls}
                  placeholder=""
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className={labelCls} htmlFor="nachname">Nachname</label>
                <input
                  id="nachname"
                  name="nachname"
                  type="text"
                  value={formData.nachname}
                  onChange={handleChange}
                  className={inputCls}
                  placeholder=""
                />
              </div>
            </div>

            {/* Row 3: Funktion — full width */}
            <div className="flex flex-col">
              <label className={labelCls} htmlFor="funktion">Funktion</label>
              <input
                id="funktion"
                name="funktion"
                type="text"
                value={formData.funktion}
                onChange={handleChange}
                className={inputCls}
                placeholder=""
              />
            </div>

            {/* Row 4: eMail | Telefon */}
            <div className="flex flex-col sm:flex-row gap-[25px]">
              <div className="flex flex-col flex-1">
                <label className={labelCls} htmlFor="email">eMail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputCls}
                  placeholder=""
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className={labelCls} htmlFor="telefon">Telefon</label>
                <input
                  id="telefon"
                  name="telefon"
                  type="tel"
                  value={formData.telefon}
                  onChange={handleChange}
                  className={inputCls}
                  placeholder=""
                />
              </div>
            </div>

            {/* Row 5: Art der Beratung | Anvisierter Start */}
            <div className="flex flex-col sm:flex-row gap-[25px]">
              <div className="flex flex-col flex-1">
                <label className={labelCls} htmlFor="artDerBeratung">Art der Beratung</label>
                <input
                  id="artDerBeratung"
                  name="artDerBeratung"
                  type="text"
                  value={formData.artDerBeratung}
                  onChange={handleChange}
                  className={inputCls}
                  placeholder=""
                />
              </div>
              <div className="flex flex-col flex-1">
                <label className={labelCls} htmlFor="anvisierterStart">Anvisierter Start für Ihren gewählten Service</label>
                <input
                  id="anvisierterStart"
                  name="anvisierterStart"
                  type="text"
                  value={formData.anvisierterStart}
                  onChange={handleChange}
                  className={inputCls}
                  placeholder=""
                />
              </div>
            </div>

            {/* Row 6: Nachricht — full width textarea */}
            <div className="flex flex-col">
              <label className={labelCls} htmlFor="nachricht">Nachricht</label>
              <textarea
                id="nachricht"
                name="nachricht"
                value={formData.nachricht}
                onChange={handleChange}
                rows={6}
                className="w-full bg-white border border-[#E8E9EA] rounded-[8px] px-[16px] py-[18px] font-['Inter',sans-serif] font-normal text-[15px] text-[#1E1A1C] placeholder:text-[#AAADB3] outline-none focus:border-[#1A037F] transition-colors resize-none min-h-[152px]"
                placeholder=""
              />
            </div>

            {/* Checkbox consent */}
            <div className="flex flex-row items-start gap-[12px]">
              <input
                id="consent"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-[3px] shrink-0 w-[18px] h-[18px] border border-[#E8E9EA] rounded-[4px] accent-[#1A037F] cursor-pointer"
              />
              <label
                htmlFor="consent"
                className="font-['Inter',sans-serif] font-normal text-[14px] leading-[170%] tracking-[0.02em] text-[#1E1A1C] cursor-pointer"
              >
                Ich erkläre mich mit der Verarbeitung der eingegebenen Daten sowie der Datenschutzerklärung einverstanden. Mit dem Absenden des Formulars erkläre ich mich auch mit den AGBs Millennial C einverstanden.
              </label>
            </div>

            {/* Buttons row */}
            <div className="flex flex-row flex-wrap items-center justify-between gap-[16px] mt-[4px]">
              {/* Submit */}
              <button
                type="submit"
                className="inline-flex items-center justify-center px-[24px] py-[14px] bg-[#1A037F] rounded-[8px] font-['Inter',sans-serif] font-medium text-[16px] leading-[170%] tracking-[0.02em] text-white hover:bg-[#150266] transition-colors whitespace-nowrap"
              >
                Anfrage abschicken
              </button>

              {/* AGB + Datenschutz links */}
              <div className="flex flex-row items-center gap-[24px]">
                <Link
                  href="/agb"
                  className="font-['Inter',sans-serif] font-medium text-[16px] leading-[170%] tracking-[0.02em] text-[#65686C] underline hover:text-[#1E1A1C] transition-colors"
                >
                  AGB
                </Link>
                <Link
                  href="/datenschutz"
                  className="font-['Inter',sans-serif] font-medium text-[16px] leading-[170%] tracking-[0.02em] text-[#65686C] underline hover:text-[#1E1A1C] transition-colors"
                >
                  Datenschutz
                </Link>
              </div>
            </div>

          </form>
        </div>

      </div>
    </section>
  )
}
