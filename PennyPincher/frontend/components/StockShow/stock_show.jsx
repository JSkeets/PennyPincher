import React from "react";
import json2csv from "json2csv";
class StockShow extends React.Component {
	constructor(props) {
		super(props);
		this.loadStock = this.loadStock.bind(this);
	}
	componentDidMount() {
		this.loadStock();
		setInterval(this.loadStock, 1500);
	}

	loadStock() {
		this.props.fetchStock(this.props.symbol);
	}

	render() {
		let symbol = this.props.symbol;
		if (!this.props.stocks[symbol]) {
			return null;
		}

		return (
			<div>
				<h1> HELLO</h1>
				<table>
					<tr>
						<th>Symbol</th>
						<th>Current Price</th>
						<th>Volume</th>
						<th>Percent Change</th>
						<th>Float</th>
						<th>Number of Recent News Articles</th>
					</tr>
					<tr>
						<td>{this.props.stocks[symbol].quote.symbol}</td>
						<td>{this.props.stocks[symbol].quote.latestPrice}</td>
						<td>{this.props.stocks[symbol].quote.latestVolume}</td>
						<td>{this.props.stocks[symbol].quote.changePercent * 100}</td>
						<td>{this.props.stocks[symbol].stats.float}</td>
						<td>{this.props.stocks[symbol].news.length}</td>
					</tr>
				</table>
			</div>
		);
	}
}

export default StockShow;
