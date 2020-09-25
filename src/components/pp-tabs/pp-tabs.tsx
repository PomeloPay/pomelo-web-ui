import { Component, Host, Element, h, State } from '@stencil/core';

@Component({
  tag: 'pp-tabs',
  styleUrl: 'pp-tabs.css',
  shadow: true,
})
export class PpTabs {
  @Element() $el: HTMLElement;

  @State() $tabs: Array<HTMLElement> = [];

  componentWillLoad() {
    this.$tabs = [].slice.call(this.$el.querySelectorAll('pp-tabs [slot="pp-tab"]'));


    this.$tabs.forEach(($tabEl) => {
      $tabEl.addEventListener('click', this.handleTabClick)
    })
  }

  handleTabClick = (e) => {
    const { target } = e;
    this.$tabs.forEach(($tabEl) => {
      $tabEl.classList.remove('pp-active')
    })
    target.classList.add('pp-active')

  }

  disconnectedCallback() {
    if (this.$tabs.length) {
      this.$tabs = []
    }
  }

  render() {
    return (
      <Host>
        <slot name="pp-tab"></slot>
      </Host>
    );
  }
}
