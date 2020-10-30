import { Component, h, Prop, Element, Host } from '@stencil/core';
import clsx from 'clsx';
import { Sizes } from '../../types';

export type AvatarStatus = 'offline' | 'online';

@Component({
  tag: 'pp-avatar',
  styleUrl: 'pp-avatar.css',
  shadow: true,
})
export class PpAvatar {
  @Prop({ reflect: true }) size: Sizes = "md";
  @Prop() status: AvatarStatus = 'online';
  @Prop() src: string = '';
  @Prop() alt: string = '';
  @Element() $el: HTMLElement;

  render() {
    const statusClass = clsx('status', this.status);
    const placholder = String(this.alt)
      .split(' ')
      .slice(0, 3)
      .map(([initial]) => initial && String(initial).toUpperCase())
      .filter(Boolean)
      .join('');

    return (
      <Host>
        {this.src ? (
          <img src={this.src} alt={this.alt} />
        ) : (
          <pp-text size={this.size} data-alt={placholder}>
            {placholder}
          </pp-text>
        )}
        {this.status && <div class={statusClass}></div>}
      </Host>
    );
  }
}
