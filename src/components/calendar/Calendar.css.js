const sheet = new CSSStyleSheet();
sheet = `:host{
    background-color: red;
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(7,25px);
    color: blue;
  }
 `
export default sheet;