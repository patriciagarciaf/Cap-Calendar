export class BaseDateComponent extends HTMLElement{
    constructor() {
        super();
        this._date = new Date();
        this._shadow = this.attachShadow({mode: "open"})
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
    disconnectedCallback(){

    }
    _formatDate(){
        throw "Method not implemented"
    }
}