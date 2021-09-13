const sheet = new CSSStyleSheet();
sheet.replace(`:host{
                    border-bottom: 0.05em solid white;
                    font-size: 1.2em;
                    display: grid;
                    padding: 1em 1.3em;
                    gap: 0.8em 1.4em;
                    grid-template-columns: repeat(7,1.5em);
                    text-align: center;
                    cursor: default;
                    font-family: sans-serif;
                }
                :host .isNotMonth{
                    color: rgb(150, 150, 150);
                }
                :host .isToday{
                    background-color: rgb(300, 168, 180);
                }
                :host .selected{
                    border-color: black;
                }
                :host :hover{
                    color: rgb(234, 99, 107);
                }
                `
    );
export default sheet;