import PubSub from '../../service/PubSub.js'
import {CHANNELS} from '../../service/Config.js'
import { StyleComponent } from './styleComponent.js';
const METHOD_NOT_IMPLEMENTED='Method not implemented'

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
<<<<<<< HEAD:src/components/core/basedatecomponent.js
=======
    _setStyle(){
        throw METHOD_NOT_IMPLEMENTED;
    }
    // _isThereStyle(){
    //     return true;
    // }
>>>>>>> main:src/components/baseDateComponent/basedatecomponent.js
    _changeDate(value){
        throw METHOD_NOT_IMPLEMENTED;
    }
    _create(){
        this._text = document.createTextNode("");
        this._shadow = this.attachShadow({mode: "open"});
<<<<<<< HEAD:src/components/core/basedatecomponent.js
        StyleComponent.createStyle();
        this._shadow.appendChild(this._text);
=======
        this._shadow.adoptedStyleSheets = [css];
        // if(this._isThereStyle()){
            this._setStyle();
            this._shadow.appendChild(this._text);
        // }
>>>>>>> main:src/components/baseDateComponent/basedatecomponent.js
    }
    _update(){
        this._text.data = this._formatDate();
    }
    _formatDate(){
        throw METHOD_NOT_IMPLEMENTED;
    }
}