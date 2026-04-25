import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { nome, email, type, nomeAzienda, sitoWeb, budget, descrizioneAzienda, motivoContatto } = body

  if (!nome || !email || !motivoContatto) {
    return NextResponse.json({ error: "Campi obbligatori mancanti" }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: "Bananomics Form <noreply@bananomics.it>",
      to: ["samuelefatalo5@gmail.com"],
      replyTo: email,
      subject: `[Bananomics] Nuova richiesta da ${nome}${nomeAzienda ? ` — ${nomeAzienda}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #080B05; color: #F0EDE4; padding: 32px; border: 1px solid #1D2211;">
          <h2 style="color: #F5B800; font-size: 24px; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 0.1em;">
            Nuova richiesta da ${nome}
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="color: #6B6955; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; padding: 8px 0 2px;">Nome</td></tr>
            <tr><td style="color: #F0EDE4; padding-bottom: 16px;">${nome}</td></tr>
            <tr><td style="color: #6B6955; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; padding: 8px 0 2px;">Email</td></tr>
            <tr><td style="color: #F0EDE4; padding-bottom: 16px;">${email}</td></tr>
            <tr><td style="color: #6B6955; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; padding: 8px 0 2px;">Tipo</td></tr>
            <tr><td style="color: #F0EDE4; padding-bottom: 16px;">${type === "azienda" ? "Azienda" : "Privato"}</td></tr>
            ${nomeAzienda ? `
            <tr><td style="color: #6B6955; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; padding: 8px 0 2px;">Azienda</td></tr>
            <tr><td style="color: #F0EDE4; padding-bottom: 16px;">${nomeAzienda}</td></tr>
            ` : ""}
            ${sitoWeb ? `
            <tr><td style="color: #6B6955; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; padding: 8px 0 2px;">Sito web</td></tr>
            <tr><td style="color: #F0EDE4; padding-bottom: 16px;"><a href="${sitoWeb}" style="color: #F5B800;">${sitoWeb}</a></td></tr>
            ` : ""}
            <tr><td style="color: #6B6955; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; padding: 8px 0 2px;">Budget</td></tr>
            <tr><td style="color: #F0EDE4; padding-bottom: 16px;">${budget}</td></tr>
            <tr><td style="color: #6B6955; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; padding: 8px 0 2px;">Descrizione azienda</td></tr>
            <tr><td style="color: #F0EDE4; padding-bottom: 16px; white-space: pre-wrap;">${descrizioneAzienda}</td></tr>
            <tr><td style="color: #6B6955; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; padding: 8px 0 2px;">Motivo del contatto</td></tr>
            <tr><td style="color: #F0EDE4; padding-bottom: 16px; white-space: pre-wrap;">${motivoContatto}</td></tr>
          </table>
          <hr style="border-color: #1D2211; margin: 24px 0;" />
          <p style="color: #6B6955; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em;">
            Bananomics — bananomics.it
          </p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Errore invio email" }, { status: 500 })
  }
}
