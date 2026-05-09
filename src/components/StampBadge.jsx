function resolveColor(color) {
  if (!color) return 'var(--c-paper)';
  if (color.startsWith('var(')) return color;
  if (color.startsWith('--')) return `var(${color})`;
  return color;
}

export default function StampBadge({
  color,
  rotation = -8,
  children,
  className = '',
  style: styleProp = {},
}) {
  const c = resolveColor(color);
  return (
    <span
      className={`stamp ${className}`.trim()}
      style={{
        color: c,
        background: 'transparent',
        ...styleProp,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {children}
    </span>
  );
}
