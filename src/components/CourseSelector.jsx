import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useMemo, useState } from 'react'
import confetti from 'canvas-confetti'
import GrungeButton from './GrungeButton.jsx'
import PunkDivider from './PunkDivider.jsx'
import StampBadge from './StampBadge.jsx'
import TapeStrip from './TapeStrip.jsx'
import WobblyCircle from './WobblyCircle.jsx'

const spring = { type: 'spring', stiffness: 180, damping: 16 }

const CONFETTI_COLORS = ['#f5e642', '#d42b2b', '#7fff00', '#f0e8d8', '#1a1612']

const COURSES = [
  {
    id: 'cinese',
    featured: true,
    emoji: '🥟',
    name: 'Cucina cinese vegetariana',
    description:
      'Ravioli, mapo tofu, pancakes al cipollotto — l’esperienza completa. Camilla ha passato 3 giorni a decidere che questa era “quella”.',
    tags: ['dumplings', 'plant-based', '2,5 h'],
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
    tags: ['mezze', 'fermenti', 'vegetariano'],
  },
]

function burstConfetti() {
  const y = 0.88
  const opts = (x, n) => ({
    particleCount: n,
    spread: 88,
    startVelocity: 42,
    gravity: 1.05,
    ticks: 95,
    origin: { x, y },
    colors: CONFETTI_COLORS,
    scalar: 1.05,
  })
  confetti(opts(0.5, 70))
  confetti(opts(0.28, 40))
  confetti(opts(0.72, 40))
}

export default function CourseSelector() {
  const reduced = useReducedMotion()
  const [selected, setSelected] = useState(null)
  const [toast, setToast] = useState(false)
  const cards = useMemo(() => COURSES, [])

  const choose = (id) => {
    setSelected(id)
    setToast(true)
    if (!reduced) burstConfetti()
    window.setTimeout(() => setToast(false), 2800)
  }

  return (
    <motion.section
      id="setlist"
      className="py-14 md:py-20"
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={spring}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-red">// scegli la tua traccia //</p>

      <div className="mt-6 flex flex-wrap items-end gap-3">
        <span className="font-slab text-[60px] font-black uppercase leading-none text-paper">seleziona</span>
        <span
          className="font-hand text-[50px] font-semibold text-yellow"
          style={{ transform: 'rotate(1deg)', display: 'inline-block' }}
        >
          il corso
        </span>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-[1fr_1.1fr_0.9fr] md:items-start">
        {cards.map((c, idx) => {
          const isSelected = selected === c.id
          const dim = Boolean(selected) && !isSelected
          const offset = idx === 0 ? 'mt-0' : idx === 1 ? 'mt-0 md:mt-6' : 'mt-0 md:mt-3'
          const borderTone = isSelected
            ? 'border-2 border-lime bg-[rgba(127,255,0,0.04)]'
            : c.featured
              ? 'border-2 border-yellow'
              : 'border border-paper/15'

          return (
            <motion.article
              key={c.id}
              className={['relative overflow-visible rounded-none bg-[rgba(240,232,216,0.04)] p-6', borderTone, offset, dim ? 'opacity-40' : ''].join(
                ' ',
              )}
              style={dim ? { filter: 'grayscale(0.4)' } : undefined}
              initial={false}
              whileHover={reduced || dim ? undefined : { y: -3 }}
              animate={isSelected && !reduced ? { scale: 1.02 } : { scale: 1 }}
              transition={spring}
            >
                {c.featured ? (
                  <>
                    <div className="pointer-events-none absolute -left-2 -top-2 z-[1]">
                      <TapeStrip x={0} y={0} rotation={-3} width={88} />
                    </div>
                    <StampBadge
                      color="var(--c-red)"
                      rotation={8}
                      className="absolute -right-3 -top-4 z-[2] bg-bg"
                    >
                      ★ scelta di camilla
                    </StampBadge>
                  </>
                ) : null}

                <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  config-{String(idx + 1).padStart(2, '0')}
                </div>

                <div className="relative mx-auto mb-4 h-[88px] w-[88px] smear">
                  <WobblyCircle
                    color="var(--c-yellow)"
                    strokeWidth={2}
                    className="pointer-events-none absolute inset-0 h-full w-full scale-90"
                  />
                  <div className="relative z-[1] flex h-full items-center justify-center text-4xl">{c.emoji}</div>
                </div>

                <h3 className="font-slab text-[22px] font-bold uppercase leading-tight text-paper">{c.name}</h3>
                <p className="mt-3 line-clamp-3 font-body text-sm lowercase leading-relaxed text-muted">{c.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-paper/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-paper/80"
                      style={{ borderRadius: 0 }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <GrungeButton className="mt-4 w-full" onClick={() => choose(c.id)} aria-pressed={isSelected}>
                  scegli questo →
                </GrungeButton>

                <AnimatePresence>
                  {isSelected ? (
                    <motion.div
                      key="ok"
                      className="pointer-events-none absolute -left-2 bottom-4 z-[3]"
                      initial={reduced ? false : { scale: 0, rotate: -20, opacity: 0 }}
                      animate={reduced ? false : { scale: 1, rotate: -6, opacity: 1 }}
                      exit={reduced ? undefined : { scale: 0, opacity: 0 }}
                      transition={spring}
                    >
                      <StampBadge color="var(--c-lime)" rotation={-6}>
                        ✓ confermato
                      </StampBadge>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
            </motion.article>
          )
        })}
      </div>

      <PunkDivider className="mt-16" />
      <hr className="xerox-hr mt-2" />

      <AnimatePresence>
        {toast ? (
          <motion.div
            key="toast"
            role="status"
            aria-live="polite"
            className="fixed inset-x-0 bottom-0 z-[70] bg-red py-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-paper"
            initial={reduced ? { opacity: 0 } : { y: 56, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { y: 56, opacity: 0 }}
            transition={reduced ? { duration: 0.12 } : { type: 'tween', duration: 0.2, ease: 'easeOut' }}
          >
            ★ scelta confermata — camilla la farà succedere ★
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  )
}
