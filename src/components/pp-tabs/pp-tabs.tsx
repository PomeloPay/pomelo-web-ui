import { Component, Host, Element, h, State, EventEmitter, Event, Prop } from '@stencil/core';
import { nanoid } from 'nanoid';

// const ResizeObserverPolyfill = require('resize-observer-polyfill')
const TAB_ATTR_REF = 'tab-id';
const TABS_SELECTOR = '.pp-tab'
const TAB_OVERFLOW = 'tab-overflow'

@Component({
  tag: 'pp-tabs',
  styleUrl: 'pp-tabs.css',
  shadow: true,
})
export class PpTabs {
  @Element() $el: HTMLElement;
  @Event({ eventName: 'tabChange' }) tabChange: EventEmitter;
  @Event() boundMeasureChange: EventEmitter;
  @State() $tabs: Array<HTMLElement> = [];
  @State() collapsible: boolean;
  @Prop({ reflect: true, attribute: 'enable-menu'}) enableMenu: boolean = true
  @State() boundChildRef: string;
  @State() boundChild: HTMLElement;

  @Prop() menuContainerWidth: number = 300;

  getChildren() {
    return [].slice.call(this.$el.querySelectorAll(TABS_SELECTOR));
  }

  connectedCallback() {
    this.configure();
  }

  configure() {
    this.$tabs = this.getChildren();

    this.$tabs.forEach($tabEl => {
      $tabEl.setAttribute(TAB_ATTR_REF, $tabEl.id || nanoid());
    });

    if (this.enableMenu) {
      this.computeBounds(this.$el.getBoundingClientRect());
    }
  }

  componentDidLoad() {
    const resizeObserver: any = new ResizeObserver(this.handleResize);

    resizeObserver.observe(this.$el);
  }

  computeBounds(contentRect) {
    const containerWidth = Math.round(contentRect.width);
    let overflowWidth = 0;
    let totalChildWidth = 0;
    const $children = this.getChildren();

    $children.forEach(($child) => {
      $child.setAttribute(TAB_OVERFLOW, 'false')
      totalChildWidth += Math.floor($child.offsetWidth);
    })

    const isCollapsible = totalChildWidth > containerWidth;
    let $overflowChildren = []
    // find elem boundary
    if (isCollapsible) {
      for (let idx = 0; idx < $children.length; idx += 1) {
        const $child: HTMLElement = $children[idx];
        overflowWidth += Math.floor($child.offsetWidth);
        $child.setAttribute(TAB_OVERFLOW, 'false')
        if (overflowWidth > containerWidth - this.menuContainerWidth) {
          this.boundChildRef = $child.getAttribute(TAB_ATTR_REF);
          this.boundChild = $child;
          break;
        }
      }

      const lastChildOverflowIdx = $children.findIndex((x: HTMLElement) => x.getAttribute(TAB_ATTR_REF) === this.boundChildRef)
      $overflowChildren = $children.slice(lastChildOverflowIdx + 1)

      $overflowChildren.forEach(($child: HTMLElement) => {
        $child.setAttribute(TAB_OVERFLOW, 'true')
      })

    } else {
      this.boundChildRef = null;
      this.boundChild = null;
    }

    this.collapsible = isCollapsible;
    this.boundMeasureChange.emit({
      containerWidth,
      overflowWidth,
      totalChildWidth,
      boundChildRef: this.boundChildRef,
      boundChild: this.boundChild,
      overflowChildrenIds: $overflowChildren.map((x: HTMLElement) => x.getAttribute(TAB_ATTR_REF))
    });
  }

  handleResize = entries => {
    const [$curEl] = entries;

    if (this.enableMenu) {
      this.computeBounds($curEl.contentRect);
    }
  };

  disconnectedCallback() {
    if (this.$tabs.length) {
      this.$tabs = [];
    }
  }

  render() {
    return (
      <Host>
        <slot name="pp-tab"></slot>
      </Host>
    );
  }
}
