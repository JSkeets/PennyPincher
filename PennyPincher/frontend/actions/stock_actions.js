export const RECEIVE_STOCK = "RECEIVE_STOCK";
export const RECEIVE_ALL_STOCKS = "RECEIVE_ALL_STOCKS";
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

import * as StocksUtil from "../util/stock_api_util";
import * as TweetUtil from "../util/twitter_api_util";

const receiveStock = stock => {
	return { type: RECEIVE_STOCK, stock };
};

const receiveAllStocks = stocks => {
	return { type: RECEIVE_ALL_STOCKS, stocks };
};

const receiveTweets =(res,hashtag) => {
	return {type: RECEIVE_TWEETS, res, hashtag: hashtag};
};

export const fetchStock = stock => dispatch =>
	StocksUtil.fetchStock(stock).then(res => dispatch(receiveStock(res)));

export const fetchAllStocks = () => dispatch => {
	StocksUtil.fetchAllStocks().then(res => dispatch(receiveAllStocks(res)));
};

export const fetchTweets = hashtag => dispatch => {
	TweetUtil.fetchTweets(hashtag).then(res => dispatch(receiveTweets(res,hashtag)));
};

// fetchTwitter("X");
