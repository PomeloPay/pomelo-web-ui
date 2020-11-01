import { Component, Element, h, State, Prop, Listen } from '@stencil/core';
import { createPopper, Instance, Options, Placement } from '@popperjs/core';
// import {
//   computeStyles,
//   popperOffsets,
//   flip,
//   applyStyles,
//   preventOverflow,
//   eventListeners,
//   offset,
// } from '@popperjs/core/lib/modifiers';
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
  @Prop() closeOnBlur: boolean = true;
  @Prop() portal: HTMLElement | boolean = null
  @State() originalParent: HTMLElement = null;

  instance: Instance = null;
  $reference: Element = null;

  @Listen('click', { target: 'window' })
  handleCloseOnBlur(ev: MouseEvent) {
    if (!this.closeOnBlur) {
      return
    }
    if (ev.target === this.$reference || this.$el.contains(ev.target as Node)) {
      return
    }
    this.open = false
  }

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

  componentWillLoad() {
    this.originalParent = this.$el.parentElement

    if (typeof this.portal === 'boolean' && this.portal) {
      this.portal = document.body
    }

    if (this.portal) {
      (this.portal as HTMLElement).appendChild(this.$el)
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
