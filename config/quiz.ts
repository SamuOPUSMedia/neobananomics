export type Difficulty = "pivello" | "scimmia" | "gorilla" | "carmelo"

export interface Question {
  q: string
  options: string[]
  correct: number
  explanation: string
}

export interface DifficultyConfig {
  id: Difficulty
  label: string
  emoji: string
  tagline: string
  questionCount: number
  color: string
}

export const difficulties: DifficultyConfig[] = [
  {
    id: "pivello",
    label: "Pivello",
    emoji: "🐒",
    tagline: "Facile come rubare una banana",
    questionCount: 3,
    color: "#4CAF50",
  },
  {
    id: "scimmia",
    label: "Scimmia",
    emoji: "🦍",
    tagline: "Qualche sfida, ma ce la fai",
    questionCount: 5,
    color: "#FF9800",
  },
  {
    id: "gorilla",
    label: "Gorilla Alfa",
    emoji: "👑",
    tagline: "Per veri leader della giungla",
    questionCount: 7,
    color: "#F44336",
  },
  {
    id: "carmelo",
    label: "Mr. Carmelo",
    emoji: "💰",
    tagline: "Livello leggendario. Solo per pochi.",
    questionCount: 7,
    color: "#F5B800",
  },
]

export const questions: Record<Difficulty, Question[]> = {
  pivello: [
    {
      q: "Cosa significa PIL?",
      options: [
        "Prodotto Interno Lordo",
        "Prezzo Inflazione Lordo",
        "Percentuale Interesse Lineare",
        "Punto Investimento Libero",
      ],
      correct: 0,
      explanation: "Il PIL (Prodotto Interno Lordo) misura il valore totale di beni e servizi prodotti in un paese in un anno.",
    },
    {
      q: "Quando l'inflazione aumenta, il potere d'acquisto...",
      options: ["Diminuisce", "Aumenta", "Rimane invariato", "Non c'è relazione"],
      correct: 0,
      explanation: "Con l'inflazione, gli stessi soldi comprano meno cose. Il potere d'acquisto si riduce.",
    },
    {
      q: "Cosa è un'azione?",
      options: [
        "Una quota di proprietà in un'azienda",
        "Un prestito alla banca",
        "Un tipo di tassa",
        "Una criptovaluta",
      ],
      correct: 0,
      explanation: "Acquistare un'azione significa diventare (in piccola parte) proprietario dell'azienda.",
    },
    {
      q: "Cosa fa la Banca Centrale Europea?",
      options: [
        "Stabilisce i tassi di interesse nell'Eurozona",
        "Stampa moneta per i privati",
        "Gestisce il debito italiano",
        "Controlla le borse",
      ],
      correct: 0,
      explanation: "La BCE regola la politica monetaria dell'Eurozona, inclusi i tassi di interesse.",
    },
    {
      q: "Cosa è il risparmio?",
      options: [
        "La differenza tra reddito e spesa",
        "Il totale delle tasse pagate",
        "Il debito pubblico",
        "Il PIL pro capite",
      ],
      correct: 0,
      explanation: "Il risparmio è ciò che resta del reddito dopo aver coperto tutte le spese.",
    },
    {
      q: "Quale di questi è una valuta fiat?",
      options: ["Euro", "Bitcoin", "Oro", "Petrolio"],
      correct: 0,
      explanation: "Le valute fiat (come Euro, Dollaro) non sono coperte da materie prime ma dalla fiducia nel governo.",
    },
    {
      q: "Cosa è lo spread (in finanza)?",
      options: [
        "Il differenziale di rendimento tra due titoli",
        "Il tasso di inflazione",
        "Il costo dell'affitto",
        "La differenza tra importazioni ed esportazioni",
      ],
      correct: 0,
      explanation: "Lo spread (es. BTP-Bund) indica quanto rendono in più i titoli italiani rispetto a quelli tedeschi.",
    },
  ],
  scimmia: [
    {
      q: "Cosa è il quantitative easing?",
      options: [
        "L'acquisto di titoli da parte della banca centrale per immettere liquidità",
        "Un tipo di investimento in obbligazioni",
        "Una tassa sulla liquidità bancaria",
        "Un limite al credito bancario",
      ],
      correct: 0,
      explanation: "Con il QE la banca centrale compra titoli sul mercato, aumentando la moneta in circolazione.",
    },
    {
      q: "Cosa indica il P/E ratio di un'azione?",
      options: [
        "Il rapporto tra prezzo e utili per azione",
        "Il rendimento dei dividendi",
        "La volatilità del titolo",
        "La capitalizzazione di mercato",
      ],
      correct: 0,
      explanation: "Il P/E (Price-to-Earnings) indica quante volte il mercato paga gli utili dell'azienda.",
    },
    {
      q: "Cosa sono le obbligazioni high yield?",
      options: [
        "Obbligazioni ad alto rendimento emesse da emittenti con basso merito creditizio",
        "Titoli di stato con rendimento garantito",
        "Obbligazioni indicizzate all'inflazione",
        "Titoli bancari protetti",
      ],
      correct: 0,
      explanation: "Le high yield ('junk bond') rendono di più perché chi le emette ha un rischio di default maggiore.",
    },
    {
      q: "Cosa è il beta di un titolo azionario?",
      options: [
        "La sensibilità del titolo rispetto ai movimenti di mercato",
        "Il rendimento annualizzato del titolo",
        "Il rapporto debito/patrimonio dell'azienda",
        "Il dividendo pagato ogni anno",
      ],
      correct: 0,
      explanation: "Beta > 1 significa che il titolo si muove più del mercato. Beta < 1 = più stabile.",
    },
    {
      q: "Cosa è la curva dei rendimenti inversa?",
      options: [
        "Quando i titoli a breve termine rendono più di quelli a lungo termine",
        "Quando l'inflazione è negativa",
        "Quando i tassi crescono con la scadenza",
        "Quando il PIL scende",
      ],
      correct: 0,
      explanation: "Una curva invertita è spesso segnale di recessione imminente.",
    },
    {
      q: "Cosa è il leverage?",
      options: [
        "L'uso del debito per amplificare i potenziali rendimenti",
        "La liquidità disponibile in cassa",
        "Il rapporto tra attivi e passivi",
        "Una strategia di copertura del rischio",
      ],
      correct: 0,
      explanation: "Il leverage amplifica sia i guadagni che le perdite. Con grande potere, grande responsabilità.",
    },
    {
      q: "Cosa è il mercato primario?",
      options: [
        "Il mercato dove si emettono nuovi titoli",
        "Il mercato dove si scambiano titoli esistenti",
        "Il mercato delle materie prime",
        "Il mercato valutario",
      ],
      correct: 0,
      explanation: "Nel mercato primario le aziende raccolgono capitali emettendo nuovi titoli (es. IPO).",
    },
  ],
  gorilla: [
    {
      q: "Cosa è il carry trade?",
      options: [
        "Prendere a prestito in una valuta a basso tasso e investire in una ad alto tasso",
        "Vendere allo scoperto un titolo in caduta",
        "Acquistare futures sul petrolio",
        "Una strategia di arbitraggio azionario",
      ],
      correct: 0,
      explanation: "Il carry trade sfrutta il differenziale di tassi tra paesi. Rischio: volatilità dei cambi.",
    },
    {
      q: "Cosa è la duration di un'obbligazione?",
      options: [
        "La sensibilità del prezzo al variare dei tassi di interesse",
        "Il tempo mancante alla scadenza del titolo",
        "Il rendimento annuo del titolo",
        "Il rating creditizio dell'emittente",
      ],
      correct: 0,
      explanation: "Duration alta = maggiore sensibilità ai tassi. Se i tassi salgono, il prezzo scende di più.",
    },
    {
      q: "Cosa è lo short selling?",
      options: [
        "Vendere titoli presi a prestito scommettendo sul ribasso",
        "Acquistare titoli con leva finanziaria",
        "Investire in titoli a breve scadenza",
        "Vendere opzioni call su titoli detenuti",
      ],
      correct: 0,
      explanation: "Allo scoperto si prende in prestito un titolo, si vende, e si spera di ricomprarlo più basso.",
    },
    {
      q: "Cosa è l'arbitraggio?",
      options: [
        "Sfruttare le differenze di prezzo dello stesso asset in mercati diversi",
        "Investire in asset non correlati tra loro",
        "Coprire il rischio valutario",
        "Una strategia di market making",
      ],
      correct: 0,
      explanation: "L'arbitraggio è teoricamente risk-free: compri dove è più economico e vendi dove costa di più.",
    },
    {
      q: "Cosa è il VIX?",
      options: [
        "L'indice della volatilità implicita del mercato azionario americano",
        "Il valore del dollaro rispetto all'oro",
        "Il prezzo del greggio Brent",
        "L'indice dei consumi americani",
      ],
      correct: 0,
      explanation: "Il VIX è detto 'indice della paura'. Quando sale, i mercati sono nervosi.",
    },
    {
      q: "Cosa è il 'flight to quality'?",
      options: [
        "Il flusso di capitali verso asset sicuri in periodi di crisi",
        "Una strategia di crescita del PIL",
        "Il processo di revisione del rating",
        "Un tipo di politica fiscale espansiva",
      ],
      correct: 0,
      explanation: "In crisi, gli investitori abbandonano asset rischiosi e corrono verso Treasury, oro, CHF.",
    },
    {
      q: "Cosa è il quantitative tightening?",
      options: [
        "La riduzione del bilancio della banca centrale attraverso la vendita di titoli",
        "L'aumento dei tassi di interesse di riferimento",
        "Un limite all'emissione di nuovo debito",
        "Una politica di controllo dei cambi",
      ],
      correct: 0,
      explanation: "Il QT è l'opposto del QE: la banca centrale ritira liquidità dal sistema.",
    },
  ],
  carmelo: [
    {
      q: "Cosa è il paradosso di Triffin?",
      options: [
        "Il paese con la valuta di riserva deve avere deficit commerciali cronici per fornire liquidità globale",
        "Le crisi finanziarie si auto-amplificano attraverso i mercati globali",
        "Il debito pubblico è sempre sostenibile se in valuta locale",
        "L'inflazione è sempre un fenomeno monetario",
      ],
      correct: 0,
      explanation: "Triffin (1960): il dollaro serve il mondo intero, ma gli USA devono indebitarsi per farlo circolare.",
    },
    {
      q: "Cosa è il coefficiente di Gini?",
      options: [
        "Una misura della disuguaglianza nella distribuzione del reddito",
        "Il rapporto tra debito pubblico e PIL",
        "La velocità di circolazione della moneta",
        "Il rendimento aggiustato per il rischio",
      ],
      correct: 0,
      explanation: "Gini = 0: perfetta uguaglianza. Gini = 1: una persona ha tutto. Misura la disuguaglianza reale.",
    },
    {
      q: "Cosa è il 'Minsky Moment'?",
      options: [
        "Il punto in cui un boom del credito si trasforma in crisi quando i debitori non possono rimborsare",
        "Il momento in cui la politica monetaria diventa inefficace",
        "La fase in cui l'inflazione supera il target della banca centrale",
        "Il picco del ciclo economico",
      ],
      correct: 0,
      explanation: "Hyman Minsky: la stabilità genera instabilità. I periodi di boom creano le condizioni per il crollo.",
    },
    {
      q: "Cosa descrive l'equazione MV=PQ?",
      options: [
        "La teoria quantitativa della moneta: moneta × velocità = prezzi × output reale",
        "Il tasso reale uguale al tasso nominale meno l'inflazione",
        "Il rendimento obbligazionario dipende dalla probabilità di default",
        "Il PIL è determinato principalmente dalla spesa pubblica",
      ],
      correct: 0,
      explanation: "Fisher: se M (moneta) cresce senza aumentare Q (output), P (prezzi) sale. È l'inflazione.",
    },
    {
      q: "Cosa è il 'doom loop' bancario-sovrano?",
      options: [
        "La spirale per cui le difficoltà delle banche destabilizzano i governi e viceversa",
        "Il meccanismo per cui l'inflazione erode il debito reale",
        "La relazione tra tasso di interesse e crescita economica",
        "Il ciclo boom-bust del mercato immobiliare",
      ],
      correct: 0,
      explanation: "Le banche tengono debito pubblico. Se lo stato va in crisi, le banche perdono. Poi lo stato deve salvarle.",
    },
    {
      q: "Cosa è la 'Japanification'?",
      options: [
        "La condizione di stagnazione prolungata con tassi zero e deflazione, come il Giappone dagli anni '90",
        "La strategia di esportazioni basata su valuta debole",
        "Il modello di sviluppo basato su grandi conglomerati statali",
        "Una forma di protezionismo commerciale",
      ],
      correct: 0,
      explanation: "Il Giappone è la case study: tassi a zero da decenni, crescita quasi nulla, deflazione persistente.",
    },
    {
      q: "Cosa è la 'trilemma di Mundell'?",
      options: [
        "Non si possono avere contemporaneamente tassi fissi, libera circolazione dei capitali e politica monetaria indipendente",
        "La crescita, l'inflazione e la disoccupazione non possono essere ottimizzate simultaneamente",
        "Un paese non può avere contemporaneamente surplus commerciale, fiscale e finanziario",
        "La banca centrale deve scegliere tra inflazione, crescita e stabilità finanziaria",
      ],
      correct: 0,
      explanation: "Mundell: devi scegliere 2 tra 3. L'Eurozona ha scelto cambi fissi e libera circolazione, rinunciando alla politica monetaria nazionale.",
    },
  ],
}
