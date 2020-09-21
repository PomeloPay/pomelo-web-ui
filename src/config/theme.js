const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  radii: {
    base: 0,
    sm: 2,
    md: 4,
    lg: 6,
    xl: 16
  },
  typography: {
    default: {
      css: {
        maxWidth: 'none'
      },
    },
  },
  extend: {
    fontFamily: {
      sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      body: 'Montserrat'
    },
    colors: {
      purple: {
        ...defaultTheme.colors.purple,
        1000: '#212121'
      },
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
    }
  }
}
