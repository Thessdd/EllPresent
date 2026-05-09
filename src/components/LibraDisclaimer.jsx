import { motion, useReducedMotion } from 'framer-motion'

export default function LibraDisclaimer() {
  const reduced = useReducedMotion()

  return (
    <section className="py-12 md:py-14">
      <motion.div
        className="mx-auto max-w-5xl"
        initial={reduced ? false : { opacity: 0, y: 10 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={reduced ? undefined : { duration: 0.6, ease: 'easeOut' }}
      >
        <div
          className="relative overflow-hidden rounded-[28px] border border-black/30 bg-lime px-6 py-7 text-black shadow-[0_30px_70px_rgba(0,0,0,0.35)] md:px-10"
          style={{ transform: 'rotate(-2deg)' }}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="font-mono text-xl font-bold tracking-tight md:text-2xl">
              <span className="wiggle mr-2 inline-block">⚖️</span>
              CAMILLA È UNA BILANCIA
              <span className="wiggle ml-2 inline-block">⚖️</span>
            </div>
            <div className="font-mono text-xs opacity-75">
              certificazione ufficiale: indecisione cronica
            </div>
          </div>

          <p className="mt-4 max-w-3xl rotate-[1deg] font-note text-[26px] leading-snug text-black/90 md:text-[30px]">
            …il che significa che ha anche “prenotato mentalmente” 2 opzioni di backup.
            Prego. O scusa. Entrambe.
          </p>

          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-black/10 blur-2xl" />
        </div>
      </motion.div>
    </section>
  )
}

