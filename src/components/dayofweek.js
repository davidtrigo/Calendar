import {CONFIG} from '../services/config.js';
import {CULTURE} from '../services/culture.js';
import { LitElement, html, css } from 'lit-element'
class DayOfWeek extends LitElement{

    static get styles() {
        return css`
        :host{
            display:grid; 
            grid-template-columns: repeat(7,40px);
            gap:2px;
            height:40px;
        }
        div{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        `;
    }

    render() {
        let days = CULTURE[CONFIG.culture].daysOfWeek;
        let DayOfWeek = document.createElement('div');
        days.forEach(d => {
            let div = document.createElement('div');
            div.appendChild(document.createTextNode(d))
            DayOfWeek.appendChild(div);
        });
        return html `${DayOfWeek}`;
     }
}

customElements.define('bcn-dayofweek',DayOfWeek);