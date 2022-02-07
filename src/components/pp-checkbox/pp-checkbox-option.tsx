import { Component, Host, h, Element, Prop, EventEmitter, Event, Watch, State } from '@stencil/core';

@Component({
  tag: 'pp-checkbox-option',
  styleUrl: 'pp-checkbox-options.css',
})
export class CheckBoxOption {
  @Element() $el: HTMLElement;

  @Prop() label: string;
  @State() value: string;
  @Prop({ reflect: true, mutable: true }) optionValue: string;
  @Prop({ reflect: true, attribute: 'name' }) name: string;
  @Prop({ reflect: true, mutable: true }) checked: boolean;
  @Event() optionChange: EventEmitter;

  inputRef = null;
  // workaround value not reflecting to attr
  @Watch('optionValue')
  watchValue(val) {
    this.value = val;
  }

  componentWillLoad() {
    this.value = this.optionValue;
  }

  handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    this.optionChange.emit({ value: this.value, checked: !this.checked });
  };

  renderLabel = () => {
    if (typeof this.label !== 'string') {
      return this.label;
    }
    return <pp-text class="block pointer-events-none font-sans text-gray-500 col-span-2">{this.label}</pp-text>;
  };

  render() {
    return (
      <Host>
        <pp-checkbox
          ref={elm => (this.inputRef = elm)}
          name={this.name}
          value={this.value}
          checked={this.checked}
          style={{ height: '20px' }}
          onClick={this.handleClick}
          class="h-7 w-5 text-xs mt-0.5 cursor-pointer"
        ></pp-checkbox>
        <div
          class="cursor-pointer"
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
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
