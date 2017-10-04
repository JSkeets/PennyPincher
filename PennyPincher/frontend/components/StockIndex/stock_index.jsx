import React from "react";
import json2csv from "json2csv";
import StockIndexItem from "./stock_index_item";
class StockIndex extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.fetchAllStocks();
	}

	render() {
		if (this.props.stocks.length === 0) {
			return null;
		}
		return (
			<ul id="stock-index">
				{this.props.stocks.map(stock => (
					<StockIndexItem key={stock.id} stock={stock} />
				))}
			</ul>
		);
	}
}

export default StockIndex;
