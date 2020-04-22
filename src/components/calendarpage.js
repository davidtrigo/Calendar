import { LitElement, html, css } from '../../node_modules/lit-element/lit-element.js'
import {repeat} from '../../node_modules/lit-html/directives/repeat.js';
import { DateService } from '../services/dateservice.js'
import pubsub from '../services/pubsub.js'
import { CHANNELS } from '../services/channels.js'
import { Day } from './currentday.js';

class CalendarPage extends LitElement {
    #date = DateService.getCurrentDate();
    #days = [];
    #unsubscribers = [];
    #click;
    #selectDay;
    #template;
    static get styles() {
        return css`
        :host{
            display:grid;
            grid-template-columns: repeat(7,40px);
            grid-template-rows: repeat(6, 40px);
            gap: 2px;
        }`;
    }

    render() {
        this.#template = this.create(this.#date);
        return html`${this.#template}`;
    }

    createDays(date) {
        this.#days = DateService.getMonthCalendar(date)
            .map(objectDay => {
                let day = new Day();
                return day;
            });
    }
    create(date) {
        this.createDays(date);
		console.dir(this.#days);
		return html`${repeat(this.#days,(day,index) => html`<li>${index}</li>`)}`;
  
	}
}

customElements.define('bcn-month', CalendarPage);