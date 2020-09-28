import { Component, Prop, EventEmitter, h, Listen, Event } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'pp-toggle',
  styleUrl: 'pp-toggle.css',
  shadow: true,
})
export class PpToggle {
  @Prop() on: boolean = false;

  @Event({ eventName: 'toggleChange'}) toggleChange: EventEmitter;

  @Listen('click')
  handleClick() {
    this.on = !this.on;
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
