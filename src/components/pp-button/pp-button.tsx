import { Component, Prop, h, Host } from '@stencil/core';

export type ButtonVariant = 'text' | 'outline' | 'contained';

@Component({
  tag: 'pp-button',
  styleUrl: 'pp-button.css',
  shadow: true
})
export class PpButton {
  @Prop({ attribute: 'data-variant' }) variant: ButtonVariant = 'text';
  @Prop() class: any;


  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
