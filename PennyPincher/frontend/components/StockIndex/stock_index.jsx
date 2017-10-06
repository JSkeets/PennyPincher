import React from "react";
import json2csv from "json2csv";
import ReactGA from "react-ga"; // https://github.com/react-ga/react-ga
import StockIndexItem from "./stock_index_item";
class StockIndex extends React.Component {
	constructor(props) {
		super(props);
		// Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
		ReactGA.initialize("UA-107597692-1");
		// This just needs to be called once since we have no routes in this case.
		ReactGA.pageview(window.location.pathname);
	}
	componentDidMount() {
		this.props.fetchAllStocks();
	}

	render() {
		// let response = this.props.fetchStock(this.props.stocks[0].symbol);
		// console.log(response);
		if (this.props.stocks.length === 0) {
			return null;
		}
		// this.props.fetchStock(this.props.stocks[0].symbol);
		// console.log(this.props.stocks[0].symbol);
		return (
			<ul id="stock-index">
				<li className="review-index-item-header">
					<i id="header-symbol">Symbol</i>
					<i id="header-symbol"> Price</i>
					<i id="header-symbol"> Volume</i>
					<i id="header-symbol"> Sector </i>
				</li>
				{this.props.stocks.map(stock => (
					<StockIndexItem
						key={stock.id}
						stock={stock}
						stockFetch={symbol => this.fetchStock(symbol)}
					/>
				))}
			</ul>
		);
	}
}

export default StockIndex;
