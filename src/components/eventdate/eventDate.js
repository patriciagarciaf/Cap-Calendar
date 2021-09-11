import { FormatService } from "../../service/FormatService.js"
import { BaseDateComponent } from "../basedatecomponent.js"
import { CHANNELS } from '../../service/Config.js'
import css from './eventDate.css.js'

class EventDate extends BaseDateComponent {

    connectedCallback() {
        this._suscribe(CHANNELS.CHANGESELECTEDATE);
    }

    _changeDate() {
        return true;
    }

    _formatDate() {
        return FormatService.getSelectedDate(this.date);
    }
    _getStyle(){
        this._shadow.adoptedStyleSheets = [css];
    }

}

window.customElements.define("cap-event-date", EventDate);