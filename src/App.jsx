import Hero from './components/Hero.jsx'
import GiftReveal from './components/GiftReveal.jsx'
import LibraDisclaimer from './components/LibraDisclaimer.jsx'
import CourseSelector from './components/CourseSelector.jsx'
import PersonalNote from './components/PersonalNote.jsx'
import Footer from './components/Footer.jsx'
import SparkleCursor from './components/SparkleCursor.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-paper">
      <SparkleCursor />

      <a
        className="focusRing sr-only focus:not-sr-only fixed left-4 top-4 z-50 border border-paper/25 bg-bg px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-paper"
        href="#gift"
      >
        Salta al regalo
      </a>

      <main className="relative mx-auto max-w-6xl px-4 sm:px-5">
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

