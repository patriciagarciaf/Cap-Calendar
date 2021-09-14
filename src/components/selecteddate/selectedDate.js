import { CHANNELS } from "../../service/Config.js";
import pubSub from "../../service/PubSub.js";
import { BaseDateComponent } from "../baseDateComponent/basedatecomponent.js";
import css from "./selectedDate.css.js";

export class SelectedDate extends BaseDateComponent{

    _setStyle(){
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, css];
    }
    connectedCallback() {
        const texto = super._create
        const disposableDate = pubSub.on(CHANNELS.CHANGEDATE, (date) => super._update(texto,date));
        this._disposables.push(disposableDate);
    }
}