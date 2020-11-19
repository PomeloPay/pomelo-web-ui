import { Component, Host, h, Prop } from '@stencil/core';
import { ColorVariants } from '../types';

@Component({
  tag: 'pp-fab',
  styleUrl: 'pp-fab.css',
  shadow: true,
})
export class PpFab {
  @Prop({ reflect: true }) color: ColorVariants
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
