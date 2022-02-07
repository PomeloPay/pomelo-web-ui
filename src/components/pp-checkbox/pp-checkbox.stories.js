import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Checkbox',
  // argTypes: {},
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = ({ onClick, children }) => {
  const container = document.createElement('div');
  container.innerHTML = `
    <pp-checkbox class="w-6 h-6 mt-2" name="tae-checkbox" value="1">
    </pp-checkbox>
    <pp-checkbox class="w-6 h-6 mt-2"  name="tae-checkbox" value="2">
    </pp-checkbox>
  `;

  container.querySelectorAll('pp-checkbox').forEach($checkbox => {
    $checkbox.addEventListener('click', e => {
      e.target.checked = !e.target.checked;
    });
  });

  return container;
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  onClick: action('onClick'),
};

const CheckboxOptionsTemplate = ({ onClick, children }) => {
  const container = document.createElement('div');
  container.innerHTML = `
    <pp-checkbox-options value="1" name="address"></pp-checkbox-options>
  `;
  const list = container.querySelector('pp-checkbox-options');

  list.options = [
    { value: '1', label: 'address line 1, address line 2, country' },
    { value: '2', label: 'address line 1, address line 2, country' },
  ];
  container.querySelectorAll('pp-checkbox-options').forEach($checkbox => {
    $checkbox.addEventListener('click', e => {
      e.target.checked = !e.target.checked;
    });
  });
  return container;
};

export const CheckboxListOptions = CheckboxOptionsTemplate.bind({});
CheckboxListOptions.args = {
  children: '',
  onClick: action('onClick'),
};
