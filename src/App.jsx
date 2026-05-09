import Hero from './components/Hero.jsx'
import GiftReveal from './components/GiftReveal.jsx'
import LibraDisclaimer from './components/LibraDisclaimer.jsx'
import CourseSelector from './components/CourseSelector.jsx'
import PersonalNote from './components/PersonalNote.jsx'
import Footer from './components/Footer.jsx'
import SparkleCursor from './components/SparkleCursor.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <div className="mesh" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <SparkleCursor />

      <a
        className="focusRing sr-only focus:not-sr-only fixed left-4 top-4 z-50 rounded-full bg-bg/80 px-4 py-2 font-mono text-sm text-text backdrop-blur"
        href="#regalo"
      >
        Salta al regalo
      </a>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-bg/55 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="font-mono text-xs tracking-wider text-text/80">
            camilla.exe <span className="text-lime">✦</span> ell_26
          </div>
          <div className="hidden gap-4 md:flex">
            {[
              ['#hero', 'inizio'],
              ['#regalo', 'il regalo'],
              ['#scelte', 'scegli'],
              ['#nota', 'nota'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="focusRing font-mono text-xs text-text/80 hover:text-text"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-5">
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

