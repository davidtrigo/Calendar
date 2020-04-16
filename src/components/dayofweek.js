import {CONFIG} from '../services/config.js';
import {CULTURE} from '../services/culture.js';
import { LitElement, html, css } from 'lit-element'
class DayOfWeek extends LitElement{

    static get styles() {
        return css`
        :host{
            display:grid;
            grid-template-columns: repeat(7,2.5rem);
            gap: 0.375rem;
            height:2.5rem;
        }
        
        div{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        `;
    }

    render() {
        return html `
            ${CULTURE[CONFIG.culture].daysOfWeek.map(day => html`<div>${day}</div>`)}
       `;
     }
}

customElements.define('bcn-dayofweek',DayOfWeek);