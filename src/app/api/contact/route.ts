import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()
    if (!name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: "exbizIO Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `[exbizio.com] お問い合わせ: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    return Response.json({ ok: true })
  } catch (e) {
    console.error(e)
    return Response.json({ error: "Failed to send" }, { status: 500 })
  }
}
