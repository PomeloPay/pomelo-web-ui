import { Component, Host, h, Element, Prop, EventEmitter, State, Event, Watch } from '@stencil/core';
import isDateValid from 'date-fns/isValid';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';
import getDate from 'date-fns/getDate';
import differenceInYears from 'date-fns/differenceInYears';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { parse } from 'date-fns';

enum fieldNames {
  day = 'day',
  month = 'month',
  year = 'year',
}

const dayList = [...Array(31).keys()].map(x => x + 1);
const monthList = [...Array(12).keys()].map(x => x + 1);
@Component({
  tag: 'pp-input-date',
  styleUrl: 'pp-input-date.css',
  shadow: true,
})
export class InputDate {
  @Element() $el: HTMLElement;
  @Prop({ reflect: true, attribute: 'type' }) type: string = 'input-date';
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) value: string;
  @Prop() format?: string;

  @Event() inputChange: EventEmitter;
  @Event() inputBlur: EventEmitter;
  @Event() inputFocus: EventEmitter;

  @State() day: number;
  @State() month: number;
  @State() year: number;

  @State() open: boolean;

  @Prop() yearList: Array<number> = [...Array(differenceInYears(new Date(), new Date(1920, 0, 1))).keys()]
    .map(x => x + 1920)
    .reverse();

  componentDidLoad() {
    const dateVal = parse(this.value, 'yyyy-LL-dd', new Date());
    if (!isDateValid(dateVal)) {
      return;
    }

    this.day = getDate(dateVal);
    this.month = getMonth(dateVal);
    this.year = getYear(dateVal) + 1;
  }

  handleChange = e => {
    const {
      target: { name, value },
    } = e;
    let val = Number(value);
    if (!value) {
      this.value = '';
      this.inputChange.emit(this.value);
      return;
    }
    this[name] = val;

    const newValDate = new Date(this.year, this.month, this.day);
    const newVal = isDateValid(newValDate) ? format(newValDate, 'yyyy-LL-dd') : '';
    this.value = newVal;
    this.inputChange.emit(this.value);
  };

  @Watch('value')
  watchValueHandler(newVal) {
    const newValdate = parseISO(newVal);
    if (!newVal || !isDateValid(newValdate)) {
      return;
    }
    this.day = getDate(newValdate);
    this.month = getMonth(newValdate);
    this.year = getYear(newValdate);
  }

  handleBlur = () => {
    this.inputBlur.emit(this.value);
  };

  handleFocus = () => {
    this.inputFocus.emit(this.value);
  };

  render() {
    return (
      <Host>
        <select name={fieldNames.day} onInput={this.handleChange} class="pp-input w-full text-center">
          <option value="">DD</option>
          {dayList.map(x => (
            <option value={x} selected={x === this.day}>
              {x}
            </option>
          ))}
        </select>
        <select name={fieldNames.month} onInput={this.handleChange} class="pp-input w-full text-center">
          <option value="">MM</option>
          {monthList
            .map(x => x - 1)
            .map(x => (
              <option value={x} selected={x === this.month}>
                {x + 1}
              </option>
            ))}
        </select>
        <select name={fieldNames.year} onInput={this.handleChange} class="pp-input w-full text-center">
          <option value="">YYYY</option>
          {this.yearList.map(x => (
            <option value={x} selected={x === this.year}>
              {x}
            </option>
          ))}
        </select>
      </Host>
    );
  }
}
