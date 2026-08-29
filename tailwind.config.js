/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: '#0A192F',
            dark: '#070F1E',
            deep: '#0B1528',
            surface: '#0F1E36',
            card: '#162238',
            border: '#1E3A5F',
          },
          green: {
            DEFAULT: '#10B981',
            dark: '#059669',
            darker: '#047857',
            light: '#34D399',
            subtle: 'rgba(16, 185, 129, 0.12)',
            glow: 'rgba(16, 185, 129, 0.25)',
          },
          amber: {
            DEFAULT: '#F59E0B',
            dark: '#D97706',
            light: '#FBBF24',
          },
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
