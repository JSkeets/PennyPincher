import React from "react";
import json2csv from "json2csv";
import ReactGA from "react-ga"; // https://github.com/react-ga/react-ga
import StockIndexItem from "./stock_index_item";
import { Table, Column, Cell } from "fixed-data-table";

class StockIndex extends React.Component {
	constructor(props) {
		super(props);
		// Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
		ReactGA.initialize("UA-107597692-1");
		// This just needs to be called once since we have no routes in this case.
		ReactGA.pageview(window.location.pathname);
		this.state = { yes: "no", loading: true };
		this.sortByKey = this.sortByKey.bind(this);
		this.addPercents = this.addPercents.bind(this);
	}
	componentDidMount() {
		console.log(this.props);
		this.props.fetchAllStocks();
		setTimeout(() => this.setState({ loading: false }), 10000);
	}

	componentDidReceiveProps(newProps) {
		console.log("WILL RECEIVE", newProps.stocksInfo);
	}

	addPercents() {
		this.props.stocks.map((stock) => {
			stock.percentChange = this.props.stocksInfo[stock.symbol];
		});
	}

	sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

	render() {
		if (this.state.loading) {
			// if (!this.props) {

			return <div className="loader">Loading...</div>;
		} else {
			this.addPercents();
			console.log("STOCKS",this.props.stocks);
			let sorted = this.sortByKey(this.props.stocks, "percentChange");
			console.log(sorted);
			return (
				<ul id="stock-index">
					<li className="review-index-item-header">
						<i id="header-symbol">Symbol</i>
						<i id="header-symbol"> Price</i>
						<i id="header-symbol"> Volume</i>
						<i id="header-symbol"> Sector </i>
						{<i id="header-symbol"> Percent Change</i>}
					</li>
					{this.props.stocks.map(stock => (
						<StockIndexItem
							key={stock.id}
							stock={stock}
							percents={this.props.stocksInfo}
						/>
					))}
				</ul>
			);
		}
	}
}

export default StockIndex;
