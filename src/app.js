import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))

// ************ old syntax ************
class OldSyntax {
  constructor(props) {
    this.name = "Chubby"
    this.getGreeting = this.getGreeting.bind(this)
  }
  getGreeting() {
    return `Hello my name is ${this.name}`
  }
}
const oldSyntax = new OldSyntax()
const getGreeting = oldSyntax.getGreeting
console.log(oldSyntax)
console.log(getGreeting())

// ************ new syntax ************
class NewSyntax {
  name = "Checker"
  getGreeting = () => {
    return `Hello my name is ${this.name}`;
  }
}
const newSyntax = new NewSyntax()
console.log(newSyntax)
const newGetGreeting = newSyntax.getGreeting
console.log(newGetGreeting())