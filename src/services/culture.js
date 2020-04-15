const MONDAY = 1;
const SUNDAY = 0;
const SATURDAY = 6;
export const CULTURE = {
    "es-ES": {
        currentHour: parts => {
            const [{ value: hour }, , { value: minutes }] = parts
            return `${hour}:${minutes}`
        },
        currentDate: parts => {
            const [{ value: weekDay }, , { value: day }, , { value: month }, , { value: year }] = parts
            return `${weekDay}, ${day} de ${month} de ${year}`
        },
        currentMonth: parts => {
            const [{ value: month }, , { value: year }] = parts
            return `${month} de ${year}`
        },
        currentDay: parts=>{
            const [{ value: weekDay }, , {value: day }] =parts
            return `${weekDay} ${day}`            
        },
        daysOfWeek:["L","M","X","J","V","S","D"],
        firstDayOfWeek: MONDAY,
        allDay:"Todo el dia",
        noEvents: "Sin eventos"

    },
    "en": {
        currentHour: parts => {
            const [{ value: hour }, , { value: minutes }] = parts
            return `${hour}:${minutes}`
        },
        currentDate: parts => {
            const [{ value: weekDay }, , { value: day }, , { value: month }, , { value: year }] = parts
            return ` ${weekDay}, ${day} ${month} ${year}`
        },
        currentMonth: parts => {
            const [{ value: month }, , { value: year }] = parts
            return `${month} ${year}`
        },
        daysOfWeek:["S","M","T","W","T","F","S"],
        firstDayOfWeek: SUNDAY,
        allDay:"All day",
        noEvents: "No events"
    },
    "ar": {
        currentDate: parts => {
            const [{ value: weekDay }, , { value: day }, , { value: month }, , { value: year }] = parts
            return ` ${weekDay}, ${day} ${month} ${year}`
        },
        currentMonth: parts => {
            const [{ value: month }, , { value: year }] = parts
            return `${month} ${year}`
        },
        daysOfWeek:["L","M","X","J","V","S","D"],
        firstDayOfWeek: SATURDAY,
        allDay:"wehe wehe",
        noEvents: "waha waha"    
    
    }
}
