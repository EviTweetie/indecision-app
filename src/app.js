import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from './components/IndecisionApp'

const Layout = (props) => {
    return (
        <div>
        <p>Header</p>
        <hr />
        {props.content}
        <hr />
        <p>Footer</p>
      </div>
    )
}

const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is the content</p>
    </div>
)

ReactDOM.render(<Layout content={template}/>, document.getElementById("app"))