const sheet = new CSSStyleSheet();
sheet.replace(`
:host {
    background-color: var(--backgroundcolor);
    color: var(--textcolor);
    font-size: 3em;
    font-family: var(--font);
    display: block;
}
`);
export default sheet;