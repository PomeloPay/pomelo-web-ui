import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Tabs',
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = ({ onClick, children }) => {
  const container = document.createElement('div');
  container.innerHTML = `
    <pp-tabs>
      <span slot="pp-tab" class="pp-tab pp-prose pp-font-body pp-prose-sm pp-active">
        Tab 1
      </span>
      <span slot="pp-tab" class="pp-tab pp-prose pp-font-body pp-prose-sm">
        Tab 2
      </span>
    </pp-tabs>
  `;
  return container;
};

export const Tabs = Template.bind({});
Tabs.args = {
  children: 'Tabs',
  onClick: action('onClick'),
};
