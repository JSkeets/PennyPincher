import React from "react";
import StockShowContainer from "../components/StockShow/stock_show_container";
import StockIndexContainer from "../components/StockIndex/stock_index_container";
import ChartContainer from "../components/ChartComponent/chart_container";
import LoginFormContainer from "../components/Login/login_form_container";
import SignUpFormContainer from "../components/SignUp/signup_form_container.jsx";
import ThankYou from "../components/SignUp/thankyou.jsx";
import ForgotPassword from "../components/ForgotPassword/forgot_password_container.jsx";

import NavBar from "../components/NavBar/navbar_container";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import {fetchTweets} from "../actions/stock_actions";

window.fetchTweets = fetchTweets;

const App = () => (
  <div className="app">
    <NavBar />
    <Route exact path="/" component={StockIndexContainer} />
    <Route exact path="/signup" component={SignUpFormContainer} />
    <Route exact path="/login" component={LoginFormContainer} />
    <Route exact path="/thankyou" component={ThankYou} />
    <Route exact path="/stocks/:stockTicker" component={StockShowContainer} />
    <Route exact path="/stocks/:stockTicker" component={ChartContainer} />
    <Route exact path="/forgot" component={ForgotPassword} />
  </div>
);

export default App;
