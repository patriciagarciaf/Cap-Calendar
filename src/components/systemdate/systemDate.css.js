const sheet = new CSSStyleSheet();
sheet.replace(`
:host {
    background-color: var(--backgroundcolor);
    color: rgb(124,158,184);
    font-family: var(--font); 
}
:host(:hover) {
    color: var(--textcolor);
}
`);
export default sheet;