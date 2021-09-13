import { FormatService } from "../../service/FormatService.js"
import { BaseDateComponent } from "../baseDateComponent/basedatecomponent.js"
import { CHANNELS } from '../../service/Config.js'
import sheet from './eventDate.css.js'

class EventDate extends BaseDateComponent {

    connectedCallback() {
        this._suscribe(CHANNELS.CHANGESELECTEDDAY);
    }

    _changeDate() {
        return true;
    }

    _formatDate() {
        return FormatService.getSelectedDate(this.date);
    }
    _setStyle(){
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, sheet];
    }

}

window.customElements.define("cap-event-date", EventDate);