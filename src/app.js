import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpensesDashboardPage = () => (
  <div>This is from my DashBoard Component</div>
);

const AddExpensePage = () => <div>This is from my AddExpense Component</div>;
const EditExpensePage = () => <div>This is from my EditExpense Component</div>;
const HelpPage = () => <div>This is from my HelpPage Component</div>;

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpensesDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
