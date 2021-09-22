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
        'dersu-2xl': ['66px', '72px'], // [fontSize, letterSpacing]
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
        'indicator-slide': 'indicator-slide 1s ease-in-out infinite',
      },
      keyframes: {
        'indicator-slide': {
          '0%': { opacity: 0, transform: 'scale(1)' },
          '50%': { opacity: 0.8 },
          '100%': { opacity: 0, transform: 'translateY(8px)' },
        },
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss-multi-column')()],
}
