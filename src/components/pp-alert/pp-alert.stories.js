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
    <pp-alert class="pp-alert-primary">
      <p class="pp-prose pp-prose-lg pp-font-body pp-text-white pp-font-extrabold pp-min-w-full pp-w-full">
        Primary
      </p>
    </pp-alert>
    <pp-alert class="pp-alert-secondary">
      <p class="pp-prose pp-prose-lg pp-font-body pp-text-white pp-font-extrabold pp-min-w-full pp-w-full">
        Secondary
      </p>
    </pp-alert>
  `
  return container;
};

export const Alert = Template.bind({});
Alert.args = {
  children: 'Alert',
  onClick: action('onClick'),
};

