import { Component, Prop, h, Listen } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'pp-toggle',
  styleUrl: 'pp-toggle.css',
  shadow: true,
})
export class PpToggle {
  @Prop() on: boolean = false;
  @Prop() onChange: (val, e) => void;

  @Listen('click')
  handleClick(e) {
    this.on = !this.on;
    if (typeof this.onChange === 'function') {
      this.onChange(this.on, e);
    }
  }

  render() {
    const className = clsx({
      on: this.on,
    });

    return (
      <section class={className} onClick={this.handleClick}>
        <div class="switch-toggle"></div>
      </section>
    );
  }
}
