import React from "react";
import json2csv from "json2csv";
import d3 from "d3";
import NewsIndexItem from "./news_index_item";
import TweetsIndexItem from "./tweets_index_item";
import PeerIndexItem from "./peer_index_item";
import ReactGA from "react-ga"; // https://github.com/react-ga/react-ga

class StockShow extends React.Component {
	constructor(props) {
		super(props);
		this.loadStock = this.loadStock.bind(this);
		this.date = this.date.bind(this);
		this.loadTweets = this.loadTweets.bind(this);
		this.recentNews = this.recentNews.bind(this);
		this.percentUp = this.percentUp.bind(this);
		ReactGA.initialize("UA-107597692-1");
		// This just needs to be called once since we have no routes in this case.
		ReactGA.pageview(window.location.pathname);
	}
	componentDidMount() {
		this.loadStock();
		this.loadTweets();
		// setInterval(this.loadStock, 2000);
	}

	loadTweets() {
		this.props.fetchTweets(this.props.symbol);
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
	percentUp() {
		let symbol = this.props.symbol;
		if (this.props.stocks[symbol].quote.changePercent * 100 > 0) {
			return {
				color: "green"
			};
		} else {
			return {
				color: "red"
			};
		}
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
		let tweets = this.props.tweets[symbol].statuses;
		let percStyle = this.percentUp();
		console.log("PROPS",this.props);
		return (
			<div className="stock-show">
							<div className="stock-basic-info">
								<div id="symbol">
									<i>Symbol</i>
									<i>{this.props.stocks[symbol].quote.symbol}</i>
								</div>
								<div id="company-name">
									<i>Company Name</i>
									<i>{this.props.stocks[symbol].quote.companyName}</i>
								</div>
								<div id="price">
									<i>Current Price</i>
									<i>{this.props.stocks[symbol].quote.latestPrice}</i>
								</div>
								<div id="volume">
									<i>Volume</i>
									<i>{this.props.stocks[symbol].quote.latestVolume}</i>
								</div>
								<div id="percent-change" style={percStyle}>
									<i>Percent Change</i>
									<i>{(this.props.stocks[symbol].quote.changePercent * 100).toFixed(2)}</i>
								</div>
								<div id="float">
									<i>Float</i>
									<i>{this.props.stocks[symbol].stats.float}</i>
								</div>
								<div id="news-header">
									<i>Articles in the Last 5 Days</i>
									<i>{recentNews.length}</i>
								</div>
				</div>
				<div className="stock-news">
				<ul id="news-index">
					NEWS ARTICLES
					{recentNews.map(news => (
						<NewsIndexItem key={news.datetime} news={news} />
					))}
				</ul>
				</div>
				<div className="stock-tweets">
				<ul id="tweets-index">
					What are people saying on twitter?
					{tweets.map(tweet => (
						<TweetsIndexItem key={tweet.created_at} tweet={tweet} />
					))}
				</ul>
				</div>

			</div>
		);
	}
}

export default StockShow;

// <ul id="peers-index">
// 	{this.props.stocks[symbol].peers.map(peer => {
// 		console.log(peer);
// 		console.log(this.props.stocks);
// 	})}
// </ul>
