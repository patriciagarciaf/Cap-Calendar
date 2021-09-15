const sheet = new CSSStyleSheet();
sheet.replace(`
:host {
    font-family: sans-serif;
    display: block;
    font-size: 1.2em;
    border-bottom: 0.05em solid white;
    padding: 1em 0.5em;
    cursor: pointer;
    }
:host(:hover) {
    color: rgb(234, 99, 107);
}
`);
export default sheet;