import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'rgb(var(--foreground-rgb) / <alpha-value>)',
        surface: 'var(--surface)',
        card: 'var(--card)',
        border: 'rgb(var(--border-rgb) / <alpha-value>)',
        muted: 'rgb(var(--muted-rgb) / <alpha-value>)',
        'muted-foreground': 'rgb(var(--muted-foreground-rgb) / <alpha-value>)',
        primary: 'rgb(var(--primary-rgb) / <alpha-value>)',
        secondary: 'rgb(var(--secondary-rgb) / <alpha-value>)',
      },
      fontFamily: {
        'space-grotesk': 'var(--font-syne, system-ui, sans-serif)',
        'space-mono': 'var(--font-space-mono, monospace)',
        'inter': 'system-ui, sans-serif',
      },
      backdropBlur: {
        'xs': '2px',
      },
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'text-reveal': {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.6',
          },
          '50%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
        'text-reveal': 'text-reveal 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        glow: '0 0 24px rgba(139, 92, 246, 0.25)',
        'glow-lg': '0 0 50px rgba(139, 92, 246, 0.35)',
        luxury: '0 20px 60px var(--shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ':root': {
          '--background': '#050816',
          '--foreground': '#ffffff',
          '--foreground-rgb': '255 255 255',
          '--surface': '#111827',
          '--card': 'rgba(255, 255, 255, 0.06)',
          '--card-solid': '#111827',
          '--border': 'rgba(255, 255, 255, 0.12)',
          '--border-rgb': '255 255 255',
          '--muted': '#94a3b8',
          '--muted-rgb': '148 163 184',
          '--muted-foreground': '#cbd5e1',
          '--muted-foreground-rgb': '203 213 225',
          '--primary': '#8b5cf6',
          '--primary-rgb': '139 92 246',
          '--secondary': '#06b6d4',
          '--secondary-rgb': '6 182 212',
          '--shadow-color': 'rgba(2, 6, 23, 0.45)',
        },
        '[data-theme="dark"]': {
          '--background': '#050816',
          '--foreground': '#ffffff',
          '--foreground-rgb': '255 255 255',
          '--surface': '#111827',
          '--card': 'rgba(255, 255, 255, 0.06)',
          '--card-solid': '#111827',
          '--border': 'rgba(255, 255, 255, 0.12)',
          '--border-rgb': '255 255 255',
          '--muted': '#94a3b8',
          '--muted-rgb': '148 163 184',
          '--muted-foreground': '#cbd5e1',
          '--muted-foreground-rgb': '203 213 225',
          '--primary': '#8b5cf6',
          '--primary-rgb': '139 92 246',
          '--secondary': '#06b6d4',
          '--secondary-rgb': '6 182 212',
          '--shadow-color': 'rgba(2, 6, 23, 0.45)',
        },
        '[data-theme="light"]': {
          '--background': '#f3f4f6',
          '--foreground': '#111827',
          '--foreground-rgb': '17 24 39',
          '--surface': '#ffffff',
          '--card': 'rgba(255, 255, 255, 0.9)',
          '--card-solid': '#ffffff',
          '--border': 'rgba(0, 0, 0, 0.08)',
          '--border-rgb': '15 23 42',
          '--muted': '#4b5563',
          '--muted-rgb': '75 85 99',
          '--muted-foreground': '#6b7280',
          '--muted-foreground-rgb': '107 114 128',
          '--primary': '#6d28d9',
          '--primary-rgb': '109 40 217',
          '--secondary': '#0891b2',
          '--secondary-rgb': '8 145 178',
          '--shadow-color': 'rgba(15, 23, 42, 0.12)',
          '--shadow-color-rgb': '15 23 42',
        },
      });
      addBase({
        'body': {
          color: 'rgb(var(--foreground-rgb))',
          backgroundColor: 'var(--background)',
        },
      });
      addBase({
        '@media (prefers-reduced-motion: reduce)': {
          '*': {
            'animation-duration': '0.01ms !important',
            'animation-iteration-count': '1 !important',
            'transition-duration': '0.01ms !important',
            'scroll-behavior': 'auto !important',
          },
        },
      });
    }),
  ],
};

export default config;
