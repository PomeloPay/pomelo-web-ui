import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Typography',
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = ({ onClick, children }) => {
  const container = document.createElement('div')
  container.innerHTML = `
    <pp-text size="sm" class="font-body">
      Small
    </pp-text>
    <pp-text size="md"  class="font-body">
      Medium
    </pp-text>
    <pp-text size="lg" class="font-body">
      Large
    </pp-text>
    <pp-text size="xl" class="font-body">
      XL
    </pp-text>
  `
  return container;
};

export const Typography = Template.bind({});
Typography.args = {
  children: 'Typography',
  onClick: action('onClick'),
};


export const TypogrpahyOtherVariant = () => {
  const container = document.createElement('div')
  container.innerHTML = `
    <pp-text  class="font-sans">
      Small
    </pp-text>
    <pp-text  class="font-sans">
      Medium
    </pp-text>
    <pp-text  class="font-sans">
      Large
    </pp-text>
    <pp-text  class="font-sans">
      XL
    </pp-text>
  `
  return container;
}

