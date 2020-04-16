
import { LitElement, html, css } from 'lit-element'
import { flexcolumn } from '../css/flexcolumn.js'
import { } from './header.js'
class Calendar extends LitElement {
    static get styles() {

        return [
            flexcolumn,
            css`
                :host{
                    color:var(--calendar-color);
                    background-color:var(--calendar-background);
                    cursor: default;
                    user-select: none;
                    width:20rem;
                }
            `
        ];
    }
    render() {
        return html`
            <bcn-calendar-header></bcn-calendar-header>
        `
    }
}
customElements.define('bcn-calendar', Calendar);