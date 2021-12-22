import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'pp-sandbox',
})
export class PpToggle {
  @Prop() val: string = '';

  handleChange = e => {
    console.log(e);
  };

  render() {
    return (
      <pp-input-number
        onInputChange={this.handleChange}
        options={{ prefix: '$', numeralDecimalScale: 3 }}
      ></pp-input-number>
    );
  }
}
