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
        //https://lit-element.polymer-project.org/guide/templates#use-properties-loops-and-conditionals-in-a-template
        //loop
        return html `${DayOfWeek}`;
     }
}

customElements.define('bcn-dayofweek',DayOfWeek);
