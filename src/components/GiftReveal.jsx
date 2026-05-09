import { motion, useReducedMotion } from 'framer-motion'
import PunkDivider from './PunkDivider.jsx'
import StampBadge from './StampBadge.jsx'
import WobblyCircle from './WobblyCircle.jsx'

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

export default function GiftReveal() {
  const reduced = useReducedMotion()

  return (
    <motion.section
      id="gift"
      className="relative overflow-hidden py-10 md:py-14"
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={spring}
    >
      <span aria-hidden="true" style={ghostStyle}>
        CIBO
      </span>

      <div className="relative z-[1]">
        <p className="font-slab text-sm font-black uppercase tracking-[0.4em] text-red">il regalo</p>

        <div className="mt-8 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start md:gap-10">
          <div className="relative md:mt-2">
            <div className="relative inline-block smear">
              <WobblyCircle className="pointer-events-none absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-[1] text-[120px] leading-none">🥟</div>
            </div>
            <p className="mt-6 max-w-sm font-hand text-[22px] leading-snug text-muted">
              ravioli fatti a mano. tofu. verdure.
              <br />
              nessun animale coinvolto.
              <br />
              molto amore incluso.
            </p>
          </div>

          <div className="md:mt-6">
            <div className="space-y-0 font-slab font-black uppercase leading-[0.95]">
              <div className="text-[48px] text-paper">un corso</div>
              <div className="text-[56px] text-yellow">di cucina</div>
              <div className="text-[72px] text-paper">cinese</div>
              <div className="inline-block -rotate-2 text-[36px] text-lime">vegetariana</div>
            </div>

            <p className="mt-8 max-w-xl font-body text-base lowercase leading-relaxed text-muted">
              Volevo darti qualcosa che ti somiglia — creativo, intenzionale, delizioso e completamente plant-based. La
              cucina vegetariana cinese è antica, complessa e piena di umami. Proprio come te, onestamente.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <StampBadge color="var(--c-red)" rotation={-6}>
                fatto con amore
              </StampBadge>
              <StampBadge color="var(--c-paper)" rotation={4}>
                100% vegan
              </StampBadge>
              <StampBadge color="var(--c-paper)" rotation={-3}>
                panico incluso
              </StampBadge>
            </div>
          </div>
        </div>

        <PunkDivider className="mt-10" />
        <hr className="xerox-hr mt-2" />
      </div>
    </motion.section>
  )
}
