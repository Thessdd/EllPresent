import confetti from 'canvas-confetti';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';
import GrungeButton from './GrungeButton.jsx';
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

const COURSES = [
  {
    id: 'cinese',
    featured: true,
    emoji: '🥟',
    name: 'Cucina cinese vegetariana',
    desc: "Ravioli, mapo tofu, pancakes al cipollotto — l'esperienza completa. Camilla ha passato 3 giorni a decidere che questa era \"quella\".",
    tags: ['dumplings', 'plant-based', '2,5 h'],
  },
  {
    id: 'ramen',
    emoji: '🍜',
    name: 'Ramen da zero (vegano)',
    desc: 'Brodo, tare e topping fatti a mano. Profondamente cozy. Profondamente te.',
    tags: ['ramen', 'vegano', 'immersivo'],
  },
  {
    id: 'mezze',
    emoji: '🌿',
    name: 'Mezze mediterranee & fermenti',
    desc: 'Hummus, labneh, limoni in conserva, cose fermentate. Perfetto per chi ha una hot girl shelf di condimenti.',
    tags: ['mezze', 'fermenti', 'vegetariano'],
  },
];

const CONFETTI_COLORS = ['#f5e642', '#d42b2b', '#7fff00', '#f0e8d8', '#1a1612'];

const CARD_POSE = [
  { rotate: -1.2, y: 0 },
  { rotate: 0.8, y: 8 },
  { rotate: -0.5, y: -4 },
];

function fireConfetti() {
  const base = {
    spread: 88,
    startVelocity: 42,
    gravity: 1.05,
    ticks: 95,
    colors: CONFETTI_COLORS,
  };
  confetti({ ...base, particleCount: 70, origin: { x: 0.5, y: 0.55 } });
  confetti({ ...base, particleCount: 40, origin: { x: 0.15, y: 0.55 } });
  confetti({ ...base, particleCount: 40, origin: { x: 0.85, y: 0.55 } });
}

export default function CourseSelector() {
  const reduce = useReducedMotion();
  const spr = springCfg(reduce);
  const [selected, setSelected] = useState(null);
  const [toast, setToast] = useState(false);
  const toastTimer = useRef(0);

  const choose = (id) => {
    setSelected(id);
    setToast(true);
    fireConfetti();
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(false), 4200);
  };

  return (
    <section className="zineGrunge relative overflow-hidden py-8 md:py-10">
      <span className="ghostWord" aria-hidden>
        SCEGLI
      </span>
      <div
        className="noiseLayer pointer-events-none absolute inset-0 z-[0] opacity-[0.08]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto max-w-6xl px-5 md:px-8">
        <motion.p
          {...view(reduce)}
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-red"
        >
          {'// '}scegli la tua traccia{' //'}
        </motion.p>

        <motion.div
          {...view(reduce)}
          className="mt-6 flex flex-wrap items-end gap-3"
        >
          <span className="font-slab text-[60px] font-black uppercase leading-none text-paper">
            seleziona
          </span>
          <span
            className="inline-block font-hand text-[50px] text-yellow"
            style={{ transform: 'rotate(1deg)' }}
          >
            il corso
          </span>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-[1fr_1.1fr_0.9fr]">
          {COURSES.map((c, idx) => {
            const isSelected = selected === c.id;
            const dimmed = selected && !isSelected;
            const stagger = idx === 0 ? '' : idx === 1 ? 'md:mt-6' : 'md:mt-3';

            const pose = CARD_POSE[idx] ?? CARD_POSE[0];
            const flyerMods = [
              'courseFlyer',
              c.featured && !isSelected ? 'courseFlyer--featured' : '',
              isSelected ? 'courseFlyer--selected' : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <motion.article
                key={c.id}
                initial={reduce ? false : { opacity: 0, y: 20, ...pose }}
                whileInView={{ opacity: 1, ...pose }}
                whileHover={reduce ? undefined : { rotate: 0, y: -8, transition: { duration: 0.15 } }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ ...spr, delay: reduce ? 0 : 0.06 * idx }}
                className={`relative p-5 transition-opacity duration-200 ${stagger} ${flyerMods} ${
                  dimmed ? 'opacity-[0.38]' : ''
                }`}
                style={dimmed ? { filter: 'grayscale(0.5)' } : undefined}
              >
                {c.featured && (
                  <>
                    <TapeStrip
                      width={88}
                      rotation={-3}
                      tone="yellow"
                      className="absolute -left-1 -top-1 z-[1]"
                    />
                    <StampBadge
                      color="var(--c-red)"
                      rotation={8}
                      className="absolute -right-3 -top-4 z-[2] max-w-[220px] !text-[10px]"
                      style={{ letterSpacing: '0.12em' }}
                    >
                      ★ scelta di camilla
                    </StampBadge>
                  </>
                )}

                <p className="font-mono text-[10px] uppercase tracking-wide text-muted">
                  config-0{idx + 1}
                </p>

                <div className="relative mx-auto mt-4 inline-flex h-20 w-20 items-center justify-center smear">
                  <WobblyCircle
                    size={80}
                    color="var(--c-yellow)"
                    strokeWidth={2}
                    className="pointer-events-none absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                  <span className="relative z-[1] text-4xl">{c.emoji}</span>
                </div>

                <h3 className="mt-4 font-slab text-[22px] font-bold uppercase leading-tight text-paper">
                  {c.name}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{c.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase text-[rgba(240,232,216,0.75)]"
                      style={{
                        border: '1px solid rgba(240,232,216,0.2)',
                        padding: '2px 8px',
                        borderRadius: 0,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <GrungeButton
                  onClick={() => choose(c.id)}
                  className="mt-5"
                  aria-pressed={isSelected}
                >
                  {isSelected ? '✓ confermato' : 'scegli questo →'}
                </GrungeButton>

                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      key="stamp"
                      initial={reduce ? false : { scale: 0, rotate: -20, opacity: 0 }}
                      animate={{ scale: 1, rotate: -6, opacity: 1 }}
                      exit={reduce ? undefined : { scale: 0, rotate: -20, opacity: 0 }}
                      transition={spr}
                      className="absolute -left-2 bottom-4 z-[3]"
                    >
                      <StampBadge color="var(--c-lime)" rotation={-6}>
                        ✓ confermato
                      </StampBadge>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            key="toast"
            initial={reduce ? false : { y: 56, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduce ? undefined : { y: 56, opacity: 0 }}
            transition={spr}
            className="fixed bottom-0 left-0 right-0 z-[120] bg-red py-4"
            role="status"
            aria-live="polite"
          >
            <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-paper">
              ★ scelta confermata — camilla la farà succedere ★
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-[1] mt-14">
        <div className="tornStrip" aria-hidden />
        <PunkDivider />
        <hr className="xerox-hr" />
      </div>
    </section>
  );
}
