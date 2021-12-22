/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonVariants, ColorVariants, IInputNumberOptions, Sizes } from "./components/types";
import { AvatarStatus } from "./components/pp-avatar/pp-avatar";
import { Options } from "@popperjs/core";
export namespace Components {
    interface PpAccordion {
    }
    interface PpAccordionItem {
    }
    interface PpAlert {
    }
    interface PpAvatar {
        "alt": string;
        "initialLen": number;
        "size": Sizes;
        "src": string;
        "status": AvatarStatus;
    }
    interface PpBadge {
        "color": ColorVariants;
    }
    interface PpButton {
        "color": ColorVariants;
        "disabled": boolean;
        "size": Sizes;
        "variant": ButtonVariants;
    }
    interface PpCard {
    }
    interface PpCheckbox {
        "checked": boolean;
        "label": string;
        "name": string;
        "value": string;
    }
    interface PpDrawer {
        "attachCloseAction": boolean;
        "lockScroll"?: boolean;
        "open": boolean;
    }
    interface PpFab {
    }
    interface PpIconButton {
    }
    interface PpInputNumber {
        "autoFocus"?: boolean;
        "focusIndex"?: number;
        "name"?: string;
        "numeralDecimalScale"?: number;
        "options": IInputNumberOptions | string;
        "prefixValue"?: string;
        "value": string;
    }
    interface PpIntlInput {
        "config": any;
        "dropdownZIndex": number;
        "error": boolean;
        "initialCountry": string;
        "maxlength"?: string;
        "name": string;
        "placeholder": string;
        "value": string;
    }
    interface PpModal {
        "centered": boolean;
        "fit": boolean;
        "lockScroll"?: boolean;
        "open": boolean;
        "portal": HTMLElement | boolean;
    }
    interface PpPopper {
        "closeOnBlur": boolean;
        "open": boolean;
        "options": Options| string;
        "placement": string;
        "portal": HTMLElement | boolean;
        "reference": HTMLElement | string;
    }
    interface PpRadio {
        "checked": boolean;
        "label": string;
        "name": string;
        "value": string;
    }
    interface PpSandbox {
        "val": string;
    }
    interface PpSpinner {
    }
    interface PpTabs {
        "enableMenu": boolean;
        "menuContainerWidth": number;
    }
    interface PpText {
        "size": Sizes;
    }
    interface PpToast {
        "height": string;
        "open": boolean;
        "position": string;
        "width": string;
    }
    interface PpToggle {
        "on": boolean;
    }
}
declare global {
    interface HTMLPpAccordionElement extends Components.PpAccordion, HTMLStencilElement {
    }
    var HTMLPpAccordionElement: {
        prototype: HTMLPpAccordionElement;
        new (): HTMLPpAccordionElement;
    };
    interface HTMLPpAccordionItemElement extends Components.PpAccordionItem, HTMLStencilElement {
    }
    var HTMLPpAccordionItemElement: {
        prototype: HTMLPpAccordionItemElement;
        new (): HTMLPpAccordionItemElement;
    };
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
    interface HTMLPpCheckboxElement extends Components.PpCheckbox, HTMLStencilElement {
    }
    var HTMLPpCheckboxElement: {
        prototype: HTMLPpCheckboxElement;
        new (): HTMLPpCheckboxElement;
    };
    interface HTMLPpDrawerElement extends Components.PpDrawer, HTMLStencilElement {
    }
    var HTMLPpDrawerElement: {
        prototype: HTMLPpDrawerElement;
        new (): HTMLPpDrawerElement;
    };
    interface HTMLPpFabElement extends Components.PpFab, HTMLStencilElement {
    }
    var HTMLPpFabElement: {
        prototype: HTMLPpFabElement;
        new (): HTMLPpFabElement;
    };
    interface HTMLPpIconButtonElement extends Components.PpIconButton, HTMLStencilElement {
    }
    var HTMLPpIconButtonElement: {
        prototype: HTMLPpIconButtonElement;
        new (): HTMLPpIconButtonElement;
    };
    interface HTMLPpInputNumberElement extends Components.PpInputNumber, HTMLStencilElement {
    }
    var HTMLPpInputNumberElement: {
        prototype: HTMLPpInputNumberElement;
        new (): HTMLPpInputNumberElement;
    };
    interface HTMLPpIntlInputElement extends Components.PpIntlInput, HTMLStencilElement {
    }
    var HTMLPpIntlInputElement: {
        prototype: HTMLPpIntlInputElement;
        new (): HTMLPpIntlInputElement;
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
    interface HTMLPpRadioElement extends Components.PpRadio, HTMLStencilElement {
    }
    var HTMLPpRadioElement: {
        prototype: HTMLPpRadioElement;
        new (): HTMLPpRadioElement;
    };
    interface HTMLPpSandboxElement extends Components.PpSandbox, HTMLStencilElement {
    }
    var HTMLPpSandboxElement: {
        prototype: HTMLPpSandboxElement;
        new (): HTMLPpSandboxElement;
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
        "pp-accordion": HTMLPpAccordionElement;
        "pp-accordion-item": HTMLPpAccordionItemElement;
        "pp-alert": HTMLPpAlertElement;
        "pp-avatar": HTMLPpAvatarElement;
        "pp-badge": HTMLPpBadgeElement;
        "pp-button": HTMLPpButtonElement;
        "pp-card": HTMLPpCardElement;
        "pp-checkbox": HTMLPpCheckboxElement;
        "pp-drawer": HTMLPpDrawerElement;
        "pp-fab": HTMLPpFabElement;
        "pp-icon-button": HTMLPpIconButtonElement;
        "pp-input-number": HTMLPpInputNumberElement;
        "pp-intl-input": HTMLPpIntlInputElement;
        "pp-modal": HTMLPpModalElement;
        "pp-popper": HTMLPpPopperElement;
        "pp-radio": HTMLPpRadioElement;
        "pp-sandbox": HTMLPpSandboxElement;
        "pp-spinner": HTMLPpSpinnerElement;
        "pp-tabs": HTMLPpTabsElement;
        "pp-text": HTMLPpTextElement;
        "pp-toast": HTMLPpToastElement;
        "pp-toggle": HTMLPpToggleElement;
    }
}
declare namespace LocalJSX {
    interface PpAccordion {
    }
    interface PpAccordionItem {
    }
    interface PpAlert {
    }
    interface PpAvatar {
        "alt"?: string;
        "initialLen"?: number;
        "size"?: Sizes;
        "src"?: string;
        "status"?: AvatarStatus;
    }
    interface PpBadge {
        "color"?: ColorVariants;
    }
    interface PpButton {
        "color"?: ColorVariants;
        "disabled"?: boolean;
        "size"?: Sizes;
        "variant"?: ButtonVariants;
    }
    interface PpCard {
    }
    interface PpCheckbox {
        "checked"?: boolean;
        "label"?: string;
        "name"?: string;
        "onInputBlur"?: (event: CustomEvent<any>) => void;
        "onInputChange"?: (event: CustomEvent<any>) => void;
        "onInputFocus"?: (event: CustomEvent<any>) => void;
        "value"?: string;
    }
    interface PpDrawer {
        "attachCloseAction"?: boolean;
        "lockScroll"?: boolean;
        "onBackdropClick"?: (event: CustomEvent<any>) => void;
        "onModalClose"?: (event: CustomEvent<any>) => void;
        "onModalOpen"?: (event: CustomEvent<any>) => void;
        "open"?: boolean;
    }
    interface PpFab {
    }
    interface PpIconButton {
    }
    interface PpInputNumber {
        "autoFocus"?: boolean;
        "focusIndex"?: number;
        "name"?: string;
        "numeralDecimalScale"?: number;
        "onInputBlur"?: (event: CustomEvent<any>) => void;
        "onInputChange"?: (event: CustomEvent<any>) => void;
        "onInputFocus"?: (event: CustomEvent<any>) => void;
        "options"?: IInputNumberOptions | string;
        "prefixValue"?: string;
        "value"?: string;
    }
    interface PpIntlInput {
        "config"?: any;
        "dropdownZIndex"?: number;
        "error"?: boolean;
        "initialCountry"?: string;
        "maxlength"?: string;
        "name"?: string;
        "onInputBlur"?: (event: CustomEvent<any>) => void;
        "onInputChange"?: (event: CustomEvent<any>) => void;
        "onInputFocus"?: (event: CustomEvent<any>) => void;
        "onInputLoad"?: (event: CustomEvent<any>) => void;
        "placeholder"?: string;
        "value"?: string;
    }
    interface PpModal {
        "centered"?: boolean;
        "fit"?: boolean;
        "lockScroll"?: boolean;
        "onBackdropClick"?: (event: CustomEvent<any>) => void;
        "onModalClose"?: (event: CustomEvent<any>) => void;
        "onModalLoad"?: (event: CustomEvent<any>) => void;
        "onModalOpen"?: (event: CustomEvent<any>) => void;
        "open"?: boolean;
        "portal"?: HTMLElement | boolean;
    }
    interface PpPopper {
        "closeOnBlur"?: boolean;
        "onClose"?: (event: CustomEvent<any>) => void;
        "onPopperShow"?: (event: CustomEvent<any>) => void;
        "open"?: boolean;
        "options"?: Options| string;
        "placement"?: string;
        "portal"?: HTMLElement | boolean;
        "reference"?: HTMLElement | string;
    }
    interface PpRadio {
        "checked"?: boolean;
        "label"?: string;
        "name"?: string;
        "onInputBlur"?: (event: CustomEvent<any>) => void;
        "onInputChange"?: (event: CustomEvent<any>) => void;
        "onInputFocus"?: (event: CustomEvent<any>) => void;
        "value"?: string;
    }
    interface PpSandbox {
        "val"?: string;
    }
    interface PpSpinner {
    }
    interface PpTabs {
        "enableMenu"?: boolean;
        "menuContainerWidth"?: number;
        "onBoundMeasureChange"?: (event: CustomEvent<any>) => void;
        "onTabChange"?: (event: CustomEvent<any>) => void;
    }
    interface PpText {
        "size"?: Sizes;
    }
    interface PpToast {
        "height"?: string;
        "open"?: boolean;
        "position"?: string;
        "width"?: string;
    }
    interface PpToggle {
        "on"?: boolean;
        "onToggleChange"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "pp-accordion": PpAccordion;
        "pp-accordion-item": PpAccordionItem;
        "pp-alert": PpAlert;
        "pp-avatar": PpAvatar;
        "pp-badge": PpBadge;
        "pp-button": PpButton;
        "pp-card": PpCard;
        "pp-checkbox": PpCheckbox;
        "pp-drawer": PpDrawer;
        "pp-fab": PpFab;
        "pp-icon-button": PpIconButton;
        "pp-input-number": PpInputNumber;
        "pp-intl-input": PpIntlInput;
        "pp-modal": PpModal;
        "pp-popper": PpPopper;
        "pp-radio": PpRadio;
        "pp-sandbox": PpSandbox;
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
            "pp-accordion": LocalJSX.PpAccordion & JSXBase.HTMLAttributes<HTMLPpAccordionElement>;
            "pp-accordion-item": LocalJSX.PpAccordionItem & JSXBase.HTMLAttributes<HTMLPpAccordionItemElement>;
            "pp-alert": LocalJSX.PpAlert & JSXBase.HTMLAttributes<HTMLPpAlertElement>;
            "pp-avatar": LocalJSX.PpAvatar & JSXBase.HTMLAttributes<HTMLPpAvatarElement>;
            "pp-badge": LocalJSX.PpBadge & JSXBase.HTMLAttributes<HTMLPpBadgeElement>;
            "pp-button": LocalJSX.PpButton & JSXBase.HTMLAttributes<HTMLPpButtonElement>;
            "pp-card": LocalJSX.PpCard & JSXBase.HTMLAttributes<HTMLPpCardElement>;
            "pp-checkbox": LocalJSX.PpCheckbox & JSXBase.HTMLAttributes<HTMLPpCheckboxElement>;
            "pp-drawer": LocalJSX.PpDrawer & JSXBase.HTMLAttributes<HTMLPpDrawerElement>;
            "pp-fab": LocalJSX.PpFab & JSXBase.HTMLAttributes<HTMLPpFabElement>;
            "pp-icon-button": LocalJSX.PpIconButton & JSXBase.HTMLAttributes<HTMLPpIconButtonElement>;
            "pp-input-number": LocalJSX.PpInputNumber & JSXBase.HTMLAttributes<HTMLPpInputNumberElement>;
            "pp-intl-input": LocalJSX.PpIntlInput & JSXBase.HTMLAttributes<HTMLPpIntlInputElement>;
            "pp-modal": LocalJSX.PpModal & JSXBase.HTMLAttributes<HTMLPpModalElement>;
            "pp-popper": LocalJSX.PpPopper & JSXBase.HTMLAttributes<HTMLPpPopperElement>;
            "pp-radio": LocalJSX.PpRadio & JSXBase.HTMLAttributes<HTMLPpRadioElement>;
            "pp-sandbox": LocalJSX.PpSandbox & JSXBase.HTMLAttributes<HTMLPpSandboxElement>;
            "pp-spinner": LocalJSX.PpSpinner & JSXBase.HTMLAttributes<HTMLPpSpinnerElement>;
            "pp-tabs": LocalJSX.PpTabs & JSXBase.HTMLAttributes<HTMLPpTabsElement>;
            "pp-text": LocalJSX.PpText & JSXBase.HTMLAttributes<HTMLPpTextElement>;
            "pp-toast": LocalJSX.PpToast & JSXBase.HTMLAttributes<HTMLPpToastElement>;
            "pp-toggle": LocalJSX.PpToggle & JSXBase.HTMLAttributes<HTMLPpToggleElement>;
        }
    }
}
