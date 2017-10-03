import React from "react";

class StockShow extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.fetchStock("aapl");
		this.props.fetchStockStats("aapl");
	}

	render() {
		if (!this.props.stocks.AAPL) {
			return null;
		}
		console.log(this.props.stocks);
		console.log(this.props.stocks.AAPL.currentPrice);
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
						<td>{this.props.stocks.AAPL.symbol}</td>
						<td>{this.props.stocks.AAPL.latestPrice}</td>
						<td>{this.props.stocks.AAPL.latestVolume}</td>
						<td>{this.props.stocks.AAPL.changePercent * 100}</td>
						<td>{this.props.stocks.AAPL.float}</td>
					</tr>
				</table>
			</div>
		);
	}
}

export default StockShow;
