export default function TapeStrip({ x = 0, y = 0, rotation = 3, width = 86, tone = 'yellow', className = '' }) {
  const palette =
    tone === 'paper'
      ? { bg: 'rgba(240,232,216,0.15)', border: 'rgba(240,232,216,0.08)' }
      : tone === 'lime'
        ? { bg: 'rgba(127,255,0,0.10)', border: 'rgba(127,255,0,0.16)' }
        : { bg: 'rgba(245,230,66,0.12)', border: 'rgba(245,230,66,0.18)' }

  const toCss = (v) => (typeof v === 'number' ? `${v}px` : v)

  return (
    <span
      aria-hidden="true"
      className={['tape', className].join(' ')}
      style={{
        left: toCss(x),
        top: toCss(y),
        width,
        transform: `rotate(${rotation}deg)`,
        background: palette.bg,
        borderColor: palette.border,
      }}
    />
  )
}
