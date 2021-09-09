import pubSub from "../../service/PubSub.js";
import { CHANNELS } from "../../service/Config.js";
import css from "./ButtonsStyle.css.js"

const BUTTON = Object.freeze({
    UP: 1,
    DOWN: -1
})
const ACTION_IS_NULL = "action no contiene un valor correcto";

export class CalendarButton extends HTMLElement {
    constructor() {
        super();
        this.action = BUTTON.UP;
    }
    get action() {
        return this._action;
    }
    set action(value) {
        this._action = value;
    }
    _handlerClick(ev){
        ev.stopPropagation();
        pubSub.emit(CHANNELS.CHANGEMONTH, this.action);
    }
    connectedCallback(){
        this.addEventListener("click", this._handlerClick);
        let button = document.createElement("button");
        this.appendChild(button);
        button.appendChild(document.createTextNode("botones"));
    }
    disconnectedCallback(){
        this.removeEventListener("click", this._handlerClick);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        let action = null;
        if(oldValue !== newValue && newValue){
            action = BUTTON[newValue.toUpperCase()]
        }
        if(!action){
            throw ACTION_IS_NULL;
        }
        this.action = action;
    }
    static get observedAttributes() { return ['action']; }

    _getStyle(){
        this._shadow.adoptedStyleSheets = [css];
    }
}

customElements.define("cap-button", CalendarButton);

