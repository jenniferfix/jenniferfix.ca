import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--ctp-base))',
        foreground: 'rgb(var(--ctp-text))',
        card: {
          DEFAULT: 'rgb(var(--ctp-mantle))',
          foreground: 'rgb(var(--ctp-text))',
        },
        popover: {
          DEFAULT: 'rgb(var(--surface1))',
          foreground: 'rgb(var(--text))',
        },
        primary: {
          DEFAULT: 'rgb(var(--ctp-blue))',
          foreground: 'rgb(var(--ctp-crust))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--ctp-surface2))',
          foreground: 'rgb(var(--ctp-text))',
        },
        muted: {
          DEFAULT: 'rgb(var(--ctp-surface0))',
          foreground: 'rgb(var(--ctp-subtext1))',
        },
        accent: {
          DEFAULT: 'rgb(var(--ctp-peach))',
          foreground: 'rgb(var(--ctp-crust))',
        },
        destructive: {
          DEFAULT: 'rgb(var(--ctp-red))',
          foreground: 'rgb(var(--ctp-text))',
        },
        border: 'rgb(var(--ctp-overlay1))',
        input: 'rgb(var(--ctp-overlay2))',
        ring: 'rgb(var(--ctp-overlay0))',
        chart: {
          '1': 'rgb(var(--ctp-blue))',
          '2': 'rgb(var(--ctp-green))',
          '3': 'rgb(var(--ctp-peach))',
          '4': 'rgb(var(--ctp-mauve))',
          '5': 'rgb(var(--ctp-red))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@catppuccin/tailwindcss')],
} satisfies Config
