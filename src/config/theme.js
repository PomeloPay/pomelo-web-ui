const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  radii: {
    base: 0,
    sm: '2px',
    md: '4px',
    lg: '6px',
    xl: '8px',
    '2xl': '16px'
  },
  typography: {
    default: {
      css: {
        maxWidth: 'none'
      },
    },
    '3xl': {
      css: {
        fontSize: '2rem'
      }
    },
    '4xl': {
      css: {
        fontSize: '2.5rem'
      }
    },
    '5xl': {
      css: {
        fontSize: '3rem'
      }
    },
  },
  extend: {
    screens: {
      '2xs': '320px',
      xs: '480px'
    },
    fontFamily: {
      sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      body: 'Montserrat'
    },
    colors: {
      gray: {
        ...defaultTheme.colors.gray,
        50: '#fbfbfb',
        100: '#f5f5f5',
        200: '#e9e9e9',
        210: '#dedede',
        300: '#c8c8c8',
        500: '#909090',
        600: '#484848',
        700: '#242524',
        710: '#858585',
        800: '#9b9b9b'
      },
      green: {
        50: '#e4f8ee',
        100: '#beedd4',
        200: '#91e2b9',
        300: '#5bd79d',
        400: '#16cd88',
        500: '#00c371',
        600: '#00b366',
        700: '#00a058',
        800: '#008f4b',
        900: '#006e35'
      },
      navy: {
        50: '#f2f8ff',
        100: '#ecf2ff',
        200: '#e4eaff',
        300: '#d5dbfe',
        400: '#b2b8d9',
        500: '#9398b9',
        600: '#6a708f',
        700: '#565c7a',
        800: '#363d59',
        900: '#141d36'
      },
      yellow: {
        ...defaultTheme.colors.yellow,
        50: '#fef8e1',
        100: '#fdecb4',
        200: '#fbe084',
        300: '#fad553',
        400: '#faca2f',
        500: '#f9c118',
        600: '#f9b311',
        700: '#f9a10d',
        800: '#f9900a',
        900: '#f87206',
      },
      red: {
        ...defaultTheme.colors.red,
        600: '#e01b22'
      },
      blue: {
        ...defaultTheme.colors.blue,
        600: '#2784ff'
      },
      orange: {
        ...defaultTheme.colors.orange,
        900: '#fe6901'
      },
      'cool-grey': {
        500: '#6b778c'
      },
      purple: {
        900: '#49195f',
        1000: '#212121'
      },
      primary: 'var(--pp-color-primary)',
      secondary: 'var(--pp-color-secondary)',
      tertiary: 'var(--pp-color-tertiary, transparent)',
    },
    width: {
      '110': '28rem',
      '120': '32rem'
    },
    spacing: {
      ...defaultTheme.spacing,
      'xs': '4px',
      'sm': '8px',
      'm': '16px',
      'lg': '24px',
      'xl': '32px',
      '2xl': '40px',
      '3xl': '48px',
      '4xl': '56px',
      '5xl': '64px',
      '6xl': '72px',
      '7xl': '80px',
    },
  },
  zIndex: {
    '0': 0,

    '10': 10,

    '20': 20, // appbar

    '25': 25,

    '30': 30, // drawer

    '40': 40, // modal

    '50': 50,

    '60': 60, // snackbar

    '50': 50,

    '75': 75,
    '80': 80, // tooltip

    '100': 100, // loading
     'auto': 'auto'
  }
}
