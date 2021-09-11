import PubSub from '../../service/PubSub.js'
import {CHANNELS} from '../../service/Config.js'
const METHOD_NOT_IMPLEMENTED='Method not implemented'
import css from './baseDateComponent.css.js'

export class BaseDateComponent extends HTMLElement{

    constructor(){
        super();
        this._create();
        this.date=new Date();
        this._oldDate=new Date();
        this._disposables=[];
    }
    set date(value){
        this._oldDate=this.date;
        if(this._changeDate(value)){
            this._date=value;
            this._update();
        }
    }
    get date(){
        return this._date;
    }
    connectedCallback(){
        this._suscribe();
    }
    _suscribe(channel=CHANNELS.CHANGEDATE){
        const dispose=PubSub.on(channel,(date)=>{
            this.date=date;
        });
        this._disposables.push(dispose);
    }
    disconnectedCallback(){
        this._disposables.forEach(dispose=>{
            dispose && dispose();
        })
        this._disposables=[];
    }
    _setStyle(){
        throw METHOD_NOT_IMPLEMENTED;
    }
    _isThereStyle(){
        return true;
    }
    _changeDate(value){
        throw METHOD_NOT_IMPLEMENTED;
    }
    _create(){
        this._text = document.createTextNode("");
        this._shadow = this.attachShadow({mode: "open"});
        this._shadow.adoptedStyleSheets = [css];
        if(this._isThereStyle()){
            this._setStyle();
            this._shadow.appendChild(this._text);
        }
    }
    _update(){
        this._text.data = this._formatDate();
    }
    _formatDate(){
        throw METHOD_NOT_IMPLEMENTED;
    }
}