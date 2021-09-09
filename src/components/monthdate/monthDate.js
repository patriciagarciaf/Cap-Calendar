import { FormatService } from "../../service/FormatService.js";
import { DateService } from "../../service/DateService.js";
import { BaseDateComponent } from "../basedatecomponent.js";
import css from "./monthDate.css.js"

export class MonthDate extends BaseDateComponent{
    _formatDate() {
        return FormatService.getMonth(this.date);
    }

    _changeDate(value) {
        return !this.date || !DateService.isThisMonth(value, this._oldDate);
    }

    _getStyle() {
        this._shadow.adoptedStyleSheets = [css];
    }
}

customElements.define('cap-month-date', MonthDate);