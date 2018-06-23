import React from "react";
import ReactDOM from "react-dom";

const template = <p>test - JSX from WEBPACK works</p>
//error because no babel so far

//use without babel
//const template = React.createElement('p', {}, 'test')

ReactDOM.render(template, document.getElementById('app'))