export default function SpecRow({ label, value, accent = 'blue' }) {
  const valueColor =
    accent === 'lime' ? 'text-lime' : accent === 'cream' ? 'text-cream' : 'text-text'

  return (
    <div className="flex items-baseline gap-3 font-mono text-[11px] tracking-[0.08em] text-blueMuted">
      <div className="shrink-0 whitespace-nowrap">{label}</div>
      <div className="mx-1 flex-1 border-b border-dotted border-blueLight/35" aria-hidden="true" />
      <div className={['shrink-0 whitespace-nowrap', valueColor].join(' ')}>{value}</div>
    </div>
  )
}

