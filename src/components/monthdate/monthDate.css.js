const sheet = new CSSStyleSheet();
sheet.replace(`
:host {
    color: var(--textcolor);
    background-color: var(--backgroundcolor);
    font-family: var(--font);
    font-size: 1.2rem;
    display: flex;
}
:host(:hover) {
    color: rgb(144,178,204);
}
`);
export default sheet;