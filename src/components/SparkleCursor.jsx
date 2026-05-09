import { useEffect, useMemo, useRef, useState } from 'react'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (!mq) return
    const onChange = () => setReduced(Boolean(mq.matches))
    onChange()
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])
  return reduced
}

const TRAIL = ['✕', '★', '•', '✗']
const COLORS = ['var(--c-red)', 'var(--c-yellow)', 'var(--c-lime)', 'var(--c-white)']

export default function SparkleCursor() {
  const reducedMotion = usePrefersReducedMotion()
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [trail, setTrail] = useState([])
  const lastSpawn = useRef(0)

  const isCoarsePointer = useMemo(() => window.matchMedia?.('(pointer: coarse)')?.matches ?? false, [])

  useEffect(() => {
    if (reducedMotion || isCoarsePointer) return

    const onMove = (e) => {
      setVisible(true)
      setPos({ x: e.clientX, y: e.clientY })

      const moved = Math.abs(e.movementX ?? 0) + Math.abs(e.movementY ?? 0)
      const now = performance.now()
      if (moved > 2 && now - lastSpawn.current > 28) {
        lastSpawn.current = now
        const g = TRAIL[Math.floor(Math.random() * TRAIL.length)]
        const c = COLORS[Math.floor(Math.random() * COLORS.length)]
        const id = `${now}-${Math.random()}`
        setTrail((t) => [...t.slice(-14), { id, x: e.clientX, y: e.clientY, g, c }])
      }
    }
    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [reducedMotion, isCoarsePointer])

  useEffect(() => {
    if (reducedMotion || isCoarsePointer) return
    const t = window.setInterval(() => {
      setTrail((prev) => (prev.length ? prev.slice(1) : prev))
    }, 90)
    return () => window.clearInterval(t)
  }, [reducedMotion, isCoarsePointer])

  if (reducedMotion || isCoarsePointer) return null

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]" style={{ mixBlendMode: 'normal' }}>
      {trail.map((p, i) => (
        <span
          key={p.id}
          style={{
            position: 'fixed',
            left: p.x,
            top: p.y,
            transform: 'translate(-50%, -50%)',
            color: p.c,
            fontFamily: 'var(--font-mono)',
            fontSize: 12 + (i % 3),
            opacity: 0.15 + (i / trail.length) * 0.55,
          }}
        >
          {p.g}
        </span>
      ))}

      <div
        style={{
          position: 'fixed',
          left: pos.x,
          top: pos.y,
          transform: 'translate(-50%, -50%)',
          zIndex: 101,
          opacity: visible ? 1 : 0,
          transition: 'opacity 160ms ease',
          color: 'var(--c-red)',
          fontFamily: 'var(--font-mono)',
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        ✕
      </div>
    </div>
  )
}
