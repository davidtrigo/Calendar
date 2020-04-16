import {CONFIG} from '../services/config.js';
import {CULTURE} from '../services/culture.js';
import { LitElement, html, css } from 'lit-element'
class DayOfWeek extends LitElement{

    static get styles() {
        return css`
        div{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        `;
    }

    render() {
        return html `<div class="dayOfWeek">
            ${CULTURE[CONFIG.culture].daysOfWeek.map(day => html`<div>${day}</div>`)}
        </div>`;
     }
}

customElements.define('bcn-dayofweek',DayOfWeek);