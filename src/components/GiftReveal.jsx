import { motion, useReducedMotion } from 'framer-motion'

export default function GiftReveal() {
  const reduced = useReducedMotion()

  return (
    <section id="regalo" className="py-14 md:py-18">
      <div className="mb-6 flex items-baseline justify-between gap-4">
        <h2 className="font-mono text-sm tracking-wider text-text/75">
          // IL REGALO //
        </h2>
        <div className="hidden font-mono text-xs text-text/45 md:block">
          (spoiler: è vegetale. ovvio.)
        </div>
      </div>

      <motion.article
        className="zineCard peel mx-auto max-w-3xl p-7 md:p-10"
        style={{ transform: 'rotate(-2deg)' }}
        initial={reduced ? false : { opacity: 0, y: 18 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={reduced ? undefined : { duration: 0.7, ease: 'easeOut' }}
        whileHover={
          reduced
            ? undefined
            : {
                rotate: -1,
                y: -4,
                transition: { duration: 0.2 },
              }
        }
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <div className="font-mono text-sm text-lime">🥢🌿</div>
            <h3 className="mt-3 font-mono text-2xl font-bold tracking-tight">
              Un corso di cucina cinese vegetariana
            </h3>
            <p className="mt-2 text-text/75">
              perché tu riesci a far sembrare le verdure un intero universo
            </p>
          </div>

          <div className="shrink-0 self-start rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-xs text-text/70">
            <div className="text-text/50">tempo stimato</div>
            <div className="text-lime">una serata perfetta</div>
          </div>
        </div>

        <p className="mt-6 max-w-2xl leading-relaxed text-text/85">
          Volevo darti qualcosa che ti somiglia — creativo, intenzionale, delizioso e
          completamente plant-based. La cucina vegetariana cinese è antica, complessa e
          piena di umami senza un solo animale coinvolto. Proprio come te, onestamente.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3 text-xs text-text/65">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 font-mono">
            ✦ fatto con panico + amore
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 font-mono">
            ◈ spoiler: ti meriti tutto
          </span>
        </div>
      </motion.article>
    </section>
  )
}

