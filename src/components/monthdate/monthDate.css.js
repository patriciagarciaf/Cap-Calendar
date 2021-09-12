const sheet = new CSSStyleSheet();
sheet.replace(`
:host {
    font-size: 1.2rem;
    padding: 1em 1em;
    flex-grow: 0;
    display: inline-block;
    width: 14em;
}
:host(:hover) {
    color: lightblue;
}
`);
export default sheet;