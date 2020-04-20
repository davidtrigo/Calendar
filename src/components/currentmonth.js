import { CHANNELS } from '../services/channels.js';
import { FormatDate } from '../services/formatdate.js';
import { CurrentTextElement } from './currenttextelement.js';
import { MixinPubSub } from '../services/mixins.js'
import { DateService } from '../services/dateservice.js'

class CurrentMonth extends MixinPubSub (CurrentTextElement) {
    constructor() {
        super(CHANNELS.CHANGEMONTH, FormatDate.getCurrentMonth);
    }

   

    changeManualMonth(dif) {
        this.date = DateService.getNextOrPreviosMonth(this.date, dif)
    }

    changeAutomaticMonth(date) {
        if (!DateService.isCurrentMonth(DateService.getCurrentDate(), date)) {
            this.date = date;
        }
    }
    set pubSub(value) {
        super.pubSub=value;
        if (value) {
            super.pubSub.sub(CHANNELS.CHANGEMANUALMONTH,
                (dif)=>this.changeManualMonth(dif),
                null,
                this.disposables
            );
        }
    }

    connectedCallback() {
        super.connectedCallback();
        this.getPub();

    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.dispose();
    }
}

customElements.define('bcn-currentmonth', CurrentMonth);

