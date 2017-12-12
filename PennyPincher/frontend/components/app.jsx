import React from "react";
import StockShowContainer from "../components/StockShow/stock_show_container";
import StockIndexContainer from "../components/StockIndex/stock_index_container";
import LoginFormContainer from "../components/Login/login_form_container";
import SignUpFormContainer from "../components/SignUp/signup_form_container.jsx";
import ThankYou from "../components/SignUp/thankyou.jsx";
import ForgotPassword from "../components/ForgotPassword/forgot_password_container.jsx";
import PasswordReset from "../components/PasswordReset/password_reset_container.jsx";
import EmailSent from "../components/PasswordReset/emailsent.jsx";
import WatchlistContainer from "../components/Watchlist/watchlist_container.jsx";

import NavBar from "../components/NavBar/navbar_container";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import {fetchTweets} from "../actions/stock_actions";

window.fetchTweets = fetchTweets;

const App = () => (
  <div className="app">
    <NavBar />
    <Route exact path="/" component={StockIndexContainer} />
    <Route exact path="/watchlist" component={WatchlistContainer} />
    <Route exact path="/signup" component={SignUpFormContainer} />
    <Route exact path="/login" component={LoginFormContainer} />
    <Route exact path="/thankyou" component={ThankYou} />
    <div className="stock-show-page">
      <Route exact path="/stocks/:stockTicker" component={StockShowContainer} />
    </div>
    <Route exact path="/forgot" component={ForgotPassword} />
    <Route exact path="/emailsent" component={EmailSent} />
    <Route path="/password_resets" component={PasswordReset} />
  </div>
);

export default App;
