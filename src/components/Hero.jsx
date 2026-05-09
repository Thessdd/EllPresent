import { motion, useReducedMotion } from 'framer-motion'

const floaty = [
  { symbol: '✶', top: '18%', left: '8%', delay: 0.2 },
  { symbol: '☆', top: '26%', left: '84%', delay: 0.55 },
  { symbol: '◈', top: '68%', left: '14%', delay: 0.8 },
  { symbol: '✦', top: '78%', left: '86%', delay: 0.35 },
]

function StaggerLetters({ text, className }) {
  const reduced = useReducedMotion()
  const letters = Array.from(text)
  return (
    <span className={className} aria-label={text} role="text">
      {letters.map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={reduced ? false : { opacity: 1, y: 0 }}
          transition={
            reduced
              ? undefined
              : { duration: 0.55, ease: 'easeOut', delay: 0.02 * i }
          }
          style={{ display: 'inline-block', whiteSpace: ch === ' ' ? 'pre' : 'normal' }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section id="hero" className="relative py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(200,247,62,0.55), transparent 55%), radial-gradient(circle at 70% 20%, rgba(242,160,123,0.55), transparent 52%), radial-gradient(circle at 60% 80%, rgba(201,184,255,0.55), transparent 56%)',
            animation: reduced ? undefined : 'meshShift 14s ease-in-out infinite alternate',
          }}
          aria-hidden="true"
        />
      </div>

      {floaty.map((f) => (
        <motion.div
          key={f.symbol + f.top + f.left}
          className="floaty pointer-events-none absolute hidden select-none md:block"
          style={{
            top: f.top,
            left: f.left,
            color: 'rgba(245,240,232,0.65)',
            fontFamily: 'var(--font-mono)',
            fontSize: 18,
            transform: 'rotate(-3deg)',
          }}
          initial={reduced ? false : { opacity: 0 }}
          animate={reduced ? false : { opacity: 1 }}
          transition={reduced ? undefined : { delay: f.delay, duration: 0.7 }}
          aria-hidden="true"
        >
          {f.symbol}
        </motion.div>
      ))}

      <div className="mx-auto max-w-4xl">
        <div className="space-y-5">
          <div className="leading-none">
            <div className="origin-left rotate-[-2deg]">
              <StaggerLetters
                text="Buon"
                className="outlineText font-display text-[72px] italic md:text-[110px]"
              />
            </div>
            <div className="origin-left rotate-[1deg]">
              <StaggerLetters
                text="26° Ell ✦"
                className="font-display text-[72px] italic text-peach md:text-[110px]"
              />
            </div>
          </div>

          <motion.p
            className="max-w-2xl rotate-[-1deg] font-note text-[28px] leading-snug text-lavender md:text-[34px]"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={reduced ? false : { opacity: 1, y: 0 }}
            transition={reduced ? undefined : { delay: 0.6, duration: 0.7, ease: 'easeOut' }}
          >
            questo è il tuo regalo — da Camilla con tutto il cuore 🫀
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={reduced ? false : { opacity: 1, y: 0 }}
            transition={reduced ? undefined : { delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 font-mono text-xs text-text/70"
          >
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
              estetica: caos tenero massimalista
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
              playlist: “ur fav lesbian chef era 🌿🔥”
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
              modalità: ho fatto tardi apposta
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

