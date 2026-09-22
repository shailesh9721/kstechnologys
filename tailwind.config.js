/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)', surface: 'var(--surface)', ink: 'var(--ink)', muted: 'var(--muted)',
        line: 'var(--line)', brand: 'var(--brand)', 'brand-ink': 'var(--brand-ink)', mark: 'var(--mark)',
        dark: 'var(--dark)', 'dark-ink': 'var(--dark-ink)', soft: 'var(--soft)', ok: 'var(--ok)', err: 'var(--err)',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', '"Instrument Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      borderRadius: { m: '14px', l: '22px' },
    },
  },
  plugins: [],
}
