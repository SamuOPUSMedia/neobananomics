import { NextRequest, NextResponse } from "next/server"

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email) {
    return NextResponse.json({ error: "Email mancante" }, { status: 400 })
  }

  if (!BEEHIIV_API_KEY || !BEEHIIV_PUBLICATION_ID) {
    return NextResponse.json({ subscribed: false, error: "Config mancante" }, { status: 200 })
  }

  try {
    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions?email=${encodeURIComponent(email)}`,
      {
        headers: {
          Authorization: `Bearer ${BEEHIIV_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )

    if (!res.ok) {
      return NextResponse.json({ subscribed: false }, { status: 200 })
    }

    const data = await res.json()
    const subscribed =
      Array.isArray(data.data) &&
      data.data.some((sub: { status: string }) => sub.status === "active")

    return NextResponse.json({ subscribed })
  } catch {
    return NextResponse.json({ subscribed: false }, { status: 200 })
  }
}
