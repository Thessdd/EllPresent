/**
 * Approximate circle with cubic segments, radius wobbles ±8px from mean.
 */
const WOBBLY_PATH =
  'M 100 12 C 128 10 156 22 172 48 C 188 74 188 110 170 136 C 152 162 118 176 84 170 C 50 164 22 138 16 104 C 10 70 26 36 56 22 C 72 14 86 12 100 12 Z';

export default function WobblyCircle({
  color = 'var(--c-yellow)',
  size = 200,
  strokeWidth = 2,
  className = '',
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden
    >
      <path
        d={WOBBLY_PATH}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
