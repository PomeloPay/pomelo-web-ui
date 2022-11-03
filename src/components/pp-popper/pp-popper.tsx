import { Component, Element, h, State, Prop, Listen, Host, Event, EventEmitter, Watch } from '@stencil/core';
import { createPopper, Instance, Options, Placement } from '@popperjs/core';
const placement: Placement = 'bottom';
const strategy = 'fixed';
const defaultOptions: Options = {
  placement,
  modifiers: [],
  strategy,
};

@Component({
  tag: 'pp-popper',
  styleUrl: 'pp-popper.css',
  shadow: true,
})
export class PpPopper {
  @Prop() placement: string = 'bottom';
  @Prop() reference: HTMLElement | string;
  @Element() $el: HTMLElement;
  @Prop({ reflect: true }) open: boolean = false;
  @Prop() options: Options| string;
  @Prop() closeOnBlur: boolean = true;
  @Prop() portal: HTMLElement | boolean = null
  @State() originalParent: HTMLElement = null;
  @Event() close: EventEmitter
  @Event() popperShow: EventEmitter

  private instance: Instance = null;
  private $reference: HTMLElement = null;

  @Listen('click', { target: 'window' })
  handleCloseOnBlur(ev: MouseEvent) {
    if (!this.closeOnBlur) {
      return
    }
    if (ev.target === this.$reference || this.$el.contains(ev.target as Node)) {
      return
    }
    this.open = false
    this.close.emit()
  }

  private create() {

    let options: any = {}

    try {
      if (typeof options === 'string') {
        options = JSON.parse(options)
      } else
      options = this.options
    } catch(e) {
      console.error('invalid options', this.options)
    }

    const finalOptions: Options = {
      ...defaultOptions,
      placement: this.placement,
      ...options,
      modifiers: [...defaultOptions.modifiers, ...(options?.modifiers || [])],
    };
    if (this.$reference) {
      this.instance = createPopper(this.$reference, this.$el, finalOptions);
    }
  }

  destroy() {
    if (this.instance) {
      this.instance.destroy();
      this.instance = null;
    }
  }

  @Watch('open')
  watchOpenHandler(newOpenVal) {
    if (!newOpenVal) {
      this.close.emit()
    } else {
      this.popperShow.emit()
    }
  }

  @Watch('reference')
  watchReferenceHandler(newRefVal) {
    this.configure(newRefVal)
  }

  componentWillLoad() {
    this.originalParent = this.$el.parentElement

    if (typeof this.portal === 'boolean' && this.portal) {
      this.portal = document.body
    }

    if (this.portal) {
      (this.portal as HTMLElement).appendChild(this.$el)
    }
  }

  configure(ref) {
    if (typeof ref === 'string') {
      this.$reference = document.querySelector(ref)
    }

    if (ref instanceof HTMLElement) {
      this.$reference = this.reference as HTMLElement
    }

    this.create();

    window.setTimeout(() => {
      if (typeof this?.instance?.forceUpdate === 'function') {
        this.instance.forceUpdate()
      }
    }, 500)
  }
  componentDidLoad() {
    this.configure(this.reference)
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
