const sheet = new CSSStyleSheet();
sheet.replace(`
:host {
    background-color: rgb(248, 206, 206);
    color: rgb(85, 85, 85);
    font-size: 2em;
    font-family: sans-serif;
    display:block;
    padding: 1rem 1rem 0;
}
`);
export default sheet;