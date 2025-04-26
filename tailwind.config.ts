import type { Config } from 'tailwindcss';
import { heroui } from '@heroui/react';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'pp-neue-machina': ['PPNeueMachina', 'sans-serif'],
        'pp-migra': ['PPMigra', 'sans-serif'],
        'clash-display': ['ClashDisplay', 'sans-serif'],
        'neue-Helvetica': ['NeueHelvetica', 'sans-serif'],
        'neue-Helvetica-Medium': ['NeueHelveticaMedium', 'sans-serif'],
        'neue-Helvetica-Condensed-light': [
          'NeueHelveticaCondensedLight',
          'sans-serif',
        ],
        'work-sans': ['Work Sans', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
    },
  },
  darkMode: ['class', '[data-theme^="dark-"]'],
  plugins: [
    require('tailwindcss-animate'),
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              '50': '#fbfdf7',
              '100': '#f4fbeb',
              '200': '#eef9e0',
              '300': '#e8f7d4',
              '400': '#e1f4c9',
              '500': '#dbf2bd',
              '600': '#b5c89c',
              '700': '#8e9d7b',
              '800': '#68735a',
              '900': '#424939',
              foreground: '#000',
              DEFAULT: '#dbf2bd',
            },
            secondary: {
              '50': '#f6f7f9',
              '100': '#e8ebf0',
              '200': '#dbe0e8',
              '300': '#ced4df',
              '400': '#c0c9d7',
              '500': '#b3bdce',
              '600': '#949caa',
              '700': '#747b86',
              '800': '#555a62',
              '900': '#36393e',
              foreground: '#000',
              DEFAULT: '#b3bdce',
            },
          },
        },
        dark: {
          colors: {
            primary: {
              '50': '#fbfdf7',
              '100': '#f4fbeb',
              '200': '#eef9e0',
              '300': '#e8f7d4',
              '400': '#e1f4c9',
              '500': '#dbf2bd',
              '600': '#b5c89c',
              '700': '#8e9d7b',
              '800': '#68735a',
              '900': '#424939',
              foreground: '#000',
              DEFAULT: '#dbf2bd',
            },
            secondary: {
              '50': '#f6f7f9',
              '100': '#e8ebf0',
              '200': '#dbe0e8',
              '300': '#ced4df',
              '400': '#c0c9d7',
              '500': '#b3bdce',
              '600': '#949caa',
              '700': '#747b86',
              '800': '#555a62',
              '900': '#36393e',
              foreground: '#000',
              DEFAULT: '#b3bdce',
            },
          },
        },
      },
      layout: {
        fontSize: {
          tiny: '0.75rem',
          small: '0.875rem',
          medium: '1rem',
          large: '1.125rem',
        },
        lineHeight: {
          tiny: '1rem',
          small: '1.25rem',
          medium: '1.5rem',
          large: '1.75rem',
        },
        radius: {
          small: '0.5rem',
          medium: '0.75rem',
          large: '0.875rem',
        },
        borderWidth: {
          small: '1px',
          medium: '2px',
          large: '3px',
        },
        disabledOpacity: '0.5',
        dividerWeight: '1',
        hoverOpacity: '0.9',
      },
    }),
  ],
} satisfies Config;

export default config;
