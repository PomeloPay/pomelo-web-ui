import { Component, h } from '@stencil/core';

@Component({
  tag: 'pp-icon-button',
  styleUrl: 'pp-icon-button.css',
  shadow: true,
})
export class PpIconButton {

  render() {
    return (
      <button>
        <slot></slot>
      </button>
    );
  }

}
