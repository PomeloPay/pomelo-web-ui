import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'pp-card',
  styleUrl: 'pp-card.css',
})
export class PpCard {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
