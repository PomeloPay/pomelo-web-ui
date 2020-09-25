import { Component, h, Prop, State, Element, Watch } from '@stencil/core';
import animejs from 'animejs';

@Component({
  tag: 'pp-toast',
  styleUrl: 'pp-toast.css',
  shadow: true,
})
export class PpToast {
  @Prop({ reflect: true }) open: boolean = false;
  @Prop({ reflect: true }) position: string = 'bottom';

  @State() ready: boolean = false;
  @State() $closeEl: HTMLElement = null;
  @Element() $el: HTMLElement;

  componentDidLoad() {
    this.ready = true;
  }
  componentWillLoad() {
    document.body.appendChild(this.$el);
    this.$el.style.visibility = 'hidden';
  }

  disconnectedCallback() {
    if (this.$el.parentElement === document.body && this.ready) {
      document.body.removeChild(this.$el);
      this.ready = false;
    }
  }

  @Watch('open')
  handleOpenProp(newOpenVal: boolean) {
    if (newOpenVal) {
      animejs({
        targets: this.$el,
        opacity: [0, 1],
        visibility: 'visible',
        easing: 'easeInOutQuad',
      });
      this.$el.style.visibility = 'visible';
    } else {
      animejs({
        targets: this.$el,
        opacity: [1, 0],
        visibility: 'hidden',
        easing: 'easeInOutQuad',
      });
      window.setTimeout(() => {
        this.$el.style.visibility = 'hidden';
      }, 400);
    }
  }

  render() {
    return (
      <section data-position={this.position}>
        <pp-card exportparts="pp-card">
          <slot />
        </pp-card>
      </section>
    );
  }
}
