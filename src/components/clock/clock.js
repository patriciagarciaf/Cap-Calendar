import { FormatService } from '../../service/FormatService.js'
import sheet from './clock.css.js'
import { Mixin } from "../core/mixin.js";
import { StyleComponent } from "../core/styleComponent.js";
import { BaseDateComponent } from '../core/basedatecomponent.js'

export class Clock extends Mixin(BaseDateComponent, StyleComponent){

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