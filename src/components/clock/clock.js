import { FormatService } from '../../service/FormatService.js'
import sheet from './clock.css.js'
import { BaseDateComponent } from '../basedatecomponent.js'

export class Clock extends BaseDateComponent{

    _formatDate(){
        return FormatService.getTime(this._date)
    }
    _setStyle(){
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, sheet];
    }
    _changeDate(value){
        return true;
    }
}
customElements.define("cap-clock", Clock);