import {DateService} from "../../service/DateService.js";
import { FormatService } from "../../service/FormatService.js";
import {CHANNELS} from "../../service/Config.js";
import pubSub from "../../service/PubSub.js";
import css from "./Calendar.css.js";
import cssBase from '../core/baseDateComponent.css.js'


export class Calendar extends HTMLElement{
    constructor(){
        super();
        this.date = new Date();
        this._shadow = this.attachShadow({mode:"open"});
        this._disposables = [];

    }
    _formatDate (date){
        return FormatService.getDay(date);
    }

    connectedCallback(){
        this._create();
        const disposable = pubSub.on(CHANNELS.CHANGEMONTH, (diff) => {
            this.date.setMonth(this.date.getMonth() + diff);
            this._update();
        });
        const disposable2 = pubSub.on(CHANNELS.CHANGEDATE, (newDate)=> {
            if(this.date.getMonth() == newDate && this.date.getDay != newDate.getDay()){
                this.date = newDate;
                this._update();
            }
        })
        this._disposables.push(disposable, disposable2);
    }
    disconnectedCallback(){
        this._removeChildren();
        this._disposables.forEach(disposable=>{
            disposable && disposable();
        })
    }

    _create(){
        let elements = [];
        elements = DateService.getMonthDays(this.date);
        elements.forEach(element => {
            let div = document.createElement("div");
            let text = document.createTextNode(this._formatDate(element.date));
            div.appendChild(text);
            div.addEventListener("click", ()=> pubSub.emit(CHANNELS.CHANGESELECTEDDAY, element.date, false));
            div.addEventListener("click", ()=>{div.classList.add("selected")},false);
            const disposable = pubSub.on(CHANNELS.CHANGESELECTEDDAY, (element)=>{
                div.classList.remove("selected"),
                element.isSelected = false
            });
            this._disposables.push(disposable);
            if(!element.isSelected){
                div.classList.remove("selected");
            }
            if(!element.isThisMonth){
                div.classList.add("isNotMonth");
            }
            if(element.isToday){
                div.classList.add("isToday");
            }
            this._shadow.appendChild(div);
            this._shadow.adoptedStyleSheets = [cssBase, css];
        })
    }

    _update(){
        while (this._shadow.firstChild) {
            this._shadow.removeChild(this._shadow.lastChild);
        }
        this._create();
    }

    _removeChildren(){
        this._shadow.textContent="";
    }
}
customElements.define("cap-grid-calendar", Calendar);
