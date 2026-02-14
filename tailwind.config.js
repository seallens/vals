/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#c77dff',
        'neon-magenta': '#e0aaff',
        'neon-glow': '#9d4edd',
        'vals-dark': '#10002b',
        'card-bg': 'rgba(22, 0, 45, 0.92)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
      },
      keyframes: {
        'center-pulse': {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.3)' },
        },
        'tiny-glow-breathe': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
        },
      },
      animation: {
        'center-pulse': 'center-pulse 2s ease-in-out infinite',
        'tiny-glow-breathe': 'tiny-glow-breathe 1.5s ease-in-out infinite',
      },
      boxShadow: {
        'neon-sm': '0 0 30px #c77dff, 0 0 60px #9d4edd',
        'neon-card': '0 0 40px rgba(157, 78, 221, 0.2), inset 0 1px 0 rgba(224, 170, 255, 0.1)',
        'glow-dot': '0 0 40px #c77dff, 0 0 80px #9d4edd',
      },
    },
  },
  plugins: [],
}
