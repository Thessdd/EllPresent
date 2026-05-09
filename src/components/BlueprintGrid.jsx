import { motion, useReducedMotion } from 'framer-motion'

const gridSvg = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  <g fill="none" stroke="#0f1e35" stroke-opacity="0.9">
    <path d="M0 0H40V40H0Z"/>
    <path d="M0 20H40M20 0V40" stroke-opacity="0.35"/>
  </g>
  <g stroke="#0f1e35" stroke-opacity="0.9" stroke-width="1">
    <path d="M20 18V22M18 20H22"/>
    <path d="M0 18V22M-2 20H2" opacity="0.0"/>
  </g>
  <g stroke="#0f1e35" stroke-opacity="0.9" stroke-width="1">
    <path d="M0 20H4M2 18V22" opacity="0.9"/>
    <path d="M40 20H36M38 18V22" opacity="0.9"/>
    <path d="M20 0V4M18 2H22" opacity="0.9"/>
    <path d="M20 40V36M18 38H22" opacity="0.9"/>
  </g>
</svg>
`)

export default function BlueprintGrid() {
  const reduced = useReducedMotion()
  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,${gridSvg}")`,
          backgroundSize: '40px 40px',
          opacity: 0.85,
        }}
        initial={reduced ? false : { opacity: 0 }}
        animate={reduced ? false : { opacity: 0.85 }}
        transition={reduced ? undefined : { duration: 0.3, ease: 'easeOut' }}
      />
      <div className="scanlines" aria-hidden="true" />
    </>
  )
}

