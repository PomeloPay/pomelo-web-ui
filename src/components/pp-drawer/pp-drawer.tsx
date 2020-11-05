import { Component, h, Prop, EventEmitter, Event, Element, Watch } from '@stencil/core';
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

  @Event({ eventName: 'backdropClick' }) backdropClick: EventEmitter;
  @Prop({ reflect: false }) attachCloseAction: boolean = false;
  @Element() $el: HTMLElement;
  componentDidLoad() {}

  @Watch('open')
  handleOpenProp(newOpenVal: boolean) {
    const targetContent = this.$el.querySelector(contentSelector);
    const easing = 'linear';
    const duration = 300;

    if (newOpenVal) {
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
