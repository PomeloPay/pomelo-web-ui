/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AvatarSizes, AvatarStatus } from "./components/pp-avatar/pp-avatar";
import { ButtonVariant } from "./components/pp-button/pp-button";
import { Options } from "@popperjs/core";
export namespace Components {
    interface PpAlert {
    }
    interface PpAvatar {
        "alt": string;
        "size": AvatarSizes;
        "src": string;
        "status": AvatarStatus;
    }
    interface PpBadge {
    }
    interface PpButton {
        "class": any;
        "variant": ButtonVariant;
    }
    interface PpCard {
        "class": string;
    }
    interface PpDrawer {
        "attachCloseAction": boolean;
        "open": boolean;
    }
    interface PpIconButton {
    }
    interface PpModal {
        "attachCloseAction": boolean;
        "open": boolean;
    }
    interface PpPopper {
        "open": boolean;
        "options": Options;
        "reference": HTMLElement | string;
    }
    interface PpSpinner {
    }
    interface PpTabs {
    }
    interface PpText {
        "size": string;
    }
    interface PpToast {
        "open": boolean;
        "position": string;
    }
    interface PpToggle {
        "on": boolean;
    }
}
declare global {
    interface HTMLPpAlertElement extends Components.PpAlert, HTMLStencilElement {
    }
    var HTMLPpAlertElement: {
        prototype: HTMLPpAlertElement;
        new (): HTMLPpAlertElement;
    };
    interface HTMLPpAvatarElement extends Components.PpAvatar, HTMLStencilElement {
    }
    var HTMLPpAvatarElement: {
        prototype: HTMLPpAvatarElement;
        new (): HTMLPpAvatarElement;
    };
    interface HTMLPpBadgeElement extends Components.PpBadge, HTMLStencilElement {
    }
    var HTMLPpBadgeElement: {
        prototype: HTMLPpBadgeElement;
        new (): HTMLPpBadgeElement;
    };
    interface HTMLPpButtonElement extends Components.PpButton, HTMLStencilElement {
    }
    var HTMLPpButtonElement: {
        prototype: HTMLPpButtonElement;
        new (): HTMLPpButtonElement;
    };
    interface HTMLPpCardElement extends Components.PpCard, HTMLStencilElement {
    }
    var HTMLPpCardElement: {
        prototype: HTMLPpCardElement;
        new (): HTMLPpCardElement;
    };
    interface HTMLPpDrawerElement extends Components.PpDrawer, HTMLStencilElement {
    }
    var HTMLPpDrawerElement: {
        prototype: HTMLPpDrawerElement;
        new (): HTMLPpDrawerElement;
    };
    interface HTMLPpIconButtonElement extends Components.PpIconButton, HTMLStencilElement {
    }
    var HTMLPpIconButtonElement: {
        prototype: HTMLPpIconButtonElement;
        new (): HTMLPpIconButtonElement;
    };
    interface HTMLPpModalElement extends Components.PpModal, HTMLStencilElement {
    }
    var HTMLPpModalElement: {
        prototype: HTMLPpModalElement;
        new (): HTMLPpModalElement;
    };
    interface HTMLPpPopperElement extends Components.PpPopper, HTMLStencilElement {
    }
    var HTMLPpPopperElement: {
        prototype: HTMLPpPopperElement;
        new (): HTMLPpPopperElement;
    };
    interface HTMLPpSpinnerElement extends Components.PpSpinner, HTMLStencilElement {
    }
    var HTMLPpSpinnerElement: {
        prototype: HTMLPpSpinnerElement;
        new (): HTMLPpSpinnerElement;
    };
    interface HTMLPpTabsElement extends Components.PpTabs, HTMLStencilElement {
    }
    var HTMLPpTabsElement: {
        prototype: HTMLPpTabsElement;
        new (): HTMLPpTabsElement;
    };
    interface HTMLPpTextElement extends Components.PpText, HTMLStencilElement {
    }
    var HTMLPpTextElement: {
        prototype: HTMLPpTextElement;
        new (): HTMLPpTextElement;
    };
    interface HTMLPpToastElement extends Components.PpToast, HTMLStencilElement {
    }
    var HTMLPpToastElement: {
        prototype: HTMLPpToastElement;
        new (): HTMLPpToastElement;
    };
    interface HTMLPpToggleElement extends Components.PpToggle, HTMLStencilElement {
    }
    var HTMLPpToggleElement: {
        prototype: HTMLPpToggleElement;
        new (): HTMLPpToggleElement;
    };
    interface HTMLElementTagNameMap {
        "pp-alert": HTMLPpAlertElement;
        "pp-avatar": HTMLPpAvatarElement;
        "pp-badge": HTMLPpBadgeElement;
        "pp-button": HTMLPpButtonElement;
        "pp-card": HTMLPpCardElement;
        "pp-drawer": HTMLPpDrawerElement;
        "pp-icon-button": HTMLPpIconButtonElement;
        "pp-modal": HTMLPpModalElement;
        "pp-popper": HTMLPpPopperElement;
        "pp-spinner": HTMLPpSpinnerElement;
        "pp-tabs": HTMLPpTabsElement;
        "pp-text": HTMLPpTextElement;
        "pp-toast": HTMLPpToastElement;
        "pp-toggle": HTMLPpToggleElement;
    }
}
declare namespace LocalJSX {
    interface PpAlert {
    }
    interface PpAvatar {
        "alt"?: string;
        "size"?: AvatarSizes;
        "src"?: string;
        "status"?: AvatarStatus;
    }
    interface PpBadge {
    }
    interface PpButton {
        "class"?: any;
        "variant"?: ButtonVariant;
    }
    interface PpCard {
        "class"?: string;
    }
    interface PpDrawer {
        "attachCloseAction"?: boolean;
        "onBackdropClick"?: (event: CustomEvent<any>) => void;
        "open"?: boolean;
    }
    interface PpIconButton {
    }
    interface PpModal {
        "attachCloseAction"?: boolean;
        "open"?: boolean;
    }
    interface PpPopper {
        "open"?: boolean;
        "options"?: Options;
        "reference"?: HTMLElement | string;
    }
    interface PpSpinner {
    }
    interface PpTabs {
        "onTabChange"?: (event: CustomEvent<any>) => void;
    }
    interface PpText {
        "size"?: string;
    }
    interface PpToast {
        "open"?: boolean;
        "position"?: string;
    }
    interface PpToggle {
        "on"?: boolean;
        "onToggleChange"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "pp-alert": PpAlert;
        "pp-avatar": PpAvatar;
        "pp-badge": PpBadge;
        "pp-button": PpButton;
        "pp-card": PpCard;
        "pp-drawer": PpDrawer;
        "pp-icon-button": PpIconButton;
        "pp-modal": PpModal;
        "pp-popper": PpPopper;
        "pp-spinner": PpSpinner;
        "pp-tabs": PpTabs;
        "pp-text": PpText;
        "pp-toast": PpToast;
        "pp-toggle": PpToggle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pp-alert": LocalJSX.PpAlert & JSXBase.HTMLAttributes<HTMLPpAlertElement>;
            "pp-avatar": LocalJSX.PpAvatar & JSXBase.HTMLAttributes<HTMLPpAvatarElement>;
            "pp-badge": LocalJSX.PpBadge & JSXBase.HTMLAttributes<HTMLPpBadgeElement>;
            "pp-button": LocalJSX.PpButton & JSXBase.HTMLAttributes<HTMLPpButtonElement>;
            "pp-card": LocalJSX.PpCard & JSXBase.HTMLAttributes<HTMLPpCardElement>;
            "pp-drawer": LocalJSX.PpDrawer & JSXBase.HTMLAttributes<HTMLPpDrawerElement>;
            "pp-icon-button": LocalJSX.PpIconButton & JSXBase.HTMLAttributes<HTMLPpIconButtonElement>;
            "pp-modal": LocalJSX.PpModal & JSXBase.HTMLAttributes<HTMLPpModalElement>;
            "pp-popper": LocalJSX.PpPopper & JSXBase.HTMLAttributes<HTMLPpPopperElement>;
            "pp-spinner": LocalJSX.PpSpinner & JSXBase.HTMLAttributes<HTMLPpSpinnerElement>;
            "pp-tabs": LocalJSX.PpTabs & JSXBase.HTMLAttributes<HTMLPpTabsElement>;
            "pp-text": LocalJSX.PpText & JSXBase.HTMLAttributes<HTMLPpTextElement>;
            "pp-toast": LocalJSX.PpToast & JSXBase.HTMLAttributes<HTMLPpToastElement>;
            "pp-toggle": LocalJSX.PpToggle & JSXBase.HTMLAttributes<HTMLPpToggleElement>;
        }
    }
}
