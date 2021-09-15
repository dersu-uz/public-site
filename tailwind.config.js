const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Arimo', ...defaultTheme.fontFamily.sans],
        serif: ['Recoleta', ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        'dersu-xl': '66px',
        'dersu-lg': '32px',
        'dersu-md': '22px',
        'dersu-sm': '18px',
        'dersu-xs': '16px',
        'dersu-xxs': '8px',
      },
      lineHeight: {
        'dersu-xl': '72px',
        'dersu-lg': '40px',
        'dersu-md': '28px',
        'dersu-sm': '26px',
        'dersu-xs': '21px',
        'dersu-xxs': '9px',
      },
      colors: {
        gray: colors.trueGray,
        dersu: {
          'light-gray': '#888888',
          // palette from figma
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
      screens: {
        portrait: { raw: '(orientation: portrait)' },
        landscape: { raw: '(orientation: landscape)' },
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
