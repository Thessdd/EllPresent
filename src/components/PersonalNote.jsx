import { motion, useReducedMotion } from 'framer-motion'

export default function PersonalNote() {
  const reduced = useReducedMotion()

  return (
    <section id="nota" className="py-14 md:py-18">
      <motion.div
        className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-7 md:p-12"
        initial={reduced ? false : { opacity: 0, y: 16 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={reduced ? undefined : { duration: 0.7, ease: 'easeOut' }}
      >
        <div
          className="constellation pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
        <div className="relative">
          <h2 className="font-display text-4xl italic md:text-5xl">
            Una nota da Camilla
          </h2>

          <div className="mt-6 max-w-3xl space-y-5 text-[16px] leading-[1.9] text-text/85 md:text-[18px]">
            <p>
              Ell, tu sei una di quelle persone che rendono il mondo più intenzionale
              solo esistendo dentro di lui. Volevo che il tuo compleanno avesse la
              stessa sensazione — qualcosa scelto con cura, qualcosa completamente tuo.
            </p>
            <p>
              Buon compleanno amore. Ti voglio un bene assurdo. 🫀
            </p>
          </div>

          <div className="mt-8 rotate-[-1deg] font-note text-4xl text-peach md:text-5xl">
            — Camilla
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3 font-mono text-xs text-text/55">
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2">
              ✦ caos tenero certificato
            </span>
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2">
              ☆ lettera d’amore queer (in incognito)
            </span>
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2">
              ◈ fatto alle 2am (spiritualmente)
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

