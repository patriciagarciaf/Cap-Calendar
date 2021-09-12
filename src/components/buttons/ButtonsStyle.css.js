const sheet = new CSSStyleSheet();

sheet.replace(`
:host{​​​​​​
    padding-right: 0.3em;
    background-color: rgb(248, 206, 206);
}​​​​​​
:host >  button{​​​​​​
    color: white;
    background-color: transparent;
    border-color: transparent;
    height: 100%;
}​​​​​​
:host > button[action="1"]{​​​​​​
}​​​​​​
:host > button[action="-1"]{​​​​​​
    transform: rotate(180deg);
}​​​​​​
`);
export default sheet;

