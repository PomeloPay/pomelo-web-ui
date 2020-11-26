import { Component, Host, Prop, State, Element, h, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'pp-modal',
  styleUrl: 'pp-modal.css'
})
export class Modal {
  @State() $closeEl: HTMLElement = null;
  @Prop({ reflect: true }) open: boolean = false;
  @Prop({ reflect: false }) attachCloseAction: boolean = false;
  @Prop() gutter?: boolean
  @Element() $el: HTMLElement;
  @Event({ eventName: 'modalOpen' }) modalOpen: EventEmitter;
  @Event({ eventName: 'modalClose' }) modalClose: EventEmitter;
  @Event({ eventName: 'modalLoad' }) modalLoad: EventEmitter;
  @Event({ eventName: 'backdropClick' }) backdropClick: EventEmitter;
  @Prop() portal: HTMLElement | boolean = null
  @State() originalParent: HTMLElement = null;


  componentDidLoad() {
    this.$closeEl = this.$el.querySelector('.pp-modal-close');
    if (this.attachCloseAction && this.$closeEl) {
      this.$closeEl.addEventListener('click', () => {
        this.open = false
      });
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
      this.modalOpen.emit(this.$el);
    } else {
      this.modalClose.emit(this.$el);
    }
  }

  render() {
    return (
      <Host>
        <pp-card>
          <slot name="pp-modal-header" />
          <slot name="pp-modal-body" />
          <slot name="pp-modal-footer" />
          <slot name="pp-modal-content" />
        </pp-card>
        <div onClick={(e) => {
          this.backdropClick.emit(e)
        }} class="pp-modal-backdrop"></div>
      </Host>
    );
  }
}
