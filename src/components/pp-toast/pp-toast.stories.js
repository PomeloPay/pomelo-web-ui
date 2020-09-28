import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Toast',
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = ({ onClick, position }) => {
  const container = document.createElement('div')
  container.innerHTML = `
    <button id="toast-btn">open toast</button>

    <pp-toast position="${position}">
      Toast Sample
    </pp-toast>
  `

  container.querySelector('#toast-btn').addEventListener('click', () => {
    const $toast = document.querySelector('pp-toast')

    $toast.toggleAttribute('open')
  })

  return container;
};

export const Toast = Template.bind({});
Toast.args = {
  position: 'bottom',
  onClick: action('onClick'),
};

