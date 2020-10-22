import { Component, Prop, EventEmitter, h, Event } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'pp-toggle',
  styleUrl: 'pp-toggle.css',
  shadow: true,
})
export class PpToggle {
  @Prop() on: boolean = false;

  @Event({ eventName: 'toggleChange'}) toggleChange: EventEmitter;

  handleClick(event: UIEvent) {
    this.on = !this.on;
    this.toggleChange.emit({ on: this.on, event })
  }

  render() {
    const className = clsx({
      on: this.on,
    });

    return (
      <section class={className} onClick={(e) => this.handleClick(e)}>
        <div class="switch-toggle"></div>
      </section>
    );
  }
}
