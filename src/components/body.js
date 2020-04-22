import { LitElement, html, css } from 'lit-element'
import { flexcolumn } from '../css/flexcolumn.js'
import { padding } from '../css/padding.js';
import { } from './dayofweek.js';
import { } from './currentmonth.js'
import { } from './calendarpage.js'
class CalendarBody extends LitElement {
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
            <bcn-dayofweek></bcn-dayofweek>
            <bcn-currentmonth></bcn-currentmonth>
            <bcn-calendarbutton></bcn-calendarbutton>
			<bcn-month></bcn-month>
           `
    }
}

customElements.define('bcn-calendar-body', CalendarBody);




