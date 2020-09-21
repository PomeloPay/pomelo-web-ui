// const colors = require("./src/colors.json");
const plugin = require("tailwindcss/plugin");
const theme = require("./src/config/theme");

const prefix = 'pp-'

module.exports = {
  prefix,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme,
  variants: {},
  plugins: [
    require("@tailwindcss/typography")
  ],
};
