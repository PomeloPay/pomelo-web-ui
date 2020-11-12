import { Component, Element, Event, EventEmitter, h, Host, Prop } from '@stencil/core'
import Cleave from 'cleave.js'
import { IInputNumberOptions } from '../types'


const defaultOptions = {
  numeral: true,
  numeralThousandsGroupStyle: 'thousand',
  rawValueTrimPrefix: true
}

@Component({
  tag: 'pp-input-number',
  styleUrl: 'pp-input-number.css',
  shadow: true
})
export class PpInputNumber {
  @Prop() value: string
  @Prop() name?: string
  @Prop() prefixValue?: string = ''
  @Prop() numeralDecimalScale?: number
  @Event({ eventName: 'inputNumberChange' }) inputNumberChange: EventEmitter;

  @Prop() options: IInputNumberOptions
  @Element() $el: HTMLElement
  cleave = null
  $inputEl: HTMLInputElement = null

  handleChange = (e) => {
    const { value } = e.target
    this.value = value
    this.inputNumberChange.emit(e.target)
  }

  componentDidLoad() {
    this.$inputEl = this.$el.shadowRoot.querySelector('input')

    let finalOptions = this.options

    if (typeof finalOptions === 'string') {
      finalOptions = JSON.parse(finalOptions)
    }

    console.log(finalOptions, this.options)

    const options = {
      ...defaultOptions,
      onValueChanged: this.handleChange,
      ...finalOptions,
    }

    if (this.prefixValue) {
      options.prefix = this.prefixValue
    }
    if (this.numeralDecimalScale) {
      options.numeralDecimalScale = this.numeralDecimalScale
    }

    this.cleave = new Cleave(this.$inputEl, options)
  }


  render() {
    return (
      <Host>
        <input part="pp-input-number" type="text" value={this.value} />
      </Host>
    )
  }
}
