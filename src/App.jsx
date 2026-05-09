import CourseSelector from './components/CourseSelector.jsx';
import Footer from './components/Footer.jsx';
import GiftReveal from './components/GiftReveal.jsx';
import Hero from './components/Hero.jsx';
import LibraDisclaimer from './components/LibraDisclaimer.jsx';
import PersonalNote from './components/PersonalNote.jsx';
import SparkleCursor from './components/SparkleCursor.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-paper">
      <SparkleCursor />
      <a href="#contenuto" className="skipLink focusRing">
        Salta al contenuto
      </a>
      <main id="contenuto">
        <Hero />
        <GiftReveal />
        <LibraDisclaimer />
        <CourseSelector />
        <PersonalNote />
      </main>
      <Footer />
    </div>
  );
}
