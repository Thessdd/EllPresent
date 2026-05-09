import { motion, useReducedMotion } from 'framer-motion';
import PunkDivider from './PunkDivider.jsx';
import StampBadge from './StampBadge.jsx';
import TapeStrip from './TapeStrip.jsx';
import WobblyCircle from './WobblyCircle.jsx';

const springCfg = (reduce) =>
  reduce ? { duration: 0 } : { type: 'spring', stiffness: 180, damping: 16 };

const view = (reduce) => ({
  initial: reduce ? false : { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: springCfg(reduce),
});

export default function GiftReveal() {
  const reduce = useReducedMotion();
  const spr = springCfg(reduce);

  return (
    <section className="zineGrunge relative overflow-hidden py-8 md:py-10">
      <span className="ghostWord" aria-hidden>
        CIBO
      </span>
      <div
        className="noiseLayer pointer-events-none absolute inset-0 z-[0]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto max-w-6xl px-5 md:px-8">
        <motion.p
          {...view(reduce)}
          className="font-mono text-[11px] uppercase tracking-[0.4em] text-red"
        >
          il regalo
        </motion.p>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-start">
          <motion.div {...view(reduce)} transition={{ ...spr, delay: reduce ? 0 : 0.05 }}>
            <div className="relative mx-auto inline-block h-[220px] w-[220px] smear md:mx-0">
              <WobblyCircle
                size={220}
                color="var(--c-yellow)"
                strokeWidth={2.5}
                className="pointer-events-none absolute left-0 top-0 scale-95"
              />
              <div className="relative z-[1] flex h-full w-full select-none items-center justify-center text-[130px] leading-none">
                🥟
              </div>
            </div>

            <div className="relative z-[1] mt-2">
              <TapeStrip
                width={120}
                rotation={-2}
                tone="yellow"
                className="relative z-[2] mx-4 mb-0"
              />
              <div className="texCard relative z-[1] -mt-2 px-6 py-5 md:px-8 md:py-6">
                <p className="font-hand text-[22px] leading-snug text-muted">
                  ravioli fatti a mano.
                  <br />
                  tofu. verdure.
                  <br />
                  nessun animale.
                  <br />
                  molto amore.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...view(reduce)} transition={{ ...spr, delay: reduce ? 0 : 0.1 }}>
            <div>
              <p className="font-slab text-[52px] font-black uppercase leading-none text-paper">
                UN CORSO
              </p>
              <p className="font-slab text-[60px] font-black uppercase leading-none text-yellow">
                DI CUCINA
              </p>
              <p className="font-slab text-[80px] font-black uppercase leading-none text-paper">
                CINESE
              </p>
              <span
                className="font-hand text-[44px] font-bold italic text-lime"
                style={{ transform: 'rotate(-2deg)' }}
              >
                vegetariana
              </span>
            </div>

            <p className="mt-6 max-w-prose text-base leading-relaxed text-muted">
              Volevo darti qualcosa che ti somiglia — creativo, intenzionale, delizioso e completamente
              plant-based. La cucina vegetariana cinese è antica, complessa e piena di umami senza un solo
              animale coinvolto. Proprio come te, onestamente.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <StampBadge color="var(--c-red)" rotation={-6}>
                fatto con amore
              </StampBadge>
              <StampBadge color="var(--c-lime)" rotation={4}>
                100% vegan
              </StampBadge>
              <StampBadge color="var(--c-yellow)" rotation={-3}>
                panico incluso
              </StampBadge>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-[1] mt-12">
        <div className="tornStrip" aria-hidden />
        <PunkDivider />
        <hr className="xerox-hr" />
      </div>
    </section>
  );
}
