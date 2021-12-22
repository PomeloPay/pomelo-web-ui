import { Component, Host, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'pp-radio',
  styleUrl: 'pp-radio.css',
  shadow: true,
})
export class PpRadio {

  @Prop() label: string
  @Prop({ reflect: true, mutable: true }) value: string
  @Prop({ reflect: true, attribute: 'name' }) name: string
  @Prop({ reflect: true, mutable: true }) checked: boolean

  @Event() inputChange: EventEmitter;
  @Event() inputBlur: EventEmitter;
  @Event() inputFocus: EventEmitter;

  handleChange = (e) => {
    const { name, checked, value } = e.target
    this.inputChange.emit({ value, name, checked, event: e  })
  }

  handleBlur = (e) => {
    const { name, checked, value } = e.target
    this.inputFocus.emit({ value, name, checked, event: e  })
  }

  handleFocus = (e) => {
    const { name, checked, value } = e.target
    this.inputFocus.emit({ value, name, checked, event: e  })
  }

  render() {
    return (
      <Host>
        <input
          type="radio"
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          value={this.value}
          checked={this.checked}
          name={this.name}></input>
        <span></span>
      </Host>
    );
  }

}
