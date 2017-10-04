import React from "react";

class StockShow extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.fetchStock(this.props.symbol);
		this.props.fetchStockStats(this.props.symbol);
	}

	render() {
		let symbol = this.props.symbol;
		if (!this.props.stocks[symbol]) {
			return null;
		}
		console.log(this.props.stocks);
		console.log(this.props);
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
					</tr>
					<tr>
						<td>{this.props.stocks[symbol].symbol}</td>
						<td>{this.props.stocks[symbol].latestPrice}</td>
						<td>{this.props.stocks[symbol].latestVolume}</td>
						<td>{this.props.stocks[symbol].changePercent * 100}</td>
						<td>{this.props.stocks[symbol].float}</td>
					</tr>
				</table>
			</div>
		);
	}
}

export default StockShow;
