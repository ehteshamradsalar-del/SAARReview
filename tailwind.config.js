/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        offwhite: '#F3F2EE',
        'gray-light': '#E8E6E0',
        'gray-muted': '#777777',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        meta: ['var(--font-meta, var(--font-body))'],
      },
      maxWidth: {
        content: '1600px',
        measure: 'var(--max-measure)',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '350ms',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        35: '8.75rem',
      },
    },
  },
  plugins: [],
};
