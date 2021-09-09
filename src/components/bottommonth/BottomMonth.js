import { FormatService } from "../service/FormatService.js";
import { DateService } from "../service/DateService.js";
import PubSub from "../service/PubSub.js";
import { CHANNELS } from "../service/Config.js";
import PubSub from "../../service/PubSub.js";

class BottomMonth extends HTMLElement{

    constructor(){
        super();
        this._text = null;
        this.date = new Date();
    }

    connectedCallback(){
        this._dispose = PubSub.on(CHANNELS.CHANGEDATE, (date) => {
            this.date = date;

            if(!DateService.isToday(date, new Date())){
                this._text.data = FormatService.getDate(this.date);
            }
        })

        const shadow = this.attachShadow({mode: "closed"});
        this._text = document.createTextNode(FormatService.getDate(this.date));
        const div = document.createElement("div");
        div.appendChild(this._text);
        shadow.appendChild(div);
    }

    disconnectedCallback(){
        this._dispose();
    }
}

customElements.define('cap-system-date', BottomMonth);
export {BottomMonth}

