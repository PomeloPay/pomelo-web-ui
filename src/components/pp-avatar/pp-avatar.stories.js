import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Avatar',
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = ({ onClick, children }) => {
  const container = document.createElement('div')
  container.innerHTML = `
  <pp-avatar src="https://i.pinimg.com/originals/c4/c9/cb/c4c9cb80ab686411c5560c94032abd22.jpg"></pp-avatar>
  <pp-avatar src="https://i.pinimg.com/originals/c4/c9/cb/c4c9cb80ab686411c5560c94032abd22.jpg" size="sm"></pp-avatar>
  <pp-avatar src="https://i.pinimg.com/originals/c4/c9/cb/c4c9cb80ab686411c5560c94032abd22.jpg" size="lg"></pp-avatar>

  <pp-avatar alt="heath ledger" ></pp-avatar>
  <pp-avatar alt="heath ledger"  size="sm" status="offline"></pp-avatar>
  <pp-avatar alt="heath ledger" size="lg" status="offline"></pp-avatar>

  `
  return container;
};

export const Avatar = Template.bind({});
Avatar.args = {
  children: 'Avatar',
  onClick: action('onClick'),
};

