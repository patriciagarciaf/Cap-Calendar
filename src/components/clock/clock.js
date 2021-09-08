import { FormatService } from '../../service/FormatService.js'
import pubSub from '../../service/PubSub.js'
import { CHANELS } from '../../service/Config.js'
import { BaseDateComponent } from '../basedatecomponent.js';

export class Clock extends BaseDateComponent{
    connectedCallback(){
        const texto = super._create();
        const disposable = pubSub.on(CHANELS.CHANGEDATE, (date) => super._update(texto,date));
    }
    _formatDate(){
        return FormatService.getTime(this._date)
    }
}
customElements.define("cap-clock", Clock);