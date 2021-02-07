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
    <pp-text size="2xl" class="font-body block">
      Text - 2xl
    </pp-text>
    <pp-text size="xl" class="font-body block">
      Text - Extra Large
    </pp-text>
    <pp-text size="lg" class="font-body block">
      Text - Large
    </pp-text>
    <pp-text size="md" class="font-body block">
      Text - Medium
    </pp-text>
    <pp-text size="sm" class="font-body block">
      Text - Extra small
    </pp-text>
    <pp-text size="xs" class="font-body block">
      Text - Extra small
    </pp-text>
  `
  return container;
};

export const Typography = Template.bind({});
Typography.args = {
  children: 'Typography',
  onClick: action('onClick'),
};


export const TypogrpahyClassExtended = () => {
  const container = document.createElement('div')
  container.innerHTML = `
    <pp-text  class="font-sans text-sm block">
      Tailwind - Small
    </pp-text>
    <pp-text  class="font-sans block">
    Tailwind - Medium
    </pp-text>
    <pp-text  class="font-sans text-lg block mt-2">
    Tailwind - Large
    </pp-text>
    <pp-text  class="font-sans text-xl block mt-2">
    Tailwind - XL
    </pp-text>
    <pp-text  class="font-sans text-2xl block mt-2">
    Tailwind - 2XL
    </pp-text>
    <pp-text  class="font-sans text-3xl block mt-2">
    Tailwind - 3XL
    </pp-text>
    <pp-text  class="font-sans text-4xl block mt-2">
    Tailwind - 4XL
    </pp-text>
  `
  return container;
}

