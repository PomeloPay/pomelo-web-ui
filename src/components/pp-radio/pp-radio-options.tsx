import { Component, h, Element, Prop, EventEmitter, Event, Fragment, Host } from '@stencil/core';
import { OptionShape } from '../types';

@Component({
  tag: 'pp-radio-options',
  styleUrl: 'pp-radio-options.css',
})
export class RadioOptions {
  @Element() $el: HTMLElement;
  @Prop() options: Array<OptionShape> = [];
  @Prop({ mutable: true, reflect: true }) value: any;
  @Prop() name: string;
  @Event() optionChange: EventEmitter;

  handleChange = e => {
    this.value = e?.detail?.value;
    this.optionChange.emit(e?.detail);
  };

  render() {
    return (
      <Host>
        <div class="pp-radio-options">
          {this.options.map(x => (
            <Fragment>
              <pp-radio-option
                finalValue={x.value}
                name={this.name}
                checked={this.value === x.value}
                onOptionChange={this.handleChange}
                label={x.label}
              ></pp-radio-option>
            </Fragment>
          ))}
        </div>
      </Host>
    );
  }
}
