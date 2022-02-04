import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Forms',
  argTypes: {
    children: { control: 'text' },
  },
};

export const Select = ({ onClick, children }) => {
  const container = document.createElement('div');
  container.innerHTML = `
  <select class="pp-select">
    <option>New Mexico</option>
    <option> Missouri</option>
    <option>Texas</option>
  </select>
  `;
  return container;
};

export const Input = ({ onClick, children, type }) => {
  const container = document.createElement('div');
  container.innerHTML = `
    <input type="${type}" value="input" class="pp-input" />
  `;
  return container;
};

Input.args = {
  type: 'text',
  onClick: action('onClick'),
};

export const InputNumber = () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <pp-input-number  prefix-value="$" options='{"noImmediatePrefix": false}' class="pp-input p-1"></pp-input-number>
  `;
  return container;
};

InputNumber.args = {
  type: 'text',
  onClick: action('onClick'),
};

export const InputIntl = () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <pp-intl-input style="width: 432px" ></pp-intl-input>
  `;
  return container;
};

InputIntl.args = {
  type: 'text',
  onClick: action('onClick'),
};

export const Toggle = () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <pp-toggle on></pp-toggle>
  `;
  return container;
};

Toggle.args = {
  // onClick: action('onClick'),
};

export const InputDate = () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <pp-input-date></pp-input-date>
  `;
  return container;
};

InputDate.args = {
  type: 'text',
  onClick: action('onClick'),
};
