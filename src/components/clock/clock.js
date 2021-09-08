import { FormatService } from '../../service/FormatService.js'
import pubSub from '../../service/PubSub.js'
import { CHANELS } from '../../service/Config.js'

const css = `div{
    background-color: var(--bgcolor,rgb(43,43,44));
    font-size: 3em;
    color: var(--fontcolor,white);
  }
 `

export class Clock extends HTMLElement{
    constructor() {
        super();
        this._disposables=[];
        this._date = new Date();
        this._shadow = this.attachShadow({mode: "open"})

        const style = document.createElement("style");
        style.textContent = css;
        this._shadow.appendChild(style);
    }
    connectedCallback(){
        const text = this._create();
        const disposable = pubSub.on(CHANELS.CHANGEDATE, (date) => this._update(text,date));
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
    }
    _formatDate(){
        return FormatService.getTime(this._date)
    }
}
customElements.define("cap-clock", Clock);