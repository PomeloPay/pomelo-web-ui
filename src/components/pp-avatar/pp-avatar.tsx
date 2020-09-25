import { Component, h, Prop, Element } from '@stencil/core';
import clsx from 'clsx';

export type AvatarSizes = 'sm' | 'md' | 'lg';
export type AvatarStatus = 'offline' | 'online';

@Component({
  tag: 'pp-avatar',
  styleUrl: 'pp-avatar.css',
  shadow: true,
})
export class PpAvatar {
  @Prop() size: AvatarSizes = 'md';
  @Prop() status: AvatarStatus = 'online';
  @Prop() src: string = '';
  @Prop() alt: string = '';
  @Element() $el: HTMLElement;

  componentWillLoad() {
    this.$el.classList.add('pp-prose')
    this.$el.classList.add(`pp-prose-${this.size}`)
  }

  render() {
    const statusClass = clsx('status', this.status);
    const placholder = String(this.alt)
      .split(' ')
      .slice(0, 3)
      .map(([initial]) => initial && String(initial).toUpperCase())
      .filter(Boolean)
      .join('');

    const placholderClass = clsx('pp-placeholder', `pp-placeholder-${this.size}`, 'pp-prose', `pp-prose-${this.size}`);

    return (
      <section data-size={this.size}>
        {this.src ? (
          <img src={this.src} alt={this.alt} />
        ) : (
          <div data-alt={placholder} class={placholderClass}>
            {placholder}
          </div>
        )}
        <div slot="placeholder" class={statusClass} data-size={this.size}></div>
      </section>
    );
  }
}
