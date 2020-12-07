import { Component, Host, Element, h, State, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'pp-tabs',
  styleUrl: 'pp-tabs.css',
  shadow: true,
})
export class PpTabs {
  @Element() $el: HTMLElement;
  @Event({ eventName: 'tabChange'}) tabChange: EventEmitter;

  @State() $tabs: Array<HTMLElement> = [];

  componentWillLoad() {
    this.$tabs = [].slice.call(this.$el.querySelectorAll('pp-tabs [slot="pp-tab"]'));


    this.$tabs.forEach(($tabEl) => {
      $tabEl.addEventListener('click', this.handleTabClick)
    })
  }

  componentDidLoad() {

  }

  handleTabClick = (e) => {
    const { target } = e;
    this.$tabs.forEach(($tabEl) => {
      $tabEl.classList.remove('pp-active')
    })
    target.classList.add('pp-active')
    this.tabChange.emit({ id: target.id, event: e })
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
