import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Checkbox',
  argTypes: {
  },
};

const Template = ({ onClick, children }) => {
  const container = document.createElement('div')
  container.innerHTML = `
    sdfsf
    <pp-checkbox class="w-6 h-6 mt-2" name="tae-checkbox" value="1">
    </pp-checkbox>
    <pp-checkbox class="w-6 h-6 mt-2"  name="tae-checkbox" value="2">
    </pp-checkbox>
  `

  container.querySelectorAll('pp-checkbox').forEach(($checkbox) => {
    $checkbox.addEventListener('click', (e) => {
      e.target.checked = !e.target.checked
    })
  })

  return container;
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  onClick: action('onClick'),
};

