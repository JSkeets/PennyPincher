import React from "react";
import StockShowContainer from "../components/StockShow/stock_show_container";
import StockIndexContainer from "../components/StockIndex/stock_index_container";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

const App = () => (
	<div className="app">
		<Route exact path="/" component={StockIndexContainer} />
		<Route path="/stocks/:stockTicker" component={StockShowContainer} />
	</div>
);

export default App;
