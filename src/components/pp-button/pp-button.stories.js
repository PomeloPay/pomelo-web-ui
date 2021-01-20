import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Button',
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = ({ onClick, children }) => {
  const btnWrapper = document.createElement('div');
  btnWrapper.innerHTML = `
    <pp-text class="block text-gray-500">
      Contained
    </pp-text>
    <div class="mt-2">
      <pp-button size="md" color="primary" variant="contained">${children}</pp-button>
      <pp-button size="md" color="secondary" variant="contained">${children}</pp-button>
    </div>
    <pp-text class="block mt-8 text-gray-500"">
      Outline
    </pp-text>
    <div class="mt-2">
      <pp-button size="md" color="primary" variant="outline">${children}</pp-button>
      <pp-button size="md" color="secondary" variant="outline">${children}</pp-button>

    </div>
    <pp-text class="block mt-8 text-gray-500"">
      Button Text
    </pp-text>
    <div class="block mt-2">
      <pp-button>${children}</pp-button>

    </div>
  `
  btnWrapper.addEventListener('click', onClick);
  return btnWrapper;
};

export const Variants = Template.bind({});
Variants.args = {
  children: 'Button',
  onClick: action('onClick'),
};

export const Emoji = Template.bind({});
Emoji.args = {
  children: '😀 😎 👍 💯',
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  children: '<p><i class="fas fa-camera"></i> &nbsp;&nbsp;Button</p>',
};

export const TextWithAction = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Trigger Action';
  btn.addEventListener('click', () => action('This was clicked')());
  return btn;
};

TextWithAction.storyName = 'With an action';
TextWithAction.parameters = { notes: 'My notes on a button with emojis' };

export const ButtonSizes = () => {
  const btnWrapper = document.createElement('div');
  btnWrapper.innerHTML = `
    <pp-button size="sm" color="primary" variant="contained">Small</pp-button>
    <pp-button size="md" color="primary" variant="contained">Medium</pp-button>
    <pp-button size="lg" color="primary" variant="contained">Large Button</pp-button>
    <pp-button size="xl" color="primary" variant="contained">Extra Large Button</pp-button>
  `
  return btnWrapper;
}

export const IconButton = ({ children, onClick }) => {
  const btnWrapper = document.createElement('div');
  btnWrapper.innerHTML = `
    <pp-icon-button>${children}</pp-icon-button>
    <pp-icon-button>
      <i class="fas fa-lock pp-text-green-500"></i>
    </pp-icon-button>
    <pp-icon-button>
      <i class="fas fa-camera"></i>
    </pp-icon-button>
  `
  btnWrapper.addEventListener('click', onClick);
  return btnWrapper;
}

IconButton.args = {
  children: '<i class="fas fa-qrcode"></i>',
  onClick: action('Icon button was clicked'),
};
