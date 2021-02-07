import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import theme from '../config/theme'

export default {
  title: 'Spacing',
};

const createRow = (k, v) => {
  return `
    <tr>
      <td>
        <pp-text size="sm" class="text-gray-500">
          ${k}
        </pp-text>
      </td>
      <td>
        <pp-text size="sm" class="text-gray-500">
          ${v}
        </pp-text>
      </td>
      <td>
        <div style="height: ${v}; width: ${v}" class="bg-navy-200">
        </div>
      </td>
    </tr>
  `
}

export const Usage = () => {
  const container = document.createElement('div')

  container.innerHTML = `
    <pp-text>
      No spacing
    </pp-text>

    <pp-text class="mt-6 block">
      Margin top with spacing of 24px
    </pp-text>

    <div class="bg-navy-200 p-4 mt-6">
      <pp-text class="font-sans">
        Sample block padding with space of 16px
      </pp-text>
    </div>
  `

  return container
}

export const Spacing = () => {
  const container = document.createElement('div')
  const spacing = theme.extend.spacing


  container.innerHTML = `
    <table style="width: 400px;" class="table-fixed">
      <thead>
        <tr>
          <th>Token</th>
          <th>Value</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        ${Object.entries(spacing).reduce((acc, [k,v]) => [
          ...acc,
          createRow(k, v)
        ], []).join('\n')}
      </tbody>
    </table>
  `

  return container
}
