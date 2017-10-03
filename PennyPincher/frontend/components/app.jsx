import React from "react";
import StockShowContainer from "../components/StockShow/stock_show_container";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

const App = () => (
	<div className="app">
		<Route path="/stocks/AAPL" component={StockShowContainer} />
	</div>
);

export default App;
