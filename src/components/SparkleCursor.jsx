import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const SYMBOLS = ['✕', '★', '•', '✗', '·'];
const COLORS = ['var(--c-red)', 'var(--c-yellow)', 'var(--c-lime)', 'var(--c-paper)'];
const TRAIL_MAX = 12;
const SPAWN_MS = 30;
const MOVE_THRESH = 2;
const FADE_MS = 600;

export default function SparkleCursor() {
  const reduce = useReducedMotion();
  const [coarse, setCoarse] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const trailRef = useRef([]);
  const lastSpawnRef = useRef(0);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);
  const [, bump] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse)');
    const sync = () => setCoarse(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const tick = useCallback(() => {
    const now = performance.now();
    trailRef.current = trailRef.current.filter((p) => now - p.born < FADE_MS);
    bump((n) => n + 1);
    if (trailRef.current.length) {
      rafRef.current = requestAnimationFrame(tick);
    }
  }, []);

  const onMove = useCallback(
    (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setPos({ x, y });

      if (reduce || coarse) return;

      const dx = x - lastPosRef.current.x;
      const dy = y - lastPosRef.current.y;
      const dist = Math.hypot(dx, dy);
      const now = performance.now();

      if (dist > MOVE_THRESH && now - lastSpawnRef.current >= SPAWN_MS) {
        lastSpawnRef.current = now;
        lastPosRef.current = { x, y };
        const sym = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        trailRef.current = [
          ...trailRef.current,
          { id: `${now}-${Math.random()}`, x, y, sym, color, born: now },
        ].slice(-TRAIL_MAX);
        if (!rafRef.current) {
          rafRef.current = requestAnimationFrame(tick);
        }
      }
    },
    [coarse, reduce, tick]
  );

  useEffect(() => {
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [onMove]);

  if (coarse) return null;

  const now = performance.now();
  const trail = trailRef.current;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100]"
      style={{ mixBlendMode: 'normal' }}
      aria-hidden
    >
      {!reduce &&
        trail.map((p) => {
          const age = now - p.born;
          const opacity = Math.max(0, 1 - age / FADE_MS);
          return (
            <span
              key={p.id}
              className="absolute font-mono text-[12px] leading-none"
              style={{
                left: p.x,
                top: p.y,
                transform: 'translate(-50%, -50%)',
                color: p.color,
                opacity,
              }}
            >
              {p.sym}
            </span>
          );
        })}
      <span
        className="pointer-events-none fixed font-mono text-[18px] leading-none"
        style={{
          left: pos.x,
          top: pos.y,
          transform: 'translate(-50%, -50%)',
          color: 'var(--c-red)',
        }}
      >
        ✕
      </span>
    </div>
  );
}
