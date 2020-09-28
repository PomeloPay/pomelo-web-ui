import { Component, Host, Prop, State, Element, h } from '@stencil/core';

@Component({
  tag: 'pp-modal',
  styleUrl: 'pp-modal.css',
  shadow: true,
})
export class Modal {
  @State() $closeEl: HTMLElement = null;
  @Prop({ reflect: true }) open: boolean = false;
  @Prop({ reflect: false }) attachCloseAction: boolean = false;
  @Element() $el: HTMLElement;


  componentDidLoad() {
    if (this.attachCloseAction) {
      this.$closeEl = this.$el.querySelector('.pp-modal-close');
      this.$closeEl.addEventListener('click', () => {
        this.$el.removeAttribute('open');
      });
    }
  }

  disconnectedCallback() {
    if (this.$closeEl) {
      this.$closeEl = null;
    }
  }

  render() {
    if (!this.open) {
      return '';
    }

    return (
      <Host>
        <pp-card exportparts="pp-card">
          <div part="pp-modal-dialog">
            <slot name="pp-modal-header" />
            <slot name="pp-modal-body"/>
            <slot name="pp-modal-footer"/>
          </div>
        </pp-card>
      </Host>
    );
  }
}
