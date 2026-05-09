import { motion, useReducedMotion } from 'framer-motion'

export default function AnnotationLine({
  label,
  className = '',
  from = { x: 8, y: 20 },
  to = { x: 148, y: 20 },
}) {
  const reduced = useReducedMotion()
  const dx = Math.max(0, to.x - from.x)
  const width = dx + 160
  const height = 44
  const lineX2 = from.x + dx

  return (
    <div className={['select-none', className].join(' ')}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        aria-hidden="true"
      >
        <motion.circle
          cx={from.x}
          cy={from.y}
          r="2.5"
          fill="none"
          stroke="var(--c-blue-light)"
          strokeOpacity="0.55"
          strokeWidth="1"
          initial={reduced ? false : { opacity: 0 }}
          animate={reduced ? false : { opacity: 1 }}
          transition={reduced ? undefined : { duration: 0.25, ease: 'easeOut', delay: 0.2 }}
        />
        <motion.line
          x1={from.x}
          y1={from.y}
          x2={lineX2}
          y2={to.y}
          stroke="var(--c-blue-light)"
          strokeOpacity="0.5"
          strokeWidth="1"
          strokeLinecap="round"
          initial={reduced ? false : { pathLength: 0 }}
          animate={reduced ? false : { pathLength: 1 }}
          transition={reduced ? undefined : { duration: 0.55, ease: 'easeInOut' }}
        />
      </svg>
      <div className="-mt-7 pl-[155px] font-mono text-[10px] uppercase tracking-[0.14em] text-blueMuted">
        {label}
      </div>
    </div>
  )
}

