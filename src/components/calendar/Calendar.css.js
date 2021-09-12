const sheet = new CSSStyleSheet();
sheet.replace(`:host{
                    border-bottom: 0.05em solid blue;
                    color: blue;
                    background-color: black;
                    font-family: sans-serif;
                    display: grid;
                    padding: 1em 2em;
                    gap: 0.8em 2em;
                    grid-template-columns: repeat(7,1em);
                    text-align: center;
                    cursor: default;
                }
                :host .isNotMonth{
                    color: grey;
                }
                :host .isToday{
                    background-color:rgb(127, 178, 240);
                }
                :host .selected{
                    border-color: white;
                }`
    );
export default sheet;