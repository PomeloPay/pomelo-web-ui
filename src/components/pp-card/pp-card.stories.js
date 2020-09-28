import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Card',
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = ({ onClick, children }) => {
  const container = document.createElement('div')
  container.innerHTML = `
    <pp-card>
      <p class="pp-card-title">
        The Coldest Sunset
      </p>

      <div class="pp-card-body pp-prose">
        ${children}
      </div>
    </pp-card>
  `
  return container;
};

export const Card = Template.bind({});
Card.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
  onClick: action('onClick'),
};

