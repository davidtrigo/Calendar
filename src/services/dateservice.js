import { CONFIG } from './config.js';
import { CULTURE } from './culture.js'

function getFirstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}
function getFirstDayOfWeek(d){
    let firstDayOfWeek = CULTURE[CONFIG.culture].firstDayOfWeek;
    var dayOfWeek = d.getDay() // 0-6
    if (dayOfWeek >= firstDayOfWeek){
        return new Date(d.setDate(d.getDate() - dayOfWeek + firstDayOfWeek))
    }
    else {
        return new Date(d.setDate(d.getDate() -7 + firstDayOfWeek))
    }
}
function getFirstDayOfCalendarPage(d) {
    return getFirstDayOfWeek(getFirstDayOfMonth(d))
}
function isCurrentMonth(oldDate, newDate) {
    return (
        oldDate.getFullYear() === newDate.getFullYear() &&
        oldDate.getMonth() === newDate.getMonth()
    );
}

function isToday(oldDate, newDate) {
    return (
        oldDate.getFullYear() === newDate.getFullYear() &&
        oldDate.getMonth() === newDate.getMonth() &&
        oldDate.getDate() === newDate.getDate()
    );
}
function getObjectDay(date, isCurrentMonth, isToday) {
    return {
        date,
        isCurrentMonth,
        isToday
    }
}



export class DateService {
    static getCurrentDate() {
        return new Date(Date.now())
    }
    static isCurrentMonth(oldDate,newDate){
        //01/01/0001
        //01/02/0001
        return isCurrentMonth(oldDate,newDate)
    }
    static isCurrentDate(oldDate, newDate) {
        return isToday(oldDate,newDate);
    }
    static isNextMonth(oldDate, newDate){
        return isCurrentMonth(this.getNextOrPreviosMonth(oldDate, +1), newDate)
    }
    static getNextOrPreviosMonth(date,dif){
        let firstDayOfMonth =getFirstDayOfMonth(date);
        dif = firstDayOfMonth.getMonth() + dif;
        return new Date(firstDayOfMonth.setMonth(dif));
    }
    static getMonthCalendar(date) {
        let dateClone = new Date(date.getTime());
        let calendarMonth = [];
        let _date = getFirstDayOfCalendarPage(dateClone);
        let today = DateService.getCurrentDate();
        let i = 0;
        do {
            calendarMonth.push(getObjectDay(new Date(_date.getTime()),
                isCurrentMonth(
                    dateClone,
                    _date
                ),
                isToday(
                    today,
                    _date
                )
            ));
            _date = new Date(_date.setDate(_date.getDate() + 1))
        } while (++i < 42)
        return calendarMonth;
    }
    static isNaturalDay(startDate, endDate){
        return (isToday(startDate, endDate) && 
            startDate.toTimeString().split(' ')[0] === "00:00:00" &&
            endDate.toTimeString().split(' ')[0] === "23:59:59")
    }
}

