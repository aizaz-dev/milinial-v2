import { NextRequest, NextResponse } from 'next/server'
import nodemailer, { TransportOptions } from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, rolle, unternehmen, mobile, ort, helpOptions, anmerkung, date, time } =
      body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json({ error: 'Name und E-Mail sind Pflichtfelder.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    } as TransportOptions)

    // Which help options were selected
    const selectedHelp = Object.entries(helpOptions || {})
      .filter(([, v]) => v)
      .map(([k]) => {
        if (k === 'erstgesprach') return 'Unverbindliches Erstgespräch'
        if (k === 'anliegen') return 'Konkretes Anliegen'
        if (k === 'sonstiges') return 'Sonstiges'
        return k
      })
      .join(', ')

    // ── Pre-styled premium components ─────────────────────────────────────────
    const brandColor = '#1A037F'
    const accentColor = '#044343'
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
      <div style="background-color:${brandColor};padding:48px 40px;text-align:center;">
        <h1 style="color:#ffffff;margin:0 0 8px;font-size:28px;font-weight:600;letter-spacing:-0.5px;">${title}</h1>
        <p style="color:rgba(255,255,255,0.8);margin:0;font-size:16px;">${subtitle}</p>
      </div>
    `

    const row = (label: string, value: string) => `
      <tr>
        <td style="padding:16px 0;border-bottom:1px solid #E8E9EA;color:${mutedColor};font-size:15px;font-weight:500;width:180px;vertical-align:top;">${label}</td>
        <td style="padding:16px 0;border-bottom:1px solid #E8E9EA;color:${textColor};font-size:16px;vertical-align:top;"><strong>${value}</strong></td>
      </tr>
    `

    // ── Admin notification email ──────────────────────────────────────────────
    await transporter.sendMail({
      from: `"Millennial C Bookings" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      subject: `[Termin] Neue Anfrage von ${name}`,
      html: emailWrapper(`
        ${header('Neue Terminanfrage', 'Details der neuen Buchungsanfrage')}
        <div style="padding:40px;">
          <table style="width:100%;border-collapse:collapse;">
            ${row('Name', name)}
            ${row('E-Mail', `<a href="mailto:${email}" style="color:${brandColor};text-decoration:none;">${email}</a>`)}
            ${rolle ? row('Rolle', rolle) : ''}
            ${unternehmen ? row('Unternehmen', unternehmen) : ''}
            ${mobile ? row('Telefon / Mobile', mobile) : ''}
            ${row('Meeting Ort', ort || 'Anruf')}
            ${selectedHelp ? row('Anliegen / Themen', selectedHelp) : ''}
            ${date && time ? row('Gewünschter Termin', `${date} um ${time} Uhr`) : ''}
          </table>
          ${anmerkung ? `
            <div style="margin-top:32px;background-color:#F8FAFA;padding:24px;border-radius:12px;border-left:4px solid ${accentColor};">
              <h4 style="margin:0 0 12px;color:${accentColor};font-size:14px;text-transform:uppercase;letter-spacing:1px;">Anmerkung / Nachricht:</h4>
              <p style="margin:0;color:${textColor};font-size:15px;line-height:1.6;white-space:pre-wrap;">${anmerkung}</p>
            </div>
          ` : ''}
        </div>
      `),
    })

    // ── Auto-reply to user ────────────────────────────────────────────────────
    await transporter.sendMail({
      from: `"Team Millennial C" <${process.env.SMTP_FROM}>`,
      to: email,
      subject: 'Ihre Terminanfrage bei Millennial C',
      html: emailWrapper(`
        ${header(`Hallo ${name},`, 'Ihre Terminanfrage ist bei uns eingegangen.')}
        <div style="padding:40px;">
          <p style="color:${textColor};font-size:16px;line-height:1.7;margin-top:0;margin-bottom:32px;">
            Vielen Dank für Ihr Vertrauen. Wir haben Ihre Terminanfrage erhalten und werden uns in Kürze mit Ihnen in Verbindung setzen, um den Termin final zu bestätigen.
          </p>
          
          <h3 style="color:${brandColor};font-size:18px;margin:0 0 16px;border-bottom:2px solid ${brandColor};padding-bottom:12px;display:inline-block;">Ihre Buchungsdetails</h3>
          
          <table style="width:100%;border-collapse:collapse;margin-bottom:32px;">
            ${date && time ? row('Wunschtermin', `${date} um ${time} Uhr`) : ''}
            ${row('Ort / Format', ort || 'Anruf')}
            ${selectedHelp ? row('Besprechungsthema', selectedHelp) : ''}
          </table>

          <div style="background-color:rgba(26,3,127,0.04);padding:24px;border-radius:12px;">
            <p style="margin:0;color:${brandColor};font-size:15px;line-height:1.6;">
              <strong>Wie geht es weiter?</strong><br/>
              Sobald wir Ihren Termin bestätigt haben, erhalten Sie ${ort === 'Zoom' || ort === 'Teams' ? `den Einladungslink für die ${ort}-Konferenz` : 'weitere Details'} per separater E-Mail. Bei Fragen können Sie jederzeit auf diese E-Mail antworten.
            </p>
          </div>
          
          <p style="color:${textColor};font-size:16px;line-height:1.7;margin-top:40px;margin-bottom:0;">
            Mit freundlichen Grüssen,<br/>
            <strong style="color:${brandColor};">Team Millennial C</strong>
          </p>
        </div>
      `),
    })

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    console.error('[send-booking] Error:', err)
    const message = err instanceof Error ? err.message : 'Unbekannter Fehler'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
