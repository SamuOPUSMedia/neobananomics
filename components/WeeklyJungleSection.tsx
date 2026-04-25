"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

export default function WeeklyJungleSection() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "subscribed" | "not-subscribed" | "error">("idle")

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
      if (data.subscribed) {
        setStatus("subscribed")
        setTimeout(() => router.push("/contenuti"), 1200)
      } else {
        setStatus("not-subscribed")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="bg-banana-surface py-20 px-4 sm:px-6 border-t border-banana-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="font-condensed font-semibold text-xs tracking-[0.3em] uppercase text-banana-yellow mb-3">
              Contenuti esclusivi
            </p>
            <h2 className="font-display text-5xl sm:text-6xl text-banana-text leading-tight mb-4">
              LE ULTIME NOVITÀ
              <br />
              <span className="text-banana-yellow">DELLA JUNGLE</span>
            </h2>
            <p className="font-body text-banana-muted text-base mb-8 max-w-md">
              Ogni settimana contenuti esclusivi, analisi satiriche e pillole di economia che solo noi ti iamo meglio degli altri.
            </p>
          </div>

          {/* Right — CTA */}
          <div>
            {!open ? (
              <button
                onClick={() => setOpen(true)}
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-banana-yellow text-banana-bg font-condensed font-bold text-base tracking-widest uppercase px-8 py-4 hover:bg-banana-yellow-light transition-colors"
              >
                <span>Scopri le ultime novità della Weekly Jungle</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="bg-banana-card border border-banana-border p-6"
                >
                  <p className="font-condensed font-semibold text-sm tracking-widest uppercase text-banana-text mb-1">
                    Verifichiamo che sei già nella Weekly Jungle
                  </p>
                  <p className="font-body text-banana-muted text-sm mb-4">
                    Inserisci l&apos;email con cui ti sei iscritto/a.
                  </p>

                  {status === "subscribed" && (
                    <p className="font-body text-green-400 text-sm font-medium">
                      ✓ Sei nella Jungle! Ti portiamo ai contenuti...
                    </p>
                  )}

                  {status === "not-subscribed" && (
                    <div>
                      <p className="font-body text-banana-yellow text-sm mb-3">
                        Non sei ancora iscritto/a alla Weekly Jungle.
                      </p>
                      <a
                        href="https://weeklyjungle.beehiiv.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block font-condensed font-bold text-sm tracking-widest uppercase bg-banana-yellow text-banana-bg px-4 py-2 hover:bg-banana-yellow-light transition-colors"
                      >
                        Iscriviti gratis →
                      </a>
                    </div>
                  )}

                  {status !== "subscribed" && status !== "not-subscribed" && (
                    <form onSubmit={handleVerify} className="flex gap-2">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="la.tua@email.com"
                        className="flex-1 bg-banana-surface border border-banana-border text-banana-text placeholder:text-banana-muted font-body text-sm px-3 py-2 focus:outline-none focus:border-banana-yellow transition-colors"
                      />
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="bg-banana-yellow text-banana-bg font-condensed font-bold text-sm tracking-widest uppercase px-4 py-2 hover:bg-banana-yellow-light transition-colors disabled:opacity-60"
                      >
                        {status === "loading" ? "..." : "Verifica"}
                      </button>
                    </form>
                  )}

                  {status === "error" && (
                    <p className="font-body text-red-400 text-xs mt-2">
                      Errore di connessione. Riprova.
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
