import { DAYSOFWEEK } from "../../service/Config.js";
import { BaseDateComponent } from "../baseDateComponent/basedatecomponent.js";
import css from './daysOfWeek.css.js'
import cssBase from '../baseDateComponent/baseDateComponent.css.js'

export class DaysOfWeek extends BaseDateComponent{
    // constructor(){
    //     super();
    //     this._shadow=this.attachShadow({mode:"open"});
    //     this._create();
    // }
    _setStyle() {
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, css];
    }
    _create(){
        // this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, css];
        // this._shadow.adoptedStyleSheets = [cssBase, css];
        DAYSOFWEEK.forEach(element => {
            const texto= document.createTextNode(element);
            const div=document.createElement('div');
            div.appendChild(texto);
            // shadow.appendChild(div);
            // shadow.adoptedStyleSheets = [cssbase,css];
            this._shadow.appendChild(div);
        });
    }
}
customElements.define("cap-daysofweek", DaysOfWeek)