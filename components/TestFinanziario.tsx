"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { difficulties, questions, type Difficulty, type DifficultyConfig } from "@/config/quiz"

type Phase = "entry" | "config" | "quiz" | "result" | "leaderboard"

interface QuizState {
  difficulty: DifficultyConfig | null
  currentQ: number
  answers: (number | null)[]
  score: number
  answered: boolean
  selectedAnswer: number | null
}

function ShareCard({ score, total, difficulty }: { score: number; total: number; difficulty: string }) {
  return (
    <div className="w-[320px] h-[568px] bg-banana-bg flex flex-col items-center justify-center p-8 border-4 border-banana-yellow">
      <p className="font-display text-2xl text-banana-yellow tracking-widest mb-2">BANANOMICS</p>
      <p className="font-condensed text-xs tracking-[0.3em] uppercase text-banana-muted mb-8">Test Finanziario</p>
      <p className="font-display text-8xl text-banana-text mb-2">{score}/{total}</p>
      <p className="font-display text-3xl text-banana-yellow uppercase mb-8">{difficulty}</p>
      <p className="font-body text-banana-muted text-xs text-center">
        Provalo anche tu su bananomics.it
      </p>
    </div>
  )
}

export default function TestFinanziario() {
  const [phase, setPhase] = useState<Phase>("entry")
  const [state, setState] = useState<QuizState>({
    difficulty: null,
    currentQ: 0,
    answers: [],
    score: 0,
    answered: false,
    selectedAnswer: null,
  })
  const [showShare, setShowShare] = useState(false)
  const shareRef = useRef<HTMLDivElement>(null)

  function startConfig() {
    setPhase("config")
  }

  function selectDifficulty(d: DifficultyConfig) {
    setState({
      difficulty: d,
      currentQ: 0,
      answers: [],
      score: 0,
      answered: false,
      selectedAnswer: null,
    })
    setPhase("quiz")
  }

  function selectAnswer(idx: number) {
    if (state.answered || !state.difficulty) return
    const qs = questions[state.difficulty.id as Difficulty]
    const q = qs[state.currentQ]
    const correct = idx === q.correct
    setState((s) => ({
      ...s,
      answered: true,
      selectedAnswer: idx,
      score: correct ? s.score + 1 : s.score,
    }))
  }

  function nextQuestion() {
    if (!state.difficulty) return
    const total = state.difficulty.questionCount
    if (state.currentQ + 1 >= total) {
      setPhase("result")
    } else {
      setState((s) => ({
        ...s,
        currentQ: s.currentQ + 1,
        answered: false,
        selectedAnswer: null,
      }))
    }
  }

  function restart() {
    setPhase("entry")
    setState({
      difficulty: null,
      currentQ: 0,
      answers: [],
      score: 0,
      answered: false,
      selectedAnswer: null,
    })
    setShowShare(false)
  }

  async function downloadShareCard() {
    if (!shareRef.current) return
    try {
      const { default: html2canvas } = await import("html2canvas")
      const canvas = await html2canvas(shareRef.current, { backgroundColor: null, scale: 2 })
      const link = document.createElement("a")
      link.download = "bananomics-test.png"
      link.href = canvas.toDataURL("image/png")
      link.click()
    } catch {
      alert("Errore nel download. Riprova.")
    }
  }

  const currentDifficultyQuestions =
    state.difficulty ? questions[state.difficulty.id as Difficulty].slice(0, state.difficulty.questionCount) : []

  return (
    <section id="test" className="bg-banana-surface py-20 px-4 sm:px-6 border-t border-banana-border">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {/* ── ENTRY ── */}
          {phase === "entry" && (
            <motion.div
              key="entry"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="font-condensed font-semibold text-xs tracking-[0.3em] uppercase text-banana-yellow mb-3">
                Test Finanziario
              </p>
              <h2 className="font-display text-5xl sm:text-6xl text-banana-text mb-10">
                SCOPRI CHE TIPO
                <br />
                DI <span className="text-banana-yellow">SCIMMIA</span> SEI.
              </h2>

              <button
                onClick={startConfig}
                className="group mx-auto block relative w-48 h-48 sm:w-60 sm:h-60 cursor-pointer"
                aria-label="Inizia il test"
              >
                <div className="absolute inset-0 bg-banana-yellow/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-full h-full overflow-hidden rounded-2xl border-2 border-banana-border group-hover:border-banana-yellow transition-colors duration-500">
                  <Image
                    src="/images/smirk.webp"
                    alt="Mr. Carmelo"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-banana-yellow text-banana-bg font-condensed font-bold text-xs tracking-widest uppercase px-4 py-1.5 whitespace-nowrap">
                  Inizia il test
                </div>
              </button>
            </motion.div>
          )}

          {/* ── CONFIG ── */}
          {phase === "config" && (
            <motion.div
              key="config"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-condensed font-semibold text-xs tracking-[0.3em] uppercase text-banana-yellow mb-3 text-center">
                Scegli la difficoltà
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-banana-text mb-10 text-center">
                QUANTO SEI <span className="text-banana-yellow">BANANE</span>?
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {difficulties.map((d, i) => (
                  <motion.button
                    key={d.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => selectDifficulty(d)}
                    className="group bg-banana-card border border-banana-border hover:border-banana-yellow p-5 text-left transition-all duration-300 hover:bg-banana-card/80"
                  >
                    <div className="text-3xl mb-3">{d.emoji}</div>
                    <p className="font-display text-xl text-banana-text mb-1">{d.label}</p>
                    <p className="font-condensed text-xs tracking-widest uppercase text-banana-yellow mb-3">
                      {d.questionCount} domande
                    </p>
                    <p className="font-body text-banana-muted text-sm">{d.tagline}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── QUIZ ── */}
          {phase === "quiz" && state.difficulty && (
            <motion.div
              key={`quiz-${state.currentQ}`}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4 }}
            >
              {/* Progress */}
              <div className="flex items-center justify-between mb-6">
                <p className="font-condensed font-semibold text-xs tracking-widest uppercase text-banana-muted">
                  {state.difficulty.label}
                </p>
                <p className="font-display text-lg text-banana-yellow">
                  {state.currentQ + 1}/{state.difficulty.questionCount}
                </p>
              </div>
              <div className="w-full h-1 bg-banana-border rounded-full mb-8">
                <motion.div
                  className="h-1 bg-banana-yellow rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((state.currentQ + 1) / state.difficulty.questionCount) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Question */}
              <div className="bg-banana-card border border-banana-border p-6 sm:p-8 mb-6">
                <h3 className="font-condensed font-bold text-xl sm:text-2xl text-banana-text mb-6">
                  {currentDifficultyQuestions[state.currentQ].q}
                </h3>

                <div className="grid sm:grid-cols-2 gap-3">
                  {currentDifficultyQuestions[state.currentQ].options.map((opt, idx) => {
                    const isCorrect = idx === currentDifficultyQuestions[state.currentQ].correct
                    const isSelected = idx === state.selectedAnswer
                    let borderColor = "border-banana-border hover:border-banana-yellow/50"
                    let bgColor = "bg-banana-surface"
                    let textColor = "text-banana-text"

                    if (state.answered) {
                      if (isCorrect) {
                        borderColor = "border-green-500"
                        bgColor = "bg-green-500/10"
                        textColor = "text-green-400"
                      } else if (isSelected && !isCorrect) {
                        borderColor = "border-red-500"
                        bgColor = "bg-red-500/10"
                        textColor = "text-red-400"
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => selectAnswer(idx)}
                        disabled={state.answered}
                        className={`text-left border ${borderColor} ${bgColor} ${textColor} p-3 font-body text-sm transition-all duration-200 disabled:cursor-default`}
                      >
                        <span className="font-condensed font-bold text-xs tracking-widest uppercase mr-2 text-banana-muted">
                          {String.fromCharCode(65 + idx)}.
                        </span>
                        {opt}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Feedback */}
              <AnimatePresence>
                {state.answered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                  >
                    <div className={`border p-4 text-sm font-body ${
                      state.selectedAnswer === currentDifficultyQuestions[state.currentQ].correct
                        ? "border-green-500/40 bg-green-500/5 text-green-400"
                        : "border-red-500/40 bg-red-500/5 text-red-400"
                    }`}>
                      <span className="font-condensed font-bold text-xs tracking-widest uppercase block mb-1">
                        {state.selectedAnswer === currentDifficultyQuestions[state.currentQ].correct
                          ? "✓ Corretto!"
                          : "✗ Sbagliato"}
                      </span>
                      <span className="text-banana-muted">
                        {currentDifficultyQuestions[state.currentQ].explanation}
                      </span>
                    </div>

                    <button
                      onClick={nextQuestion}
                      className="mt-4 w-full bg-banana-yellow text-banana-bg font-condensed font-bold text-sm tracking-widest uppercase px-6 py-3 hover:bg-banana-yellow-light transition-colors"
                    >
                      {state.currentQ + 1 >= state.difficulty!.questionCount ? "Vedi risultati" : "Domanda successiva →"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* ── RESULT ── */}
          {phase === "result" && state.difficulty && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="font-condensed font-semibold text-xs tracking-[0.3em] uppercase text-banana-muted mb-4">
                Il tuo risultato
              </p>
              <p className="font-display text-8xl sm:text-9xl text-banana-text mb-2">
                {state.score}/{state.difficulty.questionCount}
              </p>
              <p className="font-display text-4xl sm:text-5xl text-banana-yellow mb-8 uppercase">
                {state.difficulty.label}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button
                  onClick={() => setShowShare(true)}
                  className="inline-flex items-center justify-center gap-2 bg-banana-yellow text-banana-bg font-condensed font-bold text-sm tracking-widest uppercase px-6 py-3 hover:bg-banana-yellow-light transition-colors"
                >
                  Condividi il risultato
                </button>
                <button
                  onClick={() => setPhase("leaderboard")}
                  className="inline-flex items-center justify-center gap-2 border border-banana-border text-banana-muted font-condensed font-bold text-sm tracking-widest uppercase px-6 py-3 hover:border-banana-yellow hover:text-banana-yellow transition-colors"
                >
                  Scala la classifica
                </button>
                <button
                  onClick={restart}
                  className="inline-flex items-center justify-center gap-2 border border-banana-border text-banana-muted font-condensed font-bold text-sm tracking-widest uppercase px-6 py-3 hover:border-banana-yellow hover:text-banana-yellow transition-colors"
                >
                  Riprova
                </button>
              </div>

              {/* Share popup */}
              <AnimatePresence>
                {showShare && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={(e) => e.target === e.currentTarget && setShowShare(false)}
                  >
                    <motion.div
                      initial={{ scale: 0.9, y: 16 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0.9, y: 16 }}
                      className="bg-banana-surface border border-banana-border p-6 max-w-sm w-full"
                    >
                      <p className="font-condensed font-bold text-sm tracking-widest uppercase text-banana-text mb-4">
                        Condividi nelle storie IG
                      </p>

                      {/* Share card preview */}
                      <div ref={shareRef} className="mx-auto" style={{ width: 320, height: 568 }}>
                        <ShareCard
                          score={state.score}
                          total={state.difficulty!.questionCount}
                          difficulty={state.difficulty!.label}
                        />
                      </div>

                      <p className="font-body text-banana-muted text-xs mt-4 mb-4 text-center">
                        Carica questa card nelle tue storie IG e aggiungi il link a bananomics.it
                      </p>

                      <div className="flex gap-3">
                        <button
                          onClick={downloadShareCard}
                          className="flex-1 bg-banana-yellow text-banana-bg font-condensed font-bold text-xs tracking-widest uppercase py-2.5 hover:bg-banana-yellow-light transition-colors"
                        >
                          Scarica
                        </button>
                        <button
                          onClick={() => setShowShare(false)}
                          className="flex-1 border border-banana-border text-banana-muted font-condensed font-bold text-xs tracking-widest uppercase py-2.5 hover:border-banana-yellow hover:text-banana-yellow transition-colors"
                        >
                          Chiudi
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* ── LEADERBOARD ── */}
          {phase === "leaderboard" && (
            <motion.div
              key="leaderboard"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <div className="text-5xl mb-6">🏆</div>
              <h3 className="font-display text-4xl text-banana-text mb-3">LA CLASSIFICA È IN ARRIVO!</h3>
              <p className="font-body text-banana-muted mb-8">
                Stiamo lavorando alla classifica. Presto potrai sfidare tutti nella giungla.
              </p>
              <button
                onClick={() => setPhase("result")}
                className="inline-flex items-center gap-2 border border-banana-border text-banana-muted font-condensed font-bold text-sm tracking-widest uppercase px-6 py-3 hover:border-banana-yellow hover:text-banana-yellow transition-colors"
              >
                ← Torna ai risultati
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
