import { FormatService } from '../../service/FormatService.js'
import pubSub from '../../service/PubSub.js'
import { CHANNELS } from '../../service/Config.js'
import sheet from './clock.css.js'
import { BaseDateComponent } from '../baseDateComponent/basedatecomponent.js'

/*export class Clock extends HTMLElement{
    constructor() {
        super();
        this._disposables=[];
        this._date = new Date();
        this._shadow = this.attachShadow({mode: "open"})
    }
    connectedCallback(){
        const text = this._create();
        const disposable = pubSub.on(CHANNELS.CHANGEDATE, (date) => this._update(text,date));
        this._disposables.push(disposable);
    }
    disconnectedCallback(){
        this._shadow.textContent = "";
        this._disposables=[];
    }
    _create(){
        let div= document.createElement('div');
        let text = document.createTextNode(this._formatDate());
        div.appendChild(text);
        this._shadow.appendChild(div);
        return text;
    }
    _update(node,date){
        this._date = date;
        node.data = this._formatDate();
    }*/

export class Clock extends BaseDateComponent{

    _formatDate(){
        return FormatService.getTime(this._date)
    }
    _setStyle(){
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, sheet];
    }
    _changeDate(value){
        return true;
    }
}
customElements.define("cap-clock", Clock);