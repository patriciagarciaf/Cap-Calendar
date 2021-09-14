import { FormatService } from "../../service/FormatService.js";
import { DateService } from "../../service/DateService.js";
import { BaseDateComponent } from "../baseDateComponent/basedatecomponent.js";
import css from "./systemDate.css.js"

export class SystemDate extends BaseDateComponent{
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
