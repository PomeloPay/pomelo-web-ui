import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pp-accordion-item',
  shadow: true,
})
export class PpAccordion {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
