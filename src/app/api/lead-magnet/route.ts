import { NextRequest, NextResponse } from 'next/server'
import nodemailer, { TransportOptions } from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'E-Mail-Adresse ist erforderlich.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false },
    } as TransportOptions)

    // ── Pre-styled premium components ─────────────────────────────────────────
    const brandColor = '#4C39A8' // Matching the FreeChapter section gradient
    const accentColor = '#433E72'
    const bgContainer = '#F4F7F6'
    const cardBg = '#FFFFFF'
    const textColor = '#2C2D2F'
    const mutedColor = '#65686C'

    const emailWrapper = (content: string) => `
      <div style="font-family:'Inter',Helvetica,Arial,sans-serif;background-color:${bgContainer};padding:40px 20px;min-height:100vh;">
        <div style="max-width:600px;margin:0 auto;background-color:${cardBg};border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(11,32,78,0.06);">
          ${content}
        </div>
        <div style="max-width:600px;margin:30px auto 0;text-align:center;">
          <p style="color:${mutedColor};font-size:13px;line-height:1.6;">
            <strong>Millennial C</strong><br/>
            CH-5015 Erlinsbach, Solothurn (Schweiz)
          </p>
        </div>
      </div>
    `

    const header = (title: string, subtitle: string) => `
      <div style="background-color:${brandColor};background-image:linear-gradient(to bottom, ${accentColor}, ${brandColor});padding:48px 40px;text-align:center;">
        <h1 style="color:#ffffff;margin:0 0 8px;font-size:26px;font-weight:600;letter-spacing:-0.5px;">${title}</h1>
        <p style="color:rgba(255,255,255,0.8);margin:0;font-size:16px;">${subtitle}</p>
      </div>
    `

    // ── Admin notification ──────────────────────────────────────────────────
    await transporter.sendMail({
      from: `"Lead Magnet" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      subject: `🎉 Neuer Lead für "Patience First" Leseprobe`,
      html: emailWrapper(`
        ${header('Neuer Lead', 'Jemand hat die kostenlose Leseprobe angefordert')}
        <div style="padding:40px;text-align:center;">
          <p style="color:${textColor};font-size:16px;line-height:1.7;margin-top:0;">
            Eine neue E-Mail-Adresse wurde für die Leseprobe aus dem Buch "Patience First" registriert:
          </p>
          <div style="margin:30px 0;padding:20px;background-color:#F8FAFA;border-radius:8px;border:1px solid #E8E9EA;">
            <a href="mailto:${email}" style="color:${brandColor};font-size:20px;font-weight:600;text-decoration:none;">${email}</a>
          </div>
        </div>
      `),
    })

    // ── Auto-reply to user (Lead Magnet Delivery) ─────────────────────────────
    // NOTE: You can attach the actual PDF by adding the `attachments` array to sendMail, 
    // but for now we provide a nice download link/button.
    await transporter.sendMail({
      from: `"Patience First" <${process.env.SMTP_FROM}>`,
      to: email,
      subject: '📚 Ihre kostenlose Leseprobe aus "Patience First" ist da!',
      html: emailWrapper(`
        ${header(`Ihre Leseprobe`, 'Das erste Kapitel wartet auf Sie.')}
        <div style="padding:40px;">
          <p style="color:${textColor};font-size:16px;line-height:1.7;margin-top:0;margin-bottom:24px;">
            Vielen Dank für Ihr Interesse an <strong>"Patience First"</strong>.
          </p>
          <p style="color:${textColor};font-size:16px;line-height:1.7;margin-top:0;margin-bottom:32px;">
            Wie versprochen erhalten Sie hier einen exklusiven Einblick in Sprache, Haltung und Werkzeuge wirksamer, ärztlicher Führung.
          </p>
          
          <div style="text-align:center;margin:40px 0;">
            <!-- TODO: Replace "#" with the actual link to your PDF hosted on your site, e.g., "https://millennialc.ch/FreeChapter_PatienceFirst.pdf" -->
            <a href="#" style="background-color:${brandColor};color:#ffffff;display:inline-block;padding:16px 32px;font-size:16px;font-weight:600;text-decoration:none;border-radius:8px;">
              Leseprobe herunterladen (PDF)
            </a>
          </div>

          <p style="color:${textColor};font-size:16px;line-height:1.7;margin-top:40px;margin-bottom:0;">
            Viel Spass beim Lesen wünscht Ihnen,<br/>
            <strong style="color:${brandColor};">Das Team von Millennial C</strong>
          </p>
        </div>
      `),
    })

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    console.error('[lead-magnet] Error:', err)
    const message = err instanceof Error ? err.message : 'Unbekannter Fehler'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
