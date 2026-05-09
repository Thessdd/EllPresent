export default function WobblyCircle({ color = 'var(--c-yellow)', strokeWidth = 2, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 200 200"
      style={{ overflow: 'visible' }}
    >
      <path
        d="M100,18
          C140,16 176,44 182,90
          C188,136 156,178 106,182
          C56,186 20,156 18,108
          C16,60 50,20 100,18 Z"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />
    </svg>
  )
}

