import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pp-text',
  styleUrl: 'pp-text.css',
  shadow: true,
})
export class PpText {
  @Prop({ reflect: true }) size: string = 'm';
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
