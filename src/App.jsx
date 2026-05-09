import Hero from './components/Hero.jsx'
import GiftReveal from './components/GiftReveal.jsx'
import LibraDisclaimer from './components/LibraDisclaimer.jsx'
import CourseSelector from './components/CourseSelector.jsx'
import PersonalNote from './components/PersonalNote.jsx'
import Footer from './components/Footer.jsx'
import SparkleCursor from './components/SparkleCursor.jsx'
import BlueprintGrid from './components/BlueprintGrid.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-text">
      <BlueprintGrid />
      <SparkleCursor />

      <a
        className="focusRing sr-only focus:not-sr-only fixed left-4 top-4 z-50 border border-blueLight/30 bg-bg/80 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-cream backdrop-blur"
        href="#sheet-02"
      >
        Salta al regalo
      </a>

      <header className="sticky top-0 z-40 border-b border-blueLight/15 bg-bg/75 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-blueMuted">
            engineering order 26-b <span className="text-blueLight">+</span> ell_delivery_system
          </div>
          <div className="hidden gap-4 md:flex">
            {[
              ['#sheet-01', 'sheet 01'],
              ['#sheet-02', 'sheet 02'],
              ['#sheet-04', 'sheet 04'],
              ['#sheet-05', 'sheet 05'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="focusRing font-mono text-[11px] uppercase tracking-[0.14em] text-blueMuted hover:text-cream"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-8 md:py-12">
        <Hero />
        <GiftReveal />
        <LibraDisclaimer />
        <CourseSelector />
        <PersonalNote />
      </main>
      <Footer />
    </div>
  )
}

