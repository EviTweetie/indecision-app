import React from "react";
import ReactDOM from "react-dom";

//const template = <p>test</p>
//error because no babel so far

const template = React.createElement('p', {}, 'test')

ReactDOM.render(template, document.getElementById('app'))