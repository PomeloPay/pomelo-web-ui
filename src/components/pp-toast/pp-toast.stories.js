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
    <button id="toast-btn" onclick="document.querySelector('pp-toast').toggleAttribute('open')">open toast</button>
    <pp-toast height="300px" width="300px" position="top">
      <pp-card class="relative">
        <pp-button class="absolute top-0 right-0 mr-2" onclick="document.querySelector('pp-toast').toggleAttribute('open')">
          x
        </pp-button>
        <p class="pp-card-title">
          The Coldest Sunset
        </p>

        <div class="pp-card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </div>
      </pp-card>
    </pp-toast>
  `
  return container;
};

export const Toast = Template.bind({});
Toast.args = {
  position: 'bottom',
};

