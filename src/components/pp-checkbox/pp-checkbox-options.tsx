import { Component, h, Element, Prop, EventEmitter, Event, Fragment, Host } from '@stencil/core';
import { OptionShape } from '../types';

@Component({
  tag: 'pp-checkbox-options',
  styleUrl: 'pp-checkbox-options.css',
})
export class CheckboxOptions {
  @Element() $el: HTMLElement;
  @Prop() options: Array<OptionShape> = [];
  @Prop({ mutable: true, reflect: true }) value: Array<any> = [];
  @Prop({ reflect: true }) name: string;
  @Event() listOptionChange: EventEmitter;

  handleChange = e => {
    const { value, checked } = e.detail;
    const newValue = checked ? [...new Set([...this.value, value])] : this.value.filter(v => v !== value);
    this.value = newValue;
    this.listOptionChange.emit(newValue);
  };

  render() {
    return (
      <Host>
        <div class="pp-checkbox-options">
          {this.options.map(x => (
            <Fragment>
              <pp-checkbox-option
                optionValue={x.value}
                name={this.name}
                checked={this.value.includes(x.value)}
                onOptionChange={this.handleChange}
                label={x.label}
              ></pp-checkbox-option>
            </Fragment>
          ))}
        </div>
      </Host>
    );
  }
}
