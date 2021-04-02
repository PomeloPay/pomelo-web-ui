const theme = require('./src/config/theme');
const purgeJs = require('purgecss-from-js');
const purgeHtml = require('purgecss-from-html');
const isProd = !process.argv.includes('--dev');

const config = {
  theme,
  variants: {},
};

const purgeSafeList = [':host', /\pp-(\w|-)*/g];

if (isProd) {
  config.purge = {
    enabled: true,
    layers: ['components', 'utilities'],
    content: ['./src/**/*.tsx'],
    preserveHtmlElements: true,
    options: {
      css: ['./src/**/*.css'],
      safelist: purgeSafeList,
      extractors: [
        {
          extractor: purgeHtml,
          extensions: ['html'],
        },
        {
          extractor: content => purgeJs,
          extensions: ['tsx', 'js'],
        },
        {
          extractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
          extensions: ['tsx'],
        },
      ],
    },
  };
}

module.exports = config;
