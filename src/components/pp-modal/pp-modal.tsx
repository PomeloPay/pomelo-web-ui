import { Component, Host, Prop, State, Element, h, Event, EventEmitter, Watch } from '@stencil/core';
import { extractNumber } from '../../utils';
import { ResizeObserver as ResizeObserverPolyfill } from '@juggle/resize-observer'

const shadowStyleScrollableY = (v = 'auto') => `
  :host([open]) {
    overflow-y: ${v};
  }
`

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


  private backdrop: HTMLElement = document.createElement('div')

  private shadowStyle: HTMLElement = document.createElement('style')

  private centerConfigObserver: ResizeObserver = null
  private styleConfigObserver: ResizeObserver = null

  handleBackdropClick = (e) => {
    this.backdropClick.emit(e)
  }

  configureStyle() {
    this.shadowStyle.innerHTML = shadowStyleScrollableY('hidden')
    this.$el.shadowRoot.appendChild(this.shadowStyle)

    const $dialog = this.$el.querySelector('[slot="pp-dialog"]')
    if (!$dialog || !$dialog?.firstChild) {
      return
    }


    this.styleConfigObserver = new ResizeObserverPolyfill((entries) => {
      const [$curDialogChild] = entries;
      const $dialogStyle = window.getComputedStyle($dialog)
      const top = Number(extractNumber($dialogStyle.getPropertyValue('margin-top')))
      const bottom = Number(extractNumber($dialogStyle.getPropertyValue('margin-bottom')))
      const finalHeight = $curDialogChild.contentRect.height + top + bottom
      if (finalHeight > window.innerHeight) {
        this.shadowStyle.innerHTML = shadowStyleScrollableY('auto')
      } else {
        this.shadowStyle.innerHTML = shadowStyleScrollableY('hidden')
      }
    })

    this.styleConfigObserver.observe($dialog?.firstElementChild)
  }

  configureBackdrop() {
    if (!this.backdrop) {
      this.backdrop = document.createElement('div')
    }
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

    this.centerConfigObserver = new ResizeObserverPolyfill((entries) => {
      const [$curDialog] = entries;
      if ($curDialog.contentRect.height > window.innerHeight) {
        $dialog.classList.remove('pp-modal-centered')
      } else {
        $dialog.classList.add('pp-modal-centered')
      }
    })

    this.centerConfigObserver.observe($dialog?.firstElementChild)

  }

  connectedCallback() {
    this.configureBackdrop()
    this.configureStyle()
    this.configureCenterPosition()
  }


  disconnectedCallback() {
    if (this.backdrop) {
      this.backdrop.removeEventListener('click', this.handleBackdropClick)
      this.backdrop.parentNode.removeChild(this.backdrop)
      this.backdrop = null
    }
    if (typeof this.centerConfigObserver?.disconnect === 'function') {
      this.centerConfigObserver.disconnect()
    }
    if (typeof this.styleConfigObserver?.disconnect === 'function') {
      this.styleConfigObserver.disconnect()
    }
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
