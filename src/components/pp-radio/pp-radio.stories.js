import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Radio',
  argTypes: {
  },
};

const Template = ({ onClick, children }) => {
  const container = document.createElement('div')
  container.innerHTML = `
    sdfsf
    <pp-radio class="w-6 h-6 mt-2" name="tae-radio" value="1">
    </pp-radio>
    <pp-radio class="w-6 h-6 mt-2"  name="tae-radio" value="2">
    </pp-radio>
  `

  container.querySelectorAll('pp-radio').forEach(($radio) => {
    $radio.addEventListener('click', (e) => {
      e.target.checked = !e.target.checked
    })
  })

  return container;
};

export const Radio = Template.bind({});
Radio.args = {
  onClick: action('onClick'),
};

