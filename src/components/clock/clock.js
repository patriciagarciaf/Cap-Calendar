import { FormatService } from '../../service/FormatService.js'
import sheet from './clock.css.js'
import { StyleComponent } from "../core/styleComponent.js";
import { BaseDateComponent } from '../core/basedatecomponent.js'
import {classMixin} from '../core/mixin.js'


export class Clock extends classMixin(BaseDateComponent, StyleComponent){

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