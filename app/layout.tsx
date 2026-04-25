import type { Metadata } from "next"
import { Bebas_Neue, Barlow_Condensed, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-condensed",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Bananomics — Educazione Finanziaria Senza Palle",
  description:
    "Capire i soldi non deve essere noioso. Benvenuto nella giungla. La community di educazione finanziaria più irriverente d'Italia.",
  keywords: ["finanza", "educazione finanziaria", "investimenti", "bananomics", "mr carmelo"],
  openGraph: {
    title: "Bananomics — Solo Banane",
    description: "Finanza senza palle. Benvenuto nella giungla.",
    url: "https://bananomics.it",
    siteName: "Bananomics",
    locale: "it_IT",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="it"
      className={`${bebasNeue.variable} ${barlowCondensed.variable} ${inter.variable}`}
    >
      <body className="bg-banana-bg text-banana-text font-body antialiased min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
