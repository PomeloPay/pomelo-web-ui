import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import postcssConfig from './postcss.config'

export const config: Config = {
  namespace: 'pomelopay-webui',
  globalStyle: 'src/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    postcss(postcssConfig)
  ]
};
