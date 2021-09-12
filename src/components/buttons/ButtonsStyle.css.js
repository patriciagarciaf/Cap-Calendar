const sheet = new CSSStyleSheet();
sheet.replace(`
:host{
    padding-right: 0.3em;
    background-color: rgb(248, 206, 206);
}
:host >  button{
    color: gray;
    background-color: transparent;
    border-color: transparent;
    height: 100%;
}
:host > button:hover{
    color: lightblue;
}
:host > button[action="1"]{
}
:host > button[action="-1"]{
    transform: rotate(180deg);
}
`)
export default sheet