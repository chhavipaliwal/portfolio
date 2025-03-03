import type { Config } from 'tailwindcss';
import { heroui } from '@heroui/react';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          '50': '#fdefed',
          '100': '#fad8d3',
          '200': '#f7c1b9',
          '300': '#f5aa9f',
          '400': '#f29386',
          '500': '#ef7c6c',
          '600': '#c56659',
          '700': '#9b5146',
          '800': '#723b33',
          '900': '#482520',
          foreground: '#000',
          DEFAULT: '#ef7c6c'
        }
      },
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' }
        }
      },
      animation: {
        'caret-blink': 'caret-blink 1.25s ease-out infinite'
      }
    }
  },
  darkMode: ['class', '[data-theme^="dark-"]'],
  plugins: [
    require('tailwindcss-animate'),
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              '50': '#e8f6ff',
              '100': '#c7e9ff',
              '200': '#a6dcff',
              '300': '#85cfff',
              '400': '#65c2ff',
              '500': '#44b5ff',
              '600': '#3895d2',
              '700': '#2c76a6',
              '800': '#205679',
              '900': '#14364d',
              foreground: '#000',
              DEFAULT: '#44b5ff'
            },
            secondary: {
              '50': '#f8edfd',
              '100': '#eed4fb',
              '200': '#e4bcf8',
              '300': '#dba3f6',
              '400': '#d18af3',
              '500': '#c771f1',
              '600': '#a45dc7',
              '700': '#81499d',
              '800': '#5f3672',
              '900': '#3c2248',
              foreground: '#000',
              DEFAULT: '#c771f1'
            }
          }
        },
        dark: {
          colors: {
            primary: {
              '50': '#14364d',
              '100': '#205679',
              '200': '#2c76a6',
              '300': '#3895d2',
              '400': '#44b5ff',
              '500': '#65c2ff',
              '600': '#85cfff',
              '700': '#a6dcff',
              '800': '#c7e9ff',
              '900': '#e8f6ff',
              foreground: '#000',
              DEFAULT: '#44b5ff'
            },
            secondary: {
              '50': '#3c2248',
              '100': '#5f3672',
              '200': '#81499d',
              '300': '#a45dc7',
              '400': '#c771f1',
              '500': '#d18af3',
              '600': '#dba3f6',
              '700': '#e4bcf8',
              '800': '#eed4fb',
              '900': '#f8edfd',
              foreground: '#000',
              DEFAULT: '#c771f1'
            }
          }
        }
      },
      layout: {
        fontSize: {
          tiny: '0.75rem',
          small: '0.875rem',
          medium: '1rem',
          large: '1.125rem'
        },
        lineHeight: {
          tiny: '1rem',
          small: '1.25rem',
          medium: '1.5rem',
          large: '1.75rem'
        },
        radius: {
          small: '0.5rem',
          medium: '0.75rem',
          large: '0.875rem'
        },
        borderWidth: {
          small: '1px',
          medium: '2px',
          large: '3px'
        },
        disabledOpacity: '0.5',
        dividerWeight: '1',
        hoverOpacity: '0.9'
      }
    })
  ]
} satisfies Config;

export default config;
