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
  @Prop({ attribute: 'color', reflect: true }) color: ColorVariants;
  @Prop({ attribute: 'size', reflect: true }) size: Sizes;

  @Element() $el: HTMLElement


  render() {
    return (
      <Host>
        <button part="pp-button">
          <slot></slot>
        </button>
      </Host>
    );
  }
}
