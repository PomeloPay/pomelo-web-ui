import { Component, h, Prop, State, Element, Watch, Host } from '@stencil/core';
import animejs from 'animejs';

const propStyles = ['height', 'width']

@Component({
  tag: 'pp-toast',
  styleUrl: 'pp-toast.css',
  shadow: true,
})
export class PpToast {
  @Prop({ reflect: true }) open: boolean = false;
  @Prop({ reflect: true }) position: string = 'bottom';
  @Prop() height: string
  @Prop() width: string
  @State() ready: boolean = false;
  @State() $closeEl: HTMLElement = null;
  @Element() $el: HTMLElement;

  componentDidLoad() {
    this.ready = true;
    const defaultStyles = document.createElement('style')
    const styles = [];
    console.log(this)
    propStyles.forEach((s) => {
      if (this[s]) {
        console.log(this[s])
        styles.push(`${s}: ${String(this[s]).replace(/;/g, '')}`)
      }
    })

    defaultStyles.innerHTML = `
      :host {
        ${styles.join(';')}
      }

    `

    this.$el.shadowRoot.appendChild(defaultStyles)
  }
  componentWillLoad() {
    document.body.appendChild(this.$el);
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
      this.$el.style.display = 'block'

      animejs({
        targets: this.$el,
        opacity: [0, 1],
        easing: 'easeInOutQuad',
      });


    } else {
      animejs({
        targets: this.$el,
        opacity: [1, 0],
        easing: 'easeInOutQuad',
      });

      window.setTimeout(() => {
        this.$el.style.display = 'none'
      }, 500)

    }
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
