import { Component, h, Prop, State, EventEmitter, Event, Element, Watch } from '@stencil/core';
import clsx from 'clsx';
import animejs from 'animejs';

const contentSelector = '.pp-drawer-content';

@Component({
  tag: 'pp-drawer',
  styleUrl: 'pp-drawer.css',
  shadow: true,
})
export class PpDrawer {
  @Prop({ reflect: true }) open: boolean = false;
  @Event({ eventName: 'modalOpen'}) modalOpen: EventEmitter
  @Event({ eventName: 'modalClose'}) modalClose: EventEmitter
  @Prop() lockScroll?: boolean = false

  @Event({ eventName: 'backdropClick' }) backdropClick: EventEmitter;
  @Prop({ reflect: false }) attachCloseAction: boolean = false;
  @Element() $el: HTMLElement;
  @State() $closeEl: HTMLElement;

  componentDidLoad() {
    if (this.attachCloseAction) {
      this.$closeEl = this.$el.querySelector('.pp-modal-close');
      this.$closeEl.addEventListener('click', () => {
        this.$el.removeAttribute('open');
      });
    }
  }

  @Watch('open')
  handleOpenProp(newOpenVal: boolean) {
    const targetContent = this.$el.querySelector(contentSelector);
    const easing = 'linear';
    const duration = 300;

    if (newOpenVal) {
      if (this.lockScroll) {
        document.body.classList.add('pp-modal-lock-scroll')
      }
      this.modalOpen.emit(this.$el)
      animejs({
        targets: targetContent,
        opacity: [0, 1],
        translateX: [targetContent.clientWidth, 0],
        easing,
        duration,
      });
    } else {
      this.modalClose.emit(this.$el)
      if (this.lockScroll) {
        document.body.classList.remove('pp-modal-lock-scroll')
      }
      animejs({
        targets: targetContent,
        opacity: [1, 0],
        translateX: [0, targetContent.clientWidth],
        easing,
        duration,
      });
    }
  }

  render() {
    const className = clsx('pp-drawer', { 'pp-open': this.open });
    const backdropClassName = clsx('pp-backdrop', { 'pp-backdrop-clickable': !!this.backdropClick, 'pp-open': this.open });
    return (
      <section part="pp-drawer" class={className}>
        <div part="pp-backdrop" class={backdropClassName} onClick={e => this.backdropClick.emit(e)}></div>
        <slot></slot>
      </section>
    );
  }
}
