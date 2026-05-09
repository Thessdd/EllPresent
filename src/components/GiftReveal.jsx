import SchematicPanel from './SchematicPanel.jsx'
import AnnotationLine from './AnnotationLine.jsx'
import SpecRow from './SpecRow.jsx'

export default function GiftReveal() {
  return (
    <div className="py-10 md:py-14">
      <SchematicPanel
        id="sheet-02"
        label="SHEET 02 — MAIN ASSEMBLY — REF: REGALO-A"
        className="mt-10"
      >
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div className="relative">
            <div className="border border-blueLight/20 bg-bg/40 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-blueMuted">
                deconstructed icon
              </div>
              <div className="mt-5 text-[86px] leading-none text-cream">🥟</div>
              <div className="mt-5 space-y-2">
                <AnnotationLine label="→ involucro: pasta a mano" />
                <AnnotationLine label="→ ripieno: tofu + verdure" />
                <AnnotationLine label="→ cottura: al vapore (100°C)" />
                <AnnotationLine label="→ amore: non misurabile" />
              </div>
            </div>
          </div>

          <div>
            <div className="font-mono text-2xl font-bold uppercase tracking-[0.12em] text-cream md:text-3xl">
              un corso di cucina
            </div>
            <div className="mt-2 font-mono text-sm uppercase tracking-[0.18em] text-lime">
              cinese vegetariana
            </div>

            <div className="mt-6 space-y-2">
              <SpecRow label="DURATA" value="UNA SERATA PERFETTA" accent="cream" />
              <SpecRow label="INGREDIENTI" value="100% PLANT-BASED" accent="cream" />
              <SpecRow label="DIFFICOLTÀ" value="MEDIA (CE LA FAI)" accent="cream" />
              <SpecRow label="AMORE INCLUSO" value="SÌ" accent="lime" />
            </div>

            <div className="mt-7 border-l-2 border-blueLight/45 bg-surface/60 px-5 py-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-blueMuted">
                nota tecnica
              </div>
              <p className="mt-3 leading-relaxed text-text/85">
                Volevo darti qualcosa che ti somiglia — creativo, intenzionale, delizioso e
                plant-based. La cucina vegetariana cinese è antica, complessa e piena di
                umami. Proprio come te, onestamente.
              </p>
            </div>
          </div>
        </div>
      </SchematicPanel>
    </div>
  )
}

