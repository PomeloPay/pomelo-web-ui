import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Badge',
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = ({ onClick, children }) => {
  const container = document.createElement('div')
  container.innerHTML = `
    <pp-text>
      New
      <pp-badge class="text-white" color="primary">
        Badge
      </pp-badge>
    </pp-text>
  `
  return container;
};

export const Badge = Template.bind({});
Badge.args = {
  children: 'Badge',
  onClick: action('onClick'),
};

