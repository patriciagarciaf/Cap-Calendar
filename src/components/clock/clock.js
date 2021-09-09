import { FormatService } from '../../service/FormatService.js'
import pubSub from '../../service/PubSub.js'
import { CHANNEL } from '../../service/Config.js'
import css from './clock.css.js'

export class Clock extends HTMLElement{
    constructor() {
        super();
        this._disposables=[];
        this._date = new Date();
        this._shadow = this.attachShadow({mode: "open"})

    }
    connectedCallback(){
        const text = this._create();
        const disposable = pubSub.on(CHANNEL.CHANGEDATE, (date) => this._update(text,date));
        this._disposables.push(disposable);
    }
    disconnectedCallback(){
        this._shadow.textContent = "";
        this._disposables=[];
    }
    _create(){
        let text = document.createTextNode(this._formatDate());
        const style = this._getStyle();
        if (style) {
            this._shadow.appendChild(style);
        }
        this._shadow.appendChild(text);
        return text;
    }
    _update(node,date){
        this._date = date;
        node.data = this._formatDate();
    }
    _formatDate(){
        return FormatService.getTime(this._date)
    }
    _getStyle(){
        this._shadow.adoptedStyleSheets = [css];
    }
}
customElements.define("cap-clock", Clock);