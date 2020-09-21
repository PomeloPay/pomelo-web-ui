import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pp-badge',
  styleUrl: 'pp-badge.css',
  shadow: true,
})
export class PpBadge {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
