import { useEffect, useRef, useState } from 'react'

export default function Footer() {
  const [egg, setEgg] = useState(false)
  const clicks = useRef(0)
  const timer = useRef(null)

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current)
    }
  }, [])

  const onCrosshair = () => {
    clicks.current += 1
    if (timer.current) window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => {
      clicks.current = 0
    }, 1100)
    if (clicks.current >= 5) {
      setEgg(true)
      clicks.current = 0
    }
  }

  return (
    <footer className="mt-10 border-t border-blue/30 bg-bg/70 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 md:flex-row md:items-center md:justify-between">
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-blueMuted">
          progetto: ell_26 © camilla 2025
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onCrosshair}
            className="focusRing border border-blueLight/20 bg-bg/40 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-blueMuted hover:text-cream"
            aria-label="Crosshair di sistema"
          >
            ✛
          </button>
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-blueMuted">
            ⚖️ libra certified
          </div>
        </div>
      </div>

      {egg ? (
        <div className="mx-auto mt-6 max-w-6xl px-5">
          <div className="schematicPanel border border-lime/25 bg-bg/70 px-5 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-lime">
            🌈 tequila approva questo schematic.
          </div>
        </div>
      ) : null}
    </footer>
  )
}

