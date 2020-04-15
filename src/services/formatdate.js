import {CONFIG} from './config.js'
import {CULTURE} from './culture.js'
let culture = CULTURE[CONFIG.culture];
export class FormatDate{
    static getShortTimer(date) {
        return new Intl.DateTimeFormat(CONFIG.culture, CONFIG.shortTimerOptions).format(date);
    }
    static getTimer(date) {
        return new Intl.DateTimeFormat(CONFIG.culture, CONFIG.timerOptions).format(date);
    }
    static getCurrentDate(date){
        let parts = Intl.DateTimeFormat(CONFIG.culture, CONFIG.dateOptions).formatToParts(date);
        return culture.currentDate(parts)
    }
    static getCurrentMonth(date){
        let parts = Intl.DateTimeFormat(CONFIG.culture, CONFIG.monthOptions).formatToParts(date);
        return culture.currentMonth(parts)
    }
    static getDay(date){
        let parts = Intl.DateTimeFormat(CONFIG.culture, CONFIG.dayOptions).formatToParts(date);
        return culture.currentDay(parts)

    }
}