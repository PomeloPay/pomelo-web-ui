import { Component, Host, h } from '@stencil/core';
@Component({
  tag: 'pp-fab',
  styleUrl: 'pp-fab.css',
  shadow: true,
})
export class PpFab {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
