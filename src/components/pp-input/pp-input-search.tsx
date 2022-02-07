import { Component, Host, h, Element, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'pp-input-search',
  styleUrl: 'pp-input-search.css',
  shadow: true,
})
export class InputSearch {
  @Element() $el: HTMLElement;

  @Prop({ mutable: true }) value: string;
  @Prop() name: string;
  @Prop() placeholder: string;

  @Prop() searchButtonDisabled: boolean;
  @Prop() searchText: string = 'Search';

  @Event() searchInputChange: EventEmitter;

  handleInputChange = e => {
    const value = e.target.value;
    this.value = value;
    this.searchInputChange.emit(e.target.value);
  };

  @Event({ eventName: 'searchButtonClick' }) searchButtonClick: EventEmitter;

  render() {
    return (
      <Host>
        <input
          placeholder={this.placeholder}
          name={this.name}
          value={this.value}
          onInput={this.handleInputChange}
        ></input>
        <button
          disabled={this.searchButtonDisabled}
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            this.searchButtonClick.emit(this.value);
          }}
        >
          {this.searchText}
        </button>
      </Host>
    );
  }
}
