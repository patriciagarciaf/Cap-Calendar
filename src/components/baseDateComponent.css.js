const sheet = new CSSStyleSheet();
sheet.replace(`
:host {
    background-color: rgb(248, 206, 206);
    color: gray;
    font-size: 2em;
    font-family: sans-serif;
    display:block;
}
`);
export default sheet;