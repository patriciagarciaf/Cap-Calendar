const sheet = new CSSStyleSheet();
sheet.replace(`
:host{
    background-color: rgb(248, 206, 206);
    display: inline-block;
    cursor: default;
    padding: 1.5em 1em;
    height: 1em;
    width: 1em;
}
:host > button{
    color: var(--monthdate-color);
    background-color: transparent;
    border: 0;
    height: 100%;
    width: 100%;
}
:host > button:hover{
    color: rgb(234, 99, 107);
}
:host > button[action="1"]{
    border-bottom: 0.05em solid;
    border-right: 0.05em solid;
    transform: translateY(-25%) rotate(45deg);
}
:host > button[action="-1"]{
    border-top: 0.05em solid;
    border-left: 0.05em solid;
    transform: translateY(25%) rotate(45deg);
}
`)
export default sheet