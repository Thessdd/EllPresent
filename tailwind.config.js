/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
        body: ['var(--font-body)', 'sans-serif'],
        note: ['var(--font-note)', 'cursive'],
      },
      colors: {
        bg: 'var(--c-bg)',
        surface: 'var(--c-surface)',
        grid: 'var(--c-grid)',
        blue: 'var(--c-blue)',
        blueLight: 'var(--c-blue-light)',
        blueMuted: 'var(--c-blue-muted)',
        cream: 'var(--c-cream)',
        text: 'var(--c-text)',
        lime: 'var(--c-lime)',
      },
      boxShadow: {
        limeGlow: '0 0 0 1px rgba(200,247,62,0.55), 0 0 24px rgba(200,247,62,0.18)',
        blueGlow: '0 0 0 1px rgba(74,158,255,0.35), 0 0 24px rgba(74,158,255,0.14)',
      },
    },
  },
  plugins: [],
}

