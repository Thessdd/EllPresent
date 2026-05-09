export default function PunkDivider({ invert = false, className = '' }) {
  const stroke = invert ? 'rgba(240,232,216,0.40)' : 'rgba(240,232,216,0.30)'
  return (
    <div className={['relative', className].join(' ')}>
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        style={{ width: '100%', height: 44, display: 'block' }}
      >
        <path
          d="M0,28 L60,26 L120,34 L180,22 L240,36 L300,20 L360,38 L420,24 L480,40 L540,22 L600,36 L660,18 L720,38 L780,22 L840,36 L900,20 L960,38 L1020,24 L1080,40 L1140,22 L1200,34"
          fill="none"
          stroke={stroke}
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M0,40 L90,44 L180,42 L270,46 L360,44 L450,48 L540,46 L630,50 L720,48 L810,52 L900,50 L990,54 L1080,52 L1170,56 L1200,54"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          opacity="0.75"
        />
      </svg>
    </div>
  )
}
