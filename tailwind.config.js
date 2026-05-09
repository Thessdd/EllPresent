/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        slab: ['Oswald', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        bg: '#0e0c0a',
        ink: '#1a1612',
        paper: '#f0e8d8',
        red: '#d42b2b',
        yellow: '#f5e642',
        lime: '#7fff00',
        muted: 'rgba(240,232,216,0.45)',
        white: '#f5f0e8',
      },
      keyframes: {
        marqueeScroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marqueeScroll 22s linear infinite',
      },
    },
  },
  plugins: [],
};
