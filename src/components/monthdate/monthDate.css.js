const sheet = new CSSStyleSheet();
sheet.replace(`
:host {
    font-size: 1.2rem;
    padding: 1em;
    flex-grow: 0;
    display: inline-block;
    width: 14em;
}
:host(:hover) {
    color: rgb(234, 99, 107);
}
`);
export default sheet;