/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F8FAFC',
        card: '#FFFFFF',
        navy: '#0F172A',
        primary: '#1D4ED8',
        gold: {
          DEFAULT: '#D97706',
          badge: '#FEF3C7',
          badgetext: '#92400E',
        },
        quantum: '#1D4ED8',
        aiml: '#6366F1',
        crypto: '#059669',
        blockchain: '#D97706',
      },
      boxShadow: {
        premium: '0 10px 30px rgba(15, 23, 42, 0.06)',
        glow: '0 0 20px rgba(29, 78, 216, 0.15)',
        goldglow: '0 0 20px rgba(217, 119, 6, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'wave': 'wave 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
