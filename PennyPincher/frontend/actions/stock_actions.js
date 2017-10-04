export const RECEIVE_STOCK = "RECEIVE_STOCK";

import * as StocksUtil from "../util/stock_api_util";

const receiveStock = stock => {
	return { type: RECEIVE_STOCK, stock };
};

export const fetchStock = stock => dispatch =>
	StocksUtil.fetchStock(stock).then(res => dispatch(receiveStock(res)));

export const fetchStockStats = stock => dispatch =>
	StocksUtil.fetchStockStats(stock).then(res => dispatch(receiveStock(res)));

export const fetchStockCharts = stock => dispatch => {
	StocksUtil.fetchStockCharts(stock).then(res => {
		return dispatch(receiveStock(res));
	});
};
