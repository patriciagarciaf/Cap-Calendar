import css from './Calendar.css.js'
import { FormatService } from '../../service/FormatService.js'
import { DateService } from '../../service/DateService.js'
import pubSub from '../../service/PubSub.js'
import { CHANNELS } from '../../service/Config.js'

class Calendar extends HTMLElement{
    constructor(){
        super();
        this.date=new Date();
        this._disposables=[];
        this._shadow=this.attachShadow({mode:"open"});
    }
    _formatDate(date){
        return FormatService.getDate(date);
    }
    _listener(div,element){
        pubSub.emit(CHANNELS.CHANGESELECTEDDAY, element.date);
        div.classList.add("selected");
    }
    _changeSelected(div,element){
        div.classList.remove("selected");
        element.isSelected=false;
    }
    _create(){
        let elementDays=[];
        elementDays=DateService.getMonthDays(this.date);
        elementDays.forEach(element=>{
            let div=document.createElement('div');
            const texto=document.createTextNode(this._formatDate(element.date));
            div.appendChild(texto);
            div.addEventListener("click", ()=> {
                this._listener(div,element)
            }, false);
            const disposable=pubSub.on(CHANNELS.CHANGESELECTEDDAY, (element)=>{
                this._changeSelected(div,element)
            });
            this._disposables.push(disposable);
            if(!element.isMonth){
                div.classList.remove("selected")
            }
            if(element.isToday){
                div.classList.add("today");
            }
            this._shadow.appendChild(div);
            this._shadow.adoptedStyleSheets=[css];
        });
    }
    _update(){
        while (this._shadow.firstChild){
            this._shadow.removeChild(this._shadow.lastChild);
        }
        this._create();
    }
    connetedCallback(){
        const disposable=pubSub.on(CHANNELS.CHANGEMONTH, (diff)=>{
            this.date=DateService.addMonth(this.date, diff);
            this._update();
        });
        const disposable2=pubSub.on(CHANNELS.CHANGEDATE, (newDate)=>{
            if(this.date.getMonth()==newDate && this.date.getDay!=newDate.getDay()){
                this.date=newDate;
                this._update();
            }
        });
        this._disposables.push(disposable, disposable2);
        this._create();
    }
    _removeChildren(){
        this._shadow.textContent="";
    }
    _clearDisposables(){
        this._disposables.forEach(disposable=>{
            disposable && disposable();
        })
        this._disposables=[];
    }
    disconnectedCallback(){
        this._removeChildren();
        this._clearDisposables();
    }
}
customElements.define("cap-calendar",Calendar)
