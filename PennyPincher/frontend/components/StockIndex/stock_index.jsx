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
		this.addPercents = this.addPercents.bind(this);
		this.state = { yes: "no" };
	}
	componentDidMount() {
		this.props.fetchAllStocks();
	}

	addPercents() {
		console.log("PROPS", Object.keys(this.props.stocksInfo).length);
		console.log("PROPS", Object.keys(this.props.stocksInfo));
	}
	render() {
		if (Object.keys(this.props.stocksInfo).length === 0) {
			return null;
		}
		// console.log("RENDER PROPS", this.props);
		this.addPercents();
		if (this.state.yes === "no") {
			this.setState({ yes: "yes" });
		}
		let info = this.props.stocksInfo;
		// console.log("INFO", info);
		return (
			<ul id="stock-index">
				<li className="review-index-item-header">
					<i id="header-symbol">Symbol</i>
					<i id="header-symbol"> Price</i>
					<i id="header-symbol"> Volume</i>
					<i id="header-symbol"> Sector </i>
				</li>
				{this.props.stocks.map(stock => (
					<StockIndexItem key={stock.id} stock={stock} />
				))}
			</ul>
		);
	}
}

export default StockIndex;
