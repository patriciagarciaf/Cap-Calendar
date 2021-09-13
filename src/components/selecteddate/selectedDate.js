import { CHANNELS } from "../../service/Config";
import { FormatService } from "../../service/FormatService";
import pubSub from "../../service/PubSub";
import { BaseDateComponent } from "../baseDateComponent/basedatecomponent";
import css from "./selectedDate.css.js";

export class SelectedDate extends BaseDateComponent{

    _formatDate() {
        return FormatService.getSelectedDate(this.date);
    }
    _setStyle(){
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, css];
    }
    _changeDate() {
        return true;
    }
    connectedCallback() {
        const texto = super._create
        const disposableDate = pubSub.on(CHANNELS.CHANGEDATE, (date) => {
             if (!DateService.isThisMonth(date, new Date())) {
                 super._update(texto,date)
             }
         })
        this._disposables.push(disposableDate, disposableMonth);
    }
}
customElements.define('cap-selected-date', MonthDate);