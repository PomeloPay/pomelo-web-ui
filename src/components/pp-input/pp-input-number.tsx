import { Component, Element, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';
import Cleave from 'cleave.js';
import { IInputNumberOptions } from '../types';

const defaultOptions = {
  numeral: true,
  numeralThousandsGroupStyle: 'thousand',
  rawValueTrimPrefix: true,
};
@Component({
  tag: 'pp-input-number',
  styleUrl: 'pp-input-number.css',
  shadow: true,
})
export class PpInputNumber {
  @Prop({ reflect: true, mutable: true }) value: string;
  @Prop({ reflect: true }) name?: string;
  @Prop() prefixValue?: string = '';
  @Prop() numeralDecimalScale?: number;
  @Prop() autoFocus?: boolean;
  @Prop() focusIndex?: number;
  @Event() inputChange: EventEmitter;
  @Event() inputFocus: EventEmitter;
  @Event() inputBlur: EventEmitter;

  @State() ready: boolean = false
  @Prop() options: IInputNumberOptions | string;
  @Element() $el: HTMLElement;
  cleave = null;
  $inputEl: HTMLInputElement = null;

  handleChange = e => {
    const { name, checked, value, rawValue } = e.target
    if (this.ready) {
      this.value = value;
    }
    this.inputChange.emit({ value, name, rawValue, checked, event: e  });
  };

  handleBlur = (e) => {
    const { name, checked, value } = e.target
    this.inputBlur.emit({ value, name, checked, event: e  })
  }

  handleFocus = (e) => {
    const { name, checked, value } = e.target
    this.inputFocus.emit({ value, name, checked, event: e  })
  }

  componentDidLoad() {
    this.$inputEl = this.$el.shadowRoot.querySelector('input');

    let finalOptions = this.options;

    if (typeof finalOptions === 'string') {
      try {
        finalOptions = JSON.parse(finalOptions);
      } catch (ex) {
        finalOptions = {};
        console.warn(ex.message);
      }
    }

    const options: any = {
      ...defaultOptions,
      onValueChanged: this.handleChange,
      ...(finalOptions as Object),
    };

    if (this.prefixValue) {
      options.prefix = this.prefixValue;
    }

    if (this.numeralDecimalScale) {
      options.numeralDecimalScale = this.numeralDecimalScale;
    }
    this.cleave = new Cleave(this.$inputEl, options);
    this.ready = true
  }

  render() {
    return (
      <Host>
        <input
          name={this.name}
          tabindex={this.focusIndex}
          part="pp-input-number"
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          autofocus={this.autoFocus}
          type="text"
          value={this.value}
        />
      </Host>
    );
  }
}
