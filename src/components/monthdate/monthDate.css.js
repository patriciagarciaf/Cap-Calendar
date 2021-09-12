const sheet = new CSSStyleSheet();
sheet.replace(`
:host {
    font-size: 1.2rem;
    display: block;
}
:host(:hover) {
    color: lightblue;
}
`);
export default sheet;