import {} from './components/calendar.js'
import timerservice from './services/timerservice.js'
import pubsub from './services/pubsub.js';
import {CHANNELS} from './services/channels.js'
import {DateService} from './services/dateservice.js'
window.bcn = window.bcn || {pubsub,CHANNELS,DateService};