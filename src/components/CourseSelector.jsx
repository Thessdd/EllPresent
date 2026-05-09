import { motion, useReducedMotion } from 'framer-motion'
import { useMemo, useState } from 'react'
import confetti from 'canvas-confetti'
import SchematicPanel from './SchematicPanel.jsx'
import SpecRow from './SpecRow.jsx'

const COURSES = [
  {
    id: 'cinese',
    featured: true,
    emoji: '🥟',
    name: 'Cucina cinese vegetariana',
    description:
      'Ravioli, mapo tofu, pancakes al cipollotto — l’esperienza completa. Camilla ha passato 3 giorni a decidere che questa era “quella”.',
    tags: ['dumplings', 'plant-based', '2,5 ore'],
    stamp: '// RACCOMANDATO //',
    specs: [
      ['MODALITÀ', 'HANDS-ON'],
      ['LIVELLO', 'BEGINNER-FRIENDLY'],
      ['FOCUS', 'UMAMI VEGETALE'],
    ],
  },
  {
    id: 'ramen',
    emoji: '🍜',
    name: 'Ramen da zero (vegano)',
    description:
      'Brodo, tare e topping fatti a mano. Profondamente cozy. Profondamente te.',
    tags: ['ramen', 'vegano', 'immersivo'],
    specs: [
      ['MODALITÀ', 'IMMERSIVA'],
      ['LIVELLO', 'MEDIO'],
      ['OUTPUT', 'BRODO + TARE'],
    ],
  },
  {
    id: 'mezze',
    emoji: '🌿',
    name: 'Mezze mediterranee & fermenti',
    description:
      'Hummus, labneh, limoni in conserva, cose fermentate. Perfetto per chi ha una hot girl shelf di condimenti.',
    tags: ['mezze', 'fermentazione', 'fun fact: anche vegetariano'],
    specs: [
      ['MODALITÀ', 'DEGUSTAZIONE'],
      ['LIVELLO', 'FACILE'],
      ['BONUS', 'FERMENTI'],
    ],
  },
]

function usePrefersReducedMotion() {
  const reduced = useReducedMotion()
  return reduced
}

function burstConfetti() {
  const originY = 0.9
  confetti({
    particleCount: 65,
    spread: 70,
    startVelocity: 32,
    origin: { x: 0.5, y: originY },
    colors: ['#c8f73e', '#4a9eff', '#c8dff0', '#2a6bbf'],
  })
  confetti({
    particleCount: 35,
    spread: 120,
    startVelocity: 22,
    origin: { x: 0.35, y: originY },
    colors: ['#c8f73e', '#4a9eff', '#c8dff0'],
  })
  confetti({
    particleCount: 35,
    spread: 120,
    startVelocity: 22,
    origin: { x: 0.65, y: originY },
    colors: ['#c8f73e', '#4a9eff', '#c8dff0'],
  })
}

export default function CourseSelector() {
  const reducedMotion = usePrefersReducedMotion()
  const [selected, setSelected] = useState(null)
  const [toast, setToast] = useState(false)

  const cards = useMemo(() => COURSES, [])

  const choose = (id) => {
    setSelected(id)
    setToast(true)
    if (!reducedMotion) burstConfetti()
    window.setTimeout(() => setToast(false), 2400)
  }

  return (
    <div className="py-10 md:py-14">
      <SchematicPanel
        id="sheet-04"
        label="SHEET 04 — AVAILABLE CONFIGURATIONS — SELECT ONE"
        className="mt-8"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xl font-bold uppercase tracking-[0.14em] text-cream">
              seleziona configurazione
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-blueMuted">
              // una sola selezione consentita. errori gestiti con grazia. //
            </div>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-blueMuted">
            input: click / invio • output: felicità
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {cards.map((c, idx) => {
            const isSelected = selected === c.id
            const dim = selected && !isSelected
            const accent = c.featured ? 'lime' : 'blue'
            const border = isSelected
              ? '1px solid rgba(200,247,62,0.95)'
              : c.featured
                ? '1px solid rgba(200,247,62,0.55)'
                : '1px solid rgba(74,158,255,0.22)'

            return (
              <motion.div
                key={c.id}
                className={['schematicPanel relative p-5', dim ? 'opacity-50' : 'opacity-100'].join(' ')}
                style={{
                  border,
                  borderRadius: 2,
                  boxShadow: isSelected ? '0 0 20px rgba(200,247,62,0.20)' : '0 0 18px rgba(74,158,255,0.10)',
                }}
                whileHover={reducedMotion ? undefined : { y: -4 }}
                animate={isSelected && !reducedMotion ? { scale: 1.02 } : { scale: 1 }}
                transition={{ type: 'spring', stiffness: 240, damping: 18 }}
              >
                <div className="border border-blueLight/15 bg-bg/35 px-4 py-3">
                  <div className="grid grid-cols-[82px_34px_1fr] items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-blueMuted">
                    <div className="text-cream">{`CONFIG-${String(idx + 1).padStart(2, '0')}`}</div>
                    <div className="text-base text-cream">{c.emoji}</div>
                    <div className={c.featured ? 'text-lime' : 'text-blueLight'}>
                      ← {c.featured ? 'featured' : 'standard'}
                    </div>
                  </div>
                </div>

                {c.featured ? (
                  <div className="mt-3 inline-block border border-lime/45 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-lime">
                    {c.stamp}
                  </div>
                ) : null}

                {isSelected ? (
                  <div className="absolute right-3 top-3 rotate-[8deg] border border-lime/55 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-lime">
                    confirmed ✓
                  </div>
                ) : null}

                <div className="mt-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-cream">
                  {c.name}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text/80">{c.description}</p>

                <div className="mt-4 space-y-2">
                  {c.specs.map(([k, v]) => (
                    <SpecRow key={k} label={k} value={v} accent={accent} />
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-blueLight/18 bg-bg/35 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-blueMuted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    className={[
                      'focusRing w-full border px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em]',
                      c.featured ? 'border-lime/50 text-lime hover:bg-lime/10' : 'border-blueLight/30 text-blueLight hover:bg-blueLight/10',
                    ].join(' ')}
                    onClick={() => choose(c.id)}
                    aria-pressed={isSelected}
                  >
                    seleziona config → 
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </SchematicPanel>

      <motion.div
        role="status"
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-4 z-50 mx-auto flex max-w-xl justify-center px-4"
        initial={false}
        animate={
          toast && !reducedMotion
            ? { y: 0, opacity: 1 }
            : toast
              ? { y: 0, opacity: 1 }
              : { y: 18, opacity: 0 }
        }
        transition={{ duration: reducedMotion ? 0 : 0.25, ease: 'easeOut' }}
      >
        <div className="schematicPanel w-full border border-blueLight/25 bg-bg/80 px-5 py-4 text-center backdrop-blur">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-blueMuted">
            ✦ perfect choice —
          </span>{' '}
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-cream">
            camilla la farà succedere
          </span>{' '}
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-blueMuted">
            ✦
          </span>
        </div>
      </motion.div>
    </div>
  )
}

