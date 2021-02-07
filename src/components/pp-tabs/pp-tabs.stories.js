import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import clsx from 'clsx';

export default {
  title: 'Tabs',
  argTypes: {
    children: { control: 'text' },
  },
};

export const TabsSimple = ({ onClick, children }) => {
  const container = document.createElement('div');
  container.innerHTML = `
    <pp-tabs>
      <div slot="pp-tab" active class="pp-tab text-center">
        Tab 1
      </div>
      <div slot="pp-tab" class="pp-tab text-center">
        Tab 2
      </div>
    </pp-tabs>
  `;

  const tabs = [].slice.call(container.querySelectorAll('.pp-tab'))

  function handleTabClick(e) {
    action('on tab click')
    tabs.forEach($tab => {
      $tab.removeAttribute('active')
    });

    e.target.setAttribute('active', '')
  }

  tabs.forEach($tab => {
    $tab.addEventListener('click', handleTabClick)
  });

  return container;
};
TabsSimple.args = {
  children: 'Tabs',
};


export const TabsWithMenu = ({}) => {
  const container = document.createElement('div');

  let overflowChildrenIds = []
  container.innerHTML = `
    <pp-tabs
      class="relative flex items-baseline w-full text-black"
      mene-container-width="250"
      enable-menu

    >
      <pp-text slot="pp-tab" class="pp-tab pp-active text-primary">
        Verna Tate
      </pp-text>
      <pp-text slot="pp-tab" class="pp-tab">
        Adelaide Clark
      </pp-text>
      <pp-text slot="pp-tab" class="pp-tab">
        Gavin Ross Davidson
      </pp-text>
      <pp-text slot="pp-tab" class="pp-tab">
        Nora Patrick
      </pp-text>
      <pp-text slot="pp-tab" class="pp-tab">
        Blake Schneider
      </pp-text>
      <pp-text slot="pp-tab" class="pp-tab">
        Floyd Ross
      </pp-text>
      <pp-text slot="pp-tab" class="pp-tab">
        Jordan Malone
      </pp-text>
      <pp-text slot="pp-tab" class="pp-tab">
        Viola Carter Hudson
      </pp-text>
      <pp-text slot="pp-tab" class="pp-tab">
        Alta Carter
      </pp-text>
      <pp-text slot="pp-tab" class="pp-tab">
        Roy Norman
      </pp-text>
      <pp-text slot="pp-tab" class="pp-tab">
        Zachary Morales
      </pp-text>
      <pp-text slot="pp-tab" class="pp-tab">
        Ryan McDaniel
      </pp-text>
      <pp-text slot="pp-tab" class="pp-tab">
        Bettie Walton

      </pp-text>
      <pp-text slot="pp-tab" class="pp-tab">
        Annie Bush Bettie
      </pp-text>

      <pp-text
        tabs-anchor
        popper-anchor size="md" slot="pp-tab" class="text-black absolute top-0 right-0 cursor-pointer">
        More
      </pp-text>
    </pp-tabs>

    <pp-popper
      placement="bottom-end"
      style="width: 200px; max-height: 400px;"
      class="bg-white px-4 py-2 overflow-y-auto"
      portal
      close-on-blur
      reference="[tabs-anchor]"
    >
    </pp-popper>
  `;

  const $tabs = container.querySelector('pp-tabs')
  const $popper = container.querySelector('pp-popper')
  const $anchor = container.querySelector('[tabs-anchor]')

  const clearActive = (el) => el.classList.remove('text-primary')

  const togglePopper = () => document.querySelector('pp-popper').toggleAttribute('open')

  function handleTabClick(e) {
    const tabItems = [].slice.call($tabs.querySelectorAll('[tab-overflow="false"]'))
    const popperItems = [].slice.call($popper.querySelectorAll('pp-text'))

    tabItems.forEach(clearActive)
    popperItems.forEach(clearActive)

    e.target.classList.add('text-primary')
  }



  $anchor.addEventListener('click', togglePopper)

  $tabs.addEventListener('boundMeasureChange', (e) => {
    overflowChildrenIds = e?.detail?.overflowChildrenIds || []
    const quear = overflowChildrenIds.map(id => `[tab-id="${id}"]`).join(',')
    // initial load is empty
    if (!quear) {
      return
    }
    const tabItems = [].slice.call($tabs.querySelectorAll(quear))

    $popper.innerHTML = tabItems.reduce((acc, el, idx) => {
      acc += `
        <pp-text
          id={category.id}
          class="${clsx({
            'border-gray-210 border-b': idx !== tabItems.length - 1,
            'block cursor-pointer py-2 text-purple-1000': true,
            // 'hover:text-primary': true,
          })}"
        >
          ${el.textContent}
        </pp-text>
      `
      return acc
    }, '')

    const nonOverflowTabItems = [].slice.call($tabs.querySelectorAll('[tab-overflow="false"]'))
    const popperItems = [].slice.call($popper.querySelectorAll('pp-text'))

    console.log(nonOverflowTabItems, popperItems)
    nonOverflowTabItems.forEach((el) => el.addEventListener && el.addEventListener('click', handleTabClick))
    popperItems.forEach((el) => el.addEventListener && el.addEventListener('click', (e) => {
      handleTabClick(e)
      togglePopper()
    }))
  })


  return container
}
