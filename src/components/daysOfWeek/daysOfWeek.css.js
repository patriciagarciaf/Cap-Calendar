const sheet = new CSSStyleSheet();
sheet.replace( `
:host{
    display: grid;
    gap:2em;
    grid-template-columns:repeat(7,1em);
    padding: 1em 1.3em;
    text-align: center;
    font-size: 1.2em;
}`)
export default sheet