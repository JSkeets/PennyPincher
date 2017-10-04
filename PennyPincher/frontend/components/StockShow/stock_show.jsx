import React from "react";
import json2csv from "json2csv";
import NewsIndexItem from "./news_index_item";

class StockShow extends React.Component {
	constructor(props) {
		super(props);
		this.loadStock = this.loadStock.bind(this);
		this.date = this.date.bind(this);
		this.recentNews = this.recentNews.bind(this);
	}
	componentDidMount() {
		this.loadStock();
		// setInterval(this.loadStock, 2000);
	}

	loadStock() {
		this.props.fetchStock(this.props.symbol);
	}

	date() {
		let c = new Date();
		let x = c.setDate(c.getDate() - 5);
		var d = new Date(x),
			month = "" + (d.getMonth() + 1),
			day = "" + d.getDate(),
			year = d.getFullYear();
		if (month.length < 2) month = "0" + month;
		if (day.length < 2) day = "0" + day;
		return [year, month, day].join("-");
	}

	recentNews() {
		let symbol = this.props.symbol;
		let news = [];

		var self = this;
		this.props.stocks[symbol].news.forEach(newSing => {
			if (self.date() < newSing.datetime.slice(0, 10)) {
				news.push(newSing);
			}
		});
		return news;
	}
	render() {
		let symbol = this.props.symbol;
		if (!this.props.stocks[symbol]) {
			return null;
		}

		let recentNews = this.recentNews();
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
						<th># of New Articles in Last 5 Days</th>
					</tr>
					<tr>
						<td>{this.props.stocks[symbol].quote.symbol}</td>
						<td>{this.props.stocks[symbol].quote.latestPrice}</td>
						<td>{this.props.stocks[symbol].quote.latestVolume}</td>
						<td>{this.props.stocks[symbol].quote.changePercent * 100}</td>
						<td>{this.props.stocks[symbol].stats.float}</td>
						<td>{recentNews.length}</td>
					</tr>
				</table>
				<ul id="review-index">
					{recentNews.map(news => (
						<NewsIndexItem key={news.datetime} news={news} />
					))}
				</ul>
			</div>
		);
	}
}

export default StockShow;
