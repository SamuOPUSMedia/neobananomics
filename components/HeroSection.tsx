"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-banana-bg">
      {/* Background jungle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-banana-surface via-banana-bg to-[#040703] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(42,74,24,0.15),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-20 md:py-0">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 md:order-1"
          >
            <p className="font-condensed font-semibold text-sm tracking-[0.3em] uppercase text-banana-yellow mb-4">
              La giungla della finanza
            </p>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none mb-4 text-banana-text">
              EDUCAZIONE
              <br />
              FINANZIARIA
              <br />
              SENZA PALLE.
              <br />
              <span className="text-banana-yellow">SOLO BANANE.</span>
            </h1>
            <p className="font-body text-banana-muted text-lg mb-10 max-w-md">
              Capire i soldi non deve essere noioso.
              <br />
              Benvenuto nella giungla.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/business"
                className="inline-flex items-center gap-2 bg-banana-yellow text-banana-bg font-condensed font-bold text-sm tracking-widest uppercase px-6 py-3 hover:bg-banana-yellow-light transition-colors"
              >
                Per le aziende
              </Link>
              <Link
                href="/contenuti"
                className="inline-flex items-center gap-2 border border-banana-yellow text-banana-yellow font-condensed font-bold text-sm tracking-widest uppercase px-6 py-3 hover:bg-banana-yellow/10 transition-colors"
              >
                Weekly Jungle
              </Link>
              <Link
                href="/social"
                className="inline-flex items-center gap-2 border border-banana-border text-banana-muted font-condensed font-bold text-sm tracking-widest uppercase px-6 py-3 hover:border-banana-yellow hover:text-banana-yellow transition-colors"
              >
                I Nostri Social
              </Link>
            </div>
          </motion.div>

          {/* Right — gorilla image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-full md:h-[500px] max-w-lg">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-banana-yellow/5 rounded-full blur-3xl" />
              {/* Gorilla placeholder — replace with actual image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-full h-full bg-banana-surface rounded-2xl border border-banana-border flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/smirk.webp"
                    alt="Mr. Carmelo"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-banana-bg to-transparent pointer-events-none" />
    </section>
  )
}
