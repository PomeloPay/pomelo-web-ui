import path from 'path'
import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import postcssConfig from './postcss.config'

const www: any = {
  type: 'www',
  serviceWorker: null,
}

if (process.env.NODE_ENV === 'prod') {
  www.buildDir = path.join(process.cwd(), 'public/build')
}

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
    www
  ],
  plugins: [
    postcss(postcssConfig)
  ],
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    shadowDomShim: true,
    safari10: true,
    scriptDataOpts: true,
    appendChildSlotFix: false,
    cloneNodeFix: false,
    slotChildNodesFix: true,
  }
};
