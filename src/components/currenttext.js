
export class CurrentText{
    #text;
    #shadow;
    constructor(){
        super();
        this.#shadow = this.attachShadow({mode:'open'});
    }
    init(data){
        this.#text = this.create(data);
        this.#shadow.appendChild(this.#text); 

    }    
    get shadow(){
        return this.#shadow;
    }
    create(data){
        return document.createTextNode(data);
    }
    update(data){
        this.#text.data = data;
    }
}
