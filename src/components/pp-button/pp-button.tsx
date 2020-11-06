import { Component, Prop, h, Host, Element } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';
// import clsx from 'clsx';
import { ButtonVariants, ColorVariants, Sizes } from '../types';

@Component({
  tag: 'pp-button',
  styleUrl: 'pp-button.css',
  shadow: true,
})
export class PpButton implements JSXBase.ButtonHTMLAttributes<HTMLButtonElement> {
  @Prop({ attribute: 'variant', reflect: true }) variant: ButtonVariants = 'text';
  @Prop({ attribute: 'color', reflect: true }) color: ColorVariants;
  @Prop({ attribute: 'size', reflect: true }) size: Sizes;
  @Prop({ reflect: true }) disabled: boolean;
  @Element() $el: HTMLElement


  render() {
    return (
      <Host>
        <button part="pp-button" disabled={this.disabled}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
