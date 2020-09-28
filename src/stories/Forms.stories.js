import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Forms',
  argTypes: {
    children: { control: 'text' },
  },
};

export const Select = ({ onClick, children }) => {
  const container = document.createElement('div')
  container.innerHTML = `
  <select class="pp-select">
    <option>New Mexico</option>
    <option> Missouri</option>
    <option>Texas</option>
  </select>
  `
  return container;
};

Select.args = {
  children: 'Select',
  onClick: action('onClick'),
};

export const Input = ({ onClick, children, type }) => {
  const container = document.createElement('div')
  container.innerHTML = `
    <input type="${type}" value="input" class="pp-input" />
  `
  return container;
};

Input.args = {
  type: 'text',
  onClick: action('onClick'),
};

export const Toggle = () => {
  const container = document.createElement('div')
  container.innerHTML = `
    <pp-toggle on></pp-toggle>
  `
  return container;
};

Toggle.args = {
  // onClick: action('onClick'),
};



