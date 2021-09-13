import { FormatService } from "../../service/FormatService.js"
import { BaseDateComponent } from "../core/basedatecomponent.js"
import { CHANNELS } from '../../service/Config.js'
import { Mixin } from "../core/mixin.js";
import { StyleComponent } from "../core/styleComponent.js";
import sheet from './eventDate.css.js'

class EventDate extends Mixin(BaseDateComponent, StyleComponent) {

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