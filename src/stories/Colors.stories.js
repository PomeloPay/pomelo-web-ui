import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import theme from '../config/theme'

export default {
  title: 'Color Palette',
};

const getColor = (c) => theme.extend.colors[c]

const createPalette = (colorKey, colorValue, colorName) => `
  <div class="flex mt-4">
    <div style="height: 48px; width: 48px;" class="rounded bg-${colorName}-${colorKey}">
    </div>
    <div class="ml-2">
      <pp-text size="sm">
        ${colorName}-${colorKey}
      </pp-text>
      <pp-text size="sm" class="block font-sans text-gray-500">
        ${colorValue}
      </pp-text>
    </div>
  </div>
`

const createColorList = (color, colorName) => Object.entries(color).reduce((acc, [k,v]) => [
  ...acc,
  createPalette(k, v, colorName)
], []).join('\n')



const Template = ({ colorTarget }) => {
  const container = document.createElement('div')
  const colorName = colorTarget
  const color = getColor(colorName)

  container.innerHTML = `
    <div>
      ${createColorList(color, colorName)}
    </div>
  `

  return container
}

export const Usage = () => {
  const container = document.createElement('div')

  container.innerHTML = `
    <pp-text class="text-green-600">
      Text sample
    </pp-text>
    <div class="mt-6 bg-green-600 p-6 text-white">
      Background Sample
    </div>
  `

  return container
}

export const Red = Template.bind(null, { colorTarget: 'red' })
export const Green = Template.bind(null, { colorTarget: 'green' })
export const Yellow = Template.bind(null, { colorTarget: 'yellow' })
export const Gray = Template.bind(null, { colorTarget: 'gray' })
export const Navy = Template.bind(null, { colorTarget: 'navy' })
export const Blue = Template.bind(null, { colorTarget: 'blue' })
export const Brown = Template.bind(null, { colorTarget: 'brown' })
export const Purple = Template.bind(null, { colorTarget: 'purple' })
export const CoolGrey = Template.bind(null, { colorTarget: 'cool-grey' })


