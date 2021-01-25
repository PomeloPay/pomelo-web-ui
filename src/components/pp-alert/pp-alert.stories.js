import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Alert',
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = ({ onClick, children }) => {
  const container = document.createElement('div')
  container.innerHTML = `
    <pp-alert color="primary">
      <pp-text class="w-full text-white">
        Primary
      </pp-text>
    </pp-alert>
    <pp-alert color="secondary" class="mt-4">
      <pp-text class="w-full text-white">
        Secondary
      </pp-text >
    </pp-alert>
  `
  return container;
};

export const Alert = Template.bind({});
Alert.args = {
  children: 'Alert',
  onClick: action('onClick'),
};

