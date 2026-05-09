import { motion, useReducedMotion } from 'framer-motion';
import StampBadge from './StampBadge.jsx';
import TapeStrip from './TapeStrip.jsx';

const springCfg = (reduce) =>
  reduce ? { duration: 0 } : { type: 'spring', stiffness: 180, damping: 16 };

const view = (reduce) => ({
  initial: reduce ? false : { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: springCfg(reduce),
});

export default function PersonalNote() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden py-10 md:py-14"
      style={{
        background:
          'linear-gradient(160deg, rgba(72,52,96,0.12) 0%, rgba(240,232,216,0.03) 45%, rgba(26,22,18,0.4) 100%)',
      }}
    >
      <span className="ghostWord" aria-hidden>
        AMORE
      </span>
      <div
        className="noiseLayer pointer-events-none absolute inset-0 z-[0] opacity-[0.06]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto max-w-[860px] px-5 md:px-8">
        <div className="tornStrip mb-6" aria-hidden />
        <motion.div
          {...view(reduce)}
          className="texCard relative px-8 py-10 md:px-12 md:py-12"
        >
          <TapeStrip
            width={100}
            rotation={-5}
            tone="paper"
            className="absolute left-3 top-3 z-[2] opacity-90"
          />
          <TapeStrip
            width={92}
            rotation={4}
            tone="lime"
            className="absolute bottom-4 right-4 z-[2] opacity-90"
          />

          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            — fine della parte rumorosa. quello che segue è reale. —
          </p>

          <h2
            className="mt-8 inline-block font-hand text-[52px] text-paper md:text-[64px]"
            style={{ transform: 'rotate(-1deg)' }}
          >
            Una nota da Camilla
          </h2>

          <hr className="xerox-hr mt-6 mb-8" />

          <div className="max-w-[660px] space-y-6 text-lg leading-[1.95] text-muted">
            <p>
              Ell, tu sei una di quelle persone che rendono il mondo più intenzionale solo esistendo dentro
              di lui. Volevo che il tuo compleanno avesse la stessa sensazione — qualcosa scelto con cura,
              qualcosa completamente tuo.
            </p>
            <p>Buon compleanno amore. Ti voglio un bene assurdo. 🫀</p>
          </div>

          <p
            className="mt-10 inline-block font-hand text-[68px] text-yellow"
            style={{ transform: 'rotate(-2deg)' }}
          >
            — Camilla
          </p>

          <div className="mt-6">
            <StampBadge color="var(--c-red)" rotation={-4}>
              approvato dal cuore
            </StampBadge>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
