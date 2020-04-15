import {EVENTDATA} from './eventfake.js'
//import { FormatDate } from '../formatdate.js';

function formatDate(date){
    let y=date.getFullYear().toString();
    let m=(date.getMonth()+1).toString().padStart(2,'0');
    let d =date.getDate().toString().padStart(2,'0');
    return `${y}${m}${d}`
}

export var EventService = async function (date){
    //return EVENTDATA[formatDate(date)];
    return EVENTDATA[formatDate(date)];
}
