"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Category = "generale" | "pillole" | "storie" | "novita"

const categories: { id: Category; label: string; description: string; emoji: string }[] = [
  { id: "generale", label: "Generale", description: "Tutti i post pubblicati", emoji: "🍌" },
  { id: "pillole", label: "Pillole di Economia", description: "Tips e concetti economici brevi", emoji: "💊" },
  { id: "storie", label: "Storie", description: "Storie di economia e finanza", emoji: "📖" },
  { id: "novita", label: "Novità", description: "Annunci e news del brand", emoji: "🔥" },
]

type Status = "gate" | "loading" | "error" | "not-subscribed" | "subscribed"

export default function ContenutiPage() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("gate")
  const [activeCategory, setActiveCategory] = useState<Category>("generale")

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    try {
      const res = await fetch("/api/verify-subscriber", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      setStatus(data.subscribed ? "subscribed" : "not-subscribed")
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen bg-banana-bg pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-condensed font-semibold text-xs tracking-[0.3em] uppercase text-banana-yellow mb-3">
            Contenuti esclusivi
          </p>
          <h1 className="font-display text-5xl sm:text-6xl text-banana-text mb-4">
            WEEKLY JUNGLE
          </h1>
          <p className="font-body text-banana-muted text-base">
            La tua dose settimanale di finanza (e caos).
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Email gate */}
          {(status === "gate" || status === "loading" || status === "error") && (
            <motion.div
              key="gate"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-banana-surface border border-banana-border p-8">
                <p className="font-condensed font-bold text-sm tracking-widest uppercase text-banana-text mb-1">
                  Ci sei già?
                </p>
                <p className="font-body text-banana-muted text-sm mb-6">
                  Verifichiamo che tu sia già iscritto/a alla Weekly Jungle.
                </p>

                <form onSubmit={handleVerify} className="space-y-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="la.tua@email.com"
                    className="w-full bg-banana-card border border-banana-border text-banana-text placeholder:text-banana-muted font-body text-sm px-4 py-3 focus:outline-none focus:border-banana-yellow transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-banana-yellow text-banana-bg font-condensed font-bold text-sm tracking-widest uppercase py-3 hover:bg-banana-yellow-light transition-colors disabled:opacity-60"
                  >
                    {status === "loading" ? "Verifica..." : "Verifica accesso"}
                  </button>
                </form>

                {status === "error" && (
                  <p className="font-body text-red-400 text-xs mt-3">Errore di connessione. Riprova.</p>
                )}

                <div className="mt-6 pt-6 border-t border-banana-border text-center">
                  <p className="font-body text-banana-muted text-xs mb-2">Non sei ancora iscritto/a?</p>
                  <a
                    href="https://weeklyjungle.beehiiv.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-condensed font-bold text-xs tracking-widest uppercase text-banana-yellow hover:text-banana-yellow-light transition-colors"
                  >
                    Iscriviti gratis alla Weekly Jungle →
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Not subscribed */}
          {status === "not-subscribed" && (
            <motion.div
              key="not-sub"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="max-w-md mx-auto text-center"
            >
              <div className="text-5xl mb-4">🙈</div>
              <h3 className="font-display text-3xl text-banana-text mb-3">Non sei nella giungla!</h3>
              <p className="font-body text-banana-muted text-sm mb-6">
                Iscriviti gratis alla Weekly Jungle per accedere a tutti i contenuti esclusivi.
              </p>
              <a
                href="https://weeklyjungle.beehiiv.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-banana-yellow text-banana-bg font-condensed font-bold text-sm tracking-widest uppercase px-6 py-3 hover:bg-banana-yellow-light transition-colors"
              >
                Iscriviti gratis →
              </a>
              <button
                onClick={() => setStatus("gate")}
                className="block mx-auto mt-4 font-condensed text-xs tracking-widest uppercase text-banana-muted hover:text-banana-yellow transition-colors"
              >
                ← Riprova con un&apos;altra email
              </button>
            </motion.div>
          )}

          {/* Subscribed — content view */}
          {status === "subscribed" && (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Category tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`font-condensed font-bold text-xs tracking-widest uppercase px-4 py-2 border transition-colors ${
                      activeCategory === cat.id
                        ? "bg-banana-yellow text-banana-bg border-banana-yellow"
                        : "bg-transparent text-banana-muted border-banana-border hover:border-banana-yellow hover:text-banana-yellow"
                    }`}
                  >
                    {cat.emoji} {cat.label}
                  </button>
                ))}
              </div>

              {/* Placeholder content */}
              <div className="bg-banana-surface border border-banana-border p-10 text-center">
                <div className="text-4xl mb-4">
                  {categories.find((c) => c.id === activeCategory)?.emoji}
                </div>
                <p className="font-condensed font-bold text-sm tracking-widest uppercase text-banana-muted mb-2">
                  {categories.find((c) => c.id === activeCategory)?.label}
                </p>
                <p className="font-body text-banana-muted text-sm">
                  I contenuti verranno aggiunti qui manualmente.
                  <br />
                  Torna presto nella giungla.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
