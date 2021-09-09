const css = `:host{
    background-color: var(--calendarbgcolor,red);
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(7,25px);
    color: var(--calendarcolor,blue);
  }
 `

class Calendar extends HTMLElement{
    constructor(){
        super();
        this._shadow = this.attachShadow({mode:"closed"})
    }
    connectedCallback(){
        (function(parent,date){

            function calendarMonth(fecha) {
            let calendar = [];
            getFirstDayCalendar(fecha);
            let i = 1;
            for (i = 0; i < 42; i++) {
                calendar.push(fecha.getDate());
                fecha.setDate(fecha.getDate() + 1);
            }
            return calendar;
        }
        
        function getFirstDayCalendar(fecha) {
            fecha.setDate(1);
            while (fecha.getDay() != 1) { fecha.setDate(fecha.getDate() - 1); }
        }
        
        
        function createCalendar(){
            let div = document.createElement('div');
            div.classList.add("calendar");
            return div;
        }
        
        function createDay(day){
            let text = document.createTextNode(day);
            let div= document.createElement('div');
            div.appendChild(text);
            return div;
        }
            
            let days = calendarMonth(date);
            for (let day of days){
                parent.appendChild(createDay(day))
            }
           
        }(this._shadow,new Date()))

        const style = document.createElement("style");
        style.textContent = css;
        this._shadow.appendChild(style);

        const slot=document.createElement('slot');
        this._shadow.appendChild(slot);
        
    }
    disconnectedCallback(){

    }
}
customElements.define("cap-calendar",Calendar)
