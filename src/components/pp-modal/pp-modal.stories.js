import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Modal',
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = ({ onClick, children }) => {
  const container = document.createElement('div')
  container.innerHTML = `
    <pp-modal class="pp-prose pp-prose-lg pp-text-red-500">
      tae
    </p>
  `
  return container;
};

export const Modal = Template.bind({});
Modal.args = {
  children: 'Modal',
  onClick: action('onClick'),
};

