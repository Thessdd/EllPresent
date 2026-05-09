import SchematicPanel from './SchematicPanel.jsx'

export default function PersonalNote() {
  return (
    <div className="py-10 md:py-14">
      <SchematicPanel
        id="sheet-05"
        label="SHEET 05 — DESIGNER NOTES — CONFIDENTIAL"
        softened
        className="mt-8"
      >
        <div className="border-b border-lime/15 pb-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-blueMuted">
            // fine struttura tecnica. quello che segue è reale. //
          </div>
        </div>

        <h2 className="mt-7 font-display text-4xl italic text-cream md:text-5xl">
          Una nota da Camilla
        </h2>

        <div className="mt-6 max-w-3xl space-y-5 text-[16px] leading-[1.9] text-text/90 md:text-[18px]">
          <p>
            Ell, tu sei una di quelle persone che rendono il mondo più intenzionale solo
            esistendo dentro di lui. Volevo che il tuo compleanno avesse la stessa
            sensazione — qualcosa scelto con cura, qualcosa completamente tuo.
          </p>
          <p>Buon compleanno amore. Ti voglio un bene assurdo. 🫀</p>
        </div>

        <div className="mt-8 rotate-[-1.5deg] font-note text-[52px] leading-none text-lime">
          — Camilla
        </div>

        <div className="mt-7 font-mono text-[10px] uppercase tracking-[0.16em] text-blueMuted">
          documento: regalo-ell-26 | approvato da: cuore | data: 2025
        </div>
      </SchematicPanel>
    </div>
  )
}

