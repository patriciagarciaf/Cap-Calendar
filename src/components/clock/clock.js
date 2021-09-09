import { FormatService } from '../../service/FormatService.js'
import css from './clock.css.js'
import { BaseDateComponent } from '../basedatecomponent.js'

export class Clock extends BaseDateComponent{

    _formatDate(){
        return FormatService.getTime(this._date)
    }
    _getStyle(){
        this._shadow.adoptedStyleSheets = [css];
    }
    _changeDate(value){
        return true;
    }
}
customElements.define("cap-clock", Clock);