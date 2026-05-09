import { motion, useReducedMotion } from 'framer-motion'
import PunkDivider from './PunkDivider.jsx'
import StampBadge from './StampBadge.jsx'

const spring = { type: 'spring', stiffness: 180, damping: 16 }

export default function LibraDisclaimer() {
  const reduced = useReducedMotion()

  return (
    <motion.section
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-red py-12 md:py-16"
      initial={reduced ? false : { opacity: 0, y: 20, scale: 0.98 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={spring}
    >
      <div className="relative z-[1] mx-auto max-w-4xl px-5 text-center">
        <div className="font-slab text-[72px] font-black uppercase leading-none text-paper">⚖️ camilla</div>
        <div className="mt-4 font-slab text-[48px] font-black uppercase leading-none text-paper">è una</div>
        <div className="mt-2 font-slab text-[clamp(56px,12vw,96px)] font-black uppercase tracking-[-0.02em] text-paper">
          bilancia
        </div>

        <p
          className="mx-auto mt-10 max-w-2xl font-hand text-[34px] text-paper/85"
          style={{ transform: 'rotate(-1deg)' }}
        >
          …quindi ha anche considerato 2 opzioni backup. Prego. O scusa. Entrambe.
        </p>

        <div className="mt-12 flex justify-end md:mt-16">
          <StampBadge color="var(--c-paper)" rotation={-5} className="bg-red">
            indecisione certificata
          </StampBadge>
        </div>
      </div>

      <PunkDivider invert className="mt-10" />
      <hr className="mx-auto max-w-6xl border-0 opacity-90" style={{ height: 1, background: 'rgba(240,232,216,0.18)' }} />
    </motion.section>
  )
}
