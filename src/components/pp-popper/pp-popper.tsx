import { Component, Element, h, State, Prop } from '@stencil/core';
import { createPopper, Instance, Options, Placement, detectOverflow } from '@popperjs/core';
// import {
//   computeStyles,
//   popperOffsets,
//   flip,
//   applyStyles,
//   preventOverflow,
//   eventListeners,
//   offset,
// } from '@popperjs/core/lib/modifiers';
console.log({ detectOverflow });
const placement: Placement = 'bottom';
const strategy = 'fixed';
const defaultOptions: Options = {
  placement,
  modifiers: [],
  strategy,
};

@Component({
  tag: 'pp-popper',
  styleUrl: 'pp-popper.css',
  shadow: true,
})
export class PpPopper {
  @Prop() reference: HTMLElement | string;
  @Element() $el: HTMLElement;
  @Prop() open: boolean = false;
  @Prop() options: Options;
  @State() ready: boolean = false;

  instance: Instance = null;
  $reference: Element = null;

  create() {
    const finalOptions: Options = {
      ...defaultOptions,
      ...this.options,
      modifiers: [...defaultOptions.modifiers, ...(this.options?.modifiers || [])],
    };

    this.instance = createPopper(this.$reference, this.$el, finalOptions);
  }

  destroy() {
    if (this.instance) {
      this.instance.destroy();
      this.instance = null;
    }
  }

  componentDidLoad() {
    if (typeof this.reference === 'string') {
      this.$reference = document.querySelector(this.reference);
    }
    this.create();
  }

  render() {
    const className = this.open ? 'pp-open' : '';
    return (
      <section class={className}>
        <slot></slot>
      </section>
    );
  }
}
