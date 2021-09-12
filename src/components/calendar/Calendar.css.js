const sheet = new CSSStyleSheet();
sheet.replace(`:host{
                    border-bottom: 0.05em solid white;
                    font-size: 1.2em;
                    display: grid;
                    padding: 1em 2em;
                    gap: 0.8em 2em;
                    grid-template-columns: repeat(7,1em);
                    text-align: center;
                    cursor: default;
                }
                :host .isNotMonth{
                    color: darkgrey;
                }
                :host .isToday{
                    background-color:lightblue;
                }
                :host .selected{
                    border-color: black;
                }`
    );
export default sheet;