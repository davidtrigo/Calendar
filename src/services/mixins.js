export const MixinPubSub = Base => class extends Base {
    #pubsub;
    getPub() {
        if (!this.#pubsub) {
            let event = new CustomEvent('getpub', {
                bubbles: true,
                composed: true
            })
            this.dispatchEvent(event);
        }
    }
    set pubSub(value) {
        if (value) {
            this.#pubsub = value;
        }
    }
    get pubSub() {
        return this.#pubsub;
    }
}

export const Disposables = Base => class extends Base {
    #disposables = [];
    get disposables() {
        return this.#disposables
    }
    dispose() {
        this.#disposables.forEach(dispose => dispose())
    }
}


