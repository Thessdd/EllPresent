export default function StampBadge({ color = 'var(--c-red)', rotation = -8, className = '', children }) {
  return (
    <span
      className={['stamp', className].join(' ')}
      style={{
        color,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {children}
    </span>
  )
}

