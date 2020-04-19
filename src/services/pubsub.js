export class PubSub {
    constructor() {
        this._map = new Map();
    }
    pub(channel, data) {
        let suscriptors = this._map.get(channel);
        suscriptors && suscriptors.forEach(suscriptor => {
            suscriptor(Object.freeze(data));
        });
    }
    /**
     * sub(canal1,()=>{},this) this
     * const disposables= [];
     * sub(canal1,()=>{},this,disposables)
     * sub(canal2,()=>{},this,disposables)
     * const MiximDisposable=Base => class extends Base{
     *      #disposables=[];
     *      get disposables(){
     *         return this.#disposables
     *      }
     *      dispose(){
     *         #disposables.forEach(dispose=>dispose())
     *      }
     * }
     * @param {*} channel 
     * @param {*} cb 
     * @param {*} thisArgs 
     * @param {*} disposables 
     */
    sub(channel, cb, thisArgs = null, disposables = []) {
        if (thisArgs) {
            cb.bind(thisArgs);
        }
        let suscriptors = this._map.get(channel);
        if (!suscriptors) {
            suscriptors = [cb]
            this._map.set(channel, suscriptors);
        } else {
            suscriptors.push(cb);
        }
        const disposable = () => {
            let indexOf = suscriptors.indexOf(cb);
            if (indexOf !== 1) {
                suscriptors.splice(indexOf, 1);
            }
        }
        disposables.push(disposable);
        return disposable;
    }
}

export default new PubSub();