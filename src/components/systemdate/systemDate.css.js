const sheet = new CSSStyleSheet();
sheet.replace(`
:host {
    background-color: var(--backgroundcolor);
    color: var(--textcolor);
    font-family: var(--font);
    
}
`);
export default sheet;