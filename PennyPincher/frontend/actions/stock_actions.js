export const RECEIVE_STOCK = "RECEIVE_STOCK";
export const RECEIVE_ALL_STOCKS = "RECEIVE_ALL_STOCKS";

import * as StocksUtil from "../util/stock_api_util";
// const fetchTwitter = require("../util/twitter_api_util");

const receiveStock = stock => {
	return { type: RECEIVE_STOCK, stock };
};

const receiveAllStocks = stocks => {
	return { type: RECEIVE_ALL_STOCKS, stocks };
};

export const fetchStock = stock => dispatch =>
	StocksUtil.fetchStock(stock).then(res => dispatch(receiveStock(res)));

export const fetchAllStocks = () => dispatch => {
	StocksUtil.fetchAllStocks().then(res => dispatch(receiveAllStocks(res)));
};

// export const fetchTweets = hashtag => dispatch => {
// 	debugger;
// 	fetchTwitter(hashtag).then(res => dispatch(receiveStock(res)));
// };

// fetchTwitter("X");
