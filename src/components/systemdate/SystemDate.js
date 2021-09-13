import { FormatService } from "../../service/FormatService.js";
import { DateService } from "../../service/DateService.js";
import { BaseDateComponent } from "../core/basedatecomponent.js";
import { StyleComponent } from "../core/styleComponent.js";
import css from "./systemDate.css.js"
import {classMixin} from '../core/mixin.js'


export class SystemDate extends classMixin(BaseDateComponent, StyleComponent){
    _changeDate(value) {
        return !this.date || !DateService.isToday(value, this._oldDate);
    }

    _formatDate() {
        return FormatService.getDate(this.date);
    }

    _setStyle() {
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, css];
    }
}

customElements.define('cap-system-date', SystemDate);
