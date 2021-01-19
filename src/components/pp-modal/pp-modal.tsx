import { Component, Host, Prop, State, Element, h, Event, EventEmitter, Watch } from '@stencil/core';
import ResizeObserver from 'resize-observer-polyfill';

@Component({
  tag: 'pp-modal',
  styleUrl: 'pp-modal.css',
  shadow: true
})
export class Modal {
  @Prop({ reflect: true }) open: boolean = false;
  @Prop({ reflect: true }) centered: boolean = false;
  @Prop({ reflect: true }) fit: boolean = false;
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
    this.backdrop.classList.add('pp-backdrop')
    this.$el.insertAdjacentElement('beforebegin', this.backdrop)

    this.backdrop.setAttribute('class', 'pp-modal-backdrop hidden')
    if (this.open) {
      this.backdrop.classList.remove('hidden')
    }
    this.backdrop.addEventListener('click', this.handleBackdropClick)
  }

  configureCenterPosition() {
    if (!this.centered) {
      return
    }
    const $dialog = this.$el.querySelector('[slot="pp-dialog"]')
    if (!$dialog || !$dialog?.firstChild) {
      return
    }

    const rObserver = new ResizeObserver((entries) => {
      const [$curDialog] = entries;
      if ($curDialog.contentRect.height > window.innerHeight) {
        $dialog.classList.remove('pp-modal-centered')
      } else {
        $dialog.classList.add('pp-modal-centered')
      }
    })

    rObserver.observe($dialog?.firstElementChild)
  }

  connectedCallback() {
    this.configureBackdrop()
    this.configureCenterPosition()
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
        <slot name="pp-dialog" />
      </Host>
    );
  }
}
