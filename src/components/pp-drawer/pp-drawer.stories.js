import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Drawer',
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = ({ onClick, children }) => {
  const container = document.createElement('div')
  container.innerHTML = `
    <button onclick="document.querySelector('pp-drawer').setAttribute('open', '')">
      open drawer
    </button>

    <pp-drawer attach-close-action="true">
      <div class="pp-drawer-content">
        <button class="pp-modal-close pp-justify-end" aria-label="close modal" data-close>✕</button>
        ${children}
      </div>
    </pp-drawer>
  `
  return container;
};

export const Drawer = Template.bind({});
Drawer.args = {
  children: 'Drawer',
  onClick: action('onClick'),
};

