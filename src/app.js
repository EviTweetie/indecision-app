import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from './components/IndecisionApp'

const Layout = (props) => {
    return (
        <div>
        <p>Header</p>
            <hr />
                {props.children}
            <hr />
        <p>Footer</p>
      </div>
    )
}

ReactDOM.render((
    <Layout>
        <h1>Page Title</h1>
        <p>This is the content</p>
    </Layout>
    ), document.getElementById("app"))