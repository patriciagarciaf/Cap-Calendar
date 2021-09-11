const sheet = new CSSStyleSheet();
sheet.replace(`
:host {
    font-family: 1em;
    }
:host(:hover) {
    color: lightblue;
}
`);
export default sheet;