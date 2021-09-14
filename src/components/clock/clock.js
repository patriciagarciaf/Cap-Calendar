import { FormatService } from '../../service/FormatService.js'
import sheet from './clock.css.js'
import { BaseDateComponent } from '../baseDateComponent/basedatecomponent.js'

export class Clock extends BaseDateComponent{

    _formatDate(){
        return FormatService.getTime(this._date)
    }
    _setStyle(){
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, sheet];
    }
}
customElements.define("cap-clock", Clock);