import {Strategies} from './strategiestimes.js';
import {DateService} from './dateservice.js'
import { CONFIG } from './config.js'
class TimerService {
    constructor() {
        this._date = DateService.getCurrentDate() 
        this._interval = setInterval(() => {
            let date =DateService.getCurrentDate() 
            Strategies.forEach((s)=>s.pub(this._date,date))
            this._date = date
        }, CONFIG.refreshTimer)
    }
    dispose() {
        clearInterval(this._interval)
    }
}
export default new TimerService();