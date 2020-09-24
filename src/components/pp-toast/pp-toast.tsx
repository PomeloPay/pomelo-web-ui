import { Component, h } from '@stencil/core';

@Component({
  tag: 'pp-toast',
  styleUrl: 'pp-toast.css',
  shadow: true,
})
export class PpToast {

  render() {
    return (
      <section class="pp-fixed pp-bottom-0 pp-right-0 pp-pp-m-8 pp-pp-w-5/6 pp-pp-md:w-full pp-max-w-sm">
        <input type="checkbox" class="hidden" id="footertoast" />

        <label class="close pp-cursor-pointer pp-flex pp-items-start pp-justify-between pp-w-full pp-p-2 pp-bg-green-500 pp-h-24 pp-rounded pp-shadow-lg pp-text-white" title="close">
          <slot></slot>

          <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </label>
      </section>
    )
  }

}
