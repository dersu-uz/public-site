const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    container: {
      center: false,
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Arimo', ...defaultTheme.fontFamily.sans],
        serif: ['Recoleta', ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        'dersu-4xl': ['66px', '72px'], // [fontSize, letterSpacing]
        'dersu-3xl': ['56px', '62px'],
        'dersu-2xl': ['42px', '48px'],
        'dersu-xl': ['36px', '44px'],
        'dersu-lg': ['32px', '40px'],
        'dersu-md': ['22px', '28px'],
        'dersu-sm': ['18px', '26px'],
        'dersu-xs': ['16px', '21px'],
        'dersu-2xs': ['14px', '22px'],
        'dersu-3xs': ['8px', '9px'],
      },
      colors: {
        gray: colors.trueGray,
        dersu: {
          // palette from figma
          'light-gray': '#888888',
          'black': '#313131',
          'white': '#f7f2f0',
          'dark-green': '#193830',
          'light-green': '#89D181',
          'yellow': '#fdda79',
          'blue': '#85CEE4',
          'brown': '#2f212a',
          'cream': '#f4e9e6',
          'purple': '#7d88be',
          'pink': '#e3b0c2',
        },
      },
      animation: {
        'indicator-slide-grow':
          'indicator-slide-grow 2s ease alternate infinite',
      },
      keyframes: {
        'indicator-slide-grow': {
          '0%': { opacity: 0, height: '0%' },
          '100%': { opacity: 1, height: '100%' },
        },
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss-multi-column')()],
}
