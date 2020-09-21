import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'pp-card',
  styleUrl: 'pp-card.css',
  shadow: true,
})
export class PpCard {
  @Prop() class: string = ''
  render() {
    return (
      <div part="pp-card" class={this.class}>
        <slot></slot>
      </div>
    );
  }

}
