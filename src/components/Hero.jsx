import { motion, useReducedMotion } from 'framer-motion'
import PunkDivider from './PunkDivider.jsx'
import StampBadge from './StampBadge.jsx'
import TapeStrip from './TapeStrip.jsx'

const spring = { type: 'spring', stiffness: 180, damping: 16 }

const MARQUEE_LINE =
  '★ ELL 26 ★ QUEER ★ VEGETARIANA ★ PUNK ★ DA CAMILLA CON AMORE ★\u00a0★ ELL 26 ★ QUEER ★ VEGETARIANA ★ PUNK ★ DA CAMILLA CON AMORE ★\u00a0'

export default function Hero() {
  const reduced = useReducedMotion()

  const fly = (i = 0) =>
    reduced ? false : { opacity: 0, x: -14 + (i % 2) * 8, y: 20 + i * 4, rotate: -5 + i }

  const settle = (rot = 0) => (reduced ? {} : { opacity: 1, x: 0, y: 0, rotate: rot })

  return (
    <section
      id="hero"
      className="relative left-1/2 w-screen min-h-screen -translate-x-1/2 overflow-hidden bg-bg"
    >
      <motion.div
        className="relative z-[1] w-full bg-red py-2.5 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-paper"
        initial={reduced ? false : { opacity: 0, y: -12 }}
        animate={reduced ? false : { opacity: 1, y: 0 }}
        transition={reduced ? undefined : spring}
      >
        ★ evento speciale ★ ingresso: gratuito ★ data: 2025 ★
      </motion.div>

      <div className="relative z-[1] mx-auto max-w-6xl px-5 pb-6 pt-5 md:pb-8 md:pt-8">
        <div className="relative z-[2] min-h-[58vh] max-w-[920px]">
          <motion.div
            className="font-slab font-black uppercase leading-[0.92] text-paper"
            style={{
              fontSize: 'clamp(72px, 18vw, 140px)',
              transform: 'rotate(-3deg)',
              transformOrigin: '0% 50%',
            }}
            initial={fly(0)}
            animate={settle(-3)}
            transition={reduced ? undefined : { ...spring, delay: 0.08 }}
          >
            buon
          </motion.div>

          <motion.div
            className="-mt-2 font-hand font-semibold italic leading-[0.9] text-yellow sm:-mt-4"
            style={{
              fontSize: 'clamp(88px, 22vw, 160px)',
              transform: 'rotate(2deg)',
              transformOrigin: '0% 50%',
            }}
            initial={fly(1)}
            animate={settle(2)}
            transition={reduced ? undefined : { ...spring, delay: 0.16 }}
          >
            26°
          </motion.div>

          <motion.div
            className="-mt-1 font-slab font-black uppercase leading-[0.88]"
            style={{
              fontSize: 'clamp(88px, 24vw, 170px)',
              WebkitTextStroke: '2px var(--c-lime)',
              color: 'transparent',
              transform: 'rotate(-1deg)',
              transformOrigin: '0% 50%',
            }}
            initial={fly(2)}
            animate={settle(-1)}
            transition={reduced ? undefined : { ...spring, delay: 0.24 }}
          >
            ell
          </motion.div>

          <motion.div
            className="mt-1 font-hand text-[140px] leading-none text-paper"
            style={{ transform: 'rotate(5deg)', transformOrigin: '0% 50%' }}
            initial={fly(3)}
            animate={settle(5)}
            transition={reduced ? undefined : { ...spring, delay: 0.32 }}
          >
            ✦
          </motion.div>

          <motion.p
            className="mt-8 max-w-xl font-hand text-[36px] text-muted md:text-[42px]"
            style={{ transform: 'rotate(-1.5deg)' }}
            initial={reduced ? false : { opacity: 0, y: 16, x: -8 }}
            animate={reduced ? false : { opacity: 1, y: 0, x: 0 }}
            transition={reduced ? undefined : { ...spring, delay: 0.4 }}
          >
            questo è il tuo regalo — da Camilla con tutto il cuore 🫀
          </motion.p>

          <motion.div
            className="absolute left-0 top-[34%] md:left-[2%]"
            initial={reduced ? false : { x: -52, opacity: 0 }}
            animate={reduced ? false : { x: 0, opacity: 1 }}
            transition={reduced ? undefined : { ...spring, delay: 0.36 }}
            aria-hidden="true"
          >
            <TapeStrip x={0} y={0} rotation={-4} width={92} tone="paper" />
          </motion.div>
          <motion.div
            className="absolute left-[40%] top-[2%] md:left-[44%]"
            initial={reduced ? false : { x: 48, opacity: 0 }}
            animate={reduced ? false : { x: 0, opacity: 1 }}
            transition={reduced ? undefined : { ...spring, delay: 0.28 }}
            aria-hidden="true"
          >
            <TapeStrip x={0} y={0} rotation={3} width={78} />
          </motion.div>
          <motion.div
            className="absolute right-0 top-[48%] md:right-[4%]"
            initial={reduced ? false : { x: 56, opacity: 0 }}
            animate={reduced ? false : { x: 0, opacity: 1 }}
            transition={reduced ? undefined : { ...spring, delay: 0.44 }}
            aria-hidden="true"
          >
            <TapeStrip x={0} y={0} rotation={-2} width={100} />
          </motion.div>

          <motion.div
            className="absolute right-0 top-24 z-10 md:right-4 md:top-28"
            initial={reduced ? false : { scale: 0.5, rotate: -20, opacity: 0 }}
            animate={reduced ? false : { scale: 1, rotate: -7, opacity: 1 }}
            transition={reduced ? undefined : { ...spring, delay: 0.42 }}
          >
            <StampBadge color="var(--c-yellow)" rotation={-7}>
              anno xxvi
            </StampBadge>
          </motion.div>
          <motion.div
            className="absolute bottom-8 left-0 z-10 md:bottom-12"
            initial={reduced ? false : { scale: 0.5, rotate: 14, opacity: 0 }}
            animate={reduced ? false : { scale: 1, rotate: -9, opacity: 1 }}
            transition={reduced ? undefined : { ...spring, delay: 0.5 }}
          >
            <StampBadge color="var(--c-paper)" rotation={-9}>
              queer ★ punk
            </StampBadge>
          </motion.div>
          <motion.div
            className="absolute right-[6%] top-[42%] z-10 hidden md:block"
            initial={reduced ? false : { scale: 0.5, rotate: 16, opacity: 0 }}
            animate={reduced ? false : { scale: 1, rotate: 6, opacity: 1 }}
            transition={reduced ? undefined : { ...spring, delay: 0.46 }}
          >
            <StampBadge color="var(--c-paper)" rotation={6}>
              vegetariana
            </StampBadge>
          </motion.div>
        </div>
      </div>

      <div className="relative z-[1] left-1/2 mt-8 w-screen -translate-x-1/2 overflow-hidden border-y-2 border-paper/20 bg-red py-3">
        {reduced ? (
          <div className="whitespace-nowrap px-5 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-paper">
            {MARQUEE_LINE}
          </div>
        ) : (
          <div className="flex w-max animate-marquee font-mono text-[11px] uppercase tracking-[0.3em] text-paper">
            <span className="shrink-0 pr-16">{MARQUEE_LINE}</span>
            <span className="shrink-0 pr-16" aria-hidden="true">
              {MARQUEE_LINE}
            </span>
          </div>
        )}
      </div>

      <div className="relative z-[1]">
        <PunkDivider />
        <hr className="xerox-hr mx-auto max-w-6xl" />
      </div>
    </section>
  )
}
