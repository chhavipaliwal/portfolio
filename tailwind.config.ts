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
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float-y': 'float-y 6s ease-in-out infinite',
        'float-x': 'float-x 6s ease-in-out infinite',
        'float-xy': 'float-xy 6s ease-in-out infinite',
        sparkle: 'sparkle 6s ease-in-out infinite',
        rocket: 'rocket 6s ease-in-out infinite',
      },
      keyframes: {
        ping: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
        'bg-position': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        'float-y': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'float-x': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-5%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'float-xy': {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-5%, -5%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        sparkle: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
          '100%': { transform: 'scale(1)' },
        },
        rocket: {
          '0%': { transform: 'translateY(1.3em) rotate(-45deg)' },
          '10%': { transform: 'translateY(1.1em) rotate(-45deg)' },
          '30%': { transform: 'translateY(1.2em) rotate(-45deg)' },
          '50%': { transform: 'translateY(1em) rotate(-45deg)' },
          '70%': { transform: 'translateY(1.2em) rotate(-45deg)' },
          '80%': { transform: 'translateY(1em) rotate(-45deg)' },
          '90%': { transform: 'translateY(1.2em) rotate(-45deg)' },
          '100%': { transform: 'translateY(1.3em) rotate(-45deg)' },
        },
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
