import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pp-alert',
  styleUrl: 'pp-alert.css',
  shadow: true,
})
export class PpAlert {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
