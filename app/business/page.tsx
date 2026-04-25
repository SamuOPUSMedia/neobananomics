"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type ContactType = "privato" | "azienda"
type Budget = "<5000" | "5000-10000" | "10001-15000" | ">15001"

const budgets: { value: Budget; label: string }[] = [
  { value: "<5000", label: "< 5.000€" },
  { value: "5000-10000", label: "5.000 – 10.000€" },
  { value: "10001-15000", label: "10.001 – 15.000€" },
  { value: ">15001", label: "> 15.001€" },
]

export default function BusinessPage() {
  const [type, setType] = useState<ContactType>("privato")
  const [budget, setBudget] = useState<Budget | "">("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [showSuccess, setShowSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type, budget }),
      })
      if (!res.ok) throw new Error()
      setStatus("success")
      setShowSuccess(true)
      form.reset()
      setBudget("")
    } catch {
      setStatus("error")
    }
  }

  const inputClass =
    "w-full bg-banana-surface border border-banana-border text-banana-text placeholder:text-banana-muted font-body text-sm px-4 py-3 focus:outline-none focus:border-banana-yellow transition-colors"

  const labelClass =
    "block font-condensed font-semibold text-xs tracking-widest uppercase text-banana-muted mb-1.5"

  return (
    <div className="min-h-screen bg-banana-bg pt-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-condensed font-semibold text-xs tracking-[0.3em] uppercase text-banana-yellow mb-3">
            Collaborazioni & Partnership
          </p>
          <h1 className="font-display text-5xl sm:text-6xl text-banana-text mb-4">
            LAVORIAMO
            <br />
            <span className="text-banana-yellow">INSIEME?</span>
          </h1>
          <p className="font-body text-banana-muted text-base">
            Compila il form e ti risponderemo nel minor tempo possibile.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Nome */}
          <div>
            <label className={labelClass}>Nome *</label>
            <input name="nome" type="text" required placeholder="Il tuo nome" className={inputClass} />
          </div>

          {/* Email */}
          <div>
            <label className={labelClass}>Email *</label>
            <input name="email" type="email" required placeholder="la.tua@email.com" className={inputClass} />
          </div>

          {/* Tipo contatto */}
          <div>
            <label className={labelClass}>Tipo di contatto *</label>
            <div className="flex gap-3">
              {(["privato", "azienda"] as ContactType[]).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={`flex-1 font-condensed font-bold text-xs tracking-widest uppercase py-3 border transition-colors ${
                    type === t
                      ? "bg-banana-yellow text-banana-bg border-banana-yellow"
                      : "bg-transparent text-banana-muted border-banana-border hover:border-banana-yellow hover:text-banana-yellow"
                  }`}
                >
                  {t === "privato" ? "Privato" : "Azienda"}
                </button>
              ))}
            </div>
          </div>

          {/* Nome azienda (conditional) */}
          <AnimatePresence>
            {type === "azienda" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label className={labelClass}>Nome azienda *</label>
                <input
                  name="nomeAzienda"
                  type="text"
                  required={type === "azienda"}
                  placeholder="Nome della tua azienda"
                  className={inputClass}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sito web */}
          <div>
            <label className={labelClass}>
              Sito web{" "}
              <span className="text-banana-muted/60 normal-case tracking-normal font-body font-normal">
                (consigliato)
              </span>
            </label>
            <input
              name="sitoWeb"
              type="url"
              placeholder="https://tuosito.com"
              className={inputClass}
            />
          </div>

          {/* Budget */}
          <div>
            <label className={labelClass}>Budget *</label>
            <div className="grid grid-cols-2 gap-2">
              {budgets.map((b) => (
                <button
                  key={b.value}
                  type="button"
                  onClick={() => setBudget(b.value)}
                  className={`font-condensed font-semibold text-xs tracking-widest uppercase py-2.5 border transition-colors ${
                    budget === b.value
                      ? "bg-banana-yellow/20 text-banana-yellow border-banana-yellow"
                      : "bg-transparent text-banana-muted border-banana-border hover:border-banana-yellow hover:text-banana-yellow"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          {/* Descrizione azienda */}
          <div>
            <label className={labelClass}>Descrizione azienda *</label>
            <textarea
              name="descrizioneAzienda"
              required
              rows={3}
              placeholder="Di cosa si occupa la tua azienda..."
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Motivo del contatto */}
          <div>
            <label className={labelClass}>Motivo del contatto *</label>
            <textarea
              name="motivoContatto"
              required
              rows={3}
              placeholder="Cosa vorresti fare con Bananomics..."
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Error */}
          {status === "error" && (
            <p className="font-body text-red-400 text-sm">
              Errore nell&apos;invio. Riprova o scrivici direttamente.
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading" || !budget}
            className="w-full bg-banana-yellow text-banana-bg font-condensed font-bold text-sm tracking-widest uppercase py-4 hover:bg-banana-yellow-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Invio in corso..." : "Invia richiesta"}
          </button>
        </motion.form>
      </div>

      {/* Success popup */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 16 }}
              className="bg-banana-surface border border-banana-border p-8 max-w-sm w-full text-center"
            >
              <div className="text-4xl mb-4">🍌</div>
              <h3 className="font-display text-3xl text-banana-text mb-3">Ricevuto!</h3>
              <p className="font-body text-banana-muted text-sm mb-6">
                Grazie per averci contattato! Riceverai una mail per aggiornamenti sulla tua richiesta.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="w-full bg-banana-yellow text-banana-bg font-condensed font-bold text-sm tracking-widest uppercase py-3 hover:bg-banana-yellow-light transition-colors"
              >
                Chiudi
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
