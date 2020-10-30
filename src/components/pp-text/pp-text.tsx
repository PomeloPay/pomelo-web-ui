import { Component, Host, h, Prop } from '@stencil/core';
import { Sizes } from '../../types';

@Component({
  tag: 'pp-text',
  styleUrl: 'pp-text.css',
  shadow: true,
})
export class PpText {
  @Prop({ reflect: true }) size: Sizes = Sizes.medium;
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
