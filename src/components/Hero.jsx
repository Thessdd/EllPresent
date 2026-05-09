import { motion, useReducedMotion } from 'framer-motion';
import Marquee from './Marquee.jsx';
import PunkDivider from './PunkDivider.jsx';
import StampBadge from './StampBadge.jsx';
import TapeStrip from './TapeStrip.jsx';

const springCfg = (reduce) =>
  reduce ? { duration: 0 } : { type: 'spring', stiffness: 180, damping: 16 };

const SCAN_LINES = ['38%', '45%', '52%', '61%'];

const TORN_CLIP =
  'polygon(0 60%, 3% 20%, 7% 80%, 11% 30%, 15% 70%, 20% 15%, 25% 65%, 30% 25%, 35% 75%, 40% 20%, 45% 70%, 50% 30%, 55% 65%, 60% 20%, 65% 80%, 70% 25%, 75% 70%, 80% 20%, 85% 75%, 90% 30%, 95% 65%, 100% 20%, 100% 100%, 0 100%)';

export default function Hero() {
  const reduce = useReducedMotion();
  const spr = springCfg(reduce);

  const line = (delay, props) => ({
    initial: reduce ? false : props.initial,
    animate: reduce ? props.animate : props.animate,
    transition: { ...spr, delay: reduce ? 0 : delay },
  });

  return (
    <section className="heroHatch heroPoster zineGrunge relative min-h-screen overflow-x-hidden">
      <div className="splatOverlay" aria-hidden />
      <div
        className="noiseLayer pointer-events-none absolute inset-0 z-[0]"
        aria-hidden
      />

      <div className="heroWatermark" aria-hidden>
        ELL
      </div>

      {SCAN_LINES.map((top) => (
        <div
          key={top}
          aria-hidden
          style={{
            position: 'absolute',
            top,
            left: 0,
            right: 0,
            height: 2,
            background: 'rgba(240,232,216,0.06)',
            zIndex: 3,
          }}
        />
      ))}

      <svg
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 120,
          height: 200,
          opacity: 0.85,
          zIndex: 5,
        }}
        viewBox="0 0 120 200"
        aria-hidden
      >
        <path
          d="M80,0 Q90,0 95,10 L100,60 Q102,80 98,100 L96,130 Q94,150 90,160 Q88,170 86,180 Q84,195 80,200 Q76,195 74,180 Q72,170 70,160 Q66,150 64,130 L62,100 Q58,80 60,60 L65,10 Q70,0 80,0Z"
          fill="#d42b2b"
          opacity="0.9"
        />
        <ellipse cx="80" cy="200" rx="8" ry="4" fill="#d42b2b" opacity="0.7" />
      </svg>

      <div className="relative z-[2]">
        <Marquee text="★ ELL 26 ★ QUEER ★ VEGETARIANA ★ PUNK ★ DA CAMILLA CON AMORE" />

        <div
          className="relative max-w-none px-2 pb-12 pt-4 md:px-4 md:pb-16 md:pt-8"
          style={{ marginLeft: '-2%', letterSpacing: '-0.04em', width: '102%' }}
        >
          <div className="relative">
            <motion.div
              {...line(0, {
                initial: { x: -20, y: 28, rotate: -8, opacity: 0 },
                animate: { x: 0, y: 0, rotate: -3, opacity: 1 },
              })}
              className="heroText font-slab font-black uppercase leading-[0.78] text-paper"
              style={{
                fontSize: 'clamp(100px,22vw,180px)',
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
              className="heroText font-hand font-bold italic leading-[0.8] text-yellow"
              style={{
                fontSize: 'clamp(120px,28vw,220px)',
              }}
            >
              26°
            </motion.div>

            <motion.div
              {...line(0.16, {
                initial: { x: -28, y: 20, rotate: -6, opacity: 0 },
                animate: { x: 0, y: 0, rotate: -1.5, opacity: 1 },
              })}
              className="heroText font-slab font-black uppercase leading-[0.78]"
              style={{
                fontSize: 'clamp(120px,30vw,240px)',
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
              className="heroText font-hand leading-none text-red"
              style={{
                fontSize: '140px',
                marginTop: '-0.1em',
              }}
            >
              ✦
            </motion.div>
          </div>

          <p
            className="font-hand mt-6 max-w-[580px] pl-1 text-[36px] text-muted md:mt-8"
            style={{ transform: 'rotate(-1.5deg)', letterSpacing: 'normal' }}
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

        <div className="relative z-[2] mt-2">
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

      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: -2,
          left: 0,
          right: 0,
          height: 60,
          backgroundColor: '#0e0c0a',
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise-lines.png')",
          backgroundBlendMode: 'overlay',
          clipPath: TORN_CLIP,
          zIndex: 10,
        }}
      />
    </section>
  );
}
