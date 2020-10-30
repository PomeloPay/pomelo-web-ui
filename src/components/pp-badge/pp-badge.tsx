import { Component, Host, h, Prop } from '@stencil/core';
import { ColorVariants } from '../../types';

@Component({
  tag: 'pp-badge',
  styleUrl: 'pp-badge.css',
  shadow: true,
})
export class PpBadge {
  @Prop({ reflect: true }) color: ColorVariants = 'primary'
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
