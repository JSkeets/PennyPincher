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
		this.state = { yes: "no", loading: true };
	}
	componentDidMount() {
		console.log(this.props);
		this.props.fetchAllStocks();
		setTimeout(() => this.setState({ loading: false }), 3000);
	}

	componentDidReceiveProps(newProps) {
		console.log("WILL RECEIVE", newProps.stocksInfo);
	}

	render() {
		if (this.state.loading) {

			return <div className="loader">Loading...</div>;
		} else {
			return (
				<ul id="stock-index">
					<li className="review-index-item-header">
						<i id="header-symbol">Symbol</i>
						<i id="header-symbol"> Price</i>
						<i id="header-symbol"> Volume</i>
						<i id="header-symbol"> Sector </i>
						<i id="header-symbol"> Percent Change</i>
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
			// }
		}
	}
}

export default StockIndex;
