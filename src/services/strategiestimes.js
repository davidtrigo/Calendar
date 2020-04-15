import { CHANNELS } from './channels.js'
import pubsub from './pubsub.js'
import { DateService } from './dateservice.js'
class TimerStrategy {
    pub(oldDate, date) {
        pubsub.pub(CHANNELS.CHANGETIMER, date);
    }
}
class DayStrategy {
    pub(oldDate, date) {
        if (
            !DateService.isCurrentDate(oldDate, date)
            && DateService.isCurrentMonth(oldDate, date)
        ) {
            pubsub.pub(CHANNELS.CHANGEDAY, date);
        }
    }
}
class MonthStrategy {
    pub(oldDate, date) {
        if (!DateService.isCurrentMonth(oldDate, date)) {
            pubsub.pub(CHANNELS.CHANGEMONTH, date);
        }
    }
}

export const Strategies = [
    new TimerStrategy(),
    new DayStrategy(),
    new MonthStrategy()
]
