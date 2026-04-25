"use client"

import { motion } from "framer-motion"

const socials = [
  {
    id: "instagram",
    name: "Instagram",
    handle: "@bananomics.it",
    followers: "142k",
    description: "Tutti i nostri contenuti",
    href: "https://instagram.com/bananomics.it",
    color: "#E1306C",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    id: "tiktok",
    name: "TikTok",
    handle: "@bananomics",
    followers: "215k",
    description: "Tutti i nostri contenuti",
    href: "https://tiktok.com/@bananomics",
    color: "#F5B800",
    icon: (
      <svg width="30" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.35 6.35 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.47a8.16 8.16 0 0 0 4.77 1.52V7.54a4.85 4.85 0 0 1-1-.85z" />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const branchVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
}

export default function SocialPage() {
  return (
    <div className="min-h-screen bg-banana-bg pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-condensed font-semibold text-xs tracking-[0.3em] uppercase text-banana-yellow mb-3">
            Seguici
          </p>
          <h1 className="font-display text-5xl sm:text-6xl text-banana-text mb-4">
            L&apos;ALBERO
            <br />
            <span className="text-banana-yellow">DEI SOCIAL</span>
          </h1>
          <p className="font-body text-banana-muted text-base">
            Tutti i nostri canali, in un unico posto.
          </p>
        </motion.div>

        {/* Tree trunk visual */}
        <div className="flex flex-col items-center">
          {/* Root node */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-12 h-12 rounded-full bg-banana-yellow flex items-center justify-center mb-6 shadow-[0_0_32px_rgba(245,184,0,0.3)]"
          >
            <span className="font-display text-banana-bg text-lg">🍌</span>
          </motion.div>

          {/* Trunk line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="w-px h-12 bg-banana-yellow/40 origin-top mb-6"
          />

          {/* Branches */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full flex flex-col gap-4"
          >
            {socials.map((social) => (
              <motion.a
                key={social.id}
                variants={branchVariants}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-banana-card border border-banana-border hover:border-banana-yellow p-6 flex items-center gap-6 transition-all duration-300"
                whileHover={{ x: 8 }}
              >
                {/* Branch line */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-4 bg-banana-yellow/30" />

                <div
                  className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: `${social.color}20`, color: social.color }}
                >
                  {social.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-display text-2xl text-banana-text group-hover:text-banana-yellow transition-colors">
                    {social.name}
                  </p>
                  <p className="font-condensed text-sm tracking-widest uppercase text-banana-muted">
                    {social.handle}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-display text-3xl text-banana-yellow">{social.followers}</p>
                  <p className="font-condensed text-xs tracking-widest uppercase text-banana-muted">
                    {social.description}
                  </p>
                </div>

                <div className="shrink-0 text-banana-muted group-hover:text-banana-yellow transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Bottom line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="w-px h-12 bg-banana-yellow/20 origin-top mt-6"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="font-condensed text-xs tracking-[0.3em] uppercase text-banana-muted/50 mt-4"
          >
            Altri canali in arrivo
          </motion.div>
        </div>
      </div>
    </div>
  )
}
