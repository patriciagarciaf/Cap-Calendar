const sheet = new CSSStyleSheet();
sheet.replace(`
:host {
    background-color: var(--backgroundcolor);
    color: rgb(114,148,174);
    font-family: var(--font);
    display:block;
}
:host(:hover) {
    color: var(--textcolor);
}
`);
export default sheet;