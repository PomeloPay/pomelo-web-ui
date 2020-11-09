module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-preset-env")({
      stage: 3,
      features: {
        'nesting-rules': true,
        'color-mod-function': true,
        'custom-selectors': true,
        'custom-media-queries': true,
        'all-property': true,
        'any-link-pseudo-class': true,
        'has-pseudo-class': true
      }
    }),
  ],
};
