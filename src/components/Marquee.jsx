export default function Marquee({
  text,
  bgColor = 'var(--c-red)',
  textColor = 'var(--c-paper)',
  speed = '22s',
  reverse = false,
}) {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const trackStyle = reduced
    ? { color: textColor, animation: 'none' }
    : { color: textColor, animationDuration: speed };

  return (
    <div
      style={{
        background: bgColor,
        borderTop: '2px solid rgba(240,232,216,0.2)',
        borderBottom: '2px solid rgba(240,232,216,0.2)',
      }}
      className="overflow-hidden py-3"
    >
      <div
        className={`marqueeTrack font-mono text-[11px] uppercase tracking-[0.3em]${reverse ? ' marqueeTrackReverse' : ''}`}
        style={trackStyle}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="pr-8">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
