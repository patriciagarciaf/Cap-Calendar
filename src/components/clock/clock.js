import { FormatService } from '../../service/FormatService.js'
import pubSub from '../../service/PubSub.js'
import { CHANELS } from '../../service/Config.js'
import { BaseDateComponent } from '../basedatecomponent.js';

export class Clock extends BaseDateComponent{
    connectedCallback(){

    }
    _formatDate(){
        return FormatService.getTime(this._date)
    }
}
customElements.define("cap-clock", Clock);