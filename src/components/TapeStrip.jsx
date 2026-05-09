const tones = {
  yellow: {
    background: 'rgba(245,230,66,0.13)',
    border: '1px solid rgba(245,230,66,0.2)',
  },
  lime: {
    background: 'rgba(127,255,0,0.11)',
    border: '1px solid rgba(127,255,0,0.22)',
  },
  paper: {
    background: 'rgba(240,232,216,0.13)',
    border: '1px solid rgba(240,232,216,0.2)',
  },
};

export default function TapeStrip({
  width = 86,
  rotation = 3,
  tone = 'yellow',
  className = '',
}) {
  const t = tones[tone] ?? tones.yellow;
  return (
    <span
      className={`tape ${className}`.trim()}
      style={{
        width: `${width}px`,
        transform: `rotate(${rotation}deg)`,
        ...t,
      }}
    />
  );
}
