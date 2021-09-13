const sheet = new CSSStyleSheet();
sheet.replace(`
:host {
    font-family: sans-serif;
    display: block;
    font-size: 1.5em;
    border-bottom: 0.05em solid white;
    padding: 1em 0.5em;
    }
:host(:hover) {
    color: lightblue;
}
`);
export default sheet;