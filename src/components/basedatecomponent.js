export class BaseDateComponent extends HTMLElement{
    constructor() {
        super();
        this._date = new Date();
        this._shadow = this.attachShadow({mode: "open"})
    }
    disconnectedCallback(){

    }
    _formatDate(){
        throw "Method not implemented"
    }
}