import { motion, useReducedMotion } from 'framer-motion'
import PunkDivider from './PunkDivider.jsx'
import StampBadge from './StampBadge.jsx'
import TapeStrip from './TapeStrip.jsx'

const spring = { type: 'spring', stiffness: 180, damping: 16 }

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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            rgba(240,232,216,0.14) 0px,
            rgba(240,232,216,0.14) 1px,
            transparent 1px,
            transparent 14px
          )`,
        }}
      />

      <motion.div
        className="w-full bg-red py-2.5 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-paper"
        initial={reduced ? false : { opacity: 0, y: -12 }}
        animate={reduced ? false : { opacity: 1, y: 0 }}
        transition={reduced ? undefined : spring}
      >
        ★ evento speciale ★ ingresso: gratuito ★ data: 2025 ★
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-5 pb-8 pt-6 md:pb-12 md:pt-10">
        <div className="relative z-[2] min-h-[58vh] max-w-[920px]">
          <motion.div
            className="font-slab text-[clamp(56px,14vw,110px)] font-black uppercase leading-[0.92] text-paper"
            style={{ transform: 'rotate(-3deg)', transformOrigin: '0% 50%' }}
            initial={fly(0)}
            animate={settle(-3)}
            transition={reduced ? undefined : { ...spring, delay: 0.08 }}
          >
            buon
          </motion.div>

          <motion.div
            className="-mt-2 font-hand text-[clamp(72px,18vw,130px)] font-semibold italic leading-[0.9] text-yellow sm:-mt-4"
            style={{ transform: 'rotate(2deg)', transformOrigin: '0% 50%' }}
            initial={fly(1)}
            animate={settle(2)}
            transition={reduced ? undefined : { ...spring, delay: 0.16 }}
          >
            26°
          </motion.div>

          <motion.div
            className="-mt-1 font-slab text-[clamp(72px,20vw,140px)] font-black uppercase leading-[0.88]"
            style={{
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
            className="mt-1 font-hand text-[80px] leading-none text-red"
            style={{ transform: 'rotate(5deg)', transformOrigin: '0% 50%' }}
            initial={fly(3)}
            animate={settle(5)}
            transition={reduced ? undefined : { ...spring, delay: 0.32 }}
          >
            ✦
          </motion.div>

          <motion.p
            className="mt-8 max-w-xl font-hand text-[32px] text-muted"
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
            <TapeStrip x={0} y={0} rotation={-2} width={100} tone="lime" />
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
            <StampBadge color="var(--c-red)" rotation={-9}>
              queer ★ punk
            </StampBadge>
          </motion.div>
          <motion.div
            className="absolute right-[6%] top-[42%] z-10 hidden md:block"
            initial={reduced ? false : { scale: 0.5, rotate: 16, opacity: 0 }}
            animate={reduced ? false : { scale: 1, rotate: 6, opacity: 1 }}
            transition={reduced ? undefined : { ...spring, delay: 0.46 }}
          >
            <StampBadge color="var(--c-lime)" rotation={6}>
              vegetariana
            </StampBadge>
          </motion.div>
        </div>
      </div>

      <PunkDivider />
      <hr className="xerox-hr mx-auto max-w-6xl" />
    </section>
  )
}
