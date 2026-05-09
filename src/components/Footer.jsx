import { useRef, useState } from 'react';

export default function Footer() {
  const [unlocked, setUnlocked] = useState(false);
  const clicks = useRef(0);
  const reset = useRef(0);

  const onStar = () => {
    window.clearTimeout(reset.current);
    clicks.current += 1;
    if (clicks.current >= 5) {
      setUnlocked(true);
      clicks.current = 0;
      return;
    }
    reset.current = window.setTimeout(() => {
      clicks.current = 0;
    }, 1500);
  };

  return (
    <footer className="relative border-t border-[rgba(240,232,216,0.08)] bg-ink py-10">
      <button
        type="button"
        onClick={onStar}
        className="absolute right-4 top-4 font-mono text-[14px] text-muted opacity-25 transition-opacity hover:opacity-50"
        aria-label="Segreto"
      >
        ★
      </button>

      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 md:flex-row md:justify-between md:gap-6">
        <p className="font-mono text-[10px] uppercase text-muted md:max-w-[55%]">
          PROGETTO ELL-26 © CAMILLA 2025
        </p>
        <p className="font-mono text-[10px] uppercase text-muted md:text-right">
          ⚖️ BILANCIA CERTIFICATA
        </p>
      </div>

      <p className="mt-6 text-center font-hand text-[15px] text-muted">
        fatto con panico, amore, e troppi ripensamenti
      </p>

      {unlocked && (
        <p className="mt-4 px-5 text-center font-hand text-lg text-lime">
          🌈 tequila ha approvato questo sito. la gatta giudica severamente.
        </p>
      )}
    </footer>
  );
}
