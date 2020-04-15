import { LitElement, html } from 'lit-element';
class Calendar extends LitElement{
    render(){
        return html`Calendario`;
    }
}

customElements.define('bcn-calendar',Calendar);