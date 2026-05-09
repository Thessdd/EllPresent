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

  const isCoarsePointer = useMemo(() => {
    return window.matchMedia?.('(pointer: coarse)')?.matches ?? false
  }, [])

  useEffect(() => {
    if (reducedMotion || isCoarsePointer) return

    const onMove = (e) => {
      setVisible(true)
      setPos({ x: e.clientX, y: e.clientY })
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
          color: 'var(--c-lime)',
          fontFamily: 'var(--font-mono)',
          fontSize: 14,
          textShadow: '0 0 14px rgba(200,247,62,0.35)',
          mixBlendMode: 'screen',
        }}
      >
        ✦
      </div>
    </div>
  )
}

