import { Component, Element, h, State, Prop } from '@stencil/core';
import tippy from 'tippy.js/headless';

@Component({
  tag: 'pp-popper',
  styleUrl: 'pp-popper.css',
  shadow: true,
})
export class PpPopper {
  @Prop() anchor: string;
  @Element() $el: HTMLElement;
  @Prop() open: boolean = false;
  @State() ready: boolean = false;
  $tippyInstance = null;
  $popperRef = null;

  componentDidLoad() {
    tippy(`[${this.anchor}]`, {
      animation: true,
      onHide(instance) {
        this.open = false
        requestAnimationFrame(instance.unmount);
      },
      onMount: () => {
        this.ready = true;
      },
      render: instance => {
        const popper = this.$el as any;
        const box = document.createElement('div');

        popper.appendChild(box);

        box.className = 'my-custom-class';
        box.textContent = instance.props.content as string;

        function onUpdate(prevProps, nextProps) {
          // DOM diffing
          if (prevProps.content !== nextProps.content) {
            box.textContent = nextProps.content;
          }
        }

        return {
          popper,
          onUpdate, // optional
        };
      },
    });
  }

  render() {
    if (!this.ready) {
      return '';
    }

    return (
      <section>
        <slot></slot>
      </section>
    );
  }
}
