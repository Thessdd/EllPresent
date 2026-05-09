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

  const onStar = () => {
    clicks.current += 1
    if (timer.current) window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => {
      clicks.current = 0
    }, 1200)
    if (clicks.current >= 5) {
      setEgg(true)
      clicks.current = 0
    }
  }

  return (
    <footer className="relative left-1/2 mt-10 w-screen -translate-x-1/2 border-t border-paper/[0.08] bg-ink py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 md:flex-row md:items-center md:justify-between">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">progetto ell-26 © camilla 2025</div>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted md:text-right">⚖️ bilancia certificata</div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl px-5 text-center">
        <p className="font-hand text-[13px] text-muted">fatto con panico, amore, e troppi ripensamenti</p>
        <button
          type="button"
          onClick={onStar}
          className="focusRing mt-4 font-mono text-[11px] text-muted/40 hover:text-muted/70"
          aria-label="Segreto"
        >
          ★
        </button>
      </div>
      {egg ? (
        <p className="mx-auto mt-4 max-w-6xl px-5 text-center font-hand text-base text-lime">
          🌈 tequila ha approvato questo sito. la gatta giudica severamente.
        </p>
      ) : null}
    </footer>
  )
}
