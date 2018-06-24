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



ReactDOM.render(
    (<Layout>
        Hello
    </Layout>)
    , document.getElementById("app"))