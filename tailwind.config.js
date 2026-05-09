/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        slab: ['var(--font-slab)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        body: ['var(--font-body)', 'sans-serif'],
        hand: ['var(--font-hand)', 'cursive'],
      },
      colors: {
        bg: 'var(--c-bg)',
        paper: 'var(--c-paper)',
        ink: 'var(--c-ink)',
        red: 'var(--c-red)',
        yellow: 'var(--c-yellow)',
        lime: 'var(--c-lime)',
        white: 'var(--c-white)',
        muted: 'var(--c-muted)',
      },
    },
  },
  plugins: [],
}

