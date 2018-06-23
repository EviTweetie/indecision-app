import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))

// ************ old syntax ************
class OldSyntax {
  constructor(props) {
    this.name = "Chubby"
  }
}

const oldSyntax = new OldSyntax()

console.log(oldSyntax)

// ************ new syntax ************
class NewSyntax {
  name = "Checker"
}

const newSyntax = new NewSyntax()
console.log(newSyntax)
