import { FormatService } from "../../service/FormatService.js";
import { DateService } from "../../service/DateService.js";
import { BaseDateComponent } from "../baseDateComponent/basedatecomponent.js";
import sheet from "./monthDate.css.js"

export class MonthDate extends BaseDateComponent{
    constructor() {
        super();
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, css];
    }
    _formatDate() {
        return FormatService.getMonth(this._date)
    }
    connectedCallback() {
       const texto = super._create()
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