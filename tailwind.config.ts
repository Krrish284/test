import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', 'system-ui', 'sans-serif'],
        mono: ['"Martian Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        asphalt: {
          DEFAULT: '#060708',
          raised: '#0A0C0E',
          panel: '#101316',
          elevated: '#16191D',
        },
        lane: {
          DEFAULT: '#EDF1EE',
          dim: '#9FB0B8',
          mute: '#7E8B92',
        },
        volt: {
          DEFAULT: '#D6FF3F',
          soft: '#E4FF6E',
          dim: 'rgba(214, 255, 63, 0.12)',
        },
        flood: '#BFDDE8',
      },
      letterSpacing: {
        signage: '0.04em',
        tightest: '-0.04em',
      },
      boxShadow: {
        ambient: '0 24px 60px -24px rgba(0, 0, 0, 0.7)',
        'ambient-sm': '0 12px 32px -16px rgba(0, 0, 0, 0.6)',
        flare: '0 0 24px rgba(214, 255, 63, 0.25)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      minHeight: {
        touch: '44px',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseLine: {
          '0%, 100%': { opacity: '0.25' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        ticker: 'ticker 36s linear infinite',
        'pulse-line': 'pulseLine 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
