import React from "react";
import StockShowContainer from "../components/StockShow/stock_show_container";
import StockIndexContainer from "../components/StockIndex/stock_index_container";
import ChartContainer from "../components/ChartComponent/chart_container";
import NavBar from "../components/NavBar/nav_bar";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

const App = () => (
	<div className="app">
		<Route path="/" component={NavBar} />
		<Route exact path="/" component={StockIndexContainer} />
		<Route exact path="/stocks/:stockTicker" component={StockShowContainer} />
		<Route exact path="/stocks/:stockTicker" component={ChartContainer} />
	</div>
);

export default App;
