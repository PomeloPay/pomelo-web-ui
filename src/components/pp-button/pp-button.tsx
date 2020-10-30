import { Component, Prop, h, Host, Element } from '@stencil/core';
// import clsx from 'clsx';
import { ButtonVariants, ColorVariants, Sizes } from '../types';

@Component({
  tag: 'pp-button',
  styleUrl: 'pp-button.css',
  shadow: true,
})
export class PpButton {
  @Prop({ attribute: 'variant', reflect: true }) variant: ButtonVariants = 'text';
  @Prop({ attribute: 'color' }) color: ColorVariants | string = '';
  @Prop({ attribute: 'size', reflect: true }) size: Sizes = 'md';

  @Element() $el: HTMLElement


  render() {
    return (
      <Host>
        <button>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
