import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Radio',
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = ({ onClick, children }) => {
  const container = document.createElement('div');
  container.innerHTML = `
    <pp-radio class="w-6 h-6 mt-2" name="tae-radio" value="1">
    </pp-radio>
    <pp-radio class="w-6 h-6 mt-2"  name="tae-radio" value="2">
    </pp-radio>
  `;

  container.querySelectorAll('pp-radio').forEach($radio => {
    $radio.addEventListener('click', e => {
      e.target.checked = !e.target.checked;
    });
  });

  return container;
};

export const Radio = Template.bind({});
Radio.args = {
  onClick: action('onClick'),
};

const OptionsTemplate = ({ onClick, children }) => {
  const container = document.createElement('div');
  container.innerHTML = `
    <pp-radio-options value="1" name="address"></pp-radio-options>
  `;
  const list = container.querySelector('pp-radio-options');

  list.options = [
    { value: '1', label: 'address line 1, address line 2, country, postcode' },
    { value: '2', label: 'address line 1, address line 2, country, postcode' },
  ];
  list.addEventListener('option-change', e => {
    console.log(e.detail);
  });
  return container;
};

export const RadioListOption = OptionsTemplate.bind({});
RadioListOption.args = {
  children: '',
  onClick: action('onClick'),
};
