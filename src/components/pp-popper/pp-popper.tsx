import { Component, Element, h, State, Prop } from '@stencil/core';
import { createPopper, Instance, Options, Placement, detectOverflow } from '@popperjs/core';
import {
  computeStyles,
  popperOffsets,
  flip,
  applyStyles,
  preventOverflow,
  eventListeners,
  offset,
} from '@popperjs/core/lib/modifiers';
console.log({ detectOverflow });
const placement: Placement = 'bottom-start';
const strategy = 'absolute'
const defaultOptions: Options = {
  placement,
  modifiers: [
    computeStyles,
    popperOffsets,
    flip,
    applyStyles,
    preventOverflow,
    eventListeners,
    offset,
  ],
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
      modifiers: [
        ...defaultOptions.modifiers,
        ...(this.options?.modifiers || []),
      ],
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
    if (!this.open) {
      return null;
    }
    return (
      <section>
        <slot></slot>
      </section>
    );
  }
}
