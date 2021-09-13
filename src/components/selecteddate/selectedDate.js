import { CHANNELS } from "../../service/Config.js";
import pubSub from "../../service/PubSub.js";
import { BaseDateComponent } from "../core/basedatecomponent.js";
import { Mixin } from "../core/mixin.js";
import { StyleComponent } from "../core/styleComponent.js";
import css from "./selectedDate.css.js";

export class SelectedDate extends Mixin(BaseDateComponent, StyleComponent){

    _formatDate() {
        return true;
    }
    _setStyle(){
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, css];
    }
    _changeDate() {
        return true;
    }
    connectedCallback() {
        const texto = super._create
        const disposableDate = pubSub.on(CHANNELS.CHANGEDATE, (date) => super._update(texto,date));
        this._disposables.push(disposableDate);
    }
}
customElements.define('cap-selected-date', SelectedDate);