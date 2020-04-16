import {CHANNELS} from '../services/channels.js';
import {FormatDate} from '../services/formatdate.js';
import {CurrentTextElement} from './currenttextelement.js'
import {css} from 'lit-element'
class CurrentDate extends CurrentTextElement{
    constructor(){
        super(CHANNELS.CHANGEDAY,FormatDate.getCurrentDate);
    }
    static get styles() {
        return css`
            :host{
                color:var(--third-color);
            }
        `;
    }
}

customElements.define('bcn-currentdate',CurrentDate);