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
    <p class="pp-prose pp-prose-sm pp-font-body">
      Small
    </p>
    <p class="pp-prose pp-font-body">
      Medium
    </p>
    <p class="pp-prose pp-prose-lg pp-font-body">
      Large
    </p>
    <p class="pp-prose pp-prose-lg pp-font-body">
      XL
    </p>
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
    <p class="pp-prose pp-prose-sm pp-font-sans">
      Small
    </p>
    <p class="pp-prose pp-font-sans">
      Medium
    </p>
    <p class="pp-prose pp-prose-lg pp-font-sans">
      Large
    </p>
    <p class="pp-prose pp-prose-lg pp-font-sans">
      XL
    </p>
  `
  return container;
}

