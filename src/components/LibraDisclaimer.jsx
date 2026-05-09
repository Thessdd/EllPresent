import { motion, useReducedMotion } from 'framer-motion'
import SchematicPanel from './SchematicPanel.jsx'

export default function LibraDisclaimer() {
  const reduced = useReducedMotion()

  return (
    <div className="py-10 md:py-14">
      <SchematicPanel
        id="sheet-03"
        label="SHEET 03 — REVISION HISTORY — STATUS: ONGOING"
        className="mt-8"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-blueMuted">
              registro revisioni — camilla.exe
            </div>
          </div>
          <div className="shrink-0 border border-blueLight/25 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-blueLight">
            bilancia certified ⚖️
          </div>
        </div>

        <div className="mt-6 border border-blueLight/15">
          <div className="grid grid-cols-[80px_120px_1fr_44px] border-b border-blueLight/15 bg-bg/40 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-blueMuted">
            <div>rev</div>
            <div>data</div>
            <div>nota</div>
            <div className="text-right">stato</div>
          </div>

          {[
            ['A', '2025-01-15', 'Prima idea: corso di sushi. Scartata.', '✗', 'text-blueMuted'],
            ['B', '2025-03-02', 'Seconda idea: ramen. Tenuta in standby.', '◌', 'text-blueMuted'],
            ['C', '2025-05-01', 'Cucina cinese vegetariana. APPROVATA.', '✓', 'text-lime'],
          ].map(([rev, date, note, mark, markClass]) => (
            <div
              key={rev}
              className="grid grid-cols-[80px_120px_1fr_44px] gap-0 border-b border-blueLight/10 px-4 py-3 text-sm text-text/85"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-cream">
                {rev}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-blueMuted">
                {date}
              </div>
              <div className="leading-relaxed">{note}</div>
              <div className={['text-right font-mono text-[12px]', markClass].join(' ')}>
                {mark}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className="mt-7 rotate-[-1deg] font-note text-[30px] text-blueMuted/85"
          initial={reduced ? false : { opacity: 0, y: 8 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={reduced ? undefined : { duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        >
          ⚖️ essendo bilancia, il processo è parte del regalo
        </motion.div>
      </SchematicPanel>
    </div>
  )
}

