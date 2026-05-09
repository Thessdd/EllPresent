export default function RansomHeadline({ lines = [], className = '' }) {
  return (
    <div className={className}>
      {lines.map((line, idx) => (
        <div key={idx} style={{ position: 'relative' }}>
          {line}
        </div>
      ))}
    </div>
  )
}

