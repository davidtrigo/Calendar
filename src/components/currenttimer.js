import { CurrentTextElement } from './currenttextelement.js'
import { CHANNELS } from '../services/channels.js';
import { FormatDate } from '../services/formatdate.js';
import {css} from 'lit-element'
class CurrentTimer extends CurrentTextElement {
    constructor() {
        super(CHANNELS.CHANGETIMER, FormatDate.getTimer)
    }
    static get styles() {
        return css`
            :host{
                font-size:3rem;
            }
        `;
    }
}
customElements.define('bcn-timer',CurrentTimer);