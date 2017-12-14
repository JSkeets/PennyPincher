import values from "lodash/values";
import merge from "lodash/merge";
import { fetchStock } from "../actions/stock_actions";

export const selectAllStocks = state => {
	let stocks = values(state.entities.stocks);
	let filtered = [];
	let today = new Date();
	let time = [today.getUTCHours(), today.getMinutes()];

	stocks.forEach(stock => {
		if (time[0] < 15 && stock.volume > 10000 && stock.lastSalePrice < 5) {
			filtered.push(stock);
		} else if (
			time[0] === 15 &&
			stock.volume > 50000 &&
			stock.lastSalePrice < 5
		) {
			filtered.push(stock);
		} else if (
			time[0] >= 16 &&
			stock.volume > 100000 &&
			stock.lastSalePrice < 5
		) {
			filtered.push(stock);
		}
	});
	return filtered;
};

// export const fetchPercent = (stat) => {(
// 	$.ajax({
// 		method: "GET",
// 		url: `https://api.iextrading.com/1.0/stock/${stock.symbol}/batch?types=quote,stats,news,peers,chart&range=6m&last=50`
// 	}).then(res => {
// 		quotes = merge(quotes, {
// 			[res.quote.symbol]: res.quote.changePercent * 100
// 		});
// 	})
//
// )};

export const stockInfo = state => {
	let filtered = selectAllStocks(state);
	let quotes = {};
	filtered.forEach(stock => {
		let x = $.ajax({
			method: "GET",
			url: `https://api.iextrading.com/1.0/stock/${stock.symbol}/batch?types=quote,stats,news,peers,chart&range=6m&last=50`
		}).then(res => {
			quotes = merge(quotes, {
				[res.quote.symbol]: res
			});
		});
	});
	return quotes;
};

export const watchlistStocks = state => {
	let quotes = {};
  state.entities.watchlist[`${state.session.currentUser.id}`].forEach(
    stock => {
      let x = $.ajax({
        method: "GET",
        url: `https://api.iextrading.com/1.0/stock/${
          stock
        }/batch?types=quote,stats,news,peers,chart&range=6m&last=50`
      }).then(res => {
        quotes = merge(quotes, { [res.quote.symbol]: res });
      });
    }
  );
  return quotes;
};

