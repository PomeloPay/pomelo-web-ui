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
  componentDidLoad() {
    if (this.attachCloseAction) {
      this.$closeEl = this.$el.querySelector('.pp-modal-close');
      this.$closeEl.addEventListener('click', () => {
        this.open = false
      });
    }

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
      </Host>
    );
  }
}
