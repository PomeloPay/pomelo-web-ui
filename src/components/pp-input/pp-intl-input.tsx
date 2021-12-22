import { Component, Element, Event, EventEmitter, getAssetPath, h, Host, Prop } from '@stencil/core'
import intlTelInput from 'intl-tel-input'
import { ResizeObserver as ResizeObserverPolyfill } from "@juggle/resize-observer";
import { createPopper } from '@popperjs/core'
import { isMobile } from '../../utils'
@Component({
  tag: 'pp-intl-input',
  styleUrl: 'pp-intl-input.css',
  assetsDirs: ['assets'],
})
export class InputTel {
  resizeObserver: ResizeObserver = null;

  @Element() $el: HTMLElement
  @Prop({ reflect: true, mutable: true }) value: string
  @Prop({ reflect: true }) name: string
  @Prop() maxlength?: string
  @Prop() error: boolean
  @Prop() initialCountry: string
  @Prop() placeholder: string = ''
  @Prop() dropdownZIndex: number = 41
  @Prop() config: any = {}
  @Event() inputChange: EventEmitter
  @Event() inputBlur: EventEmitter
  @Event() inputFocus: EventEmitter
  @Event() inputLoad: EventEmitter

  private inputRef = null

  private intlInputInstance = null
  private $input: HTMLElement = null

  private $popperTip = document.createElement('div')
  private $popperContent = document.createElement('div')
  private popperInstance = null

  private isMobileDevice = isMobile()

  async componentDidLoad() {
    this.$popperTip.classList.add('iti-popper')
    this.$popperContent.classList.add('relative')
    this.$popperTip.appendChild(this.$popperContent)

    this.$input = this.$el.querySelector('input')

    const options: any = {
      formatOnDisplay: false,
      separateDialCode: true,
      autoHideDialCode: false,
      nationalMode: false,
      preferredCountries: ['gb', 'us', 'sg'],
      initialCountry: this.initialCountry,
      customPlaceholder: () => this.placeholder,
      ...this.config,
      utilsScript: getAssetPath('./assets/phoneLibUtils.js')
    }

    if (!this.isMobileDevice) {
      options.dropdownContainer = this.config.dropdownContainer || this.$popperContent
    }

    this.intlInputInstance = intlTelInput(this.$input, options)

    this.$el.setAttribute('style', `--flags: url(${getAssetPath('./assets/flags.png')})`)
    this.$el.classList.add('block', 'relative')
    if (this.intlInputInstance?.countryList?.parentElement) {
      this.intlInputInstance?.countryList?.parentElement.setAttribute('style', `--flags: url(${getAssetPath('./assets/flags.png')})`)
    }

    if (!this.isMobileDevice) {
      this.$popperTip.setAttribute(
        'style',
        `z-index: ${this.dropdownZIndex}; top: 0; --flags: url(${getAssetPath('./assets/flags.png')})`,
      )
    }
    this.popperInstance = createPopper(this.$el, this.$popperTip, {
      strategy: 'fixed',
      placement: 'bottom',

      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 0],
          },
        },
        {
          name: 'preventOverflow'
        },

      ]
    })

    this.resizeObserver = new ResizeObserverPolyfill(() => {
      if (this.isMobileDevice) {
        return
      }
      this.$popperTip.style.width = `${this.$el.offsetWidth}px`
      this.intlInputInstance.countryList.style.width = `${this.$el.offsetWidth}px`
      this.popperInstance.update()
    });

    this.resizeObserver.observe(this.$el);

    this.inputLoad.emit({
      intlInputInstance: this.intlInputInstance,
      input: this.$input,
      intlInstanceId: this.intlInputInstance.id
    })

    this.$input.addEventListener('countrychange', () => {
      this.handleChange()
    })
  }

  connectedCallback() {
    if (!this.isMobileDevice) {
      document.body.appendChild(this.$popperTip)

      if (this.popperInstance) {
        this.popperInstance.forceUpdate()
      }
    }
  }

  disconnectedCallback() {
    if (!this.isMobileDevice) {
      if (this.popperInstance) {
        this.popperInstance.destroy()
      }
      document.body.removeChild(this.$popperTip)
    }

    if (this.resizeObserver) {
      this.resizeObserver.unobserve(this.inputRef);
    }
  }

  handleChange() {
    const countryData = this.intlInputInstance.getSelectedCountryData()

    const data = {
      ...countryData,
      value: this.value,
      name: this.name,
    }
    this.inputChange.emit(data)
  }

  handleInputChange = e => {
    this.value = e.target.value
    this.handleChange()
  }

  handleKeyDown = e => {
    const isModifierkeyPressed = e.metaKey || e.ctrlKey || e.shiftKey
    const isCursorMoveOrDeleteAction = [46, 8, 37, 38, 39, 40].indexOf(e.keyCode) != -1
    const isNumKeyPressed = (e.keyCode >= 48 && e.keyCode <= 58) || (e.keyCode >= 96 && e.keyCode <= 105)
    const vKey = 86,
      cKey = 67,
      aKey = 65
    switch (true) {
      case isCursorMoveOrDeleteAction:
      case isModifierkeyPressed == false && isNumKeyPressed:
      case (e.metaKey || e.ctrlKey) && [vKey, cKey, aKey].indexOf(e.keyCode) != -1:
        break
      default:
        e.preventDefault()
    }
  }

  render() {
    return (
      <Host class="relative p-0">
        <input
          class={{
            'w-full': true,
            'pp-input': true,
            'pp-error': this.error,
          }}
          type="tel"
          ref={(elm) => this.inputRef = elm}
          name={this.name}
          maxlength={this.maxlength}
          value={this.value}
          onBlur={e => this.inputBlur.emit(e)}
          onFocus={e => this.inputFocus.emit(e)}
          onInput={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
        />
      </Host>
    )
  }
}
