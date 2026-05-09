import { motion, useReducedMotion } from 'framer-motion';
import Marquee from './Marquee.jsx';
import PunkDivider from './PunkDivider.jsx';
import StampBadge from './StampBadge.jsx';
import TapeStrip from './TapeStrip.jsx';

const springCfg = (reduce) =>
  reduce ? { duration: 0 } : { type: 'spring', stiffness: 180, damping: 16 };

export default function Hero() {
  const reduce = useReducedMotion();
  const spr = springCfg(reduce);

  const line = (delay, props) => ({
    initial: reduce ? false : props.initial,
    animate: reduce ? props.animate : props.animate,
    transition: { ...spr, delay: reduce ? 0 : delay },
  });

  return (
    <section className="heroHatch relative min-h-screen overflow-hidden">
      <div className="splatOverlay" aria-hidden />
      <div
        className="noiseLayer pointer-events-none absolute inset-0 z-[0]"
        aria-hidden
      />

      <div className="relative z-[2]">
        <Marquee text="★ ELL 26 ★ QUEER ★ VEGETARIANA ★ PUNK ★ DA CAMILLA CON AMORE" />

        <div className="relative mx-auto max-w-[1000px] px-5 pb-16 pt-6 md:px-10 md:pb-20 md:pt-10">
          <div className="relative">
            <motion.div
              {...line(0, {
                initial: { x: -20, y: 28, rotate: -8, opacity: 0 },
                animate: { x: 0, y: 0, rotate: -3, opacity: 1 },
              })}
              className="font-slab font-black uppercase leading-[0.82] text-paper"
              style={{
                fontSize: 'clamp(80px,18vw,148px)',
                transformOrigin: 'left center',
              }}
            >
              BUON
            </motion.div>

            <motion.div
              {...line(0.08, {
                initial: { x: 20, y: 24, rotate: 8, opacity: 0 },
                animate: { x: 0, y: 0, rotate: 2, opacity: 1 },
              })}
              className="font-hand font-bold italic leading-[0.85] text-yellow"
              style={{
                fontSize: 'clamp(96px,22vw,170px)',
              }}
            >
              26°
            </motion.div>

            <motion.div
              {...line(0.16, {
                initial: { x: -28, y: 20, rotate: -6, opacity: 0 },
                animate: { x: 0, y: 0, rotate: -1.5, opacity: 1 },
              })}
              className="font-slab font-black uppercase leading-[0.82]"
              style={{
                fontSize: 'clamp(96px,26vw,185px)',
                color: 'transparent',
                WebkitTextStroke: '2.5px var(--c-lime)',
              }}
            >
              ELL
            </motion.div>

            <motion.div
              {...line(0.24, {
                initial: { scale: 0.3, rotate: 25, opacity: 0 },
                animate: { scale: 1, rotate: 5, opacity: 1 },
              })}
              className="font-hand leading-none text-red"
              style={{
                fontSize: '140px',
                marginTop: '-0.1em',
              }}
            >
              ✦
            </motion.div>
          </div>

          <p
            className="font-hand mt-8 max-w-[580px] text-[36px] text-muted"
            style={{ transform: 'rotate(-1.5deg)' }}
          >
            questo è il tuo regalo — da Camilla con tutto il cuore 🫀
          </p>

          <motion.div
            className="absolute right-2 top-4 md:right-6 md:top-8"
            initial={reduce ? false : { scale: 0.5, rotate: -14, opacity: 0 }}
            animate={{ scale: 1, rotate: -7, opacity: 1 }}
            transition={{ ...spr, delay: reduce ? 0 : 0.35 }}
          >
            <StampBadge color="--c-yellow" rotation={-7}>
              anno xxvi
            </StampBadge>
          </motion.div>

          <motion.div
            className="absolute bottom-28 left-2 md:bottom-32 md:left-6"
            initial={reduce ? false : { scale: 0.5, rotate: -18, opacity: 0 }}
            animate={{ scale: 1, rotate: -9, opacity: 1 }}
            transition={{ ...spr, delay: reduce ? 0 : 0.42 }}
          >
            <StampBadge color="--c-red" rotation={-9}>
              queer ★ punk
            </StampBadge>
          </motion.div>

          <motion.div
            className="absolute right-4 top-[42%] hidden md:block"
            initial={reduce ? false : { scale: 0.5, rotate: 12, opacity: 0 }}
            animate={{ scale: 1, rotate: 6, opacity: 1 }}
            transition={{ ...spr, delay: reduce ? 0 : 0.5 }}
          >
            <StampBadge color="--c-lime" rotation={6}>
              vegetariana
            </StampBadge>
          </motion.div>

          <motion.div
            className="absolute left-[28%] top-[32%] z-[3]"
            initial={reduce ? false : { x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ...spr, delay: reduce ? 0 : 0.28 }}
          >
            <TapeStrip width={94} rotation={-4} tone="paper" />
          </motion.div>
          <motion.div
            className="absolute right-[8%] top-[12%] z-[3]"
            initial={reduce ? false : { x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ...spr, delay: reduce ? 0 : 0.32 }}
          >
            <TapeStrip width={78} rotation={3} tone="yellow" />
          </motion.div>
          <motion.div
            className="absolute right-[6%] top-[48%] z-[3]"
            initial={reduce ? false : { x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ...spr, delay: reduce ? 0 : 0.38 }}
          >
            <TapeStrip width={106} rotation={-2} tone="lime" />
          </motion.div>
        </div>

        <div className="relative z-[2] mt-4">
          <PunkDivider />
          <hr className="xerox-hr" />
          <div className="tornStrip" aria-hidden />
          <Marquee
            reverse
            text="🥟 CUCINA VEGETARIANA 🥟 CINESE 🌿 PLANT-BASED 🌿 HANDMADE"
            bgColor="var(--c-ink)"
          />
        </div>
      </div>
    </section>
  );
}
