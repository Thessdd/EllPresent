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
        text: 'var(--c-text)',
        lime: 'var(--c-lime)',
        peach: 'var(--c-peach)',
        lavender: 'var(--c-lavender)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(200, 247, 62, 0.75), 0 0 24px rgba(200, 247, 62, 0.25)',
      },
    },
  },
  plugins: [],
}

