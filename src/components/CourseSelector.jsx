import { motion, useReducedMotion } from 'framer-motion'
import { useMemo, useState } from 'react'
import confetti from 'canvas-confetti'

const COURSES = [
  {
    id: 'cinese',
    featured: true,
    emoji: '🥟',
    name: 'Cucina cinese vegetariana',
    description:
      'Ravioli, mapo tofu, pancakes al cipollotto — l’esperienza completa. Camilla ha passato 3 giorni a decidere che questa era “quella”.',
    tags: ['dumplings', 'plant-based', '2,5 ore'],
    ribbon: "la scelta di Camilla ✦",
  },
  {
    id: 'ramen',
    emoji: '🍜',
    name: 'Ramen da zero (vegano)',
    description:
      'Brodo, tare e topping fatti a mano. Profondamente cozy. Profondamente te.',
    tags: ['ramen', 'vegano', 'immersivo'],
  },
  {
    id: 'mezze',
    emoji: '🌿',
    name: 'Mezze mediterranee & fermenti',
    description:
      'Hummus, labneh, limoni in conserva, cose fermentate. Perfetto per chi ha una hot girl shelf di condimenti.',
    tags: ['mezze', 'fermentazione', 'fun fact: anche vegetariano'],
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
    colors: ['#c8f73e', '#f2a07b', '#c9b8ff', '#f5f0e8'],
  })
  confetti({
    particleCount: 35,
    spread: 120,
    startVelocity: 22,
    origin: { x: 0.35, y: originY },
    colors: ['#c8f73e', '#f2a07b', '#c9b8ff'],
  })
  confetti({
    particleCount: 35,
    spread: 120,
    startVelocity: 22,
    origin: { x: 0.65, y: originY },
    colors: ['#c8f73e', '#f2a07b', '#c9b8ff'],
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
    <section id="scelte" className="py-12 md:py-14">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-4xl italic md:text-5xl">
            scegli il tuo destino
            <span className="ml-2 text-lime">🌶️</span>
          </h2>
          <p className="mt-2 max-w-2xl text-text/70">
            Camilla è indecisa, ma tu no. (o sì. va bene comunque.) Seleziona una
            opzione e lei la rende reale.
          </p>
        </div>
        <div className="font-mono text-xs text-text/55">
          tip: tab + invio funziona. come dovrebbe. wow.
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((c) => {
          const isSelected = selected === c.id
          const dim = selected && !isSelected

          return (
            <motion.div
              key={c.id}
              className={[
                'zineCard relative p-6 transition',
                dim ? 'opacity-50' : 'opacity-100',
              ].join(' ')}
              style={{
                transform: `rotate(${c.featured ? -2.5 : c.id === 'ramen' ? 2 : -1}deg)`,
                border: isSelected
                  ? '1px solid rgba(200,247,62,0.95)'
                  : '1px solid rgba(245,240,232,0.14)',
                boxShadow: isSelected ? '0 0 0 1px rgba(200,247,62,0.8), 0 0 30px rgba(200,247,62,0.18)' : undefined,
              }}
              whileHover={
                reducedMotion
                  ? undefined
                  : {
                      y: -6,
                      rotate: 0,
                      transition: { duration: 0.18 },
                    }
              }
              animate={
                isSelected && !reducedMotion
                  ? { scale: 1.03 }
                  : { scale: 1 }
              }
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              {c.featured ? (
                <div className="absolute -right-2 -top-3 rotate-[8deg] rounded-full border border-white/10 bg-peach px-4 py-2 font-mono text-[11px] font-bold text-black shadow-[0_18px_35px_rgba(0,0,0,0.35)]">
                  {c.ribbon}
                </div>
              ) : null}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-2xl">{c.emoji}</div>
                  <div className="mt-3 font-mono text-lg font-bold">{c.name}</div>
                </div>
                <div className="font-mono text-sm text-lime" aria-hidden="true">
                  {isSelected ? '✓' : ''}
                </div>
              </div>

              <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-text/75">
                {c.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-text/70"
                  >
                    [{t}]
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  className="focusRing w-full rounded-2xl border border-lime/50 bg-lime/10 px-4 py-3 font-mono text-sm text-text hover:border-lime hover:bg-lime/15"
                  onClick={() => choose(c.id)}
                  aria-pressed={isSelected}
                >
                  scegli questo →
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>

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
        <div className="zineCard w-full border border-lime/30 bg-bg/75 px-5 py-4 text-center backdrop-blur">
          <span className="font-mono text-xs text-lime">✦</span>{' '}
          <span className="text-sm text-text/85">
            scelta perfetta — Camilla la farà succedere
          </span>{' '}
          <span className="font-mono text-xs text-lime">✦</span>
        </div>
      </motion.div>
    </section>
  )
}

