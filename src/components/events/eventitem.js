import { LitElement, html } from 'lit-element';
import { DateService } from '../../services/dateservice.js'
import { CULTURE } from '../../services/culture.js'
import { CONFIG } from '../../services/config.js'
class EventItem extends LitElement {
    static getproperties(){
        item: { type: Object }
    }
    static get styles() {
        return css`
            :host{
                display: grid;
                grid: 1.5625rem 1.5625rem /20% auto;
                column-gap: 0.75rem;
                align-items: center;
                text-align: center;
            }
            .allday{
                grid-row: 1/3;            
            }
            .text{
                grid-column: 2/3;
                grid-row: 1/3;
                text-align: left;  
            }
            .end{
                color: var(--calendar-greyed-color);
            }
          
        `;
    }
    renderText(text){
        return html`<div class="text">${text}</div>`
    }
    renderAllDay(text) {
        const allday = CULTURE[CONFIG.culture].allDay;
        return html`
            <div class="allday">${allday}</div>
            ${this.renderText(text)}
        `
    }
    renderStartEnd(start, end, text) {
        return html`
            <div>${FormatDate.getShortTimer(start)}</div>
            <div class="end">${FormatDate.getShortTimer(end)}</div>
            ${this.renderText(text)}
        `
    }
    render() {
        const { start, end, text } = this.item;
        const startDate = new Date(start);
        const endDate = new Date(end);
        if (DateService.isNaturalDay(startDate, endDate)) {
            return this.renderAllDay(text);
        }
        else {
            return this.renderStartEnd(startDate, endDate, text);
        }
    }
}
customElements.define('event-item', EventItem);
