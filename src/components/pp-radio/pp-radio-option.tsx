import { Component, Host, h, Element, Prop, EventEmitter, Event, Watch, State } from '@stencil/core';

@Component({
  tag: 'pp-radio-option',
  styleUrl: 'pp-radio-options.css',
})
export class RadioOption {
  @Element() $el: HTMLElement;

  @Prop() label: string;
  @State() optionValue: string;
  @Prop({ reflect: true, mutable: true, attribute: 'value' }) finalValue: string;
  @Prop({ reflect: true, attribute: 'name' }) name: string;
  @Prop({ reflect: true, mutable: true }) checked: boolean;
  @Event() optionChange: EventEmitter;

  inputRef = null;
  // workaround value not reflecting to attr
  @Watch('finalValue')
  watchValue(val) {
    this.optionValue = val;
  }

  componentWillLoad() {
    this.optionValue = this.finalValue;
  }

  handleChange = (e, value) => {
    const { name, checked } = e.detail;
    this.optionChange.emit({ value, name, checked });
  };

  renderLabel = () => {
    if (typeof this.label !== 'string') {
      return this.label;
    }
    return <pp-text class="block text-sm font-sans text-gray-500 col-span-2">{this.label}</pp-text>;
  };

  render() {
    return (
      <Host>
        <pp-radio
          ref={elm => (this.inputRef = elm)}
          name={this.name}
          value={this.optionValue}
          checked={this.checked}
          onInputChange={e => this.handleChange(e, this.finalValue)}
          class="h-4 w-4 mt-0.5 cursor-pointer"
        ></pp-radio>
        <div
          class="cursor-pointer"
          onClick={e => {
            e.preventDefault();
            const trgetInput = this.inputRef.shadowRoot.querySelector('input');
            trgetInput.click();
          }}
        >
          {this.renderLabel()}
        </div>
      </Host>
    );
  }
}
