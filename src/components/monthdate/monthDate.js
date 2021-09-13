import { FormatService } from "../../service/FormatService.js";
import { DateService } from "../../service/DateService.js";
import { BaseDateComponent } from "../core/basedatecomponent.js";
import pubSub from "../../service/PubSub.js";
import { Mixin } from "../core/mixin.js";
import { StyleComponent } from "../core/styleComponent.js";
import css from "./monthDate.css.js";
import { CHANNELS } from "../../service/Config.js";

export class MonthDate extends Mixin(BaseDateComponent, StyleComponent){
    _formatDate() {
        return FormatService.getMonth(this.date);
    }

    _changeDate(value) {
        return !this.date || !DateService.isThisMonth(value, this._oldDate);
    }

    _setStyle() {
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, css];
    }

    connectedCallback() {
        const texto = super._create
        const disposableDate = pubSub.on(CHANNELS.CHANGEDATE, (date) => {
             if (!DateService.isThisMonth(date, new Date())) {
                 super._update(texto,date)
             }
         })
         const disposableMonth = pubSub.on(CHANNELS.CHANGEMONTH, (diff) => {
             let newDate = this._date;
             newDate.setMonth(this._date.getMonth() + diff);
             super._update(texto,newDate)
         })
         this._disposables.push(disposableDate, disposableMonth);
     }
}

customElements.define('cap-month-date', MonthDate);