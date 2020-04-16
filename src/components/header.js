import { } from './currenttimer.js';
import { } from './currentdate.js';
import { LitElement, html, css } from 'lit-element'
import { flexcolumn } from '../css/flexcolumn.js'
import { padding } from '../css/padding.js';
class CalendarHeader extends LitElement {
    static get styles() {
        const style = css`
            :host{
                border-bottom: 1px solid;
            }
        `;
        return [style, flexcolumn, padding];
    }
    render() {
       return html`
            <bcn-timer></bcn-timer>
            <bcn-currentdate></bcn-currentdate>
        `
    }
}

customElements.define('bcn-calendar-header', CalendarHeader);




