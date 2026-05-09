import { motion, useReducedMotion } from 'framer-motion'
import StampBadge from './StampBadge.jsx'

const spring = { type: 'spring', stiffness: 180, damping: 16 }

const ghostStyle = {
  position: 'absolute',
  top: '-0.1em',
  left: '-0.05em',
  fontFamily: 'var(--font-slab)',
  fontWeight: 900,
  textTransform: 'uppercase',
  fontSize: 'clamp(100px, 22vw, 200px)',
  lineHeight: 0.85,
  color: 'var(--c-paper)',
  opacity: 0.05,
  pointerEvents: 'none',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  zIndex: 0,
}

export default function PersonalNote() {
  const reduced = useReducedMotion()

  return (
    <motion.section
      id="nota"
      className="relative overflow-hidden border-t border-paper/10 py-12 md:py-16"
      style={{ background: 'rgba(240,232,216,0.03)' }}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={spring}
    >
      <span aria-hidden="true" style={ghostStyle}>
        AMORE
      </span>

      <div className="relative z-[1]">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          — fine della parte rumorosa. quello che segue è reale. —
        </p>

        <h2 className="mt-8 font-hand text-[52px] text-white" style={{ transform: 'rotate(-1deg)' }}>
          Una nota da Camilla
        </h2>

        <div className="mt-8 max-w-[680px] space-y-6 font-body text-lg lowercase leading-[1.95] text-muted">
          <p>
            Ell, tu sei una di quelle persone che rendono il mondo più intenzionale solo esistendo dentro di lui. Volevo
            che il tuo compleanno avesse la stessa sensazione — qualcosa scelto con cura, qualcosa completamente tuo.
          </p>
          <p>Buon compleanno amore. Ti voglio un bene assurdo. 🫀</p>
        </div>

        <div className="mt-10 inline-block font-hand text-[64px] text-yellow" style={{ transform: 'rotate(-2deg)' }}>
          — Camilla
        </div>

        <div className="mt-6">
          <StampBadge color="var(--c-paper)" rotation={-4}>
            approvato dal cuore
          </StampBadge>
        </div>
      </div>
    </motion.section>
  )
}
