import { LitElement, html, unsafeCSS } from "lit";
// @ts-ignore
import styles from './cookie-notice.styles.css?inline';
import './cookie-notice.css';
import { customElement, property } from "lit/decorators.js";

@customElement("cookie-notice")
export default class IeNotice extends LitElement {

    @property()
    theme = "";

    static get styles() {
        return unsafeCSS(styles);
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <div>
                <slot></slot>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "cookie-notice": IeNotice;
    }
}
