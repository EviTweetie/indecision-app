import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "normalize.css/normalize.css"
import "./styles/styles.scss"

const ExpensesDashboardPage = () => (
  <div>This is from my DashBoard Component</div>
)

const AddExpensePage = () => <div>This is from my AddExpense Component</div>
const EditExpensePage = () => <div>This is from my EditExpense Component</div>
const HelpPage = () => <div>This is from my HelpPage Component</div>
const NotFoundPage = () => (
  <div>
    404! <a href="/">Go Home</a> 
    {/*This would cause a full page refresh with server request - we do not want that in client side routing*/}
  </div>
)

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpensesDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage}/>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById("app"))
