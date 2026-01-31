/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        background: 'var(--color-background)',
        'header-bg': 'var(--color-header-bg)',
        'control-bg': 'var(--color-control-bg)',
        accent: 'var(--color-accent)',
        link: 'var(--color-link)',
        'section-header': 'var(--color-section-header)',
        date: 'var(--color-date)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        'muted-dark': 'var(--color-muted-dark)',
        'muted-darker': 'var(--color-muted-darker)',
        'muted-darkest': 'var(--color-muted-darkest)',
        'reading-link': 'var(--color-reading-link)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
