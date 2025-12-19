const colors = {
  bg: 'rgb(var(--color-bg) / <alpha-value>)',
  surface: 'rgb(var(--color-surface) / <alpha-value>)',
  border: 'rgb(var(--color-border) / <alpha-value>)',
  primary: 'rgb(var(--color-primary) / <alpha-value>)',
  text: 'rgb(var(--color-text) / <alpha-value>)',
  muted: 'rgb(var(--color-muted) / <alpha-value>)'
}

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Urbanist', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        inset: 'inset 0 0 0 1px rgb(var(--color-border) / 1)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
