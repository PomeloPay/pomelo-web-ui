import { Component, Host, Prop, State, Element, h, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'pp-modal',
  styleUrl: 'pp-modal.css'
})
export class Modal {
  @Prop({ reflect: true }) open: boolean = false;
  @Prop() lockScroll?: boolean = false
  @Element() $el: HTMLElement;
  @Event({ eventName: 'modalOpen' }) modalOpen: EventEmitter;
  @Event({ eventName: 'modalClose' }) modalClose: EventEmitter;
  @Event({ eventName: 'modalLoad' }) modalLoad: EventEmitter;
  @Event({ eventName: 'backdropClick' }) backdropClick: EventEmitter;
  @Prop() portal: HTMLElement | boolean = null
  @State() originalParent: HTMLElement = null;


  private backdrop: HTMLElement = null

  handleBackdropClick = (e) => {
    this.backdropClick.emit(e)
  }

  configureBackdrop() {
    this.backdrop = document.createElement('div')
    this.backdrop.setAttribute('class', 'pp-modal-backdrop hidden')
    if (this.open) {
      this.backdrop.classList.remove('hidden')
    }
    this.$el.insertAdjacentElement('beforebegin', this.backdrop)
    this.backdrop.addEventListener('click', this.handleBackdropClick)
  }

  connectedCallback() {
    this.configureBackdrop()
  }

  componentDidLoad() {
    if (this.lockScroll) {
      document.body.classList.add('pp-modal-lock-scroll')
    }
  }

  disconnectedCallback() {
    this.backdrop.removeEventListener('click', this.handleBackdropClick)
    this.backdrop.parentNode.removeChild(this.backdrop)
  }

  componentWillLoad() {
    this.originalParent = this.$el.parentElement

    if (typeof this.portal === 'boolean' && this.portal) {
      this.portal = document.body
    }

    if (this.portal) {
      (this.portal as HTMLElement).appendChild(this.$el)
    }

    this.modalLoad.emit({
      originalParent: this.originalParent,
      portal: this.portal,
      modalEl: this.$el
    })
  }

  @Watch('open')
  watchOpenHandler(openVal) {
    if (openVal) {
      if (this.lockScroll) {
        document.body.classList.add('pp-modal-lock-scroll')
      }
      this.backdrop.classList.remove('hidden')
      this.modalOpen.emit(this.$el);
    } else {
      if (this.lockScroll) {
        document.body.classList.remove('pp-modal-lock-scroll')
      }
      this.backdrop.classList.add('hidden')

      this.modalClose.emit(this.$el);
    }
  }

  render() {
    return (
      <Host>
        <slot name="pp-modal-header" />
        <slot name="pp-modal-body" />
        <slot name="pp-modal-footer" />
        <slot name="pp-modal-content" />
      </Host>
    );
  }
}
