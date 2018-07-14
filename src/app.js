import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpensesDashboardPage = () => (
  <div>This is from my DashBoard Component</div>
);

const AddExpensePage = () => <div>This is from my AddExpense Component</div>;
const EditExpensePage = () => <div>This is from my EditExpense Component</div>;
const HelpPage = () => <div>This is from my HelpPage Component</div>;
const NotFoundPage = () => (
  <div>
    404! <Link to="/">Go home</Link>
    {/*
    <a href="/">Go Home</a>
    This would cause a full page refresh with server request - we do not want that in client side routing
    */}
  </div>
);

const Header = () => (
  <div>
    <h1>Expensify</h1>
    <ul>
      <li>
        <NavLink to="/" activeClassName="is-active" exact={true}>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/create" activeClassName="is-active">
          Create Expense
        </NavLink>
      </li>
      <li>
        <NavLink to="/edit" activeClassName="is-active">
          Edit Expense
        </NavLink>
      </li>
      <li>
        <NavLink to="/help" activeClassName="is-active">
          Help
        </NavLink>
      </li>
    </ul>
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpensesDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
