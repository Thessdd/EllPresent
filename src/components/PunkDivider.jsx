import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

function buildZigzag(yBase, amplitude, segments = 50) {
  const step = 60;
  let d = `M0,${yBase}`;
  for (let i = 1; i <= segments; i++) {
    const x = i * step;
    const y = yBase + (i % 2 === 0 ? amplitude : -amplitude);
    d += ` L${x},${y}`;
  }
  return d;
}

const PATH1 = buildZigzag(24, 12, 50);
const PATH2 = buildZigzag(36, 6, 50);

export default function PunkDivider({ invert = false }) {
  const reduce = useReducedMotion();
  const p1 = useRef(null);
  const p2 = useRef(null);
  const [len1, setLen1] = useState(0);
  const [len2, setLen2] = useState(0);

  const stroke = invert ? 'rgba(240,232,216,0.38)' : 'rgba(240,232,216,0.25)';

  useEffect(() => {
    if (reduce) return;
    const l1 = p1.current?.getTotalLength?.() ?? 0;
    const l2 = p2.current?.getTotalLength?.() ?? 0;
    setLen1(l1);
    setLen2(l2);
  }, [reduce]);

  useEffect(() => {
    if (reduce || !len1) return;
    const id = requestAnimationFrame(() => {
      if (p1.current) {
        p1.current.style.strokeDasharray = String(len1);
        p1.current.style.strokeDashoffset = String(len1);
        p1.current.getBoundingClientRect();
        p1.current.style.transition = 'stroke-dashoffset 1.1s ease-out';
        p1.current.style.strokeDashoffset = '0';
      }
      if (p2.current && len2) {
        p2.current.style.strokeDasharray = String(len2);
        p2.current.style.strokeDashoffset = String(len2);
        p2.current.getBoundingClientRect();
        p2.current.style.transition = 'stroke-dashoffset 1.1s ease-out 0.08s';
        p2.current.style.strokeDashoffset = '0';
      }
    });
    return () => cancelAnimationFrame(id);
  }, [reduce, len1, len2]);

  return (
    <svg
      className="block w-full"
      viewBox="0 0 3000 48"
      preserveAspectRatio="none"
      height={48}
      aria-hidden
    >
      <path
        ref={p1}
        d={PATH1}
        fill="none"
        stroke={stroke}
        strokeWidth={3}
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        ref={p2}
        d={PATH2}
        fill="none"
        stroke={stroke}
        strokeWidth={1.5}
        strokeOpacity={0.6}
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
