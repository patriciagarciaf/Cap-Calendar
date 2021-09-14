import css from './calendarStructure.css.js';
export class Calendar extends HTMLElement{
    constructor(){
        super();
        this._shadow = this.attachShadow({mode: "open"});
        this._create();
    }
    _create(){
        this._shadow.adoptedStyleSheets = [css];
        let clock = document.createElement('cap-clock');
        this._shadow.appendChild(clock);
        let sysDate = document.createElement('cap-system-date');
        this._shadow.appendChild(sysDate);
        let monthDate = document.createElement('cap-month-date');
        this._shadow.appendChild(monthDate);
        let calendarButtonDown = document.createElement('cap-button');
        calendarButtonDown.setAttribute("action", "down");
        this._shadow.appendChild(calendarButtonDown);
        let calendarButtonUp = document.createElement('cap-button');
        calendarButtonUp.setAttribute("action", "up");
        this._shadow.appendChild(calendarButtonUp);
        let daysOfWeek = document.createElement('cap-daysofweek');
        this._shadow.appendChild(daysOfWeek);
        let calendar = document.createElement('cap-grid-calendar');
        this._shadow.appendChild(calendar);
        let eventDate = document.createElement('cap-event-date');
        this._shadow.appendChild(eventDate);
    }
} 
customElements.define("cap-calendar", Calendar);