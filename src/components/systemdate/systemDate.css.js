const sheet = new CSSStyleSheet();
sheet.replace(`
:host {
    font-family: 1em;
    display: block;
    }
:host(:hover) {
    color: lightblue;
}
`);
export default sheet;