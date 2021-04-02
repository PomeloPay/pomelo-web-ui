const replace = require('postcss-replace');
const cssnano = require('cssnano');

const isProd = !process.argv.includes('--dev')

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'nesting-rules': true,
        'color-mod-function': true,
        'custom-selectors': true,
        'custom-media-queries': true,
        'all-property': true,
        'any-link-pseudo-class': true,
        'has-pseudo-class': true,
      },
    }),
    replace({ pattern: 'html', data: { replaceAll: ':host' } }),
    ...(isProd ? [cssnano()] : []),
  ],
};
