import { html, css, LitElement } from '../../node_modules/lit-element/lit-element.js';
import { CHANNELS } from '../services/channels.js';
import { MixinPubSub } from '../services/mixins.js';
import { button } from '../css/button.js'

const NEXT = 1;
const PREVIOUS = -1;
const CLASSPREVIOUS = -1
const CLASSNEXT = 'previous';

class CalendarButton extends MixinsPub(LitElement) {

// css falta poner  static --- :host...

    static getproperties() {
        return {
            action: { type: Number }

        }
    }
    constructor() {
        super();
        this.action = PREVIOUS;

    }

    connectedCallBack() {
        super.connectedCallBack();
        this.getPub(this);


    }

    handleClick(e) {
        e.stopPropagation();
        if (this.pubSub) {
            pubsub.pub(CHANNELS.CHANGEMANUALMONTH, this.action);
        }
    }

    get clazz() { 
          return this.action === PREVIOUS ? CLASSPREVIOUS : CLASSNEXT;
    }

    render() {
        return html`<button @click="${this.handleClick}">click FALTA ALGO</button>`;


        //    <i class="${this.clazz}"></i>
    }

}
customElements.define('bcn-calendarbutton', CalendarButton);

