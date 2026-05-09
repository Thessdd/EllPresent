import { motion, useReducedMotion } from 'framer-motion'
import AnnotationLine from './AnnotationLine.jsx'
import SchematicPanel from './SchematicPanel.jsx'

function StaggerLetters({ text, className }) {
  const reduced = useReducedMotion()
  const letters = Array.from(text)
  return (
    <span className={className} aria-label={text} role="text">
      {letters.map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={reduced ? false : { opacity: 1, y: 0 }}
          transition={
            reduced
              ? undefined
              : { duration: 0.55, ease: 'easeOut', delay: 0.02 * i }
          }
          style={{ display: 'inline-block', whiteSpace: ch === ' ' ? 'pre' : 'normal' }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section id="sheet-01" className="min-h-[calc(100vh-110px)] pb-10 pt-10 md:pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 border border-blueLight/20 bg-surface/30">
          <div className="grid grid-cols-2 gap-0 md:grid-cols-4">
            {[
              ['PROJECT', 'ELL_26_BIRTHDAY'],
              ['CLIENT', 'CAMILLA'],
              ['DATE', '2025'],
              ['REV', 'A'],
            ].map(([k, v]) => (
              <div
                key={k}
                className="border-b border-blueLight/15 border-r border-blueLight/15 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-blueMuted"
              >
                <div className="opacity-70">{k}:</div>
                <div className="mt-1 text-cream">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <SchematicPanel label="SHEET 01 — SUBJECT" className="overflow-hidden">
          <div className="relative">
            <div className="absolute right-4 top-4 hidden font-mono text-[10px] uppercase tracking-[0.18em] text-blueMuted md:block">
              SCALA 1:1
            </div>
            <div className="absolute bottom-4 left-4 hidden font-mono text-[10px] uppercase tracking-[0.18em] text-blueMuted md:block">
              NOTA: contiene amore in eccesso
            </div>
            <div className="absolute right-4 top-12 hidden font-mono text-[10px] uppercase tracking-[0.18em] text-blueMuted md:block">
              TOLLERANZA: ±∞
            </div>

            <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
              <div className="leading-none">
                <div className="relative">
                  <StaggerLetters
                    text="HAPPY"
                    className="bpTextStroke font-mono text-[64px] uppercase tracking-[0.12em] md:text-[92px]"
                  />
                  <div className="mt-2">
                    <AnnotationLine label="← stato emotivo certificato" />
                  </div>
                </div>

                <div className="mt-6">
                  <StaggerLetters
                    text="26th"
                    className="font-mono text-[76px] uppercase tracking-[0.12em] text-cream md:text-[120px]"
                  />
                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-[10px] w-[22px] border-l border-t border-blueLight/45" aria-hidden="true" />
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-blueMuted">
                      ∅ 26 ANNI
                    </div>
                    <div className="h-[10px] w-[22px] border-r border-t border-blueLight/45" aria-hidden="true" />
                  </div>
                </div>

                <div className="mt-7">
                  <div className="relative inline-block">
                    <div className="bpLimeStroke font-display text-[64px] italic md:text-[88px]">
                      Ell ✦
                    </div>
                    <div className="mt-2">
                      <AnnotationLine label="← anomalia nel sistema (necessaria)" />
                    </div>
                  </div>
                </div>

                <motion.p
                  className="mt-8 inline-block max-w-2xl font-note text-[28px] text-blueMuted/80"
                  initial={reduced ? false : { opacity: 0, y: 10 }}
                  animate={reduced ? false : { opacity: 1, y: 0 }}
                  transition={reduced ? undefined : { delay: 0.55, duration: 0.6, ease: 'easeOut' }}
                >
                  <span className="relative">
                    questo è il tuo regalo — da Camilla 🫀
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 right-0 h-[2px]"
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(74,158,255,0.0), rgba(74,158,255,0.55), rgba(74,158,255,0.0))',
                        transform: 'skewX(-12deg)',
                      }}
                    />
                  </span>
                </motion.p>
              </div>

              <div className="space-y-5">
                <div className="border border-blueLight/20 bg-bg/40 px-5 py-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-blueMuted">
                    floating annotations
                  </div>
                  <div className="mt-3 space-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-blueMuted">
                    <div>REF: ELL-26-B</div>
                    <div>STATO: IN CONSEGNA</div>
                    <div>ERRORE: EMOZIONE NON CONTENIBILE</div>
                  </div>
                </div>

                <div className="border border-blueLight/20 bg-bg/40 px-5 py-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-blueMuted">
                    disclaimer
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-text/80">
                    Questo documento è un regalo. E anche un modo per dire: ho studiato il tuo
                    cuore come una planimetria, e mi sono persa volentieri.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SchematicPanel>
      </div>
    </section>
  )
}

