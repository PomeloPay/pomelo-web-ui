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
    <button onclick="document.querySelector('pp-modal').setAttribute('open', '')">
      open modal
    </button>

    <pp-modal attach-close-action>
      <header slot="pp-modal-header" class="pp-modal-header pp-justify-end">
        <button class="pp-modal-close" aria-label="close modal" data-close>✕</button>
      </header>
      <section slot="pp-modal-body" class="pp-modal-body">
        Modal content
      </section>
    </pp-modal>
  `
  return container;
};

export const Modal = Template.bind({});
Modal.args = {
  children: 'Modal',
  onClick: action('onClick'),
};

