import { motion, useReducedMotion } from 'framer-motion';
import PunkDivider from './PunkDivider.jsx';
import StampBadge from './StampBadge.jsx';

const springCfg = (reduce) =>
  reduce ? { duration: 0 } : { type: 'spring', stiffness: 180, damping: 16 };

const view = (reduce) => ({
  initial: reduce ? false : { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: springCfg(reduce),
});

const WATER = '⚖️ BILANCIA ⚖️ '.repeat(80);

export default function LibraDisclaimer() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative left-1/2 w-screen overflow-hidden bg-red py-10 md:py-12"
      style={{
        transform: 'translateX(-50%) skewY(-1.5deg)',
        marginTop: '-10px',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.07]"
        aria-hidden
      >
        <div
          className="absolute left-[-10%] top-[-20%] whitespace-nowrap font-slab text-[80px] font-black uppercase text-ink"
          style={{ transform: 'rotate(-12deg) translateX(-10%)' }}
        >
          {WATER}
        </div>
      </div>

      <div
        className="relative z-[1] mx-auto max-w-4xl px-5 text-center"
        style={{ transform: 'skewY(1.5deg)' }}
      >
        <motion.div {...view(reduce)}>
          <p className="font-slab text-[72px] font-black uppercase leading-none text-paper">
            ⚖️ CAMILLA
          </p>
          <p className="font-slab text-[48px] font-black uppercase leading-none text-yellow">È UNA</p>
          <p
            className="font-slab font-black uppercase leading-none text-paper"
            style={{ fontSize: 'clamp(64px,14vw,104px)', letterSpacing: '-0.02em' }}
          >
            BILANCIA
          </p>
        </motion.div>

        <motion.p
          {...view(reduce)}
          className="mx-auto mt-10 max-w-2xl font-hand text-[34px] text-paper opacity-[0.85]"
          style={{ transform: 'rotate(-1deg)' }}
        >
          …quindi ha anche considerato 2 opzioni backup. Prego. O scusa. Entrambe.
        </motion.p>

        <motion.div
          {...view(reduce)}
          className="mt-12 flex justify-end pr-2 md:pr-6"
        >
          <StampBadge color="var(--c-yellow)" rotation={-5}>
            indecisione certificata
          </StampBadge>
        </motion.div>
      </div>

      <div className="relative z-[1] mt-10" style={{ transform: 'skewY(1.5deg)' }}>
        <PunkDivider invert />
        <hr className="xerox-hr" />
      </div>
    </section>
  );
}
