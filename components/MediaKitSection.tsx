"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { mediakit } from "@/config/mediakit"

interface StatRowProps {
  label: string
  value: string
}

function StatRow({ label, value }: StatRowProps) {
  return (
    <div className="flex items-baseline justify-between border-b border-banana-border/50 py-3">
      <span className="font-condensed text-sm tracking-widest uppercase text-banana-muted">{label}</span>
      <span className="font-display text-2xl text-banana-text">{value}</span>
    </div>
  )
}

interface PlatformCardProps {
  name: string
  icon: React.ReactNode
  stats: { followers: string; posts: string; visualTotali: string; likes: string }
  href: string
  delay: number
}

function PlatformCard({ name, icon, stats, href, delay }: PlatformCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className="bg-banana-card border border-banana-border p-6 hover:border-banana-yellow/40 transition-colors"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="text-banana-yellow">{icon}</div>
        <span className="font-display text-xl tracking-wider text-banana-text">{name}</span>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto font-condensed text-xs tracking-widest uppercase text-banana-muted hover:text-banana-yellow transition-colors"
        >
          Visita →
        </a>
      </div>
      <StatRow label="Follower" value={stats.followers} />
      <StatRow label="Post totali" value={stats.posts} />
      <StatRow label="Visual totali" value={stats.visualTotali} />
      <StatRow label="Likes totali" value={stats.likes} />
    </motion.div>
  )
}

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const TikTokIcon = () => (
  <svg width="22" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.35 6.35 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.47a8.16 8.16 0 0 0 4.77 1.52V7.54a4.85 4.85 0 0 1-1-.85z" />
  </svg>
)

export default function MediaKitSection() {
  return (
    <section className="bg-banana-bg py-20 px-4 sm:px-6 border-t border-banana-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="font-condensed font-semibold text-xs tracking-[0.3em] uppercase text-banana-yellow mb-3">
            MediaKit
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-5xl sm:text-6xl text-banana-text leading-tight">
                NUMERI DA GIUNGLA.
                <br />
                <span className="text-banana-yellow">IMPATTO REALE.</span>
              </h2>
              <p className="font-body text-banana-muted text-base mt-4 max-w-md">
                Siamo la community di educazione finanziaria più seguita e irriverente d&apos;Italia.
              </p>
            </div>
            <div className="shrink-0">
              <p className="font-display text-4xl text-banana-yellow text-right leading-tight">
                NUMERI VERI.
                <br />
                ZERO PUFFA.
              </p>
            </div>
          </div>
        </div>

        {/* Platform cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <PlatformCard
            name="Instagram"
            icon={<InstagramIcon />}
            stats={mediakit.instagram}
            href={mediakit.instagram.href}
            delay={0}
          />
          <PlatformCard
            name="TikTok"
            icon={<TikTokIcon />}
            stats={mediakit.tiktok}
            href={mediakit.tiktok.href}
            delay={0.1}
          />
        </div>

        {/* CTA */}
        <div className="border border-banana-border bg-banana-surface p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-condensed font-semibold text-sm tracking-widest uppercase text-banana-text mb-1">
              Sei un&apos;azienda o vuoi collaborare con noi?
            </p>
            <p className="font-body text-banana-muted text-sm">
              Contattaci e ti invieremo il nostro mediakit completo.
            </p>
          </div>
          <Link
            href="/business"
            className="shrink-0 inline-flex items-center gap-2 bg-banana-yellow text-banana-bg font-condensed font-bold text-sm tracking-widest uppercase px-6 py-3 hover:bg-banana-yellow-light transition-colors"
          >
            Lavora con noi
          </Link>
        </div>
      </div>
    </section>
  )
}
