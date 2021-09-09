const sheet = new CSSStyleSheet();
sheet.replace(`
:host {
    color: var(--textcolor);
    background-color: var(--backgroundcolor);
    font-family: var(--font);
    font-size: 1.2rem;
    display: inline;
}
:host(:hover) {
    color: white;
}
`);
export default sheet;