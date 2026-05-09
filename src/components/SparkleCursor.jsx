import { useEffect, useMemo, useState } from 'react'

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

export default function SparkleCursor() {
  const reducedMotion = usePrefersReducedMotion()
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [glyph, setGlyph] = useState('+')

  const isCoarsePointer = useMemo(() => {
    return window.matchMedia?.('(pointer: coarse)')?.matches ?? false
  }, [])

  useEffect(() => {
    if (reducedMotion || isCoarsePointer) return

    const onMove = (e) => {
      setVisible(true)
      setPos({ x: e.clientX, y: e.clientY })
      if ((e.movementX ?? 0) !== 0 || (e.movementY ?? 0) !== 0) {
        const r = Math.random()
        setGlyph(r < 0.72 ? '+' : r < 0.86 ? '◈' : r < 0.95 ? '○' : '·')
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

  if (reducedMotion || isCoarsePointer) return null

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        zIndex: 60,
        pointerEvents: 'none',
        opacity: visible ? 1 : 0,
        transition: 'opacity 200ms ease',
      }}
    >
      <div
        style={{
          transform: 'translate(-50%, -50%)',
          color: 'var(--c-blue-light)',
          fontFamily: 'var(--font-mono)',
          fontSize: 14,
          textShadow: '0 0 16px rgba(74,158,255,0.25)',
          mixBlendMode: 'screen',
        }}
      >
        <span style={{ color: glyph === '◈' ? 'var(--c-lime)' : 'var(--c-blue-light)' }}>
          {glyph}
        </span>
      </div>
    </div>
  )
}

