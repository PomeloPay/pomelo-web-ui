const cssnano = require('cssnano');
const fs = require('fs')
const path = require('path')
const isProd = !process.argv.includes('--dev')
const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)


module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('postcss-preset-env')({
      stage: 3,
      features: {

        'nesting-rules': false,
        'custom-selectors': true,
        'custom-media-queries': true,
        'all-property': true,
        'any-link-pseudo-class': true,
        'has-pseudo-class': true,
      },
    }),
    require('autoprefixer'),
    ...(isProd ? [cssnano()] : []),
  ],
};
