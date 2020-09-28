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
    <p class="pp-prose pp-prose-sm pp-font-body">
      New
      <pp-badge class="pp-badge-primary">
        Badge
      </pp-badge>
    </p>
  `
  return container;
};

export const Badge = Template.bind({});
Badge.args = {
  children: 'Badge',
  onClick: action('onClick'),
};

