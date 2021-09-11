const sheet = new CSSStyleSheet();
sheet.replace(`
:host {
    color: var(--textcolor);
    background-color: var(--backgroundcolor);
    font-family: var(--font);
    font-size: 1.4rem;
    display: block;
}
`);
export default sheet;