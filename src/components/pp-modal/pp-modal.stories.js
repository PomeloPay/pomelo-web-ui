import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Modal',
  argTypes: {
    children: { control: 'text' },
  },
};

const defaultArgs = {
  onClick: 'onclick="document.querySelector(\'pp-modal\').toggleAttribute(\'open\')"'
}

export const Modal = ({ onClick: onClickStr }) => {
  const container = document.createElement('div')
  container.innerHTML = `
    <button ${onClickStr}>
      open modal
    </button>

    <pp-modal
      fit
      attach-close-action>
        <div slot="pp-dialog" class="pp-dialog">
          <div class="w-full pp-modal-content">
            <header class="pp-modal-header pb-0 p-14 pp-justify-end bg-white sm:rounded-t-md">
              <button
                ${onClickStr}
                class="pp-modal-close" aria-label="close modal" data-close>✕</button>
            </header>
            <section  class="pp-modal-body pt-0 p-14 bg-white sm:rounded-b-md">
              Modal content
              Dolor excepteur dolore mollit exercitation mollit fugiat sint ex. Nisi do adipisicing velit Lorem sunt cupidatat qui est sit. Nulla adipisicing minim voluptate do enim velit et. Voluptate fugiat officia duis laboris non cillum do consectetur. Pariatur anim irure non tempor laborum tempor minim eiusmod ullamco sunt deserunt consequat ad. Commodo magna do consectetur consequat.
            </section>
          </div>
        </div>
      </pp-modal>
  `
  return container;
};

Modal.args = defaultArgs;


export const ScrollingLongContent = ({ onClick: onClickStr }) => {
  const container = document.createElement('div')
  container.innerHTML = `
    <button ${onClickStr}>
      open modal
    </button>
    <pp-modal
      centered
      attach-close-action>
        <div slot="pp-dialog" class="pp-dialog">
          <div class="w-full pp-modal-content">
            <header class="pp-modal-header pb-0 p-14 pp-justify-end bg-white sm:rounded-t-md">
              <button
                ${onClickStr}
                class="pp-modal-close" aria-label="close modal" data-close>✕</button>
            </header>
            <section  class="pp-modal-body pt-0 p-14 bg-white sm:rounded-b-md">
              Modal content
              Dolor excepteur dolore mollit exercitation mollit fugiat sint ex. Nisi do adipisicing velit Lorem sunt cupidatat qui est sit. Nulla adipisicing minim voluptate do enim velit et. Voluptate fugiat officia duis laboris non cillum do consectetur. Pariatur anim irure non tempor laborum tempor minim eiusmod ullamco sunt deserunt consequat ad. Commodo magna do consectetur consequat.
              Deserunt aliqua irure non adipisicing occaecat nostrud cupidatat labore quis occaecat laboris. Enim sint mollit duis sunt deserunt ullamco exercitation sunt velit in qui deserunt. Consequat esse deserunt eiusmod aute irure. Aliqua magna sunt irure qui fugiat pariatur adipisicing do labore laboris tempor aute sint sint. Laborum et veniam pariatur consectetur tempor culpa do. Consectetur aute ea officia veniam sint ipsum laborum ea dolor exercitation incididunt officia velit.
              Deserunt aliqua irure non adipisicing occaecat nostrud cupidatat labore quis occaecat laboris. Enim sint mollit duis sunt deserunt ullamco exercitation sunt velit in qui deserunt. Consequat esse deserunt eiusmod aute irure. Aliqua magna sunt irure qui fugiat pariatur adipisicing do labore laboris tempor aute sint sint. Laborum et veniam pariatur consectetur tempor culpa do. Consectetur aute ea officia veniam sint ipsum laborum ea dolor exercitation incididunt officia velit.
            </section>
          </div>
        </div>
      </pp-modal>
  `
  return container
}

ScrollingLongContent.args = defaultArgs;



export const CenterAlignment = ({ onClick: onClickStr }) => {
  const container = document.createElement('div')

  container.innerHTML = `
  <button ${onClickStr}>
    open modal
  </button>

  <pp-modal
    centered
    fit
    attach-close-action>
      <div slot="pp-dialog" class="pp-dialog">
        <div class="w-full pp-modal-content">
          <header class="pp-modal-header pb-0 p-14 pp-justify-end bg-white sm:rounded-t-md">
            <button
              ${onClickStr}
              class="pp-modal-close" aria-label="close modal" data-close>✕</button>
          </header>
          <section  class="pp-modal-body pt-0 p-14 bg-white sm:rounded-b-md">
            Modal content
            Dolor excepteur dolore mollit exercitation mollit fugiat sint ex. Nisi do adipisicing velit Lorem sunt cupidatat qui est sit. Nulla adipisicing minim voluptate do enim velit et. Voluptate fugiat officia duis laboris non cillum do consectetur. Pariatur anim irure non tempor laborum tempor minim eiusmod ullamco sunt deserunt consequat ad. Commodo magna do consectetur consequat.
            Deserunt aliqua irure non adipisicing occaecat nostrud cupidatat labore quis occaecat laboris. Enim sint mollit duis sunt deserunt ullamco exercitation sunt velit in qui deserunt. Consequat esse deserunt eiusmod aute irure. Aliqua magna sunt irure qui fugiat pariatur adipisicing do labore laboris tempor aute sint sint. Laborum et veniam pariatur consectetur tempor culpa do. Consectetur aute ea officia veniam sint ipsum laborum ea dolor exercitation incididunt officia velit.
          </section>
        </div>
      </div>
    </pp-modal>
  `

  return container;
}

CenterAlignment.args = defaultArgs;
