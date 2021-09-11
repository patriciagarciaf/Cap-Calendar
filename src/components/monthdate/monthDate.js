import { FormatService } from "../../service/FormatService.js";
import { DateService } from "../../service/DateService.js";
import { BaseDateComponent } from "../baseDateComponent/basedatecomponent.js";
import sheet from "./monthDate.css.js"

export class MonthDate extends BaseDateComponent{
    _formatDate() {
        return FormatService.getMonth(this.date);
    }

    _changeDate(value) {
        return !this.date || !DateService.isThisMonth(value, this._oldDate);
    }

    _setStyle() {
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, sheet];
    }
}

customElements.define('cap-month-date', MonthDate);