const sheet = new CSSStyleSheet();
sheet.replace(`:host {
    display: block;
    padding: 1em;

    :host > button:hover{
        color: lightblue;
    }
}`)
export default sheet